import type { SiteViewportTier } from '@evtp/type/site/viewport/SiteViewportTier';
import type { Accessor } from 'solid-js';

export interface SiteViewportState {
  tier: Accessor<SiteViewportTier>;
  width: Accessor<number>;
  height: Accessor<number>;
}
