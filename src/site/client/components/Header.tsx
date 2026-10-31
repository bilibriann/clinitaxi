import { useEffect, useState } from 'react';
import type { NavLink } from '../../site.service';

export default function Header({ nav }: { nav: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-nav border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-outline sombra-media'
          : 'bg-primary/95 border-white/10'
      }`}
    >
      <nav className="container-max mx-auto px-4 md:px-12 flex items-center justify-between h-20">
        {/* El logo va sobre una placa navy para que "CLINI" en blanco se lea
            también cuando el header pasa a fondo blanco al hacer scroll. */}
        <a href="#inicio" className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5">
          <span className="material-symbols-outlined text-3xl text-celeste">local_taxi</span>
          <span className="font-wordmark italic font-bold text-2xl tracking-tight">
            <span className="text-white">CLINI</span>
            <span className="text-celeste">TAXI</span>
          </span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-indicador text-sm font-bold transition-colors ${
                scrolled
                  ? 'text-on-surface-variant hover:text-on-surface'
                  : 'text-on-primary/90 hover:text-on-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+56950646818"
            aria-label="Llamar a CLINITAXI"
            className={`md:hidden w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
              scrolled
                ? 'bg-primary/10 text-primary hover:bg-primary/20'
                : 'bg-on-primary/15 text-on-primary hover:bg-on-primary/25'
            }`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">call</span>
          </a>
          <a
            href="#contacto"
            className="bg-accent text-on-accent px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:scale-95 active:translate-y-0 transition-all duration-200"
          >
            Contáctanos
          </a>
        </div>
      </nav>
    </header>
  );
}
