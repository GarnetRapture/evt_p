import { createSignal, onCleanup, onMount } from 'solid-js';
import type { Accessor } from 'solid-js';

export function useSiteScrolled(threshold: number): Accessor<boolean> {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const update = (): void => {
      setScrolled(window.scrollY > threshold);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', update));
  });

  return scrolled;
}
