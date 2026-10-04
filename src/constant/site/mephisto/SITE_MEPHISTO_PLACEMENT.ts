import type { SiteMephistoSection } from '@evtp/type/site/mephisto/SiteMephistoReaction';

export const SITE_MEPHISTO_PLACEMENT: Readonly<Record<SiteMephistoSection, { x: number; y: number }>> = {
  top: { x: 0.84, y: 0.72 },
  features: { x: 0.16, y: 0.72 },
  updates: { x: 0.85, y: 0.7 },
  roadmap: { x: 0.9, y: 0.72 },
  guide: { x: 0.82, y: 0.7 },
  download: { x: 0.96, y: 0.72 },
  specs: { x: 0.8, y: 0.72 },
  lounge: { x: 0.85, y: 0.7 },
  end: { x: 0.82, y: 0.7 },
};
