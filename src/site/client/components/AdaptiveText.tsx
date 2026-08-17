import { useEffect, useRef, useState, type RefObject } from 'react';

type ImageSample = { ctx: CanvasRenderingContext2D; w: number; h: number };

const imageCache = new Map<string, Promise<ImageSample>>();

function loadImageSample(src: string): Promise<ImageSample> {
  let cached = imageCache.get(src);
  if (!cached) {
    cached = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('2D canvas context unavailable'));
          return;
        }
        ctx.drawImage(img, 0, 0);
        resolve({ ctx, w: img.naturalWidth, h: img.naturalHeight });
      };
      img.onerror = reject;
      img.src = src;
    });
    imageCache.set(src, cached);
  }
  return cached;
}

/**
 * Replica el mapeo de coordenadas de `background-size: cover` +
 * `background-position: bottom left` para poder muestrear el pixel de la
 * imagen fuente que cae bajo un punto (x, y) relativo a la caja de la sección.
 */
function coverBottomLeftAlpha(
  sample: ImageSample,
  sectionW: number,
  sectionH: number,
  x: number,
  y: number,
  flipY: boolean,
): number {
  const scale = Math.max(sectionW / sample.w, sectionH / sample.h);
  const scaledH = sample.h * scale;
  const offsetY = sectionH - scaledH;
  let srcX = x / scale;
  let srcY = (y - offsetY) / scale;
  if (flipY) srcY = sample.h - srcY;
  srcX = Math.min(Math.max(Math.round(srcX), 0), sample.w - 1);
  srcY = Math.min(Math.max(Math.round(srcY), 0), sample.h - 1);
  return sample.ctx.getImageData(srcX, srcY, 1, 1).data[3];
}

/**
 * Renderiza `text` palabra por palabra, decidiendo el color de cada palabra
 * completa según el pixel de `imageSrc` que cae bajo su centro (misma
 * geometría que `background-size: cover` + `background-position: bottom
 * left` aplicada a `sectionRef`). A diferencia de un recorte CSS por pixel,
 * esto nunca parte una letra a la mitad — cada palabra se resuelve a un único
 * color. Debe usarse dentro de un elemento con `sectionRef` como ancestro
 * posicionado (la sección con la imagen de fondo real).
 */
export default function AdaptiveText({
  text,
  imageSrc,
  sectionRef,
  flipY = false,
  lightClassName,
  darkClassName,
}: {
  text: string;
  imageSrc: string;
  sectionRef: RefObject<HTMLElement | null>;
  flipY?: boolean;
  lightClassName: string;
  darkClassName: string;
}) {
  const words = text.split(' ').filter(Boolean);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [onShape, setOnShape] = useState<boolean[]>(() => words.map(() => true));

  useEffect(() => {
    let cancelled = false;

    const measure = async () => {
      const section = sectionRef.current;
      if (!section) return;
      const sample = await loadImageSample(imageSrc);
      if (cancelled) return;
      const sectionRect = section.getBoundingClientRect();
      const next = words.map((_, i) => {
        const el = wordRefs.current[i];
        if (!el) return true;
        const r = el.getBoundingClientRect();
        const x = r.left + r.width / 2 - sectionRect.left;
        const y = r.top + r.height / 2 - sectionRect.top;
        const alpha = coverBottomLeftAlpha(sample, sectionRect.width, sectionRect.height, x, y, flipY);
        return alpha > 128;
      });
      if (!cancelled) setOnShape(next);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, imageSrc, flipY]);

  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className={onShape[i] ? lightClassName : darkClassName}
          >
            {word}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}
