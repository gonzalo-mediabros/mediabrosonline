export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  { name: "Fernando Engelmann", role: "CTO", image: "fer.webp", linkedinUrl: "https://www.linkedin.com/in/fernandoengelmann/" },
  { name: "Pablo Ferraro", role: "CCO", image: "pabli.webp", linkedinUrl: "https://www.linkedin.com/in/pabloferraro/" },
  { name: "Valeria", role: "CMO", image: "vale.webp", linkedinUrl: "https://www.linkedin.com/in/valeria-e-9698461a/" },
  { name: "Santiago", role: "COO", image: "santiago.webp", linkedinUrl: "https://www.linkedin.com/in/santiago-d-b9131743/" },
  { name: "Yanina", role: "SEO Expert & Designer", image: "yani.webp" },
  { name: "Magdalena", role: "Digital Manager", image: "maggie.webp" },
  { name: "Exequiel", role: "SEO Expert & Web Master", image: "exe.webp" },
  { name: "Martín", role: "Customer Specialist", image: "martin.webp" },
  { name: "Alan", role: "Digital Manager", image: "alan.webp" },
  { name: "Andrés", role: "Customer Specialist", image: "andres.webp" },
  { name: "Rocio", role: "Business Development Executive", image: "ro.webp" },
  { name: "Nadia Grabowski", role: "Digital Manager", image: "nadia.webp" },
  { name: "Eliana Fiochetti", role: "Digital Manager", image: "eliana.webp" },
  { name: "Gonzalo Williams", role: "Creative Developer", image: "gon.webp" },
  { name: "Ivan", role: "Digital Manager", image: "ivan.webp" },
  { name: "MIA", role: "MediaBros IA", image: "mia.webp" },
];
