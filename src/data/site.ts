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

export type CertificateCategory = "achievement" | "competence" | "participation";

export const certificateCategories: Array<{
  key: "all" | CertificateCategory;
  label: LocalizedText;
}> = [
  { key: "all", label: { id: "Semua", en: "All" } },
  { key: "achievement", label: { id: "Prestasi", en: "Achievement" } },
  { key: "competence", label: { id: "Kompetensi", en: "Competence" } },
  { key: "participation", label: { id: "Partisipasi", en: "Participation" } },
];

export type Certificate = {
  id: string;
  category: CertificateCategory;
  title: LocalizedText;
  issuer: string;
  issuedAt: LocalizedText;
  credentialUrl?: string;
  image: string;
  description?: LocalizedText;
};

export const certificates: Certificate[] = [
  // --- PRESTASI / ACHIEVEMENT ---
  {
    id: "comftik-web-design-2025",
    category: "achievement",
    title: {
      id: "Juara 2 Desain Web COMFTIK 2025",
      en: "2nd Place Web Design Competition COMFTIK 2025",
    },
    issuer: "Universitas Satya Terra Bhinneka",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/achievement/juara-2-desain-web-comftik-2025.webp",
    description: {
      id: "Penghargaan Juara 2 dalam kompetisi Desain Web pada ajang COMFTIK 2025.",
      en: "Awarded 2nd Place in the Web Design Competition at COMFTIK 2025.",
    },
  },
  {
    id: "corisindo-mobile-apps-2024",
    category: "achievement",
    title: {
      id: "Juara 3 Lomba Mobile Apps CORISINDO",
      en: "3rd Place Mobile Apps Competition CORISINDO",
    },
    issuer: "Universitas Teknologi Bandung",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/achievement/juara-3-mobile-apps-corisindo.webp",
    description: {
      id: "Penghargaan Juara 3 dalam kompetisi pengembangan aplikasi mobile tingkat nasional CORISINDO.",
      en: "Awarded 3rd Place in the national mobile application development competition by CORISINDO.",
    },
  },
  {
    id: "pimnas-peserta-pkm-pi-2025",
    category: "achievement",
    title: {
      id: "Peserta PIMNAS Ke-37 Bidang PKM-PI 2025",
      en: "38th PIMNAS Participant in PKM-PI 2025",
    },
    issuer: "Kemendiktisaintek",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/achievement/pimnas-peserta-pkm-pi-2025.webp",
    description: {
      id: "Peserta Pekan Ilmiah Mahasiswa Nasional (PIMNAS) kelas PKM-PI dengan karya CRM Terintegrasi UMKM Ladziidz Medan.",
      en: "National Student Scientific Week (PIMNAS) participant in PKM-PI class presenting Integrated CRM for UMKM Ladziidz Medan.",
    },
  },
  {
    id: "pkm-pi-pendanaan-2025",
    category: "achievement",
    title: {
      id: "Peraih Pendanaan PKM-PI Kemendiktisaintek 2025",
      en: "PKM-PI Funding Recipient - Kemendiktisaintek 2025",
    },
    issuer: "Kemendiktisaintek",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/achievement/pkm-pi-peraih-pendanaan-2025.webp",
    description: {
      id: "Lolos pendanaan Program Kreativitas Mahasiswa Penerapan Iptek (PKM-PI) 2025.",
      en: "Awarded government funding grant in Student Creativity Program for Technology Application (PKM-PI) 2025.",
    },
  },

  // --- KOMPETENSI / COMPETENCE ---
  {
    id: "alibaba-cloud-certified-developer",
    category: "competence",
    title: {
      id: "Alibaba Cloud Certified Developer",
      en: "Alibaba Cloud Certified Developer",
    },
    issuer: "Alibaba Cloud Academy",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/competence/alibaba-cloud-certified-developer.webp",
    description: {
      id: "Sertifikasi profesional pengembang cloud dari Alibaba Cloud Academy.",
      en: "Professional cloud developer certification by Alibaba Cloud Academy.",
    },
  },
  {
    id: "dicoding-aws-cloud-practitioner",
    category: "competence",
    title: {
      id: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      en: "Cloud Practitioner Essentials (AWS Cloud Basics)",
    },
    issuer: "Dicoding",
    issuedAt: { id: "Agustus 2024", en: "August 2024" },
    credentialUrl: "https://dicoding.com/certificates/KEXL1J21MXG2",
    image: "/certificates/competence/dicoding-aws-cloud-practitioner-essentials.webp",
    description: {
      id: "Memahami konsep fundamental komputasi awan AWS, infrastruktur global, keamanan, dan arsitektur.",
      en: "Understanding core concepts of AWS cloud computing, global infrastructure, security, and architecture.",
    },
  },
  {
    id: "dicoding-dart-programming",
    category: "competence",
    title: {
      id: "Memulai Pemrograman dengan Dart",
      en: "Starting Programming with Dart",
    },
    issuer: "Dicoding",
    issuedAt: { id: "Oktober 2024", en: "October 2024" },
    credentialUrl: "https://dicoding.com/certificates/L4PQ511RVZO1",
    image: "/certificates/competence/dicoding-memulai-pemrograman-dart.webp",
    description: {
      id: "Dasar bahasa pemrograman Dart, OOP, functional programming, dan asynchronous programming.",
      en: "Fundamentals of Dart programming language, OOP, functional programming, and asynchronous handling.",
    },
  },
  {
    id: "dicoding-flutter-pemula",
    category: "competence",
    title: {
      id: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      en: "Flutter Application Development for Beginners",
    },
    issuer: "Dicoding",
    issuedAt: { id: "Desember 2024", en: "December 2024" },
    credentialUrl: "https://dicoding.com/certificates/N9ZO93D6RXG5",
    image: "/certificates/competence/dicoding-flutter-pemula.webp",
    description: {
      id: "Pengembangan aplikasi Flutter lintas platform, widget tree, navigasi, layouting, dan deployment.",
      en: "Cross-platform Flutter app development, widget hierarchy, navigation, UI layouting, and deployment.",
    },
  },
  {
    id: "dicoding-dasar-ai",
    category: "competence",
    title: {
      id: "Belajar Dasar AI",
      en: "Introduction to Artificial Intelligence",
    },
    issuer: "Dicoding",
    issuedAt: { id: "Desember 2024", en: "December 2024" },
    credentialUrl: "https://dicoding.com/certificates/JMZV4K6GJXN9",
    image: "/certificates/competence/dicoding-belajar-dasar-ai.webp",
    description: {
      id: "Konsep dasar Artificial Intelligence, Machine Learning, Deep Learning, dan pemanfaatannya.",
      en: "Fundamentals of AI, Machine Learning algorithms, Deep Learning concepts, and real-world use cases.",
    },
  },
  {
    id: "idn-jaringan-komputer-dasar",
    category: "competence",
    title: {
      id: "Jaringan Komputer Dasar",
      en: "Basic Computer Networking",
    },
    issuer: "ID-Networkers (IDN.ID)",
    issuedAt: { id: "Juli 2024", en: "July 2024" },
    credentialUrl: "https://lms.idn.id/cert-verification",
    image: "/certificates/competence/idn-jaringan-komputer-dasar.webp",
    description: {
      id: "Konsep dasar topologi jaringan, model OSI & TCP/IP, IP addressing, subnetting, dan routing dasar.",
      en: "Basic network topology, OSI & TCP/IP models, IP addressing, subnetting, and foundational routing.",
    },
  },
  {
    id: "sololearn-introduction-to-html",
    category: "competence",
    title: {
      id: "Introduction to HTML",
      en: "Introduction to HTML",
    },
    issuer: "SoloLearn",
    issuedAt: { id: "September 2024", en: "September 2024" },
    credentialUrl: "https://www.sololearn.com/en/certificates/CC-RB6RXENX",
    image: "/certificates/competence/sololearn-introduction-to-html.webp",
    description: {
      id: "Sertifikasi pemahaman dasar semantik dan struktur dokumen HTML5.",
      en: "Certification in HTML5 structure, semantic markup, and document standards.",
    },
  },
  {
    id: "sololearn-introduction-to-css",
    category: "competence",
    title: {
      id: "Introduction to CSS",
      en: "Introduction to CSS",
    },
    issuer: "SoloLearn",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/competence/sololearn-introduction-to-css.webp",
    description: {
      id: "Dasar styling web, CSS selectors, box model, Flexbox, dan responsive design.",
      en: "Fundamentals of web styling, CSS selectors, box model, Flexbox, and responsive principles.",
    },
  },

  // --- PARTISIPASI / PARTICIPATION ---
  {
    id: "inconitbis-2025-presenter",
    category: "participation",
    title: {
      id: "Presenter di 3rd INCONITBIS 2025",
      en: "Presenter at 3rd INCONITBIS 2025",
    },
    issuer: "Universitas Lembah Dempo",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/participation/conference-3rd-inconitbis-2025.webp",
    description: {
      id: "Sertifikat presenter konferensi ilmiah internasional INCONITBIS ke-3.",
      en: "Presenter certificate at the 3rd International Conference on Information Technology and Business (INCONITBIS).",
    },
  },
  {
    id: "icofematics-2025-conference",
    category: "participation",
    title: {
      id: "Presenter / Partisipan ICoFEMATICS 2025",
      en: "Presenter / Participant at ICoFEMATICS 2025",
    },
    issuer: "Universitas Methodist Indonesia",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/participation/conference-icofematics-2025.webp",
    description: {
      id: "Keikutsertaan dalam konferensi ilmiah nasional/internasional ICoFEMATICS 2025.",
      en: "Participation in academic conference ICoFEMATICS 2025.",
    },
  },
  {
    id: "lomba-teknofest-himatekno",
    category: "participation",
    title: {
      id: "Peserta Lomba TEKNOFEST HIMATEKNO",
      en: "TEKNOFEST HIMATEKNO Competition Participant",
    },
    issuer: "HIMATEKNO Battuta",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/participation/lomba-teknofest-himatekno.webp",
    description: {
      id: "Partisipasi dalam kompetisi teknologi festival mahasiswa TEKNOFEST.",
      en: "Participation in student technology competition festival TEKNOFEST.",
    },
  },
  {
    id: "google-cloud-x-ai-medan",
    category: "participation",
    title: {
      id: "Peserta Google Cloud x AI Medan",
      en: "Google Cloud x AI Medan Participant",
    },
    issuer: "Google Developer Group Medan",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/participation/google-cloud-x-ai-medan.webp",
    description: {
      id: "Partisipasi dalam seminar & workshop teknologi Google Cloud dan implementasi AI.",
      en: "Participant in Google Cloud & AI technology seminar and community workshop.",
    },
  },
  {
    id: "peserta-mobile-apps-corisindo",
    category: "participation",
    title: {
      id: "Peserta Lomba Mobile Apps CORISINDO",
      en: "CORISINDO Mobile Apps Competition Participant",
    },
    issuer: "Universitas Teknologi Bandung",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/participation/peserta-mobile-apps-corisindo.webp",
    description: {
      id: "Sertifikat kepesertaan dalam kompetisi pengembangan aplikasi mobile CORISINDO.",
      en: "Participant certificate in CORISINDO mobile app development competition.",
    },
  },
  {
    id: "seminar-pendidikan-karakter-proasta-2025",
    category: "participation",
    title: {
      id: "Seminar Pendidikan Karakter PROASTA 2025",
      en: "Character Building Seminar PROASTA 2025",
    },
    issuer: "PRO.ASTA",
    issuedAt: { id: "2025", en: "2025" },
    image: "/certificates/participation/seminar-pendidikan-karakter-proasta-2025.webp",
    description: {
      id: "Partisipasi dalam seminar pengembangan soft-skill dan pendidikan karakter kepemimpinan.",
      en: "Participation in soft skills and character building leadership seminar.",
    },
  },
  {
    id: "seminar-jurnal-bereputasi-lldikti-1",
    category: "participation",
    title: {
      id: "Seminar Menuju Jurnal Bereputasi LLDIKTI Wilayah I",
      en: "Seminar Towards Reputable Journals - LLDIKTI Region I",
    },
    issuer: "LLDIKTI Wilayah I Sumatera Utara",
    issuedAt: { id: "September 2025", en: "September 2025" },
    image: "/certificates/participation/seminar-jurnal-bereputasi-lldikti-1.webp",
    description: {
      id: "Seminar peningkatan akreditasi, publikasi, dan indeksasi jurnal ilmiah bereputasi.",
      en: "Seminar on enhancing accreditation, publication, and indexation of reputable scientific journals.",
    },
  },
  {
    id: "workshop-expressjs-proasta",
    category: "participation",
    title: {
      id: "Workshop Backend Express.js PROASTA",
      en: "Backend Express.js Workshop PROASTA",
    },
    issuer: "PRO.ASTA",
    issuedAt: { id: "2024", en: "2024" },
    image: "/certificates/participation/workshop-expressjs-proasta.webp",
    description: {
      id: "Workshop intensif pengembangan RESTful API modern menggunakan Node.js dan Express.js.",
      en: "Intensive hands-on workshop on modern RESTful API development with Node.js and Express.js.",
    },
  },
  {
    id: "workshop-mastering-laravel-skilvul",
    category: "participation",
    title: {
      id: "Workshop Mastering Laravel: Building Your First Dynamic Website",
      en: "Workshop Mastering Laravel: Building Your First Dynamic Website",
    },
    issuer: "Skilvul x HMSI ITS",
    issuedAt: { id: "September 2024", en: "September 2024" },
    image: "/certificates/participation/workshop-mastering-laravel-skilvul.webp",
    description: {
      id: "Workshop pembuatan website dinamis berbasis framework PHP Laravel bersama SkilHub & HMSI ITS.",
      en: "Workshop on building dynamic web applications with Laravel PHP framework by SkilHub & HMSI ITS.",
    },
  },
];

export const profile = {
  intro: {
    id: "Saya membangun produk web dan mobile yang terstruktur, jelas, dan nyaman digunakan untuk mempermudah alur kerja nyata.",
    en: "I build clear, structured, and user-friendly web and mobile products to improve real workflows.",
  },
  about: {
    id: [
      "Saya adalah mahasiswa Program Studi Informatika di Universitas Battuta yang memiliki ketertarikan pada pengembangan produk digital dan pemecahan masalah melalui teknologi.",
      "Saya memiliki pengalaman membangun beberapa project menggunakan Next.js dan Laravel untuk pengembangan aplikasi berbasis web, serta Flutter untuk pengembangan aplikasi mobile.",
    ],
    en: [
      "I am an Informatics student at Universitas Battuta with an interest in building digital products and solving problems through technology.",
      "I have experience building projects with Next.js and Laravel for web applications, as well as Flutter for mobile development.",
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

export type ProjectCategoryKey = "all" | "web" | "mobile";

export const projectCategories: Array<{
  key: ProjectCategoryKey;
  label: LocalizedText;
}> = [
  { key: "all", label: { id: "Semua", en: "All" } },
  { key: "web", label: { id: "Web App", en: "Web App" } },
  { key: "mobile", label: { id: "Mobile App", en: "Mobile App" } },
];

export type ProjectMetric = {
  value: string;
  label: LocalizedText;
  description: LocalizedText;
};

export type ProjectFeature = {
  id: string;
  title: LocalizedText;
  desc: LocalizedText;
};

export type ProjectArchitecture = {
  layer: string;
  tech: string;
  detail: LocalizedText;
};

export type ProjectScreenshot = {
  id: string;
  title: LocalizedText;
  caption: LocalizedText;
  image: string;
  category: LocalizedText;
};

export type Project = {
  slug: string;
  type: "web" | "mobile";
  title: LocalizedText;
  acronym?: string;
  subtitle: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  status: LocalizedText;
  client: LocalizedText;
  liveUrl?: string;
  image: string;
  screenshots?: readonly ProjectScreenshot[];
  techStack: readonly string[];
  metrics: readonly ProjectMetric[];
  context: LocalizedText;
  contribution: LocalizedText;
  solution: LocalizedText;
  features: readonly ProjectFeature[];
  architectureHighlights: readonly ProjectArchitecture[];
};

export const projects: Project[] = [
  {
    slug: "universitas-battuta-academic-system",
    type: "web",
    acronym: "SIAKAD BATTUTA",
    title: {
      id: "Sistem Informasi Akademik (SIAKAD) Universitas Battuta",
      en: "Universitas Battuta Academic Information System (SIAKAD)",
    },
    subtitle: {
      id: "Platform Tata Kelola Akademik Terpadu (KRS, Presensi, Nilai, & Bimbingan Skripsi)",
      en: "Integrated Academic Governance Platform (KRS, Attendance, Grading, & Thesis Mentorship)",
    },
    category: {
      id: "Fullstack Web App / Academic ERP",
      en: "Fullstack Web App / Academic ERP",
    },
    summary: {
      id: "Platform digital terpadu yang menggantikan 100% proses akademik manual: pengajuan KRS online, presensi perkuliahan digital, input nilai dosen, bimbingan akademik & skripsi, serta laporan akademik instan untuk 2,000+ mahasiswa.",
      en: "Unified digital platform replacing 100% of manual academic workflows: online study plan (KRS) filing, digital lecture attendance, faculty grading, thesis advisorship, and instant academic reporting for 2,000+ students.",
    },
    role: {
      id: "Lead Fullstack Developer & System Architect (Solo Project)",
      en: "Lead Fullstack Developer & System Architect (Solo Project)",
    },
    period: {
      id: "2025 - Sekarang (Aktif & Maintained)",
      en: "2025 - Present (Active & Maintained)",
    },
    status: {
      id: "Live Production / Digunakan di Kampus",
      en: "Live Production / Active in Campus",
    },
    client: {
      id: "Universitas Battuta",
      en: "Universitas Battuta",
    },
    liveUrl: "https://siakad.battuta.ac.id",
    image: "/projects/siakad-battuta-login.png",
    screenshots: [
      {
        id: "login",
        title: {
          id: "Portal Login & Autentikasi Sivitas Akademika",
          en: "Academic Community Authentication & Login Portal",
        },
        caption: {
          id: "Gerbang masuk terintegrasi untuk mahasiswa, dosen, admin BAAK, dan bagian keuangan dengan antarmuka modern dark theme dan identitas visual kampus.",
          en: "Integrated entry gateway for students, lecturers, academic affairs, and finance staff featuring a modern dark theme and campus visual identity.",
        },
        image: "/projects/siakad-battuta-login.png",
        category: { id: "Autentikasi", en: "Authentication" },
      },
    ],
    techStack: [
      "React",
      "TanStack Router",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Linux VPS",
      "REST API",
    ],
    metrics: [
      {
        value: "2,000+",
        label: { id: "Mahasiswa Aktif", en: "Active Students" },
        description: {
          id: "Digunakan aktif oleh ribuan mahasiswa dan seluruh civitas akademika kampus",
          en: "Actively used by thousands of students and university faculty staff",
        },
      },
      {
        value: "100%",
        label: { id: "Paperless & Otomatis", en: "Paperless & Automated" },
        description: {
          id: "Digitalisasi penuh KRS, KHS, presensi harian, dan pengajuan sidang skripsi",
          en: "Full digitalization of study plans, grade reports, attendance, and thesis defense",
        },
      },
      {
        value: "Realtime",
        label: { id: "Laporan Akademik Instan", en: "Instant Academic Reports" },
        description: {
          id: "Rekapitulasi data akademik terpusat tanpa proses birokrasi manual",
          en: "Centralized academic data tracking eliminating manual paperwork delays",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "End-to-End Execution", en: "End-to-End Execution" },
        description: {
          id: "Dikerjakan mandiri: Desain UI/UX Figma, Frontend, Backend, hingga Deployment VPS",
          en: "Executed independently: Figma UI/UX, Frontend, Backend, and VPS Deployment",
        },
      },
    ],
    context: {
      id: "Sebelum sistem ini diimplementasikan, seluruh proses perkuliahan di Universitas Battuta masih bergantung pada alur kerja manual dan formulir berbasis kertas—mulai dari pengisian Kartu Rencana Studi (KRS), pencetakan Kartu Hasil Studi (KHS), absensi tatap muka di lembaran fisik, rekapitulasi nilai dosen yang tersebar, hingga pengajuan bimbingan dan sidang skripsi yang berbelit-belit. Hal ini menyebabkan lambatnya pelaporan akademik bagi pimpinan dan rawan terjadi ketidakcocokan data.",
      en: "Prior to this system's rollout, all academic workflows at Universitas Battuta relied heavily on manual paperwork—from physical study plan (KRS) filings and paper grade reports (KHS) to paper attendance sheets, scattered grading data, and cumbersome paper-based thesis and defense applications. This resulted in administrative delays and data inconsistencies.",
    },
    contribution: {
      id: "Sebagai developer tunggal (solo fullstack) dan staf internal di Universitas Battuta, saya merancang serta mengeksekusi seluruh siklus pengembangan sistem secara end-to-end: merancang antarmuka UI/UX di Figma, membangun arsitektur frontend SPA menggunakan React dan TanStack Router, membangun backend REST API yang modular menggunakan NestJS (TypeScript), merancang skema relasional PostgreSQL yang konsisten, hingga mengonfigurasi dan mengelola deployment server Linux VPS kampus serta pemeliharaan berkelanjutan.",
      en: "As the solo fullstack developer and internal staff at Universitas Battuta, I designed and delivered the entire system life cycle end-to-end: crafting UI/UX interfaces in Figma, building a high-performance SPA frontend with React and TanStack Router, engineering a modular REST API backend with NestJS, modeling relational PostgreSQL database schemas, and managing production deployment and ongoing maintenance on campus Linux VPS servers.",
    },
    solution: {
      id: "Membangun ekosistem SIAKAD modern berbasis web yang mengotomatisasi seluruh proses perkuliahan kampus ke dalam satu pintu. Sistem membagi hak akses secara terisolasi (Mahasiswa, Dosen, Admin BAAK, dan Bagian Keuangan), menghadirkan otomasi validasi pembayaran SPP sebelum KRS, pencatatan absensi digital per sesi tatap muka, spreadsheet penilaian dosen transparan, serta portal pelacakan bimbingan akademik dan sidang skripsi secara realtime.",
      en: "Engineered a modern web-based SIAKAD ecosystem automating the entire university academic journey into a unified portal. The platform isolates role-based permissions (Students, Lecturers, Academic Affairs/BAAK, and Finance), featuring automated tuition payment verification prior to KRS, digital attendance tracking per lecture, transparent grading spreadsheets, and real-time thesis advisorship and defense tracking.",
    },
    features: [
      {
        id: "krs-khs",
        title: {
          id: "Otomasi KRS Online & KHS Digital",
          en: "Online KRS Enrollment & Digital KHS",
        },
        desc: {
          id: "Pengajuan dan persetujuan rencana studi secara digital tanpa kertas, terintegrasi langsung dengan kuota kelas dan validasi prasyarat matakuliah.",
          en: "Paperless digital study plan submission and approval, directly synchronized with class capacities and prerequisite rules.",
        },
      },
      {
        id: "attendance-grading",
        title: {
          id: "Presensi Digital & Rekap Nilai Dosen",
          en: "Digital Lecture Attendance & Grading Hub",
        },
        desc: {
          id: "Pencatatan kehadiran mahasiswa per pertemuan kelas dan rekapitulasi nilai tugas, UTS, serta UAS dosen yang langsung terkomputasi secara otomatis.",
          en: "Session-by-session student attendance logging and automated computation of assignments, midterms, and final exam grades.",
        },
      },
      {
        id: "thesis-mentorship",
        title: {
          id: "Portal Bimbingan Akademik & Sidang Skripsi",
          en: "Academic Advisorship & Thesis Defense Hub",
        },
        desc: {
          id: "Sistem pelacakan log bimbingan akademik dosen PA serta alur pendaftaran, verifikasi berkas, dan penjadwalan sidang tugas akhir/skripsi.",
          en: "Advisory log tracking for student advisors alongside digital registration, document verification, and defense scheduling for final-year thesis projects.",
        },
      },
      {
        id: "admin-finance",
        title: {
          id: "Master Data BAAK & Validasi Keuangan",
          en: "BAAK Master Registry & Finance Verification",
        },
        desc: {
          id: "Pusat pengaturan kurikulum, plotting dosen dan ruangan kelas, serta validasi status pembayaran SPP sebagai syarat otomatis akses perkuliahan.",
          en: "Central curriculum management, faculty and room allocation, coupled with automated tuition clearance checks to grant enrollment access.",
        },
      },
    ],
    architectureHighlights: [
      {
        layer: "Frontend Architecture",
        tech: "React, TanStack Router, TypeScript, Tailwind CSS",
        detail: {
          id: "Antarmuka SPA cepat dan tangguh dengan type-safe routing dari TanStack Router, form management responsif, dan layout modern yang nyaman digunakan.",
          en: "High-performance SPA with TanStack Router type-safe routing, responsive form handling, and modern ergonomic UX.",
        },
      },
      {
        layer: "Backend & Business Logic",
        tech: "NestJS, TypeScript, Modular Services",
        detail: {
          id: "Arsitektur backend modular berbasis NestJS dengan Dependency Injection, DTO validation, dan clean service layer untuk menjamin keandalan transaksi.",
          en: "Modular NestJS backend architecture leveraging Dependency Injection, DTO validations, and clean service layers for transaction reliability.",
        },
      },
      {
        layer: "Database & Integrity",
        tech: "PostgreSQL, Relational Modeling & Indexing",
        detail: {
          id: "Penyusunan skema relasional terstruktur dengan relational integrity constraints dan indexing untuk menjamin konsistensi data nilai dan presensi mahasiswa.",
          en: "Structured relational schema design with integrity constraints and indexing ensuring bulletproof consistency for grades and attendance.",
        },
      },
      {
        layer: "Deployment & Infrastructure",
        tech: "Linux VPS, Nginx, Server Management",
        detail: {
          id: "Deployment mandiri pada server Linux VPS kampus dengan konfigurasi Nginx reverse proxy, isolasi environment, dan pemeliharaan performa berkelanjutan.",
          en: "Self-hosted deployment on campus Linux VPS server with Nginx reverse proxy, environment isolation, and continuous performance maintenance.",
        },
      },
    ],
  },
];

export const messages = {
  id: {
    skip: "Lewati ke konten",
    language: "Ganti bahasa",
    menu: "Buka navigasi",
    closeMenu: "Tutup navigasi",
    placeholder: "Konten final akan dirangkai pada roadmap halaman.",
    imagePlaceholder: "Visual sedang disiapkan",
    viewProject: "Buka proyek",
    viewCaseStudy: "Lihat Studi Kasus",
    backToProjects: "Kembali ke Proyek",
    allProjects: "Semua Proyek",
    filterProjects: "Filter Kategori",
    projectCount: "proyek",
    emptyProjectsTitle: "Belum ada proyek dalam kategori ini",
    emptyProjectsDesc:
      "Proyek pada kategori ini sedang dalam tahap kurasi dan pengembangan.",
    backToAll: "Lihat Semua Proyek",
    projectDetails: "Detail Proyek",
    keyMetrics: "Metrik & Hasil Kuantitatif",
    systemShowcase: "Simulasi & Pratinjau Sistem",
    techStackLabel: "Teknologi yang Digunakan",
    problemTitle: "Tantangan & Latar Belakang",
    solutionTitle: "Solusi Rekayasa & Arsitektur",
    coreFeaturesTitle: "Fitur & Modul Utama",
    ctaProjectTitle: "Tertarik Membangun Sistem Serupa?",
    ctaProjectDesc:
      "Saya siap membantu merancang dan merekayasa solusi web/sistem digital yang tangguh, terukur, dan nyaman digunakan.",
    contactMe: "Hubungi Saya",
    viewCertificate: "Lihat Sertifikat",
    viewCredential: "Verifikasi",
    allCertificates: "Semua Sertifikat",
    certificateCount: "sertifikat",
    openInNewTab: "Buka Gambar di Tab Baru",
    closeLightbox: "Tutup (Esc)",
    prevCertificate: "Sebelumnya",
    nextCertificate: "Selanjutnya",
    materialPending:
      "Materi final sedang disiapkan untuk tahap integrasi konten.",
    notFoundTitle: "Halaman tidak ditemukan",
    notFoundBody:
      "Alamat ini tidak tersedia. Gunakan navigasi untuk kembali ke halaman yang benar.",
  },
  en: {
    skip: "Skip to content",
    language: "Switch language",
    menu: "Open navigation",
    closeMenu: "Close navigation",
    placeholder: "Final content will be composed during the page roadmap.",
    imagePlaceholder: "Visual in preparation",
    viewProject: "Open project",
    viewCaseStudy: "View Case Study",
    backToProjects: "Back to Projects",
    allProjects: "All Projects",
    filterProjects: "Filter Category",
    projectCount: "projects",
    emptyProjectsTitle: "No projects found in this category",
    emptyProjectsDesc:
      "Projects in this category are currently being curated and developed.",
    backToAll: "View All Projects",
    projectDetails: "Project Details",
    keyMetrics: "Key Metrics & Outcomes",
    systemShowcase: "Interactive System Showcase",
    techStackLabel: "Technologies Used",
    problemTitle: "The Challenge & Context",
    solutionTitle: "Engineering Solution & Architecture",
    coreFeaturesTitle: "Core Modules & Features",
    ctaProjectTitle: "Interested in Building a Similar System?",
    ctaProjectDesc:
      "I'm ready to help design and engineer robust, scalable, and user-friendly digital systems for your needs.",
    contactMe: "Contact Me",
    viewCertificate: "View Certificate",
    viewCredential: "Verify",
    allCertificates: "All Certificates",
    certificateCount: "certificates",
    openInNewTab: "Open Image in New Tab",
    closeLightbox: "Close (Esc)",
    prevCertificate: "Previous",
    nextCertificate: "Next",
    materialPending:
      "Final material is being prepared for the content integration stage.",
    notFoundTitle: "Page not found",
    notFoundBody:
      "This address is unavailable. Use the navigation to return to the right page.",
  },
} as const;

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
