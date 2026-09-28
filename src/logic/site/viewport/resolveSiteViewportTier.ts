import type { SiteViewportTier } from '@evtp/type/site/viewport/SiteViewportTier';
import { SITE_VIEWPORT } from '@evtp/constant/site/viewport/SITE_VIEWPORT';

export function resolveSiteViewportTier(width: number): SiteViewportTier {
  if (width >= SITE_VIEWPORT.ultraMinWidth) return 'ultra';
  if (width >= SITE_VIEWPORT.wideMinWidth) return 'wide';
  if (width >= SITE_VIEWPORT.desktopMinWidth) return 'desktop';
  if (width >= SITE_VIEWPORT.tabletMinWidth) return 'tablet';
  return 'compact';
}
