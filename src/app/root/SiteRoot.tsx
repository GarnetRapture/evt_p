import { SiteDownload } from '@evtp/component/site/download/SiteDownload';
import { SiteSpecs } from '@evtp/component/site/download/SiteSpecs';
import { SiteFeatureSection } from '@evtp/component/site/feature/SiteFeatureSection';
import { SiteHero } from '@evtp/component/site/hero/SiteHero';
import { SiteShell } from '@evtp/component/site/shell/SiteShell';
import { useSiteLocale } from '@evtp/hook/site/locale/useSiteLocale';

export function SiteRoot() {
  const localeState = useSiteLocale();

  return (
    <SiteShell localeState={localeState}>
      <SiteHero text={localeState.text()} />
      <SiteFeatureSection text={localeState.text()} />
      <SiteDownload localeState={localeState} />
      <SiteSpecs text={localeState.text()} />
    </SiteShell>
  );
}
