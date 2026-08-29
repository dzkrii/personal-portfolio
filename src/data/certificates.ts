import type { LocalizedText } from "./types";

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
