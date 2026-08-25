import { useRef } from 'react';
import AdaptiveText from './AdaptiveText';

export default function Hero({
  yearsOfExperience,
  regionsCovered,
}: {
  yearsOfExperience: string;
  regionsCovered: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const base = import.meta.env.BASE_URL;
  const adaptive = {
    imageSrc: `${base}images/hero-swoosh.png`,
    sectionRef,
    lightClassName: 'text-white',
    darkClassName: 'text-primary',
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36"
    >
      {/* El fondo vive en su propia capa para poder animarlo (zoom-out
          cinematográfico) sin mover el contenido. Ocupa exactamente la caja de
          la sección, así que la geometría que mide AdaptiveText no cambia. */}
      <div
        aria-hidden="true"
        className="hero-fondo absolute inset-0"
        style={{
          backgroundImage: `url(${base}images/hero-background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container-max relative z-10 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1
              className="elemento-aparece text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              style={{ animationDelay: '200ms' }}
            >
              <AdaptiveText text="Taxímetros certificados." {...adaptive} />
            </h1>
            <p
              className="elemento-aparece text-lg lg:text-xl max-w-xl"
              style={{ animationDelay: '380ms' }}
            >
              <AdaptiveText
                text={`Equipos no adulterables, aprobados por el Ministerio de Transportes de Chile, con más de ${yearsOfExperience} años de trayectoria y cobertura a nivel nacional.`}
                {...adaptive}
              />
            </p>
            <div
              className="elemento-entrada flex flex-wrap gap-4 pt-2"
              style={{ animationDelay: '560ms' }}
            >
              <a
                href="tel:+56950646818"
                className="lg:hidden bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95 active:translate-y-0 transition-all duration-200 text-base flex items-center gap-2"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  aria-hidden="true"
                >
                  call
                </span>
                Llamar ahora
              </a>
              <a
                href="#productos"
                className="group hidden lg:inline-flex items-center gap-2 bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95 active:translate-y-0 transition-all duration-200 text-base"
              >
                Ver Productos
                <span
                  className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </a>
              <a
                href="#contacto"
                className="bg-white border-2 border-outline text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-alt hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg active:scale-95 active:translate-y-0 transition-all duration-200 text-base"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div
            className="elemento-entrada hidden lg:flex justify-end"
            style={{ animationDelay: '700ms' }}
          >
            <div className="group relative w-full max-w-xl">
              <img
                src={`${base}images/taximetro.jpg`}
                srcSet={`${base}images/taximetro-800.jpg 800w, ${base}images/taximetro.jpg 1600w`}
                sizes="(min-width: 1280px) 576px, 45vw"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                alt="Taxímetro CLINITAXI Metrix-F185 con su pantalla azul encendida"
                className="w-full rounded-3xl shadow-2xl shadow-black/50 border border-white/10 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-8 w-60 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <div className="h-0.5 bg-accent" />
                <div className="bg-secondary/95 backdrop-blur-sm px-4 py-4 space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-accent text-base"
                        aria-hidden="true"
                      >
                        workspace_premium
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-sm leading-snug">
                      Autorizado por el Ministerio de Transportes
                    </h3>
                  </div>
                  <ul className="space-y-2 border-t border-white/10 pt-3">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-accent text-sm shrink-0"
                        aria-hidden="true"
                      >
                        lock
                      </span>
                      <span className="text-white/80 text-xs">
                        Equipos no adulterables
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-accent text-sm shrink-0"
                        aria-hidden="true"
                      >
                        verified_user
                      </span>
                      <span className="text-white/80 text-xs">
                        Certificación vigente
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-accent text-sm shrink-0"
                        aria-hidden="true"
                      >
                        public
                      </span>
                      <span className="text-white/80 text-xs">
                        Cobertura en {regionsCovered} regiones
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll: solo la flecha, en azul de acento para que se lea
          tanto sobre la franja navy como sobre el blanco del swoosh. */}
      <a
        href="#servicios"
        aria-label="Ir a la siguiente sección"
        className="elemento-aparece absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2"
        style={{ animationDelay: '1200ms' }}
      >
        <span
          className="scroll-flecha material-symbols-outlined text-accent text-4xl"
          aria-hidden="true"
        >
          keyboard_arrow_down
        </span>
      </a>
    </section>
  );
}
