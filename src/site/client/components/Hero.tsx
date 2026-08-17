import { useRef } from 'react';
import AdaptiveText from './AdaptiveText';

export default function Hero({
  yearsOfExperience,
}: {
  yearsOfExperience: string;
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
              <br className="hidden md:block" />{' '}
              <AdaptiveText text="El de la caja" {...adaptive} />{' '}
              <span className="text-primary">Azul</span>
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

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <div className="h-1 bg-accent" />
                <div className="bg-secondary/95 backdrop-blur-sm px-8 pt-8 pb-7 space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-accent text-2xl"
                        aria-hidden="true"
                      >
                        workspace_premium
                      </span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl leading-tight">
                      Autorizado por el Ministerio de Transportes de Chile
                    </h3>
                  </div>
                  <div className="border-t border-white/10" />
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-accent text-lg shrink-0"
                        aria-hidden="true"
                      >
                        lock
                      </span>
                      <span className="text-white/80 text-sm">
                        Equipos no adulterables
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-accent text-lg shrink-0"
                        aria-hidden="true"
                      >
                        verified_user
                      </span>
                      <span className="text-white/80 text-sm">
                        Certificación normativa vigente
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-accent text-lg shrink-0"
                        aria-hidden="true"
                      >
                        public
                      </span>
                      <span className="text-white/80 text-sm">
                        Cobertura en 8 regiones
                      </span>
                    </li>
                  </ul>
                  <div className="border-t border-white/10" />
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-accent"
                      aria-hidden="true"
                    >
                      local_taxi
                    </span>
                    <span className="text-white/50 text-xs">
                      CLINITAXi · El de la caja azul
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
