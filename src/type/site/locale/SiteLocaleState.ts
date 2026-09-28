import type { Accessor } from 'solid-js';
import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';
import type { SiteText } from '@evtp/type/site/text/SiteText';

export interface SiteLocaleState {
  locale: Accessor<SiteLocale>;
  text: Accessor<SiteText>;
  select: (locale: SiteLocale) => void;
}
