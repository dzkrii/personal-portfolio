export const profile = {
  intro: {
    id: "Saya membangun produk web dan mobile yang terstruktur, jelas, dan nyaman digunakan untuk mempermudah alur kerja nyata.",
    en: "I build clear, structured, and user-friendly web and mobile products to improve real workflows.",
  },
  about: {
    id: [
      "Saya adalah Software Developer dan Creative Developer di Universitas Battuta sekaligus mahasiswa Informatika yang fokus merancang dan membangun sistem digital terstruktur dengan arsitektur bersih.",
      "Berpengalaman mengembangkan aplikasi web skala produksi menggunakan Next.js, React, TypeScript, dan Laravel, serta aplikasi mobile berbasis Flutter yang mengedepankan performa tinggi dan pengalaman pengguna yang intuitif.",
    ],
    en: [
      "I am a Software Developer and Creative Developer at Universitas Battuta and an Informatics student focused on designing and building structured digital systems with clean architecture.",
      "Experienced in engineering production-grade web applications using Next.js, React, TypeScript, and Laravel, as well as mobile development with Flutter—prioritizing high performance, maintainability, and intuitive user experiences.",
    ],
  },
  bio: {
    id: "Latar belakang administrasi membantu saya melihat teknologi sebagai alat untuk merapikan proses kerja nyata. Saat ini saya mengembangkan solusi digital di Universitas Battuta.",
    en: "My background in administration taught me to see technology as a practical tool for improving real workflows. I currently build digital solutions at Universitas Battuta.",
  },
  principles: [
    {
      title: {
        id: "Pahami sebelum membangun",
        en: "Understand before building",
      },
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
    {
      title: {
        id: "Desain dan development menyatu",
        en: "Design and development work together",
      },
      description: {
        id: "Tampilan yang baik perlu didukung struktur, performa, dan perilaku yang sama baiknya.",
        en: "A strong interface needs equally strong structure, performance, and behavior behind it.",
      },
    },
    {
      title: { id: "Bangun untuk penggunaan nyata", en: "Build for real use" },
      description: {
        id: "Solusi dinilai dari kemampuannya membantu pekerjaan sehari-hari, bukan hanya tampilannya.",
        en: "A solution is judged by how well it supports everyday work, not only by how it looks.",
      },
    },
    {
      title: { id: "Uji dan perbaiki", en: "Test and improve" },
      description: {
        id: "Umpan balik dan perubahan kebutuhan menjadi bagian alami dari proses.",
        en: "Feedback and changing requirements are a natural part of the process.",
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

export const technologies = [
  { name: "TypeScript", mark: "TS", slug: "typescript" },
  { name: "JavaScript", mark: "JS", slug: "javascript" },
  { name: "React", mark: "R", slug: "react" },
  { name: "Next.js", mark: "N", slug: "nextdotjs" },
  { name: "Tailwind CSS", mark: "TW", slug: "tailwindcss" },
  { name: "PHP", mark: "PHP", slug: "php" },
  { name: "Laravel", mark: "L", slug: "laravel" },
  { name: "NestJS", mark: "Nest", slug: "nestjs" },
  { name: "Express", mark: "ex", slug: "express" },
  { name: "Flutter", mark: "F", slug: "flutter" },
  { name: "Dart", mark: "D", slug: "dart" },
  { name: "PostgreSQL", mark: "PG", slug: "postgresql" },
  { name: "MySQL", mark: "SQL", slug: "mysql" },
  { name: "Git", mark: "Git", slug: "git" },
  { name: "Figma", mark: "F", slug: "figma" },
] as const;
