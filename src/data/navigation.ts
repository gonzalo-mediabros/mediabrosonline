export interface ServiceItem {
  label: string;
  icon: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  cta?: boolean;
  children?: ServiceItem[];
}

export function getNavItems(BASE: string): NavItem[] {
  return [
    { label: "Inicio", href: BASE },
    {
      label: "Servicios",
      href: `${BASE}servicios`,
      dropdown: true,
      children: [
        { label: "Google Ads",      icon: `${BASE}imgs/icons/ico-google-ads.svg`,    href: `${BASE}servicios/google-ads`      },
        { label: "Meta Ads",        icon: `${BASE}imgs/icons/ico-meta-ads.svg`,           href: `${BASE}servicios/meta-ads`        },
        { label: "LinkedIn Ads",    icon: `${BASE}imgs/icons/ico-linkedin.svg`,       href: `${BASE}servicios/linkedin-ads`    },
        { label: "Tiktok Ads",      icon: `${BASE}imgs/icons/ico-tiktok.svg`,         href: `${BASE}servicios/tiktok-ads`      },
        { label: "Bing Ads",        icon: `${BASE}imgs/icons/ico-bing-ads.svg`,       href: `${BASE}servicios/bing-ads`        },
        { label: "Content SEO",     icon: `${BASE}imgs/icons/ico-seo-content.svg`,    href: `${BASE}servicios/content-seo`     },
        { label: "Technical SEO",   icon: `${BASE}imgs/icons/ico-seo-technical.svg`,  href: `${BASE}servicios/technical-seo`   },
        { label: "Local SEO",       icon: `${BASE}imgs/icons/ico-seo-local.svg`,      href: `${BASE}servicios/local-seo`       },
        { label: "Google Analytics",icon: `${BASE}imgs/icons/ico-analytics.svg`,      href: `${BASE}servicios/google-analytics`},
        { label: "Asesoramiento",   icon: `${BASE}imgs/icons/ico-asesoramiento.svg`,  href: `${BASE}servicios/asesoramiento`   },
      ],
    },
    { label: "Agencia",  href: `${BASE}agencia`  },
    { label: "Clientes", href: `${BASE}clientes` },
    { label: "Contacto", href: `${BASE}contacto`, cta: true },
  ];
}
