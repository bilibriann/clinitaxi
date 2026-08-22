import { useState } from 'react';
import type { Region } from '../../site.service';
import {
  CHILE_PATH,
  CHILE_VIEWBOX_HEIGHT,
  CHILE_VIEWBOX_WIDTH,
  projectPoint,
} from './chileMap';

/**
 * Lienzo apaisado (27:20) para que la sección quepa en pantalla: el SVG y las
 * fichas HTML comparten estas unidades, y como el contenedor mantiene la misma
 * proporción, 1 unidad equivale al mismo porcentaje en ambos ejes.
 */
const CANVAS_W = 1350;
const CANVAS_H = 1000;
const MAP_X = (CANVAS_W - CHILE_VIEWBOX_WIDTH) / 2;
const MAP_RIGHT = MAP_X + CHILE_VIEWBOX_WIDTH;
/** Codo y remate de la línea guía, medidos desde el borde del mapa. */
const LEADER_ELBOW = 18;
const LEADER_END = 36;
/**
 * El texto de las fichas mide lo mismo en px a cualquier escala, así que sus
 * altos se convierten a unidades del lienzo a través del alto real del
 * contenedor (max-w-4xl, 896 px de ancho, con la proporción de arriba).
 */
const CONTAINER_PX = (896 * CANVAS_H) / CANVAS_W;
const toUnits = (px: number) => (px / CONTAINER_PX) * CANVAS_H;
/** Ficha de tres líneas, más una cuarta cuando la región trae dirección. */
const CARD_BASE = toUnits(56);
const CARD_LINE = toUnits(19);
const CARD_PAD = toUnits(6);
const LABEL_MARGIN = 60;
/** Borde exterior de las fichas, en % del contenedor (simétrico a ambos lados). */
const CARD_EDGE = ((MAP_X - LEADER_END) / CANVAS_W) * 100;
const CARD_WIDTH = CARD_EDGE - 4;

type Placed = {
  region: Region;
  x: number;
  y: number;
  labelY: number;
  side: 'left' | 'right';
};

/**
 * Reparte las fichas a ambos costados y las separa verticalmente para que no se
 * pisen: los puntos se apiñan entre La Serena y Valdivia, pero la línea guía
 * mantiene cada ficha unida a su ubicación real.
 */
function placeRegions(regions: Region[]): Placed[] {
  const points = regions
    .filter(
      (r): r is Region & { lat: number; lng: number } =>
        r.lat != null && r.lng != null,
    )
    .map((region) => ({ region, ...projectPoint(region.lat, region.lng) }))
    .sort((a, b) => a.y - b.y);

  return (['left', 'right'] as const).flatMap((side) => {
    const own = points.filter(
      (_, i) => (i % 2 === 0 ? 'left' : 'right') === side,
    );
    const half = own.map(
      (p) => (CARD_BASE + (p.region.address ? CARD_LINE : 0)) / 2,
    );
    const gap = (i: number) => half[i] + half[i + 1] + CARD_PAD;

    const ys: number[] = [];
    own.forEach((p, i) => {
      ys.push(
        Math.max(
          p.y,
          i === 0 ? LABEL_MARGIN + half[0] : ys[i - 1] + gap(i - 1),
        ),
      );
    });
    for (let i = ys.length - 1; i > 0; i -= 1) {
      const limit =
        i === ys.length - 1
          ? CANVAS_H - LABEL_MARGIN - half[i]
          : ys[i + 1] - gap(i);
      ys[i] = Math.min(ys[i], limit);
      ys[i - 1] = Math.min(ys[i - 1], ys[i] - gap(i - 1));
    }
    return own.map((p, i) => ({ ...p, labelY: ys[i], side }));
  });
}

/** Guía ortogonal desde el punto en el mapa hasta el borde de su ficha. */
function leaderPath({ x, y, labelY, side }: Placed): string {
  const elbow =
    side === 'left' ? MAP_X - LEADER_ELBOW : MAP_RIGHT + LEADER_ELBOW;
  const end = side === 'left' ? MAP_X - LEADER_END : MAP_RIGHT + LEADER_END;
  return `M${MAP_X + x} ${y} L${elbow} ${y} L${elbow} ${labelY} L${end} ${labelY}`;
}

function RegionInfo({
  region,
  align,
  compact = false,
}: {
  region: Region;
  align: 'left' | 'right';
  compact?: boolean;
}) {
  const alignment =
    align === 'right' ? 'text-right items-end' : 'text-left items-start';
  /** En el mapa el contacto y la dirección van en una sola línea para no crecer en alto. */
  const meta = compact
    ? [[region.contactName, region.address].filter(Boolean).join(' · ')].filter(
        Boolean,
      )
    : [region.contactName, region.address].filter(Boolean);

  return (
    <div
      className={`flex flex-col ${compact ? 'gap-0.5' : 'gap-1'} ${alignment}`}
    >
      <p
        className={`font-bold text-primary leading-tight ${compact ? 'text-[15px]' : ''}`}
      >
        {region.name}
      </p>
      {meta.map((line) => (
        <p
          key={line}
          className={`text-on-surface-variant leading-snug ${compact ? 'text-xs' : 'text-sm'}`}
        >
          {line}
        </p>
      ))}
      {region.phone && (
        <a
          href={`tel:${region.phoneHref ?? region.phone.replace(/\s/g, '')}`}
          aria-label={`Llamar a ${region.name}: ${region.phone}`}
          className={`inline-flex items-center gap-1.5 font-label font-bold text-accent hover:underline ${
            compact ? 'mt-0.5 text-[11px]' : 'mt-1 text-[13px]'
          }`}
        >
          <span
            className={`material-symbols-outlined ${compact ? 'text-xs' : 'text-sm'}`}
            aria-hidden="true"
          >
            call
          </span>
          {region.phone}
        </a>
      )}
    </div>
  );
}

function ChileShape({ strokeWidth }: { strokeWidth: number }) {
  return (
    <path
      d={CHILE_PATH}
      fill="var(--color-surface-alt)"
      stroke="var(--color-primary)"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
  );
}

export default function Coverage({ regions }: { regions: Region[] }) {
  const [active, setActive] = useState<string | null>(null);
  const placed = placeRegions(regions);

  return (
    <section id="cobertura" className="py-24 bg-white">
      <div className="container-max mx-auto px-4 md:px-12">
        <div className="mb-14 border-b border-outline-variant/40 pb-8">
          <span className="text-success font-label text-xs tracking-widest uppercase font-bold">
            Presencia nacional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-2">
            Cobertura regional
          </h2>
          <p className="text-on-surface-variant max-w-2xl mt-4">
            Atendemos a conductores y operadores en las principales regiones de
            Chile. Contacta directamente al representante de tu zona.
          </p>
        </div>

        {/* Escritorio: mapa con las fichas a ambos costados */}
        <div className="hidden lg:block relative mx-auto aspect-27/20 w-full max-w-4xl">
          <svg
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <g transform={`translate(${MAP_X} 0)`}>
              <ChileShape strokeWidth={1.25} />
            </g>
            {placed.map((p) => {
              const on = active === p.region.name;
              return (
                <g key={p.region.name}>
                  <path
                    d={leaderPath(p)}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth={on ? 1.6 : 0.8}
                    strokeOpacity={on ? 0.9 : 0.35}
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle
                    cx={MAP_X + p.x}
                    cy={p.y}
                    r={on ? 10 : 7}
                    fill="var(--color-accent)"
                    stroke="#ffffff"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                    className="transition-all"
                  />
                </g>
              );
            })}
          </svg>

          <p className="absolute left-0 top-0 font-label text-xs uppercase tracking-widest text-on-surface-variant/60">
            Norte
          </p>
          <p className="absolute bottom-0 left-0 font-label text-xs uppercase tracking-widest text-on-surface-variant/60">
            Sur
          </p>

          {placed.map((p) => (
            <div
              key={p.region.name}
              onMouseEnter={() => setActive(p.region.name)}
              onMouseLeave={() => setActive(null)}
              style={{
                top: `${(p.labelY / CANVAS_H) * 100}%`,
                width: `${CARD_WIDTH}%`,
                ...(p.side === 'left'
                  ? { right: `${100 - CARD_EDGE}%` }
                  : { left: `${100 - CARD_EDGE}%` }),
              }}
              className="absolute -translate-y-1/2"
            >
              <RegionInfo
                region={p.region}
                align={p.side === 'left' ? 'right' : 'left'}
                compact
              />
            </div>
          ))}
        </div>

        {/* Móvil: mapa compacto y fichas apiladas */}
        <div className="lg:hidden">
          <div className="flex justify-center">
            <svg
              viewBox={`0 0 ${CHILE_VIEWBOX_WIDTH} ${CHILE_VIEWBOX_HEIGHT}`}
              className="h-[340px] w-auto"
              role="img"
              aria-label={`Mapa de Chile con las ${placed.length} ubicaciones de CLINITAXI`}
            >
              <ChileShape strokeWidth={1} />
              {placed.map((p) => (
                <circle
                  key={p.region.name}
                  cx={p.x}
                  cy={p.y}
                  r={9}
                  fill="var(--color-accent)"
                  stroke="#ffffff"
                  strokeWidth={3}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-xl border border-outline-variant p-5 transition-colors hover:border-accent/40"
              >
                <RegionInfo region={region} align="left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
