import { For, Show, createSignal, onCleanup, onMount } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import type { SiteMephistoReactionId, SiteMephistoSection } from '@evtp/type/site/mephisto/SiteMephistoReaction';
import type { SiteMephistoSceneController, SiteMephistoScreenBounds } from '@evtp/logic/site/mephisto/mountSiteMephistoScene';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_MEPHISTO_REACTION_ORDER, SITE_MEPHISTO_REACTIONS } from '@evtp/constant/site/mephisto/SITE_MEPHISTO_REACTIONS';

const COMPANION_SECTIONS: readonly { id: string; name: SiteMephistoSection }[] = [
  { id: SITE_SECTION_ID.top, name: 'top' },
  { id: SITE_SECTION_ID.features, name: 'features' },
  { id: SITE_SECTION_ID.updates, name: 'updates' },
  { id: SITE_SECTION_ID.roadmap, name: 'roadmap' },
  { id: SITE_SECTION_ID.guide, name: 'guide' },
  { id: SITE_SECTION_ID.download, name: 'download' },
  { id: SITE_SECTION_ID.specs, name: 'specs' },
  { id: SITE_SECTION_ID.lounge, name: 'lounge' },
];

export function SiteMephistoCompanion(props: SiteSectionProps) {
  const [section, setSection] = createSignal<SiteMephistoSection>('top');
  const [open, setOpen] = createSignal(false);
  const [ready, setReady] = createSignal(false);
  const [unavailable, setUnavailable] = createSignal(false);
  const [voiceUnavailable, setVoiceUnavailable] = createSignal(false);
  const [reaction, setReaction] = createSignal<SiteMephistoReactionId | null>(null);
  const [bubbleVisible, setBubbleVisible] = createSignal(false);
  let viewport: HTMLDivElement | undefined;
  let dragTarget: HTMLButtonElement | undefined;
  let bubble: HTMLParagraphElement | undefined;
  let toggle: HTMLButtonElement | undefined;
  let controls: HTMLDivElement | undefined;
  let lastBounds: SiteMephistoScreenBounds | undefined;
  let controller: SiteMephistoSceneController | undefined;
  let voice: HTMLAudioElement | undefined;
  let drag: { pointerId: number; startX: number; startY: number; lastX: number; lastY: number; moved: boolean } | undefined;
  let bubbleHeight = 0;
  let controlsHeight = 0;
  let previousOverflow: string | undefined;

  const setPanelOpen = (next: boolean): void => {
    if (next && previousOverflow === undefined) {
      previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
    } else if (!next && previousOverflow !== undefined) {
      document.documentElement.style.overflow = previousOverflow;
      previousOverflow = undefined;
    }
    setOpen(next);
    controller?.setPanelOpen(next);
    if (lastBounds !== undefined) placeOverlay(lastBounds);
    if (next) toggle?.focus();
  };

  const placeOverlay = (bounds: SiteMephistoScreenBounds): void => {
    lastBounds = bounds;
    if (dragTarget === undefined || bubble === undefined || toggle === undefined || controls === undefined) return;
    dragTarget.style.left = `${bounds.left}px`;
    dragTarget.style.top = `${bounds.top}px`;
    dragTarget.style.width = `${bounds.width}px`;
    dragTarget.style.height = `${bounds.height}px`;
    const width = document.documentElement.clientWidth;
    const height = window.innerHeight;
    const stacked = width < 520;
    const panelWidth = open() ? Math.min(320, width - 32) : Math.min(width < 720 ? 200 : 264, width - bounds.width - 28, width - 16);
    const side = bounds.left > width * 0.5 ? bounds.left - panelWidth - 12 : bounds.left + bounds.width + 12;
    const panelLeft = open() && stacked ? (width - panelWidth) * 0.5 : Math.max(8, Math.min(width - panelWidth - 8, side));
    const panelHeight = open() ? Math.min(controlsHeight || 236, height - 32) : bubbleHeight;
    const bubbleTop = open()
      ? (stacked ? height - panelHeight - 16 : (height - panelHeight) * 0.5)
      : Math.max(72, Math.min(height - panelHeight - 8, width < 720 ? 76 : 104));
    bubble.style.left = `${panelLeft}px`;
    bubble.style.top = `${bubbleTop}px`;
    bubble.style.right = 'auto';
    bubble.style.bottom = 'auto';
    bubble.style.width = `${panelWidth}px`;
    toggle.style.left = `${open() ? panelLeft + panelWidth - 36 : Math.max(8, Math.min(width - 44, bounds.left + bounds.width - 16))}px`;
    toggle.style.top = `${open() ? bubbleTop + 8 : Math.max(72, Math.min(height - 44, bounds.top + bounds.height - 36))}px`;
    toggle.style.right = 'auto';
    toggle.style.bottom = 'auto';
    controls.style.left = `${panelLeft}px`;
    controls.style.top = `${bubbleTop}px`;
    controls.style.right = 'auto';
    controls.style.bottom = 'auto';
    controls.style.width = `${panelWidth}px`;
  };

  const onDragStart = (event: PointerEvent): void => {
    drag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, lastX: event.clientX, lastY: event.clientY, moved: false };
    dragTarget?.setPointerCapture(event.pointerId);
  };

  const onDragMove = (event: PointerEvent): void => {
    if (drag === undefined || drag.pointerId !== event.pointerId) return;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 6) drag.moved = true;
    if (drag.moved) controller?.moveBy(event.clientX - drag.lastX, event.clientY - drag.lastY);
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
  };

  const onDragEnd = (event: PointerEvent): void => {
    if (drag === undefined || drag.pointerId !== event.pointerId) return;
    if (!drag.moved) {
      const touched = controller?.touchAt(event.clientX, event.clientY);
      if (touched !== undefined && touched !== null) respond(touched);
    }
    drag = undefined;
  };

  const onDragCancel = (event: PointerEvent): void => {
    if (drag?.pointerId === event.pointerId) drag = undefined;
  };

  const onDragKey = (event: KeyboardEvent): void => {
    const moves: Readonly<Record<string, readonly [number, number]>> = {
      ArrowLeft: [-24, 0],
      ArrowRight: [24, 0],
      ArrowUp: [0, -24],
      ArrowDown: [0, 24],
    };
    const move = moves[event.key];
    if (move === undefined) return;
    event.preventDefault();
    controller?.moveBy(move[0], move[1]);
  };

  const respond = (id: SiteMephistoReactionId): void => {
    setReaction(id);
    setPanelOpen(true);
    setVoiceUnavailable(false);
    controller?.play(id);
    if (voice === undefined) return;
    voice.pause();
    voice.src = SITE_MEPHISTO_REACTIONS[id].voice;
    voice.currentTime = 0;
    void voice.play().catch((error: unknown) => {
      console.error('Mephistopheles voice playback failed', error);
      setVoiceUnavailable(true);
    });
  };

  onMount(() => {
    const host = viewport;
    if (host === undefined) return;
    voice = new Audio();
    voice.preload = 'none';
    const bubbleObserver = new ResizeObserver(([entry]) => {
      bubbleHeight = entry.target.getBoundingClientRect().height;
      if (lastBounds !== undefined) placeOverlay(lastBounds);
    });
    if (bubble !== undefined) bubbleObserver.observe(bubble);
    const controlsObserver = new ResizeObserver(([entry]) => {
      controlsHeight = entry.target.getBoundingClientRect().height;
      if (lastBounds !== undefined) placeOverlay(lastBounds);
    });
    if (controls !== undefined) controlsObserver.observe(controls);
    let disposed = false;
    let scrollFrame = 0;
    const journey = document.querySelector<HTMLElement>(`.${SITE_CLASS_NAME.journey}`);

    const updateSection = (): void => {
      scrollFrame = 0;
      const hero = document.getElementById(SITE_SECTION_ID.top);
      const index = journey && hero && window.scrollY >= hero.offsetHeight * 0.55
        ? Math.min(COMPANION_SECTIONS.length - 1, 1 + Math.round(journey.scrollLeft / journey.clientWidth))
        : 0;
      const item = COMPANION_SECTIONS[index];
      if (item) {
        setBubbleVisible(index > 0);
        if (section() !== item.name) {
          setSection(item.name);
          controller?.setSection(item.name);
        }
      }
    };
    const queueSectionUpdate = (): void => {
      if (scrollFrame === 0) scrollFrame = window.requestAnimationFrame(updateSection);
    };
    window.addEventListener('scroll', queueSectionUpdate, { passive: true });
    journey?.addEventListener('scroll', queueSectionUpdate, { passive: true });
    window.addEventListener('resize', queueSectionUpdate);
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (!open()) return;
      if (event.key === 'Escape') {
        setPanelOpen(false);
        toggle?.focus();
      } else if (event.key === 'Tab' && controls !== undefined && toggle !== undefined) {
        const actions = Array.from(controls.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
        const focusables = [toggle, ...actions];
        const current = focusables.indexOf(document.activeElement as HTMLButtonElement);
        if (current >= 0) {
          event.preventDefault();
          focusables[(current + (event.shiftKey ? focusables.length - 1 : 1)) % focusables.length]?.focus();
        }
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    queueSectionUpdate();

    const loadObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      loadObserver.disconnect();
      void import('@evtp/logic/site/mephisto/mountSiteMephistoScene').then(({ mountSiteMephistoScene }) => {
        if (disposed) return;
        controller = mountSiteMephistoScene(host, {
          onReady: () => {
            setReady(true);
          },
          onError: (error: unknown) => {
            console.error('Mephistopheles model failed to load', error);
            setUnavailable(true);
            controller?.dispose();
            controller = undefined;
          },
          onBounds: placeOverlay,
        });
        if (ready()) {
          controller.setSection(section());
          controller.setPanelOpen(open());
        }
      }).catch((error: unknown) => {
        if (disposed) return;
        console.error('Mephistopheles scene failed to start', error);
        setUnavailable(true);
      });
    });
    loadObserver.observe(host);

    onCleanup(() => {
      disposed = true;
      loadObserver.disconnect();
      bubbleObserver.disconnect();
      controlsObserver.disconnect();
      window.removeEventListener('scroll', queueSectionUpdate);
      journey?.removeEventListener('scroll', queueSectionUpdate);
      window.removeEventListener('resize', queueSectionUpdate);
      window.removeEventListener('keydown', closeOnEscape);
      window.cancelAnimationFrame(scrollFrame);
      voice?.pause();
      voice?.removeAttribute('src');
      if (previousOverflow !== undefined) document.documentElement.style.overflow = previousOverflow;
      controller?.dispose();
    });
  });

  return (
    <aside class={SITE_CLASS_NAME.mephistoStage} data-open={open()} data-ready={ready()} aria-label={props.text.mephistoSceneTitle}>
      <div class={SITE_CLASS_NAME.mephistoViewport} ref={(element) => { viewport = element; }}>
      </div>
      <button class={SITE_CLASS_NAME.mephistoScrim} type="button" hidden={!open()} aria-label={props.text.mephistoClose} onClick={() => setPanelOpen(false)} />
      <button
        class={SITE_CLASS_NAME.mephistoDrag}
        type="button"
        ref={(element) => { dragTarget = element; }}
        aria-label={props.text.mephistoDragHint}
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerCancel={onDragCancel}
        onKeyDown={onDragKey}
      />
      <p class={SITE_CLASS_NAME.mephistoBubble} ref={(element) => { bubble = element; }} hidden={!bubbleVisible()}>{props.text.mephistoMessages[section()]}</p>
      <button
        class={SITE_CLASS_NAME.mephistoToggle}
        type="button"
        ref={(element) => { toggle = element; }}
        aria-expanded={open()}
        aria-controls="site-mephisto-controls"
        aria-label={open() ? props.text.mephistoClose : props.text.mephistoOpen}
        onClick={() => {
          setPanelOpen(!open());
        }}
      >
        {open() ? '−' : '+'}
      </button>
      <div class={SITE_CLASS_NAME.mephistoControls} id="site-mephisto-controls" ref={(element) => { controls = element; }} hidden={!open()} role="dialog" aria-modal="true" aria-labelledby="site-mephisto-title">
        <h2 class={SITE_CLASS_NAME.mephistoTitle} id="site-mephisto-title">{props.text.mephistoPanelTitle}</h2>
        <p class={SITE_CLASS_NAME.mephistoStatus} role="status" hidden={ready() && !unavailable()}>
          {unavailable() ? props.text.mephistoUnavailable : props.text.mephistoLoading}
        </p>
        <div class={SITE_CLASS_NAME.mephistoActions}>
          <For each={SITE_MEPHISTO_REACTION_ORDER}>{(id) => (
            <button class={SITE_CLASS_NAME.mephistoAction} type="button" aria-pressed={reaction() === id} onClick={() => respond(id)}>
              {props.text.mephistoReactions[id].label}
            </button>
          )}</For>
        </div>
        <Show when={reaction()}>
          {(id) => <p class={SITE_CLASS_NAME.mephistoCaption} aria-live="polite">{props.text.mephistoReactions[id()].caption}</p>}
        </Show>
        <p class={SITE_CLASS_NAME.mephistoVoiceNote}>{props.text.mephistoVoiceNote}</p>
        <p class={SITE_CLASS_NAME.mephistoStatus} role="status" hidden={!voiceUnavailable()}>{props.text.mephistoVoiceUnavailable}</p>
      </div>
    </aside>
  );
}
