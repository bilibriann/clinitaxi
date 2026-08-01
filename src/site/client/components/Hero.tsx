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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 text-accent border border-accent/30 rounded-full font-label text-xs tracking-wider uppercase">
              <span className="material-symbols-outlined text-base">verified</span>
              {yearsOfExperience} años de experiencia
            </span>
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
                href="#productos"
                className="bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-base"
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
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <div className="absolute -inset-4 rounded-3xl border border-accent/20"></div>
              <span className="material-symbols-outlined text-accent" style={{ fontSize: '9rem' }}>
                speed
              </span>
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
