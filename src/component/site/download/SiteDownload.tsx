import { DOWNLOAD_PLATFORM } from '@evtp/constant/site/download/DOWNLOAD_PLATFORM';
import { DOWNLOAD_UTILITY } from '@evtp/constant/site/download/DOWNLOAD_UTILITY';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import catalogData from '@evtp/data/download/releaseCatalog.json';
import { formatByteSize } from '@evtp/logic/site/download/formatByteSize';
import { readLinuxPortProgress } from '@evtp/logic/site/download/readLinuxPortProgress';
import { readReleaseNote } from '@evtp/logic/site/download/readReleaseNote';
import { resolveReleaseAssetUrl } from '@evtp/logic/site/download/resolveReleaseAssetUrl';
import { fillSiteText } from '@evtp/logic/site/text/fillSiteText';
import type { SiteLocaleSectionProps } from '@evtp/type/component/site/SiteLocaleSectionProps';
import type { DownloadCatalog } from '@evtp/type/site/download/DownloadCatalog';
import type { PlatformDownload } from '@evtp/type/site/download/PlatformDownload';
import { For, Show } from 'solid-js';
import poolSceneUrl from '@evtp/asset/bg/Talk_BG_Pool_Day.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteDownload(props: SiteLocaleSectionProps) {
  const catalog = catalogData as DownloadCatalog;
  const progress = readLinuxPortProgress();
  const text = () => props.localeState.text();
  const locale = () => props.localeState.locale();
  const latest = () => catalog.releases[0];
  const previous = () => catalog.releases.slice(1);
  const offer = (platform: PlatformDownload) => {
    const release = latest();
    const archive = release?.archives.find((entry) => entry.platform === platform.id);
    return release && archive ? { release, archive } : undefined;
  };
  const utilityText = (id: string) => text().utility.find((entry) => entry.id === id);

  return (
    <section class={SITE_CLASS_NAME.download} id={SITE_SECTION_ID.download}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <SiteSectionScene imageUrl={poolSceneUrl}>
          <div class={SITE_CLASS_NAME.sectionIntro}>
            <p class={SITE_CLASS_NAME.eyebrow}>{text().downloadEyebrow}</p>
            <h2 class={SITE_CLASS_NAME.sectionTitle}>{text().downloadTitle}</h2>
            <p class={SITE_CLASS_NAME.sectionSubtitle}>{text().downloadSubtitle}</p>
            <p class={SITE_CLASS_NAME.sectionDescription}>{text().downloadDescription}</p>
          </div>
        </SiteSectionScene>
        <div class={SITE_CLASS_NAME.downloadGrid}>
          <For each={DOWNLOAD_PLATFORM}>{(platform) => {
            const status = () => (offer(platform) ? 'available' : platform.statusWithoutArchive);
            return (
              <article class={SITE_CLASS_NAME.downloadCard} data-platform={platform.id} data-status={status()} data-motion="reveal">
                <span class={SITE_CLASS_NAME.downloadCardLabel}>{text().platformLabel[platform.id]}</span>
                <span class={SITE_CLASS_NAME.downloadCardStatus}>{text().platformStatus[status()]}</span>
                <Show when={platform.portProgress && !offer(platform)}>
                  <span class={SITE_CLASS_NAME.downloadCardProgress}>{fillSiteText(text().platformProgress, progress)}</span>
                </Show>
                <Show when={offer(platform)}>{(found) => (
                  <a class={SITE_CLASS_NAME.downloadCardAction} href={resolveReleaseAssetUrl(catalog, found().release, found().archive)}>
                    {text().downloadLatest}
                  </a>
                )}</Show>
              </article>
            );
          }}</For>
        </div>
        <Show when={latest()} fallback={<p class={SITE_CLASS_NAME.downloadNote}>{text().downloadNoRelease}</p>}>{(release) => {
          const note = () => readReleaseNote(release().version);
          return (
            <div class={SITE_CLASS_NAME.release} data-motion="reveal">
              <div class={SITE_CLASS_NAME.releaseHead}>
                <span class={SITE_CLASS_NAME.releaseVersion}>{release().version}</span>
                <span class={SITE_CLASS_NAME.releaseDate}>{note().date}</span>
              </div>
              <dl class={SITE_CLASS_NAME.releaseMeta}>
                <div class={SITE_CLASS_NAME.releaseMetaRow}>
                  <dt>{text().downloadCurrent}</dt>
                  <dd>{release().version}</dd>
                </div>
              </dl>
              <For each={release().archives}>{(archive) => (
                <dl class={SITE_CLASS_NAME.releaseMeta}>
                  <div class={SITE_CLASS_NAME.releaseMetaRow}>
                    <dt>{text().downloadPlatformLabel}</dt>
                    <dd>{text().platformLabel[archive.platform]}</dd>
                  </div>
                  <div class={SITE_CLASS_NAME.releaseMetaRow}>
                    <dt>{text().downloadArchiveLabel}</dt>
                    <dd>{archive.name}</dd>
                  </div>
                  <div class={SITE_CLASS_NAME.releaseMetaRow}>
                    <dt>{text().downloadSizeLabel}</dt>
                    <dd>{formatByteSize(archive.bytes)}</dd>
                  </div>
                  <div class={SITE_CLASS_NAME.releaseMetaRow}>
                    <dt>{text().downloadHashLabel}</dt>
                    <dd>{archive.sha256}</dd>
                  </div>
                  <div class={SITE_CLASS_NAME.releaseMetaRow}>
                    <dt>{text().downloadPatchLabel}</dt>
                    <dd>{fillSiteText(text().downloadPatchFiles, { count: String(archive.patch.files), size: formatByteSize(archive.patch.bytes) })}</dd>
                  </div>
                </dl>
              )}</For>
              <Show when={note()[locale()].length > 0}>
                <p class={SITE_CLASS_NAME.releaseNotesLabel}>{text().downloadNotesLabel}</p>
                <ul class={SITE_CLASS_NAME.releaseNotes}>
                  <For each={note()[locale()]}>{(line) => <li>{line}</li>}</For>
                </ul>
              </Show>
              <p class={SITE_CLASS_NAME.downloadNote}>{text().downloadRedirectNote}</p>
            </div>
          );
        }}</Show>
        <Show when={previous().length > 0}>
          <p class={SITE_CLASS_NAME.releaseNotesLabel}>{text().downloadPrevious}</p>
          <ul class={SITE_CLASS_NAME.releaseList}>
            <For each={previous()}>{(release) => (
              <li class={SITE_CLASS_NAME.releaseListItem}>
                <span>{release.version}</span>
                <span>{readReleaseNote(release.version).date}</span>
                <span class={SITE_CLASS_NAME.releaseListLinks}>
                  <For each={release.archives}>{(archive) => (
                    <a href={resolveReleaseAssetUrl(catalog, release, archive)}>
                      {text().platformLabel[archive.platform]} · {text().downloadLatest}
                    </a>
                  )}</For>
                </span>
              </li>
            )}</For>
          </ul>
        </Show>
        <div class={SITE_CLASS_NAME.utility}>
          <h3 class={SITE_CLASS_NAME.utilityTitle}>{text().utilityTitle}</h3>
          <p class={SITE_CLASS_NAME.utilityDescription}>{text().utilityDescription}</p>
          <ul class={SITE_CLASS_NAME.utilityList}>
            <For each={DOWNLOAD_UTILITY}>{(item) => (
              <li class={SITE_CLASS_NAME.utilityItem}>
                <div class={SITE_CLASS_NAME.utilityInfo}>
                  <span class={SITE_CLASS_NAME.utilityName}>{utilityText(item.id)?.label ?? item.id}</span>
                  <span class={SITE_CLASS_NAME.utilityNote}>{utilityText(item.id)?.note ?? ''}</span>
                </div>
                <Show when={item.required}>
                  <span class={SITE_CLASS_NAME.utilityBadge}>{text().utilityRequired}</span>
                </Show>
                <a class={SITE_CLASS_NAME.utilityLink} href={item.href} rel="noreferrer">{text().downloadLatest}</a>
              </li>
            )}</For>
          </ul>
        </div>
      </div>
    </section>
  );
}
