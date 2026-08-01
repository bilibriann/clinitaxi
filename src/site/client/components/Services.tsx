import type { SiteViewModel } from '../../site.service';

export default function Services({ stats }: { stats: SiteViewModel['stats'] }) {
  return (
    <section id="servicios" className="py-24 bg-white border-b border-outline-variant/40">
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-success font-label text-xs tracking-widest uppercase font-bold">
              Nuestro Compromiso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Confianza construida en precisión
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              No solo instalamos taxímetros: garantizamos equipos no adulterables, que cumplen con
              la normativa vigente y respaldan la relación entre conductores y pasajeros.
            </p>
            <div className="space-y-6 pt-2">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface mb-1">Certificación oficial</h3>
                  <p className="text-on-surface-variant">
                    Equipos autorizados y aprobados por el Ministerio de Transportes de Chile.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface mb-1">No adulterables</h3>
                  <p className="text-on-surface-variant">
                    Tecnología que protege la integridad de la medición durante todo su ciclo de
                    vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-alt rounded-2xl p-8 flex flex-col justify-center items-center text-center gap-2">
              <span className="text-4xl font-extrabold text-primary">
                {stats.yearsOfExperience}
              </span>
              <span className="text-sm text-on-surface-variant font-medium">
                Años de experiencia
              </span>
            </div>
            <div className="bg-surface-alt rounded-2xl p-8 flex flex-col justify-center items-center text-center gap-2">
              <span className="text-4xl font-extrabold text-primary">
                {stats.regionsCovered}
              </span>
              <span className="text-sm text-on-surface-variant font-medium">
                Regiones con cobertura
              </span>
            </div>
            <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center gap-2 col-span-2">
              <span className="material-symbols-outlined text-accent text-3xl">
                workspace_premium
              </span>
              <span className="text-white font-semibold">
                Aprobados por el Ministerio de Transportes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
