import { createRoot, createSignal } from 'solid-js';
import type { SiteViewportState } from '@evtp/type/site/viewport/SiteViewportState';
import { SITE_VIEWPORT } from '@evtp/constant/site/viewport/SITE_VIEWPORT';
import { resolveSiteViewportTier } from '@evtp/logic/site/viewport/resolveSiteViewportTier';

let sharedViewport: SiteViewportState | undefined;

function createSiteViewport(): SiteViewportState {
  const [width, setWidth] = createSignal(window.innerWidth);
  const [height, setHeight] = createSignal(window.innerHeight);
  const [tier, setTier] = createSignal(resolveSiteViewportTier(window.innerWidth));
  let frame = 0;

  const apply = (): void => {
    frame = 0;
    const nextTier = resolveSiteViewportTier(window.innerWidth);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setTier(nextTier);
    document.documentElement.dataset[SITE_VIEWPORT.tierAttribute] = nextTier;
    document.documentElement.dataset[SITE_VIEWPORT.shortAttribute] = String(window.innerHeight <= SITE_VIEWPORT.shortMaxHeight);
  };
  const schedule = (): void => {
    if (frame === 0) frame = window.requestAnimationFrame(apply);
  };

  apply();
  window.addEventListener('resize', schedule, { passive: true });
  window.visualViewport?.addEventListener('resize', schedule, { passive: true });
  return { tier, width, height };
}

export function useSiteViewport(): SiteViewportState {
  sharedViewport ??= createRoot(createSiteViewport);
  return sharedViewport;
}
