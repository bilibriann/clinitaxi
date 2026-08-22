import { Injectable } from '@nestjs/common';

export interface NavLink {
  label: string;
  href: string;
}

export interface Region {
  name: string;
  /** Coordenadas reales de la ciudad; si faltan, la región no se dibuja en el mapa. */
  lat?: number;
  lng?: number;
  contactName?: string;
  phone?: string;
  phoneHref?: string;
  address?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SiteViewModel {
  title: string;
  description: string;
  nav: NavLink[];
  stats: {
    yearsOfExperience: string;
    regionsCovered: number;
  };
  regions: Region[];
  contact: {
    phone: string;
    hours: string;
    address: string;
    email: string;
    website: string;
    mapEmbedSrc: string;
  };
  socialLinks: SocialLink[];
}

@Injectable()
export class SiteService {
  getHomeViewModel(): SiteViewModel {
    return {
      title:
        'CLINITAXI | Taxímetros Certificados en Chile',
      description:
        'CLINITAXI: taxímetros certificados y no adulterables, aprobados por el Ministerio de Transportes de Chile. Más de 25 años de experiencia y cobertura nacional.',
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
        regionsCovered: 9,
      },
      regions: [
        {
          name: 'La Serena',
          contactName: 'Miguel González León',
          phone: '+56 9 9180 4575',
          phoneHref: '+56991804575',
        },
        {
          name: 'Valparaíso',
          contactName: 'Ricardo Peña',
          phone: '+56 9 7495 7618',
          phoneHref: '+56974957618',
          address: 'Chacabuco #2158',
        },
        {
          name: 'Santiago',
          contactName: 'Casa matriz',
          phone: '+56 9 5064 6818',
          phoneHref: '+56950646818',
          address: 'Vargas Fontecilla 4399, Quinta Normal',
        },
        {
          name: 'Curicó',
          contactName: 'Adrián Jofre Gamboa',
          phone: '+56 9 5718 4712',
          phoneHref: '+56957184712',
        },
        {
          name: 'Linares',
          contactName: 'Pedro Guzmán',
          phone: '+56 9 7875 0356',
          phoneHref: '+56978750356',
        },
        {
          name: 'Concepción',
          contactName: 'Natalia Pérez',
          phone: '+56 9 9789 2904',
          phoneHref: '+56997892904',
        },
        {
          name: 'Temuco',
          contactName: 'Sergio Troncoso',
          phone: '+56 9 7497 3820',
          phoneHref: '+56974973820',
        },
        {
          name: 'Valdivia',
          contactName: 'Joel Cartes',
          phone: '+56 9 7454 4005',
          phoneHref: '+56974544005',
        },
        {
          name: 'Punta Arenas',
          contactName: 'Juvenal Vásquez',
          phone: '+56 9 9885 1048',
          phoneHref: '+56998851048',
        },
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
  }
}
