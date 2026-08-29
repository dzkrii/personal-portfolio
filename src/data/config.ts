import type { LocalizedText } from "./types";

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
    instagram: "https://www.instagram.com/dzkrii_12",
    telegram: "https://t.me/dzkkrii",
    youtube: "https://www.youtube.com/@kyuradev",
    tiktok: "https://www.tiktok.com/@kyuradev",
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
    resume: {
      src: null as string | null,
      recommended: "PDF, maksimal 5 MB",
    },
  },
} as const;

export const routeSegments = {
  home: { id: "", en: "" },
  about: { id: "tentang", en: "about" },
  certificates: { id: "sertifikat", en: "certificates" },
  projects: { id: "proyek", en: "projects" },
  cv: { id: "cv", en: "cv" },
  contact: { id: "kontak", en: "contact" },
} as const;

export type PageKey = keyof typeof routeSegments;

export const navigation: Array<{ key: PageKey; label: LocalizedText }> = [
  { key: "home", label: { id: "Beranda", en: "Home" } },
  { key: "about", label: { id: "Tentang", en: "About" } },
  { key: "certificates", label: { id: "Sertifikat", en: "Certificates" } },
  { key: "projects", label: { id: "Proyek", en: "Projects" } },
  { key: "cv", label: { id: "CV", en: "CV" } },
  { key: "contact", label: { id: "Kontak", en: "Contact" } },
];

export const pageMeta: Record<
  PageKey | "project" | "notFound",
  { title: LocalizedText; description: LocalizedText }
> = {
  home: {
    title: {
      id: "Fatahul Ahmad Dzikri | Creative Developer",
      en: "Fatahul Ahmad Dzikri | Creative Developer",
    },
    description: {
      id: "Portfolio creative developer yang membangun pengalaman web jelas dan berkarakter.",
      en: "Creative developer portfolio building clear and distinctive web experiences.",
    },
  },
  projects: {
    title: {
      id: "Proyek | Fatahul Ahmad Dzikri",
      en: "Projects | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Pilihan proyek web dan sistem digital Fatahul Ahmad Dzikri.",
      en: "Selected web projects and digital systems by Fatahul Ahmad Dzikri.",
    },
  },
  certificates: {
    title: {
      id: "Sertifikat | Fatahul Ahmad Dzikri",
      en: "Certificates | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Sertifikat dan pembelajaran terpilih Fatahul Ahmad Dzikri.",
      en: "Selected certificates and learning milestones by Fatahul Ahmad Dzikri.",
    },
  },
  project: {
    title: {
      id: "Detail Proyek | Fatahul Ahmad Dzikri",
      en: "Project Detail | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Konteks, kontribusi, solusi, dan hasil proyek terpilih.",
      en: "Context, contribution, solution, and outcomes from a selected project.",
    },
  },
  about: {
    title: {
      id: "Tentang | Fatahul Ahmad Dzikri",
      en: "About | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Deskripsi singkat, pengalaman, dan teknologi yang digunakan Fatahul Ahmad Dzikri.",
      en: "A short introduction, experience, and technologies used by Fatahul Ahmad Dzikri.",
    },
  },
  cv: {
    title: {
      id: "Curriculum Vitae | Fatahul Ahmad Dzikri",
      en: "Curriculum Vitae | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Curriculum vitae Fatahul Ahmad Dzikri.",
      en: "Curriculum vitae of Fatahul Ahmad Dzikri.",
    },
  },
  contact: {
    title: {
      id: "Kontak | Fatahul Ahmad Dzikri",
      en: "Contact | Fatahul Ahmad Dzikri",
    },
    description: {
      id: "Hubungi Fatahul Ahmad Dzikri untuk membicarakan proyek digital.",
      en: "Contact Fatahul Ahmad Dzikri to discuss a digital project.",
    },
  },
  notFound: {
    title: { id: "404 | Halaman Tidak Ditemukan", en: "404 | Page Not Found" },
    description: {
      id: "Halaman yang diminta tidak tersedia.",
      en: "The requested page is unavailable.",
    },
  },
};
