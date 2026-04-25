export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  { name: "Fernando", role: "CHIEF TECHNOLOGY OFFICER", image: "fer.webp", linkedinUrl: "https://www.linkedin.com/in/fernandoengelmann/" },
  { name: "Pablo", role: "CHIEF CREATIVE OFFICER", image: "pabli.webp", linkedinUrl: "https://www.linkedin.com/in/pabloferraro/" },
  { name: "Valeria", role: "CHIEF MARKETING OFFICER", image: "vale.webp", linkedinUrl: "https://www.linkedin.com/in/valeria-e-9698461a/" },
  { name: "Santiago", role: "CHIEF OPERATING OFFICER", image: "santiago.webp", linkedinUrl: "https://www.linkedin.com/in/santiago-d-b9131743/" },
  { name: "Yanina", role: "SEO Expert & Designer", image: "yani.webp" },
  { name: "Magdalena", role: "Digital Manager", image: "maggie.webp" },
  { name: "Exequiel", role: "SEO Expert & Web Master", image: "exe.webp" },
  { name: "Martín", role: "Customer Specialist", image: "martin.webp" },
  { name: "Alan", role: "Digital Manager", image: "alan.webp" },
  { name: "Andrés", role: "Customer Specialist", image: "andres.webp" },
  { name: "Rocio", role: "Business Development Executive", image: "ro.webp" },
  { name: "Nadia", role: "Digital Manager", image: "nadia.webp" },
  { name: "Eliana", role: "Digital Manager", image: "eliana.webp" },
  { name: "Gonzalo", role: "Creative Developer", image: "gon.webp" },
  { name: "Ivan", role: "Digital Manager", image: "ivan.webp" },
  // { name: "MIA", role: "MediaBros IA", image: "mia.webp" },
];
