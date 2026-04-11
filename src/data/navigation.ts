export interface ServiceItem {
  label: string;
  icon: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  children?: ServiceItem[];
}

export function getNavItems(BASE: string): NavItem[] {
  return [
    { label: "Inicio", href: BASE },
    {
      label: "Servicios",
      dropdown: true,
      children: [
        { label: "Google Ads",    icon: `${BASE}imgs/iconos/ico-google-ads.png`,    href: `${BASE}servicio-google-ads`     },
        { label: "Meta Ads",      icon: `${BASE}imgs/iconos/ico-meta.png`,          href: `${BASE}servicio-meta-ads`       },
        { label: "LinkedIn Ads",  icon: `${BASE}imgs/iconos/ico-linkedin.png`,      href: `${BASE}servicio-linkedin-ads`   },
        { label: "Tiktok Ads",    icon: `${BASE}imgs/iconos/ico-tiktok.png`,        href: `${BASE}servicio-tiktok-ads`     },
        { label: "Content SEO",   icon: `${BASE}imgs/iconos/ico-seo-content.png`,   href: `${BASE}servicio-content-seo`    },
        { label: "Technical SEO", icon: `${BASE}imgs/iconos/ico-seo-technical.png`, href: `${BASE}servicio-technical-seo`  },
        { label: "Local SEO",     icon: `${BASE}imgs/iconos/ico-seo-local.png`,     href: `${BASE}servicio-local-seo`      },
        { label: "Asesoramiento", icon: `${BASE}imgs/iconos/ico-asesoramiento.png`, href: `${BASE}servicio-asesoramiento`  },
      ],
    },
    { label: "Agencia",  href: `${BASE}agencia`  },
    { label: "Clientes", href: `${BASE}clientes` },
    { label: "Contacto", href: `${BASE}contacto` },
  ];
}
