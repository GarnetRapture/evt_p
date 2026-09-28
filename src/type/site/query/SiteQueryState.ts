import type { Accessor } from 'solid-js';
import type { SiteQueryChange } from '@evtp/type/site/query/SiteQueryChange';
import type { SiteQueryMode } from '@evtp/type/site/query/SiteQueryMode';

export interface SiteQueryState {
  params: Accessor<URLSearchParams>;
  navigate: (change: SiteQueryChange, mode: SiteQueryMode) => void;
  read: (name: string) => string | null;
  href: (change: SiteQueryChange) => string;
}
