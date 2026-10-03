import type { SiteShellProps } from '@evtp/type/component/site/SiteShellProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteFooter } from '@evtp/component/site/footer/SiteFooter';
import { SiteHeader } from '@evtp/component/site/header/SiteHeader';
import { SiteMephistoCompanion } from '@evtp/component/site/mephisto/SiteMephistoCompanion';
import { useSiteMotion } from '@evtp/hook/site/motion/useSiteMotion';
import { useSiteViewport } from '@evtp/hook/site/viewport/useSiteViewport';

export function SiteShell(props: SiteShellProps) {
  useSiteViewport();
  useSiteMotion();

  return (
    <div class={SITE_CLASS_NAME.page}>
      <a class={SITE_CLASS_NAME.skipLink} href={`#${SITE_SECTION_ID.main}`}>{props.localeState.text().skipToContent}</a>
      <SiteHeader localeState={props.localeState} />
      <main class={SITE_CLASS_NAME.main} id={SITE_SECTION_ID.main}>{props.children}</main>
      <SiteMephistoCompanion text={props.localeState.text()} />
      <SiteFooter text={props.localeState.text()} />
    </div>
  );
}
