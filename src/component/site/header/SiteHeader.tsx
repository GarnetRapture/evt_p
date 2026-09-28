import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import type { SiteHeaderProps } from '@evtp/type/component/site/SiteHeaderProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteLogo } from '@evtp/component/site/brand/SiteLogo';
import { useSiteScrolled } from '@evtp/hook/site/scroll/useSiteScrolled';
import { useSiteViewport } from '@evtp/hook/site/viewport/useSiteViewport';

export function SiteHeader(props: SiteHeaderProps) {
  const viewport = useSiteViewport();
  const scrolled = useSiteScrolled(24);
  const [menuOpen, setMenuOpen] = createSignal(false);
  const collapsed = () => viewport.tier() === 'compact' || viewport.tier() === 'tablet';
  const text = () => props.localeState.text();

  createEffect(() => {
    if (!collapsed()) setMenuOpen(false);
  });

  onMount(() => {
    const close = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', close);
    onCleanup(() => window.removeEventListener('keydown', close));
  });

  return (
    <header
      class={SITE_CLASS_NAME.header}
      data-scrolled={scrolled() || menuOpen()}
      data-collapsed={collapsed()}
      data-menu-open={menuOpen()}
    >
      <div class={SITE_CLASS_NAME.headerInner}>
        <a href={`#${SITE_SECTION_ID.top}`} class={SITE_CLASS_NAME.brand} aria-label={text().brandName}>
          <SiteLogo variant="header" text={text()} />
        </a>
        <button
          type="button"
          class={SITE_CLASS_NAME.navToggle}
          aria-expanded={menuOpen()}
          aria-controls={SITE_SECTION_ID.navigation}
          aria-label={menuOpen() ? text().navMenuClose : text().navMenuOpen}
          onClick={() => setMenuOpen(!menuOpen())}
        >
          <span class={SITE_CLASS_NAME.navToggleBar} />
          <span class={SITE_CLASS_NAME.navToggleBar} />
          <span class={SITE_CLASS_NAME.navToggleBar} />
        </button>
        <nav class={SITE_CLASS_NAME.nav} id={SITE_SECTION_ID.navigation} aria-label={text().navLabel}>
          <ul class={SITE_CLASS_NAME.navList}>
            <li>
              <a class={SITE_CLASS_NAME.navLink} href={`#${SITE_SECTION_ID.features}`} onClick={() => setMenuOpen(false)}>
                {text().navGame}
              </a>
            </li>
            <li>
              <a class={SITE_CLASS_NAME.navLink} href={`#${SITE_SECTION_ID.download}`} onClick={() => setMenuOpen(false)}>
                {text().navDownload}
              </a>
            </li>
          </ul>
          <div class={SITE_CLASS_NAME.headerTools}>
            <div class={SITE_CLASS_NAME.localeSwitch} role="group" aria-label={text().navLanguage}>
              <button
                type="button"
                class={SITE_CLASS_NAME.localeButton}
                aria-pressed={props.localeState.locale() === 'ko'}
                onClick={() => props.localeState.select('ko')}
              >
                {text().localeKo}
              </button>
              <button
                type="button"
                class={SITE_CLASS_NAME.localeButton}
                aria-pressed={props.localeState.locale() === 'en'}
                onClick={() => props.localeState.select('en')}
              >
                {text().localeEn}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
