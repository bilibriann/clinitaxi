import type { SiteViewModel } from '../../site.service';

export default function Contact({ contact }: { contact: SiteViewModel['contact'] }) {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleY(-1)',
        }}
      />
      {/* Duplicado decorativo en blanco de los datos de contacto, recortado con una
          versión ya invertida verticalmente del swoosh (hero-swoosh-flip.svg) que
          coincide con el fondo espejado: solo se revela sobre la franja navy/azul,
          dejando ver el texto oscuro de abajo sobre el blanco. El texto en sí no se
          transforma, solo la máscara. Se ajusta solo a cualquier ancho de pantalla. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 pointer-events-none py-24"
        style={{
          maskImage: 'url(/images/hero-swoosh-flip.svg)',
          maskSize: 'cover',
          maskPosition: 'bottom left',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: 'url(/images/hero-swoosh-flip.svg)',
          WebkitMaskSize: 'cover',
          WebkitMaskPosition: 'bottom left',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        <div className="container-max mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-4 invisible">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hablemos</h2>
                <p className="text-lg max-w-md">
                  Escríbenos y nuestro equipo te responderá a la brevedad.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full shrink-0" />
                  <span className="font-semibold text-white">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full shrink-0" />
                  <span className="font-semibold text-white">{contact.hours}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full shrink-0" />
                  <span className="font-semibold text-white">{contact.address}</span>
                </div>
                <div className="h-px" />
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full shrink-0" />
                  <span className="font-semibold text-white">{contact.email}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full shrink-0" />
                  <span className="font-semibold text-white">{contact.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-max mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Hablemos
              </h2>
              <p className="text-on-surface-variant text-lg max-w-md">
                Escríbenos y nuestro equipo te responderá a la brevedad.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <a href="tel:+56950646818" className="font-semibold text-on-surface hover:text-primary transition-colors">{contact.phone}</a>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="font-semibold text-on-surface">{contact.hours}</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-surface-alt border border-outline-variant flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="font-semibold text-on-surface">{contact.address}</span>
              </div>
              <div className="h-px bg-outline-variant" />
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-on-accent shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <a href={`mailto:${contact.email}`} className="font-semibold text-on-surface hover:text-primary transition-colors">{contact.email}</a>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-on-accent shrink-0">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <a href={`https://${contact.website}`} className="font-semibold text-on-surface hover:text-primary transition-colors">{contact.website}</a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-outline-variant h-64">
              <iframe
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={contact.mapEmbedSrc}
              ></iframe>
            </div>
          </div>

          <div className="bg-surface-alt p-8 md:p-10 rounded-2xl border border-outline-variant/60">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full bg-white border border-outline-variant rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-white border border-outline-variant rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-primary-container active:scale-[0.98] transition-all"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
