import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_ISSUES_URL } from '@evtp/constant/site/issue/SITE_ISSUES_URL';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteLogo } from '@evtp/component/site/brand/SiteLogo';
import arkSceneUrl from '@evtp/asset/bg/Talk_BG_Ark.webp';

export function SiteFooter(props: SiteSectionProps) {
  return (
    <footer class={SITE_CLASS_NAME.footer} id={SITE_SECTION_ID.end}>
      <img class={SITE_CLASS_NAME.footerBackdrop} src={arkSceneUrl} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div class={SITE_CLASS_NAME.footerInner}>
        <div class={SITE_CLASS_NAME.footerBrand}>
          <p class={SITE_CLASS_NAME.footerBottom}>{props.text.footerCopyright}</p>
          <SiteLogo variant="footer" text={props.text} />
          <p class={SITE_CLASS_NAME.footerLine}>{props.text.footerLine}</p>
        </div>
        <nav class={SITE_CLASS_NAME.footerNav} aria-label={props.text.footerNavLabel}>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.features}`}>{props.text.navGame}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.updates}`}>{props.text.navUpdates}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.roadmap}`}>{props.text.navRoadmap}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.guide}`}>{props.text.navGuide}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={`#${SITE_SECTION_ID.download}`}>{props.text.navDownload}</a>
          <a class={SITE_CLASS_NAME.footerNavLink} href={SITE_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            {props.text.footerReport}<span aria-hidden="true"> ↗</span>
          </a>
        </nav>
        <a class={SITE_CLASS_NAME.footerBack} href={`#${SITE_SECTION_ID.top}`}>{props.text.footerBack} {props.text.footerBackArrow}</a>
      </div>
    </footer>
  );
}
