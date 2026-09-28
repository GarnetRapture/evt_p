import { onCleanup, onMount } from 'solid-js';

export function useSiteMotion(): void {
  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>('[data-motion="reveal"]');
    let revealIndex = 0;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate(
          [{ opacity: 0, transform: 'translateY(34px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 850, delay: Math.min(revealIndex++ % 3, 2) * 90, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' },
        );
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    targets.forEach((target) => observer.observe(target));
    onCleanup(() => observer.disconnect());
  });
}
