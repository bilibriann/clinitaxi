import { Injectable } from '@nestjs/common';

export interface NavLink {
  label: string;
  href: string;
}

export interface Region {
  name: string;
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
    mapEmbedSrc: string;
  };
  socialLinks: SocialLink[];
}

@Injectable()
export class SiteService {
  getHomeViewModel(): SiteViewModel {
    return {
      title:
        'CLINITAXi | Taxímetros Certificados en Chile — El de la Caja Azul',
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
