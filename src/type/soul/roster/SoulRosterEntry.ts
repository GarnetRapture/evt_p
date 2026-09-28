import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';

export interface SoulRosterEntry {
  key: string;
  name: Readonly<Record<SiteLocale, string>>;
}
