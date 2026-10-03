import { onCleanup, onMount } from 'solid-js';
import type { Accessor } from 'solid-js';

export function useSoulFieldActivity(host: Accessor<HTMLElement | undefined>): void {
  onMount(() => {
    const element = host();
    if (element === undefined) return;

    let visible = true;
    const update = (): void => {
      element.dataset.active = String(visible && !document.hidden);
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      update();
    });
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    update();

    onCleanup(() => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    });
  });
}
