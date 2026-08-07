import type { NavLink } from '../../site.service';

export default function Header({ nav }: { nav: NavLink[] }) {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav bg-accent/95 border-b border-black/10">
      <nav className="container-max mx-auto px-4 md:px-12 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-accent text-3xl">local_taxi</span>
          <span className="font-bold text-xl tracking-tight text-on-accent">CLINITAXi</span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-on-accent/90 hover:text-on-accent transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+56950646818"
            aria-label="Llamar a CLINITAXi"
            className="md:hidden w-11 h-11 rounded-lg bg-on-accent/15 flex items-center justify-center text-on-accent hover:bg-on-accent/25 transition-colors"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">call</span>
          </a>
          <a
            href="#contacto"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary active:scale-95 transition-all"
          >
            Contáctanos
          </a>
        </div>
      </nav>
    </header>
  );
}
