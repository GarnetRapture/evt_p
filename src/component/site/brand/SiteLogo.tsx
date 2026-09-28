import type { SiteLogoProps } from '@evtp/type/component/site/SiteLogoProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SITE_LOGO_CLASS } from '@evtp/constant/ui/class/SITE_LOGO_CLASS';
import { SiteEmblem } from '@evtp/component/site/brand/SiteEmblem';

export function SiteLogo(props: SiteLogoProps) {
  return (
    <span class={SITE_LOGO_CLASS[props.variant]}>
      <SiteEmblem />
      <span class={SITE_CLASS_NAME.logoWordmark}>
        {props.text.brandFirst}
        <span class={SITE_CLASS_NAME.logoWordmarkAccent}>{props.text.brandSecond}</span>
      </span>
    </span>
  );
}
