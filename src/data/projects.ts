import type { LocalizedText } from "./types";

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
          id: "Deployment mandiri pada server Linux VPS kampus dengan konfigurasi Nginx reverse proxy, isolasi environment, dan pemeliharaan berkelanjutan.",
          en: "Self-hosted deployment on campus Linux VPS server with Nginx reverse proxy, environment isolation, and continuous performance maintenance.",
        },
      },
    ],
  },
];
