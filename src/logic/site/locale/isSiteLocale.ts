import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';

export function isSiteLocale(value: string): value is SiteLocale {
  return value === 'ko' || value === 'en';
}
