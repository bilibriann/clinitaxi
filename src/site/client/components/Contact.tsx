import type { SiteViewModel } from '../../site.service';
import ContactForm from './ContactForm';
import Reveal from './Reveal';

export default function Contact({ contact }: { contact: SiteViewModel['contact'] }) {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="contacto" className="relative overflow-hidden py-24 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${base}images/hero-background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleY(-1)',
        }}
      />
      <div className="container-max mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            {/* Tarjeta blanca como la del inicio: el texto negro se lee igual sobre
                la franja navy que sobre el blanco del swoosh. */}
            <div className="space-y-8 rounded-3xl bg-white/95 p-7 md:p-9 shadow-2xl shadow-black/30 border-l-8 border-accent">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Contáctanos
                </h2>
              </div>
              <div className="space-y-5">
                <div className="group flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0 transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <a href="tel:+56950646818" className="font-semibold text-black hover:text-accent transition-colors">{contact.phone}</a>
                </div>
                <div className="group flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0 transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <span className="font-semibold text-black">{contact.hours}</span>
                </div>
                <div className="group flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0 transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <span className="font-semibold text-black">{contact.address}</span>
                </div>
                <div className="h-px bg-outline-variant" />
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-on-accent shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <a href={`mailto:${contact.email}`} className="font-semibold text-black hover:text-accent transition-colors">{contact.email}</a>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-on-accent shrink-0">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <a href={`https://${contact.website}`} className="font-semibold text-black hover:text-accent transition-colors">{contact.website}</a>
                </div>
              </div>
            </div>

            <Reveal className="rounded-2xl overflow-hidden border border-outline-variant h-64">
              <iframe
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={contact.mapEmbedSrc}
              ></iframe>
            </Reveal>
          </div>

          <Reveal
            variante="derecha"
            className="bg-surface-alt p-8 md:p-10 rounded-2xl border border-outline-variant/60"
          >
            <ContactForm email={contact.email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
