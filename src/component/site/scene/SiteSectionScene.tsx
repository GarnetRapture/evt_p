import type { SiteSectionSceneProps } from '@evtp/type/component/site/SiteSectionSceneProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteSectionScene(props: SiteSectionSceneProps) {
  return (
    <div class={SITE_CLASS_NAME.sectionScene} data-motion="reveal">
      <img class={SITE_CLASS_NAME.sectionSceneImage} src={props.imageUrl} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div class={SITE_CLASS_NAME.sectionSceneContent}>{props.children}</div>
    </div>
  );
}
