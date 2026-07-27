export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

type LocalizedText = Record<Locale, string>;

export const siteConfig = {
  name: "Fatahul Ahmad Dzikri",
  role: {
    id: "Creative Developer",
    en: "Creative Developer",
  },
  email: "fatahulahmaddzikri@gmail.com",
  social: {
    github: "https://github.com/dzkrii",
    linkedin: "https://www.linkedin.com/in/fatahul-ahmad-dzikri/",
  },
  media: {
    portrait: {
      src: null,
      aspectRatio: "4 / 5",
      recommended: "1200 x 1500 px, WebP atau AVIF",
    },
    project: {
      src: null,
      aspectRatio: "16 / 10",
      recommended: "1600 x 1000 px, WebP atau AVIF",
    },
  },
} as const;

export const routeSegments = {
  home: { id: "", en: "" },
  projects: { id: "projects", en: "projects" },
  about: { id: "about", en: "about" },
  contact: { id: "contact", en: "contact" },
} as const;

export type PageKey = keyof typeof routeSegments;

export const navigation: Array<{ key: PageKey; label: LocalizedText }> = [
  { key: "home", label: { id: "Beranda", en: "Home" } },
  { key: "projects", label: { id: "Proyek", en: "Projects" } },
  { key: "about", label: { id: "Tentang", en: "About" } },
  { key: "contact", label: { id: "Kontak", en: "Contact" } },
];

export const profile = {
  intro: {
    id: "Saya membangun produk web dan mobile yang jelas, terstruktur, dan nyaman digunakan.",
    en: "I build web and mobile products that are clear, structured, and easy to use.",
  },
  bio: {
    id: "Latar belakang administrasi membantu saya melihat teknologi sebagai alat untuk merapikan proses kerja nyata. Saat ini saya mengembangkan solusi digital di Universitas Battuta.",
    en: "My background in administration taught me to see technology as a practical tool for improving real workflows. I currently build digital solutions at Universitas Battuta.",
  },
  principles: [
    {
      title: { id: "Pahami sebelum membangun", en: "Understand before building" },
      description: {
        id: "Keputusan yang baik dimulai dari pemahaman pengguna, tujuan, dan proses.",
        en: "Good decisions begin with understanding the users, goals, and workflows.",
      },
    },
    {
      title: { id: "Jelas lebih penting", en: "Clarity matters more" },
      description: {
        id: "Antarmuka dan kode harus mudah dipahami, dirawat, dan dikembangkan.",
        en: "Interfaces and code should be easy to understand, maintain, and extend.",
      },
    },
  ],
} as const;

export const experiences = [
  {
    company: "Universitas Battuta",
    role: { id: "Software Developer", en: "Software Developer" },
    period: { id: "September 2024 - sekarang", en: "September 2024 - present" },
    summary: {
      id: "Mengembangkan dan memelihara solusi perangkat lunak untuk kebutuhan digital universitas.",
      en: "Develops and maintains software solutions for the university's digital needs.",
    },
  },
  {
    company: "SMK Swasta Mustafa",
    role: { id: "Tata Usaha", en: "Administration Staff" },
    period: { id: "Juni 2023 - Juli 2024", en: "June 2023 - July 2024" },
    summary: {
      id: "Menangani administrasi sekolah dan mendukung proses operasional harian.",
      en: "Handled school administration and supported daily operations.",
    },
  },
] as const;

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Laravel", "PHP", "REST API"],
  Mobile: ["Flutter", "Dart"],
  Data: ["MySQL", "PostgreSQL"],
  Design: ["Figma", "Responsive design", "Prototyping"],
} as const;

export const projects = [
  {
    slug: "universitas-battuta-profile",
    title: { id: "Website Profil Universitas Battuta", en: "Universitas Battuta Profile Website" },
    category: { id: "Profil institusi", en: "Institution profile" },
    summary: {
      id: "Pusat informasi publik dengan hierarki konten yang jelas dan tampilan responsif.",
      en: "A public information hub with clear content hierarchy and responsive layouts.",
    },
  },
  {
    slug: "universitas-battuta-academic-system",
    title: { id: "Sistem Informasi Akademik", en: "Academic Information System" },
    category: { id: "Sistem informasi", en: "Information system" },
    summary: {
      id: "Sistem terpusat untuk membantu pengelolaan proses akademik universitas.",
      en: "A centralized system supporting the university's academic workflows.",
    },
  },
  {
    slug: "pro-asta-profile",
    title: { id: "Website Profil Pro.Asta", en: "Pro.Asta Profile Website" },
    category: { id: "Profil perusahaan", en: "Company profile" },
    summary: {
      id: "Website profil yang memprioritaskan kejelasan informasi dan konsistensi visual.",
      en: "A profile website prioritizing information clarity and visual consistency.",
    },
  },
] as const;

export const messages = {
  id: {
    skip: "Lewati ke konten",
    language: "Ganti bahasa",
    menu: "Buka navigasi",
    closeMenu: "Tutup navigasi",
    placeholder: "Konten final akan dirangkai pada roadmap halaman.",
    imagePlaceholder: "Visual sedang disiapkan",
    viewProject: "Buka proyek",
    backToProjects: "Kembali ke proyek",
    notFoundTitle: "Halaman tidak ditemukan",
    notFoundBody: "Alamat ini tidak tersedia. Gunakan navigasi untuk kembali ke halaman yang benar.",
  },
  en: {
    skip: "Skip to content",
    language: "Switch language",
    menu: "Open navigation",
    closeMenu: "Close navigation",
    placeholder: "Final content will be composed during the page roadmap.",
    imagePlaceholder: "Visual in preparation",
    viewProject: "Open project",
    backToProjects: "Back to projects",
    notFoundTitle: "Page not found",
    notFoundBody: "This address is unavailable. Use the navigation to return to the right page.",
  },
} as const;

export const pageMeta: Record<PageKey | "project" | "notFound", { title: LocalizedText; description: LocalizedText }> = {
  home: {
    title: { id: "Fatahul Ahmad Dzikri | Creative Developer", en: "Fatahul Ahmad Dzikri | Creative Developer" },
    description: { id: "Portfolio creative developer yang membangun pengalaman web jelas dan berkarakter.", en: "Creative developer portfolio building clear and distinctive web experiences." },
  },
  projects: {
    title: { id: "Proyek | Fatahul Ahmad Dzikri", en: "Projects | Fatahul Ahmad Dzikri" },
    description: { id: "Pilihan proyek web dan sistem digital Fatahul Ahmad Dzikri.", en: "Selected web projects and digital systems by Fatahul Ahmad Dzikri." },
  },
  project: {
    title: { id: "Detail Proyek | Fatahul Ahmad Dzikri", en: "Project Detail | Fatahul Ahmad Dzikri" },
    description: { id: "Konteks, kontribusi, solusi, dan hasil proyek terpilih.", en: "Context, contribution, solution, and outcomes from a selected project." },
  },
  about: {
    title: { id: "Tentang | Fatahul Ahmad Dzikri", en: "About | Fatahul Ahmad Dzikri" },
    description: { id: "Profil, pengalaman, prinsip kerja, dan keahlian Fatahul Ahmad Dzikri.", en: "Profile, experience, working principles, and skills of Fatahul Ahmad Dzikri." },
  },
  contact: {
    title: { id: "Kontak | Fatahul Ahmad Dzikri", en: "Contact | Fatahul Ahmad Dzikri" },
    description: { id: "Hubungi Fatahul Ahmad Dzikri untuk membicarakan proyek digital.", en: "Contact Fatahul Ahmad Dzikri to discuss a digital project." },
  },
  notFound: {
    title: { id: "404 | Halaman Tidak Ditemukan", en: "404 | Page Not Found" },
    description: { id: "Halaman yang diminta tidak tersedia.", en: "The requested page is unavailable." },
  },
};
