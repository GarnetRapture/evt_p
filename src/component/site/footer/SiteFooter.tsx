import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteLogo } from '@evtp/component/site/brand/SiteLogo';

export function SiteFooter(props: SiteSectionProps) {
  return (
    <footer class={SITE_CLASS_NAME.footer}>
      <div class={SITE_CLASS_NAME.footerInner}>
        <div class={SITE_CLASS_NAME.footerBrand}>
          <SiteLogo variant="footer" text={props.text} />
          <p class={SITE_CLASS_NAME.footerLine}>{props.text.footerLine}</p>
        </div>
        <nav class={SITE_CLASS_NAME.footerNav} aria-label={props.text.footerNavLabel}>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.features}`}>{props.text.navGame}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.download}`}>{props.text.navDownload}</a>
        </nav>
        <a class={SITE_CLASS_NAME.footerBack} href={`#${SITE_SECTION_ID.main}`}>{props.text.footerBack} {props.text.footerBackArrow}</a>
        <div class={SITE_CLASS_NAME.footerBottom}>{props.text.footerCopyright}</div>
      </div>
    </footer>
  );
}
