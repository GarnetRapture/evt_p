import type { JSX } from 'solid-js';
import type { SiteLocaleState } from '@evtp/type/site/locale/SiteLocaleState';

export interface SiteShellProps {
  localeState: SiteLocaleState;
  children: JSX.Element;
}
