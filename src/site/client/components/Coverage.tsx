import type { Region } from '../../site.service';

export default function Coverage({ regions }: { regions: Region[] }) {
  return (
    <section id="cobertura" className="py-24 bg-white">
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/40 pb-8">
          <div>
            <span className="text-success font-label text-xs tracking-widest uppercase font-bold">
              Presencia nacional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-2">
              Cobertura regional
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md">
            Atendemos a conductores y operadores en las principales regiones de Chile.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group border border-outline-variant rounded-xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-primary mb-2">location_on</span>
              <p className="font-semibold text-on-surface text-sm">{region.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
