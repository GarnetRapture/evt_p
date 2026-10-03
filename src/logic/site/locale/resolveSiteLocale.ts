import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';
import { SITE_LOCALE_SETTING } from '@evtp/constant/site/locale/SITE_LOCALE_SETTING';

export function resolveSiteLocale(): SiteLocale {
  const requested = [
    new URLSearchParams(window.location.search).get(SITE_LOCALE_SETTING.queryKey),
    window.localStorage.getItem(SITE_LOCALE_SETTING.storageKey),
  ];
  for (const candidate of requested) {
    if (candidate === 'ko' || candidate === 'en') return candidate;
  }
  return SITE_LOCALE_SETTING.defaultLocale;
}
