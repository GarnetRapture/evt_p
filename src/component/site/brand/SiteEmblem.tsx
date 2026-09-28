import { createUniqueId } from 'solid-js';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteEmblem() {
  const edgeId = createUniqueId();
  const coreId = createUniqueId();
  return (
    <svg class={SITE_CLASS_NAME.emblem} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={edgeId} x1="0" y1="0" x2="1" y2="1">
          <stop class={SITE_CLASS_NAME.emblemStopLight} offset="0" />
          <stop class={SITE_CLASS_NAME.emblemStopWarm} offset="0.48" />
          <stop class={SITE_CLASS_NAME.emblemStopViolet} offset="1" />
        </linearGradient>
        <radialGradient id={coreId} cx="0.5" cy="0.38" r="0.66">
          <stop class={SITE_CLASS_NAME.emblemStopCoreInner} offset="0" />
          <stop class={SITE_CLASS_NAME.emblemStopCoreOuter} offset="1" />
        </radialGradient>
      </defs>
      <path class={SITE_CLASS_NAME.emblemFrame} d="M60 3 110 31.5v57L60 117 10 88.5v-57Z" fill={`url(#${coreId})`} stroke={`url(#${edgeId})`} />
      <path class={SITE_CLASS_NAME.emblemInner} d="M60 17 97 38.5v43L60 103 23 81.5v-43Z" />
      <path class={SITE_CLASS_NAME.emblemOrbit} d="M19 70c10-30 44-47 82-31" stroke={`url(#${edgeId})`} />
      <path class={SITE_CLASS_NAME.emblemLetter} d="M43 37h35v10H54v8.5h20v9.5H54v8.5h25V84H43Z" fill={`url(#${edgeId})`} />
      <circle class={SITE_CLASS_NAME.emblemSpark} cx="86" cy="35" r="5.5" />
    </svg>
  );
}
