import type { SoulPortraitVariant } from '@evtp/type/soul/portrait/SoulPortraitVariant';

export const SOUL_PORTRAIT_SIZE: Readonly<Record<SoulPortraitVariant, string>> = {
  showcase: '(min-width: 1600px) 240px, 184px',
  card: '20vw',
};
