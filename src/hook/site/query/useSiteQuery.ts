import { createRoot, createSignal } from 'solid-js';
import type { SiteQueryChange } from '@evtp/type/site/query/SiteQueryChange';
import type { SiteQueryMode } from '@evtp/type/site/query/SiteQueryMode';
import type { SiteQueryState } from '@evtp/type/site/query/SiteQueryState';

let sharedQuery: SiteQueryState | undefined;

function createSiteQuery(): SiteQueryState {
  const [params, setParams] = createSignal(new URLSearchParams(window.location.search));
  window.addEventListener('popstate', () => setParams(new URLSearchParams(window.location.search)));

  const resolve = (change: SiteQueryChange): URL => {
    const url = new URL(window.location.href);
    url.search = params().toString();
    for (const [name, value] of Object.entries(change)) {
      if (value === null) url.searchParams.delete(name);
      else url.searchParams.set(name, value);
    }
    return url;
  };

  const navigate = (change: SiteQueryChange, mode: SiteQueryMode): void => {
    const url = resolve(change);
    if (mode === 'push') {
      url.hash = '';
      window.history.pushState(null, '', url);
    } else {
      window.history.replaceState(null, '', url);
    }
    setParams(new URLSearchParams(url.search));
  };

  return {
    params,
    navigate,
    read: (name) => params().get(name),
    href: (change) => {
      const url = resolve(change);
      url.hash = '';
      return `${url.pathname}${url.search}`;
    },
  };
}

export function useSiteQuery(): SiteQueryState {
  sharedQuery ??= createRoot(createSiteQuery);
  return sharedQuery;
}
