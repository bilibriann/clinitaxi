---
target: src/site/client/App.tsx
total_score: 15
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-07T19-16-46Z
slug: src-site-client-app-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Loading: texto plano sin skeleton. Formulario no da feedback. Error state sin acción de reintento. |
| 2 | Match System / Real World | 3 | Copy español natural. "El de la caja azul" es lenguaje auténtico. Falla menor: Products mezcla servicios con productos. |
| 3 | User Control and Freedom | 2 | Nav funcional. Sin hamburger en mobile. Sin back-to-top. CTA sticky va al formulario, no a teléfono. |
| 4 | Consistency and Standards | 2 | Los 5 section eyebrows usan `text-success` verde — semánticamente incorrecto. Estilos de botón varían sin regla clara. |
| 5 | Error Prevention | 1 | Formulario sin `required`, sin validación, sin hints de formato. Se puede enviar vacío. |
| 6 | Recognition Rather Than Recall | 3 | Nav labels claros. Section headings descriptivos. Íconos mayormente reconocibles. |
| 7 | Flexibility & Efficiency | n/a | Persuade mode |
| 8 | Aesthetic and Minimalist Design | 2 | Placeholder visual en hero es ruido. 5 secciones con tratamiento eyebrow idéntico. TODO de developer visible en UI. |
| 9 | Error Recovery | 1 | `App.tsx` error state: texto plano sin botón de reintento ni número de teléfono fallback. |
| 10 | Help & Documentation | n/a | Persuade mode |
| **Total** | | **15/32** | **Poor** — mejoras significativas requeridas |

---

## Design Specificity Verdict

**LLM assessment**: Genérico corporativo con barniz industria delgado. El diseño usa las palabras de CLINITAXi pero podría transplantarse a cualquier empresa de servicios B2B chilena con un find-replace. El lenguaje visual — navy + amber, grid de íconos + estadísticas, layout dos columnas alternante — es la misma plantilla que las landing pages SaaS han usado desde 2019. Nada en la composición es específico a hardware físico, burocracia de certificación, ni a la experiencia vivida de un taxista chileno.

**Deterministic scan**: 1 finding — `overused-font` (warning) en `src/site/client/index.html` línea 10. La fuente Inter está marcada como sobreutilizada: aparece en tantos sitios que ya no se siente distintiva. El detector y la revisión de diseño coinciden en este punto — la elección tipográfica es intercambiable con cualquier categoría.

---

## Overall Impression

Un primer borrador competente que marca las casillas estructurales mínimas pero nunca se compromete con su materia. La paleta tiene autoridad pero se ejerce con contención cuando se requiere audacia. El problema de conversión más grave — que un taxista en su celular no puede llamar en segundos — no está resuelto. La credencial del Ministerio de Transportes, que es el foso competitivo completo de la empresa, está enterrada en body copy en lugar de tratarse como el hecho titular.

---

## What's Working

1. **Arquitectura de tokens es sólida.** El sistema `--color-primary` / `--color-accent` / `--color-on-accent` en `index.css` está bien estructurado e internamente consistente. El pairing navy + amber tiene autoridad real cuando aparece.

2. **El headline del hero es casi correcto.** "Taxímetros certificados. El de la caja azul." es específico, memorable y usa el lenguaje propio de la marca. El span amber en el tagline funciona visualmente. Es la mejor línea de la página.

3. **La secuencia de flujo es lógicamente correcta.** Hero → TrustBar → Services → Products → Coverage → News → Contact es un arco de persuasión defendible. Las secciones están en el orden correcto aunque los contenidos individuales subentreguen.

---

## Priority Issues

**[P0] Sin tap-to-call en ningún lugar accesible en mobile**
- **Por qué importa**: El taxista en ruta necesita llamar. El número en `Contact.tsx` (línea 25) es un `<span>`, no un `<a href="tel:...">`. El Footer también usa texto plano. El Header lleva a un formulario, no a un número. Para llegar al teléfono hay que scrollear Hero → TrustBar → Services → Products → Coverage → News → Contact. Fatal para conversión mobile.
- **Fix**: `<a href="tel:+56950646818">` en el Header (o sticky CTA) y en el Contact section. Mínimo 44px de touch target.
- **Suggested command**: `/impeccable harden`

**[P0] TrustBar completamente invisible en mobile**
- **Por qué importa**: `TrustBar.tsx` línea 10: `className="bg-surface-dark hidden md:block"`. Las cuatro señales de confianza — aprobación MTT, 25+ años, cobertura nacional, atención personalizada — desaparecen en mobile. Mobile es el contexto primario de los taxistas.
- **Fix**: Eliminar `hidden md:block`. Adaptar el layout para mobile (stack vertical o carrusel de 2 ítems).
- **Suggested command**: `/impeccable adapt`

**[P1] Credencial del Ministerio de Transportes no es el headline visual**
- **Por qué importa**: La posición competitiva completa de CLINITAXi descansa en ser MTT-autorizado. El tratamiento actual: badge amber `font-label text-xs` en hero, ítem en body copy de Services, bullet en Products. Ninguno es una declaración tipográfica primaria. Un competidor podría replicar el layout sin la autorización y se vería idéntico.
- **Fix**: Tratar la credencial MTT como trust badge de primer nivel — inmediatamente debajo del headline, con iconografía oficial o sello visual, no como copy de soporte.
- **Suggested command**: `/impeccable bolder`

**[P1] Columna derecha del Hero es placeholder, no un producto**
- **Por qué importa**: `Hero.tsx` líneas 46–53: rectángulo redondeado vacío con un solo Material Symbol `speed` en `9rem`. La mitad derecha del hero — la zona visual más grande de la página — comunica cero sobre el producto físico (un taxímetro con caja azul). Es un wireframe, no un diseño terminado.
- **Fix**: Fotografía real del taxímetro (el cliente tiene fotos), o ilustración de "la caja azul" con identidad visual fuerte. Esta zona debe vender el producto concreto.
- **Suggested command**: `/impeccable bolder`

**[P2] Mecanismo de urgencia ausente en toda la página**
- **Por qué importa**: La certificación es una obligación legal con consecuencias por incumplimiento. `News.tsx` tiene un artículo sobre equipos que superan 25 años de certificación — el hook de urgencia perfecto — pero el copy lo trata pasivamente. Sin urgencia, el visitante "lo deja para después."
- **Fix**: En el hero o TrustBar: "Si tu taxímetro fue certificado antes de 1999, puede estar fuera de norma. Contáctanos hoy." Copy orientado a consecuencia, no a beneficio.
- **Suggested command**: `/impeccable clarify`

---

## Persona Red Flags

**Jordan (Taxista, primera visita por Google)**
- Llega al hero. Lee headline. Busca señal "oficial". Encuentra badge `font-label text-xs` que dice "25+ años de experiencia" — no "Autorizado por el MTT." La credencial MTT está en el párrafo de `Hero.tsx` línea 29 en `text-white/70` y en muchos móviles queda bajo el fold.
- No puede confirmar en 5 segundos que este es el proveedor autorizado. Sin sello, sin número de registro, sin referencia al logo del gobierno.
- Tiempo para localizar el teléfono: scroll a través de 5 secciones completas. Falla el test de 5 segundos gravemente.

**Casey (Taxista en mobile, una mano)**
- Botón "Contáctanos" del header (`Header.tsx` línea 22–27) scrollea al formulario, no llama. Texto e intent del botón no coinciden para este usuario.
- Número de teléfono es `<span>` no tappable, al final de una página larga.
- TrustBar hidden en mobile: cuatro señales de confianza eliminadas.
- Sin CTA sticky: al scrollear más allá del header no hay punto de contacto persistente.

**Gerente de Flota (evaluación B2B)**
- `Coverage.tsx` muestra 8 nombres de ciudades con ícono `location_on`. Sin mapa. Sin distinción entre regiones atendidas directamente vs. con partner.
- Sin mensajería específica para flotas: no hay mención de precios por volumen, contratos de flota, ni gestión de cuenta dedicada.
- El modelo de datos `SiteViewModel` no tiene `testimonials`, `clients` ni `certificationNumber` — las señales de confianza B2B están estructuralmente ausentes.
- Inconsistencia factual: `regionsCovered: 8` pero la lista incluye Curicó y Linares (misma región Maule). Un gerente evaluador lo notará.

---

## Minor Observations

- `Footer.tsx` tiene `{/* TODO: reemplazar "#" por las URLs reales de cada red social */}` — comentario de developer visible en el árbol JSX que llegará a producción.
- Íconos de redes sociales en `site.service.ts` usan `thumb_up`, `photo_camera`, `alternate_email`, `smart_display` — Material Symbols no incluye logos de marcas. Se necesitan SVGs propios o una librería de íconos de marca.
- `Coverage.tsx` cards tienen `hover:border-primary hover:shadow-md` en elementos no clickeables — falsa affordance.
- `News.tsx` tiene un único artículo hardcoded de "Septiembre 2024" y ocupa sección completa de nav. Se verá abandonado rápidamente.
- `Contact.tsx` formulario no tiene `required`, `name`, ni handler de submit — el botón no hace nada.
- `App.tsx` loading state: texto plano `Cargando…` sin skeleton ni tratamiento de marca — flash blanco antes de cargar data.
- Cinco secciones usan `text-success` (verde) como color de eyebrow — semánticamente significa "aprobado/válido", no "etiqueta de sección".
- `Footer.tsx` borde `border-t-4 border-primary` (navy) sobre fondo `bg-surface-dark` (navy casi igual): el borde es prácticamente invisible.

---

## Questions to Consider

- "¿Qué pasaría si el único CTA arriba del fold fuera un botón de llamada directa, y el formulario fuera la opción secundaria?"
- "¿Cómo se vería la misma página si la certificación MTT fuera tratada con el peso visual de un sello notarial en lugar de un badge de texto?"
- "¿La sección Noticias con un solo artículo estático refuerza o erosiona la credibilidad de la empresa?"
