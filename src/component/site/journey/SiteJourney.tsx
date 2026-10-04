import { onCleanup, onMount, type JSX } from 'solid-js';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteJourney(props: { children: JSX.Element }) {
  let viewport: HTMLDivElement | undefined;

  onMount(() => {
    if (!viewport) return;
    const track = viewport;
    const pages = Array.from(track.children[0]?.children ?? []) as HTMLElement[];
    const motion = (): ScrollBehavior => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth');
    let rewind = false;
    const rewindHidden = (): void => {
      if (!rewind || (track.getBoundingClientRect().top < window.innerHeight && window.scrollY > 0)) return;
      rewind = false;
      pages[0]?.scrollTo({ top: 0, behavior: 'instant' });
      track.scrollTo({ left: 0, behavior: 'instant' });
    };
    const enter = (index: number, scrollingDown: boolean): void => {
      const page = pages[index];
      if (!page) return;
      page.scrollTo({ top: scrollingDown ? 0 : page.scrollHeight, behavior: 'instant' });
      track.scrollTo({ left: index * track.clientWidth, behavior: motion() });
    };
    const jump = (id: string, animate: boolean): boolean => {
      const behavior = animate ? motion() : 'instant';
      if (id === 'top') {
        rewind = true;
        window.scrollTo({ top: 0, behavior });
        rewindHidden();
        return true;
      }
      const index = pages.findIndex((page) => page.id === id);
      if (index < 0) return false;
      rewind = false;
      pages[index]?.scrollTo({ top: 0, behavior });
      track.scrollTo({ left: index * track.clientWidth, behavior });
      window.scrollTo({ top: track.offsetTop, behavior });
      return true;
    };
    const followAnchor = (event: MouseEvent): void => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor?.getAttribute('href')?.slice(1);
      if (!id || !jump(id, true)) return;
      event.preventDefault();
      window.history.pushState(null, '', `#${id}`);
    };
    document.addEventListener('click', followAnchor);
    if (window.location.hash) jump(window.location.hash.slice(1), false);
    let lastMove = 0;
    let edgeTravel = 0;
    let edgePage = -1;
    const move = (event: WheelEvent): void => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey || event.deltaY === 0) return;
      const scrollingDown = event.deltaY > 0;
      if (track.getBoundingClientRect().bottom - window.innerHeight > 1) {
        event.preventDefault();
        window.scrollTo({ top: scrollingDown ? track.offsetTop : 0, behavior: motion() });
        return;
      }
      const index = Math.round(track.scrollLeft / track.clientWidth);
      const page = pages[index];
      if (!page) return;
      const atEdge = scrollingDown
        ? page.scrollTop + page.clientHeight >= page.scrollHeight - 2
        : page.scrollTop <= 2;
      if (!atEdge) {
        edgeTravel = 0;
        edgePage = -1;
        event.preventDefault();
        page.scrollBy({ top: event.deltaY, behavior: 'instant' });
        return;
      }
      const next = index + (scrollingDown ? 1 : -1);
      if (next >= pages.length) return;
      event.preventDefault();
      if (next < 0) {
        window.scrollTo({ top: 0, behavior: motion() });
        return;
      }
      if (scrollingDown) {
        if (edgePage !== index) { edgePage = index; edgeTravel = 0; }
        edgeTravel += event.deltaY;
        if (edgeTravel < 140) return;
      }
      edgeTravel = 0;
      edgePage = -1;
      if (performance.now() - lastMove < 650) return;
      lastMove = performance.now();
      enter(next, scrollingDown);
    };
    track.addEventListener('wheel', move, { passive: false });
    window.addEventListener('scroll', rewindHidden, { passive: true });
    onCleanup(() => {
      track.removeEventListener('wheel', move);
      window.removeEventListener('scroll', rewindHidden);
      document.removeEventListener('click', followAnchor);
    });
  });

  return <div class={SITE_CLASS_NAME.journey} ref={(element) => { viewport = element; }}><div class={SITE_CLASS_NAME.journeyTrack}>{props.children}</div></div>;
}
