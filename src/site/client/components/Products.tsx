import Reveal from './Reveal';

export default function Products() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="productos" className="py-24 bg-cool">
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal
            variante="izquierda"
            className="order-2 lg:order-1 bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(12,63,126,0.08)] space-y-6"
          >
            <figure className="space-y-3">
              {/* Wrapper con overflow oculto: contiene el zoom lento de la
                  imagen en hover sin desbordar la esquina redondeada. */}
              <div className="group overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(12,63,126,0.12)]">
                <img
                  src={`${base}images/taximetro-01.svg`}
                  width={442}
                  height={246}
                  loading="lazy"
                  decoding="async"
                  alt="Taxímetro CLINITAXI con pantalla LED encendida e impresora"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <figcaption className="text-sm text-on-surface-variant">
                Taxímetro certificado modelo Metrix-F185.
              </figcaption>
            </figure>
            <div className="item-interactivo flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">speed</span>
              <span className="font-medium text-on-surface">Taxímetros certificados</span>
            </div>
            <div className="item-interactivo flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">build</span>
              <span className="font-medium text-on-surface">Instalación y mantención</span>
            </div>
            <div className="item-interactivo flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">update</span>
              <span className="font-medium text-on-surface">Actualización normativa</span>
            </div>
            <div className="item-interactivo flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">settings_suggest</span>
              <span className="font-medium text-on-surface">Repuestos originales</span>
            </div>
          </Reveal>
          <Reveal variante="derecha" retraso={120} className="space-y-8 order-1 lg:order-2">
            <span className="text-primary font-label text-xs tracking-widest uppercase font-bold">
              Equipamiento
            </span>
            <h2 className="linea-decorativa text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Nuestros productos
            </h2>
            <p className="text-primary text-lg leading-relaxed">
              Trabajamos con taxímetros que cumplen los estándares vigentes del mercado, junto con
              servicio de instalación, mantención y soporte para mantener sus equipos siempre al
              día.
            </p>
            <ul className="space-y-4 text-primary">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Equipos aprobados por el Ministerio de Transportes
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Instalación y calibración profesional
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Soporte técnico y mantención
              </li>
            </ul>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95 active:translate-y-0 transition-all duration-200"
            >
              Solicitar información
              <span
                className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
