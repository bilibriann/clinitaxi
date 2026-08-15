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
      className={`fixed top-0 w-full z-50 glass-nav border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-white/95 border-outline'
          : 'bg-primary/95 border-white/10'
      }`}
    >
      <nav className="container-max mx-auto px-4 md:px-12 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className={`material-symbols-outlined text-3xl transition-colors ${scrolled ? 'text-primary' : 'text-on-primary'}`}
          >
            local_taxi
          </span>
          <span
            className={`font-wordmark italic font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-on-primary'}`}
          >
            CLINITAXi
          </span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-colors ${
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
            aria-label="Llamar a CLINITAXi"
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
            className="bg-accent text-on-accent px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 active:scale-95 transition-all"
          >
            Contáctanos
          </a>
        </div>
      </nav>
    </header>
  );
}
