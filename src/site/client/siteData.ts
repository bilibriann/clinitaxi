import type { SiteViewModel } from '../site.service';

export const siteData: SiteViewModel = {
  title: 'CLINITAXi | Taxímetros Certificados en Chile — El de la Caja Azul',
  description:
    'CLINITAXi: taxímetros certificados y no adulterables, aprobados por el Ministerio de Transportes de Chile. Más de 25 años de experiencia y cobertura nacional.',
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Contacto', href: '#contacto' },
  ],
  stats: {
    yearsOfExperience: '25+',
    regionsCovered: 8,
  },
  regions: [
    { name: 'La Serena' },
    { name: 'Valparaíso' },
    { name: 'Santiago' },
    { name: 'Curicó' },
    { name: 'Concepción' },
    { name: 'Linares' },
    { name: 'Temuco' },
    { name: 'Punta Arenas' },
  ],
  contact: {
    phone: '+569 5064 6818',
    hours: 'Lun a Vie, 9:30 - 16:00 hrs (horario continuado)',
    address: 'Vargas Fontecilla 4399, Quinta Normal, Chile',
    email: 'info@clinitaxi.cl',
    website: 'www.clinitaxi.cl',
    mapEmbedSrc:
      'https://www.google.com/maps?q=Vargas+Fontecilla+4399,+Quinta+Normal,+Chile&output=embed',
  },
  socialLinks: [
    { label: 'Facebook', href: '#', icon: 'thumb_up' },
    { label: 'Instagram', href: '#', icon: 'photo_camera' },
    { label: 'Twitter', href: '#', icon: 'alternate_email' },
    { label: 'YouTube', href: '#', icon: 'smart_display' },
  ],
};
