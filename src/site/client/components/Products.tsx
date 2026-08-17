export default function Products() {
  return (
    <section id="productos" className="py-24 bg-cool">
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(12,63,126,0.08)] space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">speed</span>
              <span className="font-medium text-on-surface">Taxímetros certificados</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">build</span>
              <span className="font-medium text-on-surface">Instalación y mantención</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">update</span>
              <span className="font-medium text-on-surface">Actualización normativa</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt">
              <span className="material-symbols-outlined text-primary">settings_suggest</span>
              <span className="font-medium text-on-surface">Repuestos originales</span>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <span className="text-primary font-label text-xs tracking-widest uppercase font-bold">
              Equipamiento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
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
              className="inline-block bg-accent text-on-accent px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
