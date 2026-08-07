import type { SiteViewModel } from '../../site.service';

export default function Contact({ contact }: { contact: SiteViewModel['contact'] }) {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container-max mx-auto px-4 md:px-12">
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
