import Reveal from './Reveal';

export default function News() {
  return (
    <section id="noticias" className="py-24 bg-surface-dark">
      <div className="container-max mx-auto px-4 md:px-12">
        <Reveal>
          <span className="text-success font-label text-xs tracking-widest uppercase font-bold">
            Noticias
          </span>
          <h2 className="linea-decorativa text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-10">
            Últimas novedades
          </h2>
        </Reveal>
        <Reveal retraso={120}>
          <div className="tarjeta-interactiva border border-transparent bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(12,63,126,0.08)] max-w-3xl">
            <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">
              Septiembre 2024
            </span>
            <h3 className="text-xl font-bold text-on-surface mt-2 mb-3">
              Nuevos requisitos de certificación para taxímetros
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Muchos equipos actualmente en circulación superan los 25 años desde su acreditación.
              Te ayudamos a mantener tu taxímetro al día con la normativa vigente.
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1 text-primary font-semibold mt-5 hover:text-accent transition-colors"
            >
              Consultar por mi equipo
              <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
