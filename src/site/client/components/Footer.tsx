import type { SiteViewModel } from '../../site.service';

interface FooterProps {
  contact: SiteViewModel['contact'];
  socialLinks: SiteViewModel['socialLinks'];
  yearsOfExperience: string;
}

export default function Footer({ contact, socialLinks, yearsOfExperience }: FooterProps) {
  return (
    <footer className="bg-surface-dark text-white py-16 border-t-4 border-primary">
      <div className="container-max mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-accent text-2xl">local_taxi</span>
            <span className="font-bold text-lg">CLINITAXi</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Taxímetros certificados y no adulterables, con más de {yearsOfExperience} años de
            experiencia y cobertura nacional.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Enlaces</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#inicio" className="text-white/70 hover:text-white transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="text-white/70 hover:text-white transition-colors">
                Productos
              </a>
            </li>
            <li>
              <a href="#noticias" className="text-white/70 hover:text-white transition-colors">
                Noticias
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">call</span>{' '}
              <a href="tel:+56950646818" className="hover:text-white transition-colors">{contact.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">
                location_on
              </span>{' '}
              Quinta Normal, Chile
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Síguenos</h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <span className="material-symbols-outlined text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-max mx-auto px-4 md:px-12 mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © 2026 CLINITAXi. Todos los derechos reservados.
      </div>
    </footer>
  );
}
