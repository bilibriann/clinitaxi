import type { NavLink } from '../../site.service';

export default function Header({ nav }: { nav: NavLink[] }) {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav bg-white/90 border-b border-outline-variant/60">
      <nav className="container-max mx-auto px-4 md:px-12 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">local_taxi</span>
          <span className="font-bold text-xl tracking-tight text-secondary">CLINITAXi</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-container active:scale-95 transition-all"
        >
          Contáctanos
        </a>
      </nav>
    </header>
  );
}
