import { SiteDownload } from '@evtp/component/site/download/SiteDownload';
import { SiteSpecs } from '@evtp/component/site/download/SiteSpecs';
import { SiteFeatureSection } from '@evtp/component/site/feature/SiteFeatureSection';
import { SiteHero } from '@evtp/component/site/hero/SiteHero';
import { SiteGuide } from '@evtp/component/site/guide/SiteGuide';
import { SiteLounge } from '@evtp/component/site/lounge/SiteLounge';
import { SiteJourney } from '@evtp/component/site/journey/SiteJourney';
import { SiteFooter } from '@evtp/component/site/footer/SiteFooter';
import { SiteShell } from '@evtp/component/site/shell/SiteShell';
import { SiteUpdate } from '@evtp/component/site/update/SiteUpdate';
import { SiteRoadmap } from '@evtp/component/site/update/SiteRoadmap';
import { useSiteLocale } from '@evtp/hook/site/locale/useSiteLocale';

export function SiteRoot() {
  const localeState = useSiteLocale();

  return (
    <SiteShell localeState={localeState}>
      <SiteHero text={localeState.text()} />
      <SiteJourney>
      <SiteFeatureSection text={localeState.text()} />
      <SiteUpdate text={localeState.text()} />
      <SiteRoadmap text={localeState.text()} />
      <SiteGuide text={localeState.text()} />
      <SiteDownload localeState={localeState} />
      <SiteSpecs text={localeState.text()} />
      <SiteLounge text={localeState.text()} />
      <SiteFooter text={localeState.text()} />
      </SiteJourney>
    </SiteShell>
  );
}
