import type { SoulPortraitVariant } from '@evtp/type/soul/portrait/SoulPortraitVariant';

export interface SoulPortraitProps {
  soulKey: string;
  alt: string;
  variant: SoulPortraitVariant;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}
