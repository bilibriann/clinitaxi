import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Scroll suave global (Lenis). Además intercepta los enlaces de ancla
 * (`#inicio`, `#productos`, ...) para que naveguen con la misma inercia y
 * queden por debajo del header fijo de 80px en lugar de saltar de golpe.
 *
 * No renderiza nada: se monta una vez en App.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      anchors: { offset: -96 },
    });

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
