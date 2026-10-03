import { createEffect, createMemo, createSignal } from 'solid-js';
import type { SiteLocale } from '@evtp/type/site/locale/SiteLocale';
import type { SiteLocaleState } from '@evtp/type/site/locale/SiteLocaleState';
import { SITE_LOCALE_SETTING } from '@evtp/constant/site/locale/SITE_LOCALE_SETTING';
import { SITE_TEXT } from '@evtp/constant/site/text/SITE_TEXT';
import { useSiteQuery } from '@evtp/hook/site/query/useSiteQuery';
import { isSiteLocale } from '@evtp/logic/site/locale/isSiteLocale';
import { resolveSiteLocale } from '@evtp/logic/site/locale/resolveSiteLocale';

export function useSiteLocale(): SiteLocaleState {
  const query = useSiteQuery();
  const [locale, setLocale] = createSignal<SiteLocale>(resolveSiteLocale());
  const text = createMemo(() => SITE_TEXT[locale()]);

  createEffect(() => {
    const active = locale();
    document.documentElement.lang = active;
    window.localStorage.setItem(SITE_LOCALE_SETTING.storageKey, active);
    const description = document.querySelector('meta[name="description"]');
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', active === 'ko' ? 'ko_KR' : 'en_US');
    const baseUrl = new URL(window.location.href);
    baseUrl.search = '';
    baseUrl.hash = '';
    for (const language of SITE_LOCALE_SETTING.alternateLanguages) {
      const link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${language}"]`) ?? document.createElement('link');
      const alternate = new URL(baseUrl.href);
      if (isSiteLocale(language) && language !== SITE_LOCALE_SETTING.defaultLocale) {
        alternate.searchParams.set(SITE_LOCALE_SETTING.queryKey, language);
      }
      link.rel = 'alternate';
      link.hreflang = language;
      link.href = alternate.href;
      if (!link.isConnected) document.head.append(link);
    }
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
    canonical.rel = 'canonical';
    const canonicalUrl = new URL(baseUrl.href);
    if (active !== SITE_LOCALE_SETTING.defaultLocale) canonicalUrl.searchParams.set(SITE_LOCALE_SETTING.queryKey, active);
    canonical.href = canonicalUrl.href;
    if (!canonical.isConnected) document.head.append(canonical);
    if (description !== null) description.setAttribute('content', text().metaDescription);
  });

  const select = (value: SiteLocale): void => {
    window.localStorage.setItem(SITE_LOCALE_SETTING.storageKey, value);
    query.navigate({ [SITE_LOCALE_SETTING.queryKey]: value }, 'replace');
    setLocale(value);
  };

  return { locale, text, select };
}
