import { DOWNLOAD_PLATFORM } from '@evtp/constant/site/download/DOWNLOAD_PLATFORM';
import { DOWNLOAD_UTILITY } from '@evtp/constant/site/download/DOWNLOAD_UTILITY';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import catalogData from '@evtp/data/download/releaseCatalog.json';
import { formatByteSize } from '@evtp/logic/site/download/formatByteSize';
import { resolveReleaseAssetUrl } from '@evtp/logic/site/download/resolveReleaseAssetUrl';
import type { SiteLocaleSectionProps } from '@evtp/type/component/site/SiteLocaleSectionProps';
import type { DownloadCatalog } from '@evtp/type/site/download/DownloadCatalog';
import { For, Show } from 'solid-js';

export function SiteDownload(props: SiteLocaleSectionProps) {
  const catalog = catalogData as DownloadCatalog;
  const text = () => props.localeState.text();
  const locale = () => props.localeState.locale();
  const latest = () => catalog.releases[0];
  const previous = () => catalog.releases.slice(1);
  const utilityText = (id: string) => text().utility.find((entry) => entry.id === id);

  return (
    <section class={SITE_CLASS_NAME.download} id={SITE_SECTION_ID.download}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <div class={SITE_CLASS_NAME.sectionIntro} data-motion="reveal">
          <p class={SITE_CLASS_NAME.eyebrow}>{text().downloadEyebrow}</p>
          <h2 class={SITE_CLASS_NAME.sectionTitle}>{text().downloadTitle}</h2>
          <p class={SITE_CLASS_NAME.sectionDescription}>{text().downloadDescription}</p>
        </div>
        <div class={SITE_CLASS_NAME.downloadGrid}>
          <For each={DOWNLOAD_PLATFORM}>{(platform) => (
            <article class={SITE_CLASS_NAME.downloadCard} data-platform={platform.id} data-supported={platform.supported} data-motion="reveal">
              <span class={SITE_CLASS_NAME.downloadCardLabel}>{text().platformLabel[platform.id]}</span>
              <span class={SITE_CLASS_NAME.downloadCardStatus}>
                {platform.supported ? text().platformSupported : text().platformUnsupported}
              </span>
              <Show when={platform.supported && latest()}>
                <a class={SITE_CLASS_NAME.downloadCardAction} href={resolveReleaseAssetUrl(catalog, latest())}>
                  {text().downloadLatest}
                </a>
              </Show>
              <Show when={platform.supported && !latest()}>
                <span class={SITE_CLASS_NAME.downloadCardAction}>{text().downloadNoRelease}</span>
              </Show>
            </article>
          )}</For>
        </div>
        <Show when={latest()}>{(release) => (
          <div class={SITE_CLASS_NAME.release} data-motion="reveal">
            <div class={SITE_CLASS_NAME.releaseHead}>
              <span class={SITE_CLASS_NAME.releaseVersion}>{release().version}</span>
              <span class={SITE_CLASS_NAME.releaseDate}>{release().date}</span>
            </div>
            <dl class={SITE_CLASS_NAME.releaseMeta}>
              <div class={SITE_CLASS_NAME.releaseMetaRow}>
                <dt>{text().downloadCurrent}</dt>
                <dd>{release().version}</dd>
              </div>
              <div class={SITE_CLASS_NAME.releaseMetaRow}>
                <dt>{text().downloadSizeLabel}</dt>
                <dd>{formatByteSize(release().archive.bytes)}</dd>
              </div>
              <div class={SITE_CLASS_NAME.releaseMetaRow}>
                <dt>{text().downloadArchiveLabel}</dt>
                <dd>{release().archive.name}</dd>
              </div>
            </dl>
            <Show when={release().notes[locale()].length > 0}>
              <p class={SITE_CLASS_NAME.releaseNotesLabel}>{text().downloadNotesLabel}</p>
              <ul class={SITE_CLASS_NAME.releaseNotes}>
                <For each={release().notes[locale()]}>{(note) => <li>{note}</li>}</For>
              </ul>
            </Show>
            <p class={SITE_CLASS_NAME.downloadNote}>{text().downloadRedirectNote}</p>
          </div>
        )}</Show>
        <Show when={previous().length > 0}>
          <p class={SITE_CLASS_NAME.releaseNotesLabel}>{text().downloadPrevious}</p>
          <ul class={SITE_CLASS_NAME.releaseList}>
            <For each={previous()}>{(release) => (
              <li class={SITE_CLASS_NAME.releaseListItem}>
                <span>{release.version}</span>
                <span>{release.date}</span>
                <a href={resolveReleaseAssetUrl(catalog, release)}>{text().downloadLatest}</a>
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
