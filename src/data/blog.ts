export const categories = [
  "Google Ads",
  "Google Analytics",
  "LinkedIn Ads",
  "Marketing Digital",
  "Meta Ads",
  "Posicionamiento SEO",
  "TikTok Ads"
];

export const mainPosts = [
  {
    image: "/imgs/placeholder.png",
    category: "Posicionamiento SEO",
    title: "10 estrategias para liderar las SERPs en 2026",
    excerpt: "Descubre cómo usar inteligencia artificial y las nuevas métricas de Google para dominar los resultados de búsqueda este año.",
    date: "14 Abr 2026",
    slug: "estrategias-liderar-serps-2026"
  },
  {
    image: "/imgs/placeholder.png",
    category: "Meta Ads",
    title: "Maximiza tu ROI con la segmentación predictiva",
    excerpt: "Las nuevas herramientas de Meta Ads permiten predecir el comportamiento del usuario. Aprende a configurarlas correctamente.",
    date: "12 Mar 2026",
    slug: "maximiza-roi-segmentacion-predictiva"
  },
  {
    image: "/imgs/placeholder.png",
    category: "Google Analytics",
    title: "Métricas ocultas que definen tu éxito de e-commerce",
    excerpt: "Ir más allá de la tasa de conversión básica te permitirá entender realmente por qué tus clientes están comprando (o no).",
    date: "28 Feb 2026",
    slug: "metricas-ocultas-ecommerce"
  },
  {
    image: "/imgs/placeholder.png",
    category: "LinkedIn Ads",
    title: "Generación de leads B2B: calidad vs cantidad",
    excerpt: "Estrategias probadas para atraer prospectos que realmente estén dispuestos a invertir en servicios premium de tu empresa.",
    date: "15 Feb 2026",
    slug: "generacion-leads-b2b"
  },
  {
    image: "/imgs/placeholder.png",
    category: "Marketing Digital",
    title: "Tendencias de automatización de marketing",
    excerpt: "Las plataformas que están revolucionando cómo las agencias gestionan grandes volúmenes de campañas publicitarias.",
    date: "02 Feb 2026",
    slug: "tendencias-automatizacion-marketing"
  },
  {
    image: "/imgs/placeholder.png",
    category: "TikTok Ads",
    title: "La revolución del video corto en publicidad de nicho",
    excerpt: "Si pensabas que TikTok era solo para jóvenes y bailes, te estás perdiendo un mercado publicitario con un CPM increíblemente bajo.",
    date: "22 Ene 2026",
    slug: "revolucion-video-corto-publicidad"
  }
];

export const sidebarPosts = mainPosts.slice(0, 4);

export const singlePostMock = {
  title: "Ejemplo de post: 10 estrategias para liderar las SERPs",
  category: "Posicionamiento SEO",
  date: "14 Abr 2026",
  image: "/imgs/placeholder.png",
  author: {
    name: "María Fernández",
    role: "SEO Manager",
    avatar: "/imgs/placeholder.png"
  }
};
