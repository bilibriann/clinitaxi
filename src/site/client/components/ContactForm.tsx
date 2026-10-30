import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';

// El sitio se publica estático (GitHub Pages), así que no hay backend que reciba el
// formulario: al enviarlo se valida en el navegador y se abre el cliente de correo
// con el mensaje ya armado hacia `email`.

const MOTIVOS = [
  'Cotización de taxímetro',
  'Servicio técnico / reparación',
  'Certificación o recertificación',
  'Distribuidores y regiones',
  'Otro',
] as const;

const LIMITES = { nombre: 80, email: 120, telefono: 20, empresa: 80, mensaje: 1500 };
const MENSAJE_MIN = 20;
const TIEMPO_MINIMO_MS = 4000;
const ESPERA_ENTRE_ENVIOS_MS = 60_000;
const MAX_ENLACES = 2;
const CLAVE_ULTIMO_ENVIO = 'clinitaxi:ultimo-envio-contacto';

const PATRON_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PATRON_TELEFONO = /^(\+?56)?\s?9\s?\d{4}\s?\d{4}$/;
const PATRON_NOMBRE = /^[\p{L}][\p{L}\s'.-]+$/u;
const PATRON_ENLACE = /(https?:\/\/|www\.)\S+/gi;
const PATRON_SPAM = /\b(viagra|casino|crypto|bitcoin|forex|loan|seo services|backlinks?)\b|<[^>]+>|\[url=/i;

type Campos = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  motivo: string;
  mensaje: string;
  acepta: boolean;
};
type Errores = Partial<Record<keyof Campos, string>>;
type Estado = 'editando' | 'enviado' | 'bloqueado';

const VACIO: Campos = {
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  motivo: '',
  mensaje: '',
  acepta: false,
};

function validar(c: Campos): Errores {
  const e: Errores = {};
  const nombre = c.nombre.trim();
  if (nombre.length < 3) e.nombre = 'Ingresa tu nombre (mínimo 3 caracteres).';
  else if (!PATRON_NOMBRE.test(nombre)) e.nombre = 'El nombre solo puede contener letras.';

  if (!PATRON_EMAIL.test(c.email.trim())) e.email = 'Ingresa un correo válido.';

  const telefono = c.telefono.trim();
  if (telefono && !PATRON_TELEFONO.test(telefono)) e.telefono = 'Usa el formato +56 9 1234 5678.';

  if (!c.motivo) e.motivo = 'Selecciona un motivo.';

  const mensaje = c.mensaje.trim();
  if (mensaje.length < MENSAJE_MIN) e.mensaje = `Cuéntanos un poco más (mínimo ${MENSAJE_MIN} caracteres).`;
  else if ((mensaje.match(PATRON_ENLACE) ?? []).length > MAX_ENLACES)
    e.mensaje = `El mensaje no puede tener más de ${MAX_ENLACES} enlaces.`;
  else if (PATRON_SPAM.test(mensaje) || PATRON_SPAM.test(c.empresa))
    e.mensaje = 'El mensaje contiene contenido no permitido.';

  if (!c.acepta) e.acepta = 'Debes aceptar para que podamos responderte.';
  return e;
}

function ultimoEnvio(): number {
  try {
    return Number(localStorage.getItem(CLAVE_ULTIMO_ENVIO)) || 0;
  } catch {
    return 0;
  }
}

const claseInput = (error?: string) =>
  `w-full bg-white border rounded-lg px-4 text-black focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
    error ? 'border-error' : 'border-outline-variant'
  }`;
const claseLabel = 'block text-xs font-bold text-on-surface-variant uppercase tracking-wider';

export default function ContactForm({ email }: { email: string }) {
  const [campos, setCampos] = useState<Campos>(VACIO);
  const [errores, setErrores] = useState<Errores>({});
  const [estado, setEstado] = useState<Estado>('editando');
  const [trampa, setTrampa] = useState('');
  const montadoEn = useRef(Date.now());

  const cambiar =
    (campo: keyof Campos) =>
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const valor =
        ev.target instanceof HTMLInputElement && ev.target.type === 'checkbox'
          ? ev.target.checked
          : ev.target.value;
      setCampos((c) => ({ ...c, [campo]: valor }));
      if (errores[campo]) setErrores((e) => ({ ...e, [campo]: undefined }));
    };

  const enviar = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // Honeypot y envío demasiado rápido: típico de bots. Se finge éxito para no darles pistas.
    if (trampa || Date.now() - montadoEn.current < TIEMPO_MINIMO_MS) {
      setEstado('enviado');
      return;
    }
    if (Date.now() - ultimoEnvio() < ESPERA_ENTRE_ENVIOS_MS) {
      setEstado('bloqueado');
      return;
    }

    const encontrados = validar(campos);
    setErrores(encontrados);
    if (Object.keys(encontrados).length > 0) {
      const primero = Object.keys(encontrados)[0];
      ev.currentTarget.querySelector<HTMLElement>(`[name="${primero}"]`)?.focus();
      return;
    }

    const cuerpo = [
      `Nombre: ${campos.nombre.trim()}`,
      `Correo: ${campos.email.trim()}`,
      campos.telefono.trim() && `Teléfono: ${campos.telefono.trim()}`,
      campos.empresa.trim() && `Empresa / línea: ${campos.empresa.trim()}`,
      '',
      campos.mensaje.trim(),
    ]
      .filter((linea) => linea !== '')
      .join('\n');
    const asunto = `[Web] ${campos.motivo} - ${campos.nombre.trim()}`;

    try {
      localStorage.setItem(CLAVE_ULTIMO_ENVIO, String(Date.now()));
    } catch {
      /* sin almacenamiento: se omite el límite de reenvío */
    }
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEstado('enviado');
  };

  if (estado !== 'editando') {
    return (
      <div className="space-y-4 text-center py-10" role="status">
        <span className="material-symbols-outlined text-5xl text-accent">
          {estado === 'enviado' ? 'mark_email_read' : 'hourglass_top'}
        </span>
        <h3 className="text-2xl font-bold text-black">
          {estado === 'enviado' ? '¡Gracias por escribirnos!' : 'Espera un momento'}
        </h3>
        <p className="text-on-surface-variant">
          {estado === 'enviado'
            ? `Se abrió tu aplicación de correo con el mensaje listo. Si no se abrió, escríbenos directamente a ${email}.`
            : 'Ya enviaste un mensaje hace poco. Intenta nuevamente en un minuto.'}
        </p>
        <button
          type="button"
          onClick={() => {
            setCampos(VACIO);
            setEstado('editando');
            montadoEn.current = Date.now();
          }}
          className="font-bold text-accent hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const error = (campo: keyof Campos) =>
    errores[campo] && (
      <p id={`error-${campo}`} className="text-sm text-error">
        {errores[campo]}
      </p>
    );
  const aria = (campo: keyof Campos) => ({
    'aria-invalid': Boolean(errores[campo]),
    'aria-describedby': errores[campo] ? `error-${campo}` : undefined,
  });

  return (
    <form className="space-y-6" onSubmit={enviar} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contacto-nombre" className={claseLabel}>
            Nombre *
          </label>
          <input
            id="contacto-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            maxLength={LIMITES.nombre}
            placeholder="Nombre completo"
            value={campos.nombre}
            onChange={cambiar('nombre')}
            className={`${claseInput(errores.nombre)} h-12`}
            {...aria('nombre')}
          />
          {error('nombre')}
        </div>
        <div className="space-y-2">
          <label htmlFor="contacto-email" className={claseLabel}>
            Email *
          </label>
          <input
            id="contacto-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={LIMITES.email}
            placeholder="correo@ejemplo.com"
            value={campos.email}
            onChange={cambiar('email')}
            className={`${claseInput(errores.email)} h-12`}
            {...aria('email')}
          />
          {error('email')}
        </div>
        <div className="space-y-2">
          <label htmlFor="contacto-telefono" className={claseLabel}>
            Teléfono
          </label>
          <input
            id="contacto-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={LIMITES.telefono}
            placeholder="+56 9 1234 5678"
            value={campos.telefono}
            onChange={cambiar('telefono')}
            className={`${claseInput(errores.telefono)} h-12`}
            {...aria('telefono')}
          />
          {error('telefono')}
        </div>
        <div className="space-y-2">
          <label htmlFor="contacto-empresa" className={claseLabel}>
            Empresa / línea de taxi
          </label>
          <input
            id="contacto-empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            maxLength={LIMITES.empresa}
            placeholder="Opcional"
            value={campos.empresa}
            onChange={cambiar('empresa')}
            className={`${claseInput()} h-12`}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-motivo" className={claseLabel}>
          Motivo *
        </label>
        <select
          id="contacto-motivo"
          name="motivo"
          value={campos.motivo}
          onChange={cambiar('motivo')}
          className={`${claseInput(errores.motivo)} h-12`}
          {...aria('motivo')}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {MOTIVOS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        {error('motivo')}
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-mensaje" className={claseLabel}>
          Mensaje *
        </label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          rows={5}
          maxLength={LIMITES.mensaje}
          placeholder="¿En qué podemos ayudarte?"
          value={campos.mensaje}
          onChange={cambiar('mensaje')}
          className={`${claseInput(errores.mensaje)} py-3`}
          {...aria('mensaje')}
        ></textarea>
        <div className="flex justify-between gap-4">
          {error('mensaje') ?? <span />}
          <span className="text-xs text-on-surface-variant shrink-0">
            {campos.mensaje.length}/{LIMITES.mensaje}
          </span>
        </div>
      </div>

      {/* Honeypot: oculto para personas, los bots suelen rellenarlo. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="contacto-sitio">No completar este campo</label>
        <input
          id="contacto-sitio"
          name="sitio_web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={trampa}
          onChange={(ev) => setTrampa(ev.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-black">
          <input
            name="acepta"
            type="checkbox"
            checked={campos.acepta}
            onChange={cambiar('acepta')}
            className="mt-1 h-4 w-4 accent-primary"
            {...aria('acepta')}
          />
          Acepto que CLINITAXI use estos datos solo para responder mi consulta.
        </label>
        {error('acepta')}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-primary-container hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:translate-y-0 transition-all duration-200"
      >
        Enviar mensaje
      </button>
      <p className="text-xs text-on-surface-variant text-center">* Campos obligatorios</p>
    </form>
  );
}
