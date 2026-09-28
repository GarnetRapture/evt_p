import type { SiteLogoProps } from '@evtp/type/component/site/SiteLogoProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export const SITE_LOGO_CLASS: Readonly<Record<SiteLogoProps['variant'], string>> = {
  header: SITE_CLASS_NAME.logoHeader,
  hero: SITE_CLASS_NAME.logoHero,
  footer: SITE_CLASS_NAME.logoFooter,
};
