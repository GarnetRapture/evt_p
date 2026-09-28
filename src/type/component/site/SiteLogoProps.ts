import type { SiteText } from '@evtp/type/site/text/SiteText';

export interface SiteLogoProps {
  variant: 'header' | 'hero' | 'footer';
  text: SiteText;
}
