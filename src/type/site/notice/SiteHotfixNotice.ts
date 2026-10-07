import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';

export interface SiteHotfixNotice {
  id: string;
  date: string;
  version: string;
  platform: string;
  title: Readonly<Record<SiteLocale, string>>;
  body: Readonly<Record<SiteLocale, readonly string[]>>;
  releaseUrl: string;
}
