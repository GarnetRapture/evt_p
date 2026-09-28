import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SoulCardField } from '@evtp/component/soul/field/SoulCardField';
import { SiteLogo } from '@evtp/component/site/brand/SiteLogo';

export function SiteHero(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.hero} id={SITE_SECTION_ID.top}>
      <SoulCardField variant="hero" />
      <div class={SITE_CLASS_NAME.heroVeil} />
      <div class={SITE_CLASS_NAME.heroCenter}>
        <p class={SITE_CLASS_NAME.eyebrow}>{props.text.heroEyebrow}</p>
        <h1 class={SITE_CLASS_NAME.heroTitle}>
          <SiteLogo variant="hero" text={props.text} />
        </h1>
        <p class={SITE_CLASS_NAME.heroTagline}>{props.text.heroTagline}</p>
        <p class={SITE_CLASS_NAME.heroDescription}>{props.text.heroDescription}</p>
        <div class={SITE_CLASS_NAME.heroActions}>
          <a class={SITE_CLASS_NAME.buttonPrimary} href={`#${SITE_SECTION_ID.download}`}>{props.text.heroPrimary}</a>
          <a class={SITE_CLASS_NAME.buttonSecondary} href={`#${SITE_SECTION_ID.features}`}>{props.text.heroSecondary}</a>
        </div>
      </div>
      <a class={SITE_CLASS_NAME.heroScroll} href={`#${SITE_SECTION_ID.features}`}>{props.text.heroScroll}</a>
    </section>
  );
}
