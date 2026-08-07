export default function Hero({ yearsOfExperience }: { yearsOfExperience: string }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-secondary pt-40 pb-28 md:pt-48 md:pb-36"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          color: '#ffffff',
        }}
      ></div>
      <div className="container-max mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Taxímetros certificados.<br className="hidden md:block" />{' '}
              <span className="text-accent">El de la caja azul.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl">
              Equipos no adulterables, aprobados por el Ministerio de Transportes de Chile, con
              más de {yearsOfExperience} años de trayectoria y cobertura a nivel nacional.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+56950646818"
                className="lg:hidden bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-base flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">call</span>
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
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-base"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <div className="h-1 bg-accent" />
                <div className="bg-white/5 px-8 pt-8 pb-7 space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-accent text-2xl" aria-hidden="true">workspace_premium</span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl leading-tight">
                      Autorizado por el Ministerio de Transportes de Chile
                    </h3>
                  </div>
                  <div className="border-t border-white/10" />
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent text-lg shrink-0" aria-hidden="true">lock</span>
                      <span className="text-white/80 text-sm">Equipos no adulterables</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent text-lg shrink-0" aria-hidden="true">verified_user</span>
                      <span className="text-white/80 text-sm">Certificación normativa vigente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent text-lg shrink-0" aria-hidden="true">public</span>
                      <span className="text-white/80 text-sm">Cobertura en 8 regiones</span>
                    </li>
                  </ul>
                  <div className="border-t border-white/10" />
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent" aria-hidden="true">local_taxi</span>
                    <span className="text-white/50 text-xs">CLINITAXi · El de la caja azul</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-divider text-surface">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.55,19.34,147.28,45.2,213,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
