import {
  ACESFilmicToneMapping,
  AmbientLight,
  AnimationMixer,
  Box3,
  CapsuleGeometry,
  Clock,
  DirectionalLight,
  LoopOnce,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OrthographicCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import type { AnimationAction, Group, Material, Object3D, Texture } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import mephistoModelUrl from '@evtp/asset/soul/model/Mephisto.glb.gz?url';
import { SITE_MEPHISTO_REACTIONS } from '@evtp/constant/site/mephisto/SITE_MEPHISTO_REACTIONS';
import { SITE_MEPHISTO_PLACEMENT } from '@evtp/constant/site/mephisto/SITE_MEPHISTO_PLACEMENT';
import type { SiteMephistoReactionId, SiteMephistoSection } from '@evtp/type/site/mephisto/SiteMephistoReaction';

export interface SiteMephistoSceneController {
  play: (reaction: SiteMephistoReactionId) => void;
  setSection: (section: SiteMephistoSection) => void;
  setPanelOpen: (open: boolean) => void;
  moveBy: (x: number, y: number) => void;
  touchAt: (x: number, y: number) => SiteMephistoReactionId | null;
  dispose: () => void;
}

export interface SiteMephistoScreenBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface SiteMephistoSceneCallbacks {
  onReady: () => void;
  onError: (error: unknown) => void;
  onBounds: (bounds: SiteMephistoScreenBounds) => void;
}

export function mountSiteMephistoScene(host: HTMLElement, callbacks: SiteMephistoSceneCallbacks): SiteMephistoSceneController {
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 2000);
  camera.position.z = 1000;
  scene.add(new AmbientLight('#dce6ff', 2.3));
  const keyLight = new DirectionalLight('#fff0de', 3.2);
  keyLight.position.set(2, 4, 5);
  scene.add(keyLight);
  const rimLight = new DirectionalLight('#b9a5e9', 2.4);
  rimLight.position.set(-3, 3, -3);
  scene.add(rimLight);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  renderPass.clearAlpha = 0;
  composer.addPass(renderPass);
  composer.addPass(new UnrealBloomPass(new Vector2(1, 1), 0.28, 0.25, 0.9));
  composer.addPass(new OutputPass());

  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const clock = new Clock();
  const loader = new GLTFLoader();
  const abort = new AbortController();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const touchTargets: Mesh[] = [];
  let model: Group | undefined;
  let mixer: AnimationMixer | undefined;
  let idleAction: AnimationAction | undefined;
  let activeAction: AnimationAction | undefined;
  let animationFrame = 0;
  let visible = false;
  let disposed = false;
  let specialTouchCount = 0;
  let modelCenter = new Vector3();
  let modelSize = new Vector3(1, 1, 1);
  let offsetX = 0;
  let offsetY = 0;
  let currentSection: SiteMephistoSection = 'top';
  let displayX = Number.NaN;
  let displayY = Number.NaN;
  let idleTime = 0;
  let dragging = false;
  let panelOpen = false;

  const placeModel = (delta = 0, snap = false): void => {
    if (model === undefined) return;
    const width = host.clientWidth;
    const height = host.clientHeight;
    const targetHeight = width < 720
      ? panelOpen ? Math.min(height * 0.4, width * 0.52, 240) : Math.min(height * 0.25, width * 0.32, 160)
      : panelOpen ? Math.min(height * 0.52, 560) : Math.min(height * 0.34, 360);
    const scale = targetHeight / modelSize.y;
    const targetWidth = modelSize.x * scale;
    const placement = SITE_MEPHISTO_PLACEMENT[currentSection];
    const destinationX = panelOpen ? width * (width < 520 ? 0.5 : width < 720 ? 0.22 : 0.42) : width < 720 ? width * 0.88 + offsetX : width * placement.x + offsetX;
    const destinationY = panelOpen ? height * (width < 520 ? 0.24 : 0.5) : width < 720 ? height * 0.88 + offsetY : height * placement.y + offsetY;
    const targetX = Math.max(targetWidth * 0.5 + 20, Math.min(width - targetWidth * 0.5 - 20, destinationX));
    const targetY = Math.max(targetHeight * 0.5 + 12, Math.min(height - targetHeight * 0.5 - 12, destinationY));
    if (snap || Number.isNaN(displayX) || reducedMotion.matches) {
      displayX = targetX;
      displayY = targetY;
    } else {
      const progress = Math.min(1, delta * 4.2);
      displayX += (targetX - displayX) * progress;
      displayY += (targetY - displayY) * progress;
    }
    idleTime += delta;
    const nearDestination = Math.abs(targetX - displayX) < 2 && Math.abs(targetY - displayY) < 2;
    const wanderX = nearDestination && !dragging && !reducedMotion.matches ? Math.sin(idleTime * 0.7) * 13 : 0;
    const wanderY = nearDestination && !dragging && !reducedMotion.matches ? Math.sin(idleTime * 1.1) * 5 : 0;
    const centerX = displayX + wanderX;
    const centerY = displayY + wanderY;
    model.scale.setScalar(scale);
    model.position.set(centerX - width * 0.5 - modelCenter.x * scale, height * 0.5 - centerY - modelCenter.y * scale, -modelCenter.z * scale);
    model.updateMatrixWorld(true);
    callbacks.onBounds({ left: centerX - targetWidth * 0.5, top: centerY - targetHeight * 0.5, width: targetWidth, height: targetHeight });
    render();
  };

  const render = (): void => {
    if (model !== undefined && !disposed) composer.render();
  };

  const tick = (): void => {
    animationFrame = window.requestAnimationFrame(tick);
    const delta = Math.min(clock.getDelta(), 0.05);
    mixer?.update(delta);
    if (activeAction !== undefined && activeAction !== idleAction && activeAction.time >= activeAction.getClip().duration - 0.02) {
      activeAction.fadeOut(0.2);
      idleAction?.reset().fadeIn(0.2).play();
      activeAction = idleAction;
    }
    placeModel(delta);
  };

  const updateActivity = (): void => {
    const shouldRun = visible && !document.hidden && !reducedMotion.matches && model !== undefined;
    if (shouldRun && animationFrame === 0) {
      clock.start();
      tick();
    } else if (!shouldRun && animationFrame !== 0) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      render();
    }
  };

  const resize = (): void => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    camera.left = -width * 0.5;
    camera.right = width * 0.5;
    camera.top = height * 0.5;
    camera.bottom = -height * 0.5;
    camera.updateProjectionMatrix();
    placeModel(0, true);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updateActivity();
  }, { threshold: 0.05 });
  visibilityObserver.observe(host);
  document.addEventListener('visibilitychange', updateActivity);
  reducedMotion.addEventListener('change', updateActivity);

  const play = (reaction: SiteMephistoReactionId): void => {
    if (mixer === undefined || model === undefined) return;
    const clip = model.animations.find((entry) => entry.name === SITE_MEPHISTO_REACTIONS[reaction].clip);
    if (clip === undefined) throw new Error(`Mephisto animation missing: ${reaction}`);
    const next = mixer.clipAction(clip);
    if (activeAction !== next) activeAction?.fadeOut(0.2);
    next.reset().setLoop(LoopOnce, 1).fadeIn(0.2).play();
    next.clampWhenFinished = true;
    activeAction = next;
    if (reducedMotion.matches) render();
  };

  const addTouchTargets = (root: Object3D): void => {
    const normalNode = root.getObjectByName('Toucharea');
    const specialNode = root.getObjectByName('Touchsparea');
    if (normalNode === undefined || specialNode === undefined) throw new Error('Mephisto touch nodes are missing');
    const material = new MeshBasicMaterial({ colorWrite: false, depthWrite: false });
    const normal = new Mesh(new CapsuleGeometry(0.4, 0.8, 4, 8), material);
    normal.rotation.z = Math.PI / 2;
    normal.position.set(-0.8, 0, 0);
    normalNode.add(normal);
    const special = new Mesh(new SphereGeometry(0.15, 12, 8), material);
    specialNode.add(special);
    touchTargets.push(normal, special);
  };

  const touchAt = (clientX: number, clientY: number): SiteMephistoReactionId | null => {
    if (model === undefined) return null;
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set(((clientX - bounds.left) / bounds.width) * 2 - 1, -((clientY - bounds.top) / bounds.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(touchTargets, false)[0];
    if (hit !== undefined) return hit.object === touchTargets[0] ? 'touch' : (specialTouchCount++ % 2 === 0 ? 'touchsp' : 'touchsp02');
    return raycaster.intersectObject(model, true).some((entry) => entry.object instanceof Mesh && !touchTargets.includes(entry.object)) ? 'touch' : null;
  };

  const loadModel = async (): Promise<void> => {
    const response = await fetch(mephistoModelUrl, { signal: abort.signal });
    if (!response.ok) throw new Error(`Mephisto model HTTP ${response.status}`);
    const encoded = await response.arrayBuffer();
    const signature = new Uint8Array(encoded, 0, Math.min(4, encoded.byteLength));
    let modelBytes: ArrayBuffer;
    if (signature[0] === 0x67 && signature[1] === 0x6c && signature[2] === 0x54 && signature[3] === 0x46) {
      modelBytes = encoded;
    } else if (signature[0] === 0x1f && signature[1] === 0x8b) {
      const decompressed = new Blob([encoded]).stream().pipeThrough(new DecompressionStream('gzip'));
      modelBytes = await new Response(decompressed).arrayBuffer();
    } else {
      throw new Error('Mephisto model response has an unknown container');
    }
    const asset = await loader.parseAsync(modelBytes, '');
    if (disposed) {
      disposeModel(asset.scene);
      return;
    }
    model = asset.scene;
    model.animations = asset.animations;
    model.rotation.y = Math.PI;
    const face = model.getObjectByName('CH_Mephisto_Face_Base');
    if (!(face instanceof Mesh) || !(face.material instanceof MeshStandardMaterial)) {
      throw new Error('Mephisto face material is missing');
    }
    face.material.vertexColors = false;
    face.material.needsUpdate = true;
    addTouchTargets(model);
    scene.add(model);
    const bounds = new Box3().setFromObject(model);
    modelCenter = bounds.getCenter(new Vector3());
    modelSize = bounds.getSize(new Vector3());
    mixer = new AnimationMixer(model);
    const idleClip = asset.animations.find((entry) => entry.name === 'Mephisto_Lobby');
    if (idleClip === undefined) throw new Error('Mephisto lobby animation is missing');
    for (const reaction of Object.keys(SITE_MEPHISTO_REACTIONS) as SiteMephistoReactionId[]) {
      if (!asset.animations.some((entry) => entry.name === SITE_MEPHISTO_REACTIONS[reaction].clip)) {
        throw new Error(`Mephisto animation missing: ${reaction}`);
      }
    }
    idleAction = mixer.clipAction(idleClip);
    idleAction.play();
    resize();
    updateActivity();
    play('greeting');
    callbacks.onReady();
  };
  void loadModel().catch((error: unknown) => {
    if (!disposed) callbacks.onError(error);
  });

  return {
    play,
    setPanelOpen: (open: boolean) => {
      panelOpen = open;
      if (reducedMotion.matches) placeModel(0, true);
    },
    setSection: (section: SiteMephistoSection) => {
      if (currentSection === section) return;
      currentSection = section;
      offsetX = 0;
      offsetY = 0;
      if (reducedMotion.matches) placeModel(0, true);
      else play('greeting');
    },
    moveBy: (x: number, y: number) => {
      dragging = true;
      offsetX += x;
      offsetY += y;
      placeModel(0, true);
      dragging = false;
    },
    touchAt,
    dispose: () => {
      disposed = true;
      abort.abort();
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', updateActivity);
      reducedMotion.removeEventListener('change', updateActivity);
      mixer?.stopAllAction();
      if (model !== undefined) disposeModel(model);
      composer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}

function disposeModel(root: Object3D): void {
  const textures = new Set<Texture>();
  const materials = new Set<Material>();
  root.traverse((object) => {
    if (!(object instanceof Mesh)) return;
    object.geometry.dispose();
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      materials.add(material);
      if (material instanceof MeshStandardMaterial) {
        for (const texture of [material.map, material.normalMap, material.emissiveMap, material.metalnessMap, material.roughnessMap, material.aoMap, material.alphaMap]) {
          if (texture !== null) textures.add(texture);
        }
      }
    }
  });
  textures.forEach((texture) => texture.dispose());
  materials.forEach((material) => material.dispose());
}
