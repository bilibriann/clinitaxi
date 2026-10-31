import type { SiteViewModel } from '../../site.service';
import Reveal from './Reveal';

interface FooterProps {
  contact: SiteViewModel['contact'];
  yearsOfExperience: string;
}

export default function Footer({ contact, yearsOfExperience }: FooterProps) {
  return (
    <footer className="bg-surface-dark text-white py-16 border-t-4 border-primary">
      <div className="container-max mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Reveal className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-celeste text-2xl">local_taxi</span>
            <span className="font-wordmark italic font-bold text-xl">
              <span className="text-white">CLINI</span>
              <span className="text-celeste">TAXI</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Taxímetros certificados y no adulterables, con más de {yearsOfExperience} años de
            experiencia y cobertura nacional.
          </p>
        </Reveal>
        <Reveal className="space-y-4 text-center" retraso={100}>
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Enlaces</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#inicio" className="nav-indicador text-white/70 hover:text-white transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="nav-indicador text-white/70 hover:text-white transition-colors">
                Productos
              </a>
            </li>
            <li>
              <a href="#noticias" className="nav-indicador text-white/70 hover:text-white transition-colors">
                Noticias
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-indicador text-white/70 hover:text-white transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal className="space-y-4" retraso={200}>
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Contáctanos</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">
                location_on
              </span>{' '}
              Quinta Normal, Chile
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">call</span>{' '}
              <a href="tel:+56950646818" className="hover:text-white transition-colors">{contact.phone}</a>
            </li>
            <li className="border-t border-white/10 pt-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">mail</span>{' '}
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent">language</span>{' '}
              <a href={`https://${contact.website}`} className="hover:text-white transition-colors">{contact.website}</a>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className="container-max mx-auto px-4 md:px-12 mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © 2026 CLINITAXI.
      </div>
    </footer>
  );
}
