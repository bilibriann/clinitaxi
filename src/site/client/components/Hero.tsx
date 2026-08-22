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
      style={{
        backgroundImage: `url(${base}images/hero-background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <AdaptiveText text="Taxímetros certificados." {...adaptive} />
            </h1>
            <p className="text-lg lg:text-xl max-w-xl">
              <AdaptiveText
                text={`Equipos no adulterables, aprobados por el Ministerio de Transportes de Chile, con más de ${yearsOfExperience} años de trayectoria y cobertura a nivel nacional.`}
                {...adaptive}
              />
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+56950646818"
                className="lg:hidden bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-base flex items-center gap-2"
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
                className="hidden lg:inline-flex bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-base"
              >
                Ver Productos
              </a>
              <a
                href="#contacto"
                className="bg-white border-2 border-outline text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-alt transition-all text-base"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src={`${base}images/taximetro.jpg`}
                srcSet={`${base}images/taximetro-800.jpg 800w, ${base}images/taximetro.jpg 1600w`}
                sizes="(min-width: 1280px) 576px, 45vw"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                alt="Taxímetro CLINITAXI Metrix-F185 con su pantalla azul encendida"
                className="w-full rounded-3xl shadow-2xl shadow-black/50 border border-white/10 object-cover"
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
    </section>
  );
}
