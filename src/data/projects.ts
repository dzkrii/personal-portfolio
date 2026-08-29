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
  tag?: LocalizedText;
};

export type ProjectRoleFeatureItem = {
  id: string;
  iconName:
    | "book"
    | "check-circle"
    | "award"
    | "file-text"
    | "calendar"
    | "users"
    | "credit-card"
    | "settings"
    | "globe"
    | "music"
    | "sparkles"
    | "compass"
    | "shield";
  title: LocalizedText;
  desc: LocalizedText;
  tag?: LocalizedText;
};

export type ProjectRoleGroup = {
  roleKey: "mahasiswa" | "dosen" | "baak" | "keuangan" | "calon-mahasiswa" | "institusi" | "publik" | string;
  roleTitle: LocalizedText;
  roleBadge: LocalizedText;
  summary: LocalizedText;
  items: ProjectRoleFeatureItem[];
};

export type ProjectComparisonItem = {
  id: string;
  topic: LocalizedText;
  before: LocalizedText;
  after: LocalizedText;
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
  overview?: LocalizedText;
  context?: LocalizedText;
  contribution?: LocalizedText;
  solution?: LocalizedText;
  features?: readonly ProjectFeature[];
  roleGroups?: readonly ProjectRoleGroup[];
  comparisons?: readonly ProjectComparisonItem[];
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
      id: "Platform Tata Kelola Akademik Terpadu (KRS Online, Absensi Digital, Rekap Nilai, & Bimbingan Skripsi)",
      en: "Integrated Academic Governance Platform (Online KRS, Digital Attendance, Grading, & Thesis Mentorship)",
    },
    category: {
      id: "Fullstack Web App · Sistem Akademik Kampus",
      en: "Fullstack Web App · Academic ERP System",
    },
    summary: {
      id: "Platform digital kampus yang menggantikan 100% proses perkuliahan manual berbasis kertas: mulai dari pemilihan KRS online mandiri, absensi kuliah per sesi, kalkulasi nilai otomatis, hingga monitoring bimbingan dan pendaftaran sidang skripsi bagi 2.000+ mahasiswa dan dosen.",
      en: "Unified digital campus platform replacing 100% of manual paper-based academic workflows: from self-service online KRS course enrollment, session-by-session digital attendance, and automated grade calculation, to thesis mentorship tracking and defense registration for 2,000+ students and faculty members.",
    },
    overview: {
      id: "SIAKAD Universitas Battuta dibangun untuk menghadirkan pengalaman akademik yang cepat, transparan, dan terintegrasi dalam satu pintu. Mahasiswa dapat mengurus rencana studi dan memantau nilai dari mana saja, dosen dapat mengelola perkuliahan secara instan, dan pimpinan kampus memperoleh laporan akademik yang akurat secara realtime.",
      en: "SIAKAD Universitas Battuta was engineered to deliver a fast, transparent, and seamlessly integrated academic experience in one unified portal. Students can manage course plans and check grades from anywhere, lecturers can manage classes instantly, and university leadership gains instant, accurate academic reporting.",
    },
    role: {
      id: "Lead Fullstack Developer & UI Designer (Solo Project)",
      en: "Lead Fullstack Developer & UI Designer (Solo Project)",
    },
    period: {
      id: "2025 - Sekarang (Aktif Digunakan)",
      en: "2025 - Present (Live in Production)",
    },
    status: {
      id: "Live di Kampus / Digunakan Harian",
      en: "Live in Campus / Daily Active Use",
    },
    client: {
      id: "Universitas Battuta",
      en: "Universitas Battuta",
    },
    liveUrl: "https://siakad.battuta.ac.id",
    image: "/media/projects/siakad-battuta-login.webp",
    screenshots: [
      {
        id: "login",
        title: {
          id: "Gerbang Masuk Sivitas Akademika",
          en: "Academic Community Login Gateway",
        },
        caption: {
          id: "Portal login terpadu satu pintu untuk Mahasiswa, Dosen, BAAK, dan Keuangan dengan tampilan modern dark mode dan identitas visual kampus.",
          en: "Unified single-entry login portal for Students, Faculty, Academic Staff, and Finance with a modern dark theme and campus visual branding.",
        },
        image: "/media/projects/siakad-battuta-login.webp",
        category: { id: "Portal Utama", en: "Main Portal" },
      },
      {
        id: "dashboard",
        title: {
          id: "Dashboard Akademik & IPK Mahasiswa",
          en: "Student Academic Dashboard & GPA",
        },
        caption: {
          id: "Pusat informasi akademik mahasiswa: kartu IPS & IPK kumulatif, monitoring beban SKS, pengumuman kampus, dan jadwal perkuliahan harian.",
          en: "Student academic hub: semester & cumulative GPA cards, credit load tracking, official announcements, and daily class timetables.",
        },
        image: "/media/projects/siakad-battuta-dashboard.webp",
        category: { id: "Mahasiswa", en: "Student Hub" },
      },
      {
        id: "krs",
        title: {
          id: "Pengisian & Riwayat KRS Online",
          en: "Online KRS Enrollment & Semester History",
        },
        caption: {
          id: "Pengisian rencana studi semester aktif serta arsip riwayat KRS per semester lengkap dengan status persetujuan Dosen PA dan rincian SKS.",
          en: "Active semester study plan enrollment and historical semester archive featuring academic advisor approval status and credit breakdowns.",
        },
        image: "/media/projects/siakad-battuta-krs.webp",
        category: { id: "Rencana Studi", en: "KRS Enrollment" },
      },
      {
        id: "tagihan",
        title: {
          id: "Portal Keuangan & Tagihan Beasiswa UKT",
          en: "Tuition & Financial Aid Portal",
        },
        caption: {
          id: "Manajemen tagihan pendidikan, verifikasi status beasiswa penuh (100% KIP-Kuliah), monitoring sisa pembayaran, dan status pelunasan biaya.",
          en: "Tuition management, 100% full scholarship verification (KIP-Kuliah), balance tracking, and official clearance status.",
        },
        image: "/media/projects/siakad-battuta-tagihan.webp",
        category: { id: "Keuangan", en: "Finance & Aid" },
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
    ],
    metrics: [
      {
        value: "2,000+",
        label: { id: "Mahasiswa & Dosen", en: "Students & Faculty" },
        description: {
          id: "Digunakan aktif setiap hari oleh ribuan civitas akademika di kampus",
          en: "Actively used on a daily basis by thousands of students and faculty members",
        },
      },
      {
        value: "100%",
        label: { id: "Paperless & Digital", en: "Paperless & Digital" },
        description: {
          id: "KRS, absensi harian, KHS, dan berkas sidang beralih serba digital",
          en: "Course enrollments, attendance logs, grade reports, and thesis files are fully digitalized",
        },
      },
      {
        value: "Realtime",
        label: { id: "Sinkronisasi Nilai", en: "Realtime Sync" },
        description: {
          id: "Nilai dan presensi langsung terhitung otomatis tanpa birokrasi manual",
          en: "Grades and attendance automatically computed without manual bureaucracy",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "Fullstack & UI/UX", en: "Solo Fullstack" },
        description: {
          id: "Dikerjakan dari perancangan antarmuka Figma, sistem web, hingga server",
          en: "Built independently from Figma UI/UX design, web engineering, to server deployment",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "mahasiswa",
        roleTitle: { id: "Untuk Mahasiswa", en: "For Students" },
        roleBadge: { id: "Akses Mahasiswa", en: "Student Portal" },
        summary: {
          id: "Memberikan keleluasaan bagi mahasiswa mengurus seluruh kebutuhan kuliah secara mandiri, cepat, dan transparan dari mana saja.",
          en: "Empowers students to manage their entire academic journey independently, quickly, and transparently from anywhere.",
        },
        items: [
          {
            id: "m-krs",
            iconName: "book",
            title: {
              id: "Pengisian KRS Online Mandiri",
              en: "Self-Service Online KRS Enrollment",
            },
            desc: {
              id: "Pilih mata kuliah dan jadwal kelas semester baru dalam 2 menit tanpa perlu mengantre di loket kampus.",
              en: "Pick courses and class schedules for the new semester in 2 minutes without waiting in long campus lines.",
            },
            tag: { id: "Cepat & Praktis", en: "Fast & Effortless" },
          },
          {
            id: "m-presensi",
            iconName: "check-circle",
            title: {
              id: "Pantau Presensi Perkuliahan",
              en: "Live Attendance Tracking",
            },
            desc: {
              id: "Cek catatan kehadiran perkuliahan per mata kuliah secara transparan untuk memastikan syarat minimal kehadiran terpenuhi.",
              en: "Transparently check session-by-session attendance records per course to ensure exam eligibility.",
            },
            tag: { id: "Transparan", en: "Transparent" },
          },
          {
            id: "m-khs",
            iconName: "award",
            title: {
              id: "Lihat Nilai & Cetak KHS Digital",
              en: "Instant Grades & Digital KHS",
            },
            desc: {
              id: "Lihat nilai tugas, kuis, UTS, UAS, dan IPK semester langsung dari layar HP serta unduh lembar KHS resmi berformat PDF.",
              en: "Check assignment, quiz, midterm, and final grades alongside GPA directly, with instant official PDF grade report downloads.",
            },
            tag: { id: "Otomatis", en: "Automated" },
          },
          {
            id: "m-skripsi",
            iconName: "file-text",
            title: {
              id: "Logbook Bimbingan & Pendaftaran Sidang",
              en: "Thesis Logbook & Defense Submission",
            },
            desc: {
              id: "Catat riwayat bimbingan dengan dosen pembimbing dan unggah berkas syarat sidang skripsi secara terintegrasi.",
              en: "Log mentorship consultation notes with advisors and submit required thesis defense files in one streamlined flow.",
            },
            tag: { id: "Terintegrasi", en: "Integrated" },
          },
        ],
      },
      {
        roleKey: "dosen",
        roleTitle: { id: "Untuk Dosen", en: "For Faculty & Lecturers" },
        roleBadge: { id: "Portal Dosen", en: "Faculty Portal" },
        summary: {
          id: "Memudahkan dosen mengelola kelas perkuliahan, presensi mahasiswa, dan penilaian tanpa repot menghitung manual.",
          en: "Streamlines classroom management, student attendance, and grading for lecturers without spreadsheet headaches.",
        },
        items: [
          {
            id: "d-absensi",
            iconName: "check-circle",
            title: {
              id: "Input Absensi Kelas Digital",
              en: "One-Click Digital Attendance",
            },
            desc: {
              id: "Catat kehadiran mahasiswa di setiap sesi perkuliahan tatap muka hanya dalam hitungan detik.",
              en: "Log student classroom attendance for each scheduled lecture session in mere seconds.",
            },
            tag: { id: "Hemat Waktu", en: "Time-Saving" },
          },
          {
            id: "d-nilai",
            iconName: "award",
            title: {
              id: "Rekap Nilai Terkomputasi Otomatis",
              en: "Automated Weighted Grading",
            },
            desc: {
              id: "Input nilai tugas, UTS, dan UAS dengan pembobotan persentase dan konversi nilai huruf (A, B, C) yang otomatis terkalkulasi.",
              en: "Enter assignment, midterm, and final exam scores with automatic percentage weighting and instant letter grade conversion.",
            },
            tag: { id: "Akurat", en: "Accurate" },
          },
          {
            id: "d-krs",
            iconName: "book",
            title: {
              id: "Validasi & Persetujuan KRS Mahasiswa",
              en: "KRS Study Plan Approval",
            },
            desc: {
              id: "Dosen Penasehat Akademik (PA) dapat meninjau dan menyetujui rencana studi mahasiswa bimbingan dengan satu tombol.",
              en: "Academic advisors can easily review and approve study plans for their advisee students with a single click.",
            },
            tag: { id: "Mudah", en: "Simple" },
          },
          {
            id: "d-bimbingan",
            iconName: "file-text",
            title: {
              id: "Monitoring Bimbingan Tugas Akhir",
              en: "Thesis Advisorship Monitoring",
            },
            desc: {
              id: "Pantau catatan revisi skripsi, berikan feedback terarah, dan berikan rekomendasi kelayakan maju ke sidang tugas akhir.",
              en: "Track thesis revision logs, provide targeted feedback notes, and submit clearance recommendations for final defense.",
            },
            tag: { id: "Terdokumentasi", en: "Tracked" },
          },
        ],
      },
      {
        roleKey: "baak",
        roleTitle: { id: "Untuk BAAK & Akademik", en: "For Academic Affairs (BAAK)" },
        roleBadge: { id: "Admin Akademik", en: "Academic Admin" },
        summary: {
          id: "Pusat kendali master data kurikulum, penjadwalan ruang kelas, dan rekapitulasi data akademik seluruh program studi.",
          en: "Centralized control hub for curriculum data, room scheduling, and comprehensive multi-department academic reporting.",
        },
        items: [
          {
            id: "b-kurikulum",
            iconName: "settings",
            title: {
              id: "Master Kurikulum & Matakuliah",
              en: "Curriculum & Course Master",
            },
            desc: {
              id: "Pengaturan struktur mata kuliah, bobot SKS, mata kuliah prasyarat, dan kurikulum aktif per program studi.",
              en: "Configure course catalogs, credit hours (SKS), prerequisite rules, and active program study curriculums.",
            },
            tag: { id: "Pusat Data", en: "Master Hub" },
          },
          {
            id: "b-jadwal",
            iconName: "calendar",
            title: {
              id: "Penjadwalan Kuliah & Plotting Ruang",
              en: "Class Scheduling & Room Allocation",
            },
            desc: {
              id: "Atur jadwal perkuliahan, alokasi ruang kelas, dan plotting dosen pengampu tanpa bentrok jadwal.",
              en: "Arrange lecture timetables, room capacities, and faculty teaching assignments with zero scheduling conflicts.",
            },
            tag: { id: "Bebas Bentrok", en: "Conflict-Free" },
          },
          {
            id: "b-sidang",
            iconName: "file-text",
            title: {
              id: "Verifikasi Berkas Sidang & Yudisium",
              en: "Defense & Graduation Verification",
            },
            desc: {
              id: "Validasi syarat kelulusan mahasiswa tingkat akhir dan kelola jadwal sidang skripsi antar dosen penguji.",
              en: "Verify final-year graduation requirements and coordinate thesis defense schedules among examiners.",
            },
            tag: { id: "Rapi & Terpusat", en: "Centralized" },
          },
          {
            id: "b-laporan",
            iconName: "users",
            title: {
              id: "Laporan & Statistik Akademik",
              en: "Academic Analytics & Reports",
            },
            desc: {
              id: "Ekspor rekapitulasi data mahasiswa aktif, distribusi nilai, dan laporan berkala untuk pimpinan kampus.",
              en: "Export summaries of active student headcount, grade distributions, and periodic reporting for campus executives.",
            },
            tag: { id: "Ekspor Data", en: "Data Export" },
          },
        ],
      },
      {
        roleKey: "keuangan",
        roleTitle: { id: "Untuk Bagian Keuangan", en: "For Finance Department" },
        roleBadge: { id: "Otomasi Keuangan", en: "Finance Portal" },
        summary: {
          id: "Sinkronisasi status pembayaran SPP dengan hak akses perkuliahan mahasiswa secara otomatis tanpa lembar slip manual.",
          en: "Automates tuition payment clearance and enrollment access without requiring physical bank slip checks.",
        },
        items: [
          {
            id: "k-spp",
            iconName: "credit-card",
            title: {
              id: "Sinkronisasi Status Pembayaran SPP",
              en: "Tuition Payment Synchronization",
            },
            desc: {
              id: "Verifikasi kelunasan biaya kuliah mahasiswa semester baru secara digital dan terpusat.",
              en: "Verify student semester tuition clearance digitally in a unified payment registry.",
            },
            tag: { id: "Otomatis", en: "Automated" },
          },
          {
            id: "k-krs-lock",
            iconName: "settings",
            title: {
              id: "Buka/Kunci Akses KRS Otomatis",
              en: "Automated KRS Access Lock/Unlock",
            },
            desc: {
              id: "Mahasiswa yang telah lunas SPP otomatis dapat mengisi KRS, tanpa perlu meminta surat rekomendasi keuangan manual.",
              en: "Students with verified tuition status immediately unlock KRS enrollment, eliminating manual paper clearance slips.",
            },
            tag: { id: "Tanpa Birokrasi", en: "Zero Bureaucracy" },
          },
          {
            id: "k-rekap",
            iconName: "award",
            title: {
              id: "Rekapitulasi Tagihan per Angkatan",
              en: "Cohort Financial Summaries",
            },
            desc: {
              id: "Pantau persentase pelunasan biaya kuliah mahasiswa per angkatan dan program studi secara transparan.",
              en: "Monitor tuition payment completion percentages per batch and department with high transparency.",
            },
            tag: { id: "Transparan", en: "Clear Overview" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "krs-flow",
        topic: { id: "Pengisian Rencana Studi (KRS)", en: "Study Plan (KRS) Filing" },
        before: {
          id: "Mahasiswa mengantre di loket, mengisi formulir kertas rangkap, dan meminta tanda tangan fisik dosen PA.",
          en: "Students queued at campus desks, filled out multi-copy paper forms, and sought physical lecturer signatures.",
        },
        after: {
          id: "KRS diisi mandiri lewat HP/laptop dalam 2 menit, persetujuan dosen cukup dengan 1 klik online.",
          en: "Self-service online KRS submission in 2 minutes, approved by advisors with a single click.",
        },
      },
      {
        id: "absensi-flow",
        topic: { id: "Pencatatan Kehadiran Kuliah", en: "Lecture Attendance Tracking" },
        before: {
          id: "Lembaran absensi fisik diedarkan di kelas, rentan hilang, rusak, atau dititip presensi.",
          en: "Paper attendance sheets passed around classrooms, susceptible to damage, loss, or proxy attendance.",
        },
        after: {
          id: "Absensi digital dicatat langsung oleh dosen per sesi, persentase kehadiran mahasiswa terhitung realtime.",
          en: "Digital attendance logged directly by faculty each session, with live percentage tracking for students.",
        },
      },
      {
        id: "nilai-flow",
        topic: { id: "Pengolahan & Pengumuman Nilai", en: "Grading & KHS Distribution" },
        before: {
          id: "Dosen mengumpulkan berkas nilai ke BAAK, diproses manual berhari-hari sebelum mahasiswa bisa melihat KHS cetak.",
          en: "Lecturers submitted physical grade sheets to BAAK, processed manually over several days before physical KHS printing.",
        },
        after: {
          id: "Dosen menginput nilai online, bobot terhitung otomatis, dan mahasiswa bisa langsung unduh KHS resmi berformat PDF.",
          en: "Online grade inputs with instant weighted calculation, enabling students to download verified PDF reports immediately.",
        },
      },
      {
        id: "skripsi-flow",
        topic: { id: "Bimbingan & Pendaftaran Sidang", en: "Thesis Logs & Defense Filing" },
        before: {
          id: "Buku kartu bimbingan fisik rawan tercecer, verifikasi berkas syarat sidang memakan birokrasi berbelit.",
          en: "Physical guidance logbooks prone to misplacement, alongside cumbersome manual document checks for thesis defense.",
        },
        after: {
          id: "Logbook bimbingan tercatat digital di sistem, unggah berkas syarat sidang terpusat dan terjadwal transparan.",
          en: "Fully digitized mentorship logbook with integrated online defense file uploads and transparent scheduling.",
        },
      },
    ],
  },
  {
    slug: "universitas-battuta-official-website",
    type: "web",
    acronym: "BATTUTA.AC.ID",
    title: {
      id: "Website Profil Resmi Universitas Battuta",
      en: "Universitas Battuta Official Profile Website",
    },
    subtitle: {
      id: "Portal Informasi Kampus Modern Multibahasa (Identitas Digital, Pemutar Mars Interaktif, Profil Fakultas & Direktori UKM)",
      en: "Modern Multilingual University Portal (Digital Identity, Interactive Anthem Player, Faculty Profiles & Student Club Directory)",
    },
    category: {
      id: "Fullstack Web App · Profil Kampus & Portal Publik",
      en: "Fullstack Web App · University Profile & Public Portal",
    },
    summary: {
      id: "Portal web representasi resmi Universitas Battuta yang menyajikan informasi akademik, struktur 3 fakultas dan 9 program studi akreditasi Baik Sekali, pemutar musik Mars Battuta interaktif dengan sinkronisasi lirik, berita kampus, serta direktori UKM dalam pengalaman antarmuka yang modern, cepat, dan responsif.",
      en: "Official university web portal representing Universitas Battuta, delivering institutional information, 3 faculties and 9 study program directories accredited 'Baik Sekali', an interactive university anthem player with synchronized lyrics, campus news, and student club ecosystems in a modern, fast, and responsive interface.",
    },
    overview: {
      id: "Website profil Universitas Battuta dirancang sebagai wajah digital universitas untuk calon mahasiswa, orang tua, sivitas akademika, dan mitra industri. Dibangun dengan standar performa tinggi, navigasi intuitif, dukungan multibahasa (ID/EN), serta integrasi terpadu ke seluruh ekosistem digital kampus seperti PMB Online, SIAKAD, E-Learning, LPM, dan LPPM.",
      en: "The official Universitas Battuta website serves as the primary digital gateway for prospective students, parents, faculty, and industry partners. Engineered with high-performance standards, intuitive navigation, bilingual support (ID/EN), and seamless integration across all campus systems including Admissions (PMB), SIAKAD, E-Learning, LPM, and LPPM.",
    },
    role: {
      id: "Lead Fullstack Developer & UI/UX Designer (Solo Project)",
      en: "Lead Fullstack Developer & UI/UX Designer (Solo Project)",
    },
    period: {
      id: "2025 - Sekarang (Aktif Digunakan)",
      en: "2025 - Present (Live in Production)",
    },
    status: {
      id: "Live di Internet / Website Resmi",
      en: "Live in Production / Official Website",
    },
    client: {
      id: "Universitas Battuta",
      en: "Universitas Battuta",
    },
    liveUrl: "https://battuta.ac.id",
    image: "/media/projects/battuta-profile-card.webp",
    screenshots: [
      {
        id: "beranda",
        title: {
          id: "Beranda Utama & Identitas Kampus",
          en: "Main Homepage & Modern Campus Identity",
        },
        caption: {
          id: "Desain visual modern dengan slider fasilitas gedung baru, navigasi terstruktur, pengumuman terkini, dan akses cepat pendaftaran PMB.",
          en: "Modern visual showcase featuring new campus facility slider, structured navigation, latest announcements, and fast-track admissions CTA.",
        },
        image: "/media/projects/battuta-profile-card.webp",
        category: { id: "Beranda", en: "Homepage" },
      },
      {
        id: "fakultas",
        title: {
          id: "Fakultas, Program Studi & Sambutan Yayasan",
          en: "Faculties, Study Programs & Board Address",
        },
        caption: {
          id: "Informasi 3 Fakultas dan 9 Program Studi berakreditasi 'Baik Sekali' serta pesan sambutan Ketua Yayasan mengenai ekosistem Kampus Berdampak.",
          en: "Directory of 3 Faculties and 9 Study Programs accredited 'Baik Sekali' alongside Chairman of the Foundation's address on impactful campus life.",
        },
        image: "/media/projects/battuta-profile-fakultas.webp",
        category: { id: "Fakultas & Prodi", en: "Faculties" },
      },
      {
        id: "mars",
        title: {
          id: "Pemutar Mars Interaktif & Sinkronisasi Lirik",
          en: "Interactive Anthem Player & Synced Lyrics",
        },
        caption: {
          id: "Fitur interaktif pemutar audio Mars Universitas Battuta dengan sinkronisasi bait lirik real-time yang dapat diklik untuk melompat ke bagian lagu.",
          en: "Interactive custom audio player for Universitas Battuta's official anthem with clickable synchronized lyric stanza navigation.",
        },
        image: "/media/projects/battuta-profile-mars.webp",
        category: { id: "Musik Resmi", en: "Official Music" },
      },
      {
        id: "ukm",
        title: {
          id: "Direktori Unit Kegiatan Mahasiswa (UKM)",
          en: "Student Activity Unit (UKM) Directory",
        },
        caption: {
          id: "Pusat eksplorasi komunitas dan organisasi mahasiswa seperti Pro.asta, Robotic Club, Accounting Club, dan English Club dilengkapi tautan mandiri.",
          en: "Student club and organizational hub covering tech (Pro.asta), robotics, accounting, and language clubs with direct website access.",
        },
        image: "/media/projects/battuta-profile-ukm.webp",
        category: { id: "Kemahasiswaan", en: "Student Affairs" },
      },
      {
        id: "visi-misi",
        title: {
          id: "Visi, Misi, Tujuan & Strategi Kampus",
          en: "Vision, Mission, Objectives & Strategy",
        },
        caption: {
          id: "Pemaparan arah strategis universitas menuju perguruan tinggi unggul berbasis entrepreneurship berdaya saing nasional dan internasional pada 2029.",
          en: "Institutional roadmap establishing the university as an entrepreneurship-driven higher education powerhouse by 2029.",
        },
        image: "/media/projects/battuta-profile-visi-misi.webp",
        category: { id: "Profil Kampus", en: "Campus Profile" },
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Turbopack",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "3 Fakultas",
        label: { id: "9 Program Studi", en: "9 Study Programs" },
        description: {
          id: "Informasi akademik terstruktur dengan akreditasi 'Baik Sekali'",
          en: "Structured academic offerings accredited 'Baik Sekali'",
        },
      },
      {
        value: "Multilingual",
        label: { id: "Bahasa ID & EN", en: "ID & EN Support" },
        description: {
          id: "Mendukung calon mahasiswa lokal dan audiens internasional",
          en: "Bilingual localized interface for domestic and global audiences",
        },
      },
      {
        value: "Interactive",
        label: { id: "Pemutar Mars & UKM", en: "Audio & UKM Hub" },
        description: {
          id: "Player audio Mars kampus dengan sinkronisasi lirik interaktif",
          en: "Custom audio player with synchronized real-time lyrics",
        },
      },
      {
        value: "100%",
        label: { id: "Responsive & Modern", en: "Responsive & Modern" },
        description: {
          id: "Performa optimal di mobile, tablet, hingga desktop resolusi tinggi",
          en: "Optimized performance across mobile, tablet, and high-res desktops",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "calon-mahasiswa",
        roleTitle: { id: "Untuk Calon Mahasiswa & Orang Tua", en: "For Prospective Students & Parents" },
        roleBadge: { id: "Akses PMB", en: "Admissions" },
        summary: {
          id: "Menyediakan informasi lengkap seputar program studi, biaya kuliah terjangkau, beasiswa KIP-Kuliah, dan formulir pendaftaran online terpadu.",
          en: "Provides comprehensive information on degree programs, affordable tuition, scholarships, and streamlined online admissions.",
        },
        items: [
          {
            id: "pmb-prodi",
            iconName: "book",
            title: {
              id: "Katalog Fakultas & Program Studi",
              en: "Faculty & Degree Catalog",
            },
            desc: {
              id: "Jelajahi kurikulum, prospek kerja, dan gelar lulusan dari 3 fakultas dan 9 program studi.",
              en: "Explore curriculums, career prospects, and degrees across 3 faculties and 9 undergraduate programs.",
            },
            tag: { id: "Lengkap", en: "Comprehensive" },
          },
          {
            id: "pmb-daftar",
            iconName: "check-circle",
            title: {
              id: "Akses Jalur Pendaftaran Cepat",
              en: "Direct Admissions Portal Access",
            },
            desc: {
              id: "Tautan satu klik langsung menuju portal PMB online untuk pengisian formulir pendaftaran mahasiswa baru.",
              en: "One-click direct routing to the online PMB admissions portal for seamless student registration.",
            },
            tag: { id: "Satu Klik", en: "One-Click" },
          },
          {
            id: "pmb-fasilitas",
            iconName: "award",
            title: {
              id: "Sarana & Prasarana Kampus Modern",
              en: "Modern Campus Facilities & Tech",
            },
            desc: {
              id: "Galeri fasilitas ruang kelas modern, Wi-Fi di setiap lantai, laboratorium komputer, dan gedung baru.",
              en: "Interactive gallery of state-of-the-art classrooms, campus-wide Wi-Fi, labs, and modern buildings.",
            },
            tag: { id: "Fasilitas Lengkap", en: "Modern Facilities" },
          },
          {
            id: "pmb-kontak",
            iconName: "users",
            title: {
              id: "Layanan Chat & Informasi Resmi",
              en: "Official WhatsApp & Inquiry Desk",
            },
            desc: {
              id: "Akses langsung konsultasi melalui WhatsApp resmi kampus dan email pelayanan informasi akademik.",
              en: "Instant access to official WhatsApp admissions support and institutional contact emails.",
            },
            tag: { id: "Respon Cepat", en: "Quick Help" },
          },
        ],
      },
      {
        roleKey: "mahasiswa",
        roleTitle: { id: "Untuk Sivitas Akademika", en: "For Students & Campus Community" },
        roleBadge: { id: "Ekosistem Kampus", en: "Campus Ecosystem" },
        summary: {
          id: "Menghubungkan sivitas akademika dengan seluruh sistem operasional digital kampus dan aktivitas kemahasiswaan.",
          en: "Connects students and campus members to core digital operational portals and extracurricular activities.",
        },
        items: [
          {
            id: "civ-mars",
            iconName: "music",
            title: {
              id: "Pemutar Mars Kampus & Lirik Interaktif",
              en: "Interactive Anthem Player & Synced Lyrics",
            },
            desc: {
              id: "Dengarkan lagu resmi Mars Universitas Battuta dengan pemutar audio khusus dan baris lirik yang dapat diklik.",
              en: "Listen to the official university anthem with a custom audio player and synchronized clickable lyrics.",
            },
            tag: { id: "Interaktif", en: "Interactive" },
          },
          {
            id: "civ-ukm",
            iconName: "compass",
            title: {
              id: "Direktori Unit Kegiatan Mahasiswa",
              en: "Student Clubs & Organization Hub",
            },
            desc: {
              id: "Daftar UKM akademik dan minat bakat seperti Pro.asta, Battuta Robotic Club, Accounting Club, dan English Club.",
              en: "Directory of academic and interest-based clubs including Pro.asta, Robotics, Accounting, and English clubs.",
            },
            tag: { id: "Komunitas", en: "Community" },
          },
          {
            id: "civ-siakad",
            iconName: "globe",
            title: {
              id: "Pintu Masuk Portal SIAKAD & E-Learning",
              en: "Gateway to SIAKAD & E-Learning",
            },
            desc: {
              id: "Akses cepat ke portal akademik SIAKAD, platform pembelajaran daring (LMS), dan sistem Tracer Study.",
              en: "Instant single-click gateway to SIAKAD academic ERP, E-Learning LMS, and alumni Tracer Study.",
            },
            tag: { id: "Terintegrasi", en: "Integrated" },
          },
          {
            id: "civ-berita",
            iconName: "file-text",
            title: {
              id: "Warta Berita & Agenda Kampus",
              en: "Campus News & Event Schedules",
            },
            desc: {
              id: "Update berkala mengenai seminar nasional, prestasi mahasiswa, pengumuman perkuliahan, dan agenda akademik.",
              en: "Regular updates on national conferences, student achievements, lecture schedules, and announcements.",
            },
            tag: { id: "Terbaru", en: "Up to Date" },
          },
        ],
      },
      {
        roleKey: "institusi",
        roleTitle: { id: "Untuk Lembaga & Penjaminan Mutu", en: "For Institutional Quality & Research" },
        roleBadge: { id: "Kelembagaan", en: "Institutional Hub" },
        summary: {
          id: "Publikasi transparansi kelembagaan, penjaminan mutu internal (LPM), dan penelitian serta pengabdian masyarakat (LPPM).",
          en: "Showcases institutional governance, internal quality assurance (LPM), and research & community outreach (LPPM).",
        },
        items: [
          {
            id: "inst-lpm",
            iconName: "shield",
            title: {
              id: "Portal Lembaga Penjaminan Mutu (LPM)",
              en: "Quality Assurance Institute (LPM)",
            },
            desc: {
              id: "Integrasi dokumen standar mutu, evaluasi akademik internal, dan instrumen akreditasi perguruan tinggi.",
              en: "Integration of quality standards, internal academic audits, and higher education accreditation files.",
            },
            tag: { id: "Mutu Kampus", en: "Quality Standard" },
          },
          {
            id: "inst-lppm",
            iconName: "book",
            title: {
              id: "Lembaga Penelitian & Pengabdian (LPPM)",
              en: "Research & Community Service (LPPM)",
            },
            desc: {
              id: "Publikasi jurnal ilmiah, hilirisasi riset dosen dan mahasiswa, serta program pengabdian kepada masyarakat.",
              en: "Publication of scientific journals, faculty-student research initiatives, and community service projects.",
            },
            tag: { id: "Riset & Pengabdian", en: "Research Hub" },
          },
          {
            id: "inst-struktur",
            iconName: "users",
            title: {
              id: "Struktur Organisasi & Rektorat",
              en: "Organizational Structure & Rectorate",
            },
            desc: {
              id: "Transparansi jajaran pimpinan universitas, dekan fakultas, dan kepala program studi.",
              en: "Transparent institutional leadership hierarchy, faculty deans, and academic department heads.",
            },
            tag: { id: "Transparan", en: "Transparent" },
          },
          {
            id: "inst-sejarah",
            iconName: "calendar",
            title: {
              id: "Sejarah & Transformasi Kampus",
              en: "University Heritage & Evolution",
            },
            desc: {
              id: "Perjalanan transformasi dari Institut Teknologi dan Bisnis Sumatera Utara menjadi Universitas Battuta yang mandiri.",
              en: "Chronicles the evolution from ITB-SU into modern autonomous Universitas Battuta.",
            },
            tag: { id: "Historis", en: "Heritage" },
          },
        ],
      },
      {
        roleKey: "publik",
        roleTitle: { id: "Untuk Mitra & Kerjasama Publik", en: "For Partners & Public Relations" },
        roleBadge: { id: "Hubungan Luar", en: "Public Relations" },
        summary: {
          id: "Membangun citra kampus entrepreneurship yang terbuka bagi kemitraan industri, magang nasional, dan pertukaran internasional.",
          en: "Fosters an entrepreneurial university image welcoming industry partnerships, internships, and global exchange.",
        },
        items: [
          {
            id: "pub-visi",
            iconName: "award",
            title: {
              id: "Arah Visi Entrepreneurship 2029",
              en: "Entrepreneurial 2029 Vision Target",
            },
            desc: {
              id: "Target institusi menjadi perguruan tinggi unggul berbasis kewirausahaan dengan daya saing global.",
              en: "Institutional roadmap to become a premier entrepreneurship-based university with global competitiveness.",
            },
            tag: { id: "Visi 2029", en: "Vision 2029" },
          },
          {
            id: "pub-i18n",
            iconName: "globe",
            title: {
              id: "Akses Multibahasa (ID & EN)",
              en: "Bilingual International Interface",
            },
            desc: {
              id: "Fitur alih bahasa Indonesia dan Inggris untuk menyambut mahasiswa asing dan mitra universitas luar negeri.",
              en: "Bilingual localization (Indonesian/English) catering to international prospects and academic partners.",
            },
            tag: { id: "Global", en: "Global Ready" },
          },
          {
            id: "pub-prestasi",
            iconName: "sparkles",
            title: {
              id: "Etalase Prestasi & Kampus Berdampak",
              en: "Showcase of Impact & Achievements",
            },
            desc: {
              id: "Menampilkan pencapaian riset, kompetisi teknologi, dan kiprah sivitas akademika bagi masyarakat luas.",
              en: "Highlights research milestones, tech competition awards, and student contributions to broader society.",
            },
            tag: { id: "Berdampak", en: "High Impact" },
          },
          {
            id: "pub-legalitas",
            iconName: "shield",
            title: {
              id: "Legalitas & Akreditasi Resmi",
              en: "Official Accreditations & Registry",
            },
            desc: {
              id: "Informasi legalitas BAN-PT / LAMEMBA / LAM INFOKOM dan izin operasional resmi Kemendiktisaintek.",
              en: "Official accreditation records and higher education operating licenses validated transparently.",
            },
            tag: { id: "Terverifikasi", en: "Verified" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "ui-flow",
        topic: { id: "Tampilan Visual & Identitas Digital", en: "Visual Design & Digital Branding" },
        before: {
          id: "Website profil konvensional dengan tampilan statis, navigasi kaku, dan tata letak yang kurang optimal di smartphone.",
          en: "Conventional static profile layout with rigid navigation and subpar responsiveness on mobile devices.",
        },
        after: {
          id: "Desain modern modern, arsitektur Next.js & Tailwind yang sangat cepat, responsif penuh, serta showcase fasilitas kampus baru.",
          en: "Modern visual architecture on Next.js & Tailwind, blazing-fast speed, 100% responsiveness, and high-impact campus showcases.",
        },
      },
      {
        id: "prodi-flow",
        topic: { id: "Akses Informasi Fakultas & Program Studi", en: "Faculties & Degree Navigation" },
        before: {
          id: "Informasi program studi terpisah-pisah tanpa rincian akreditasi dan alur pendaftaran yang jelas.",
          en: "Scattered department information without clear accreditation status or streamlined admission guidance.",
        },
        after: {
          id: "Katalog terstruktur 3 Fakultas dan 9 Program Studi lengkap dengan badge akreditasi 'Baik Sekali' dan tautan PMB langsung.",
          en: "Structured catalog of 3 Faculties & 9 Study Programs with official 'Baik Sekali' badges and direct admissions links.",
        },
      },
      {
        id: "mars-flow",
        topic: { id: "Media Interaktif & Identitas Musik", en: "Interactive Media & Anthem Experience" },
        before: {
          id: "Lirik mars kampus hanya disajikan dalam bentuk teks statis tanpa audio pendukung.",
          en: "University anthem provided only as plain static text without any audio listening integration.",
        },
        after: {
          id: "Pemutar audio Mars terintegrasi dengan penyorotan lirik tersinkronisasi yang dapat diklik langsung untuk melompat bait lagu.",
          en: "Integrated custom anthem audio player with synchronized real-time stanza highlighting and jump-to-verse playback.",
        },
      },
      {
        id: "ekosistem-flow",
        topic: { id: "Integrasi Ekosistem Digital Kampus", en: "Campus Digital Ecosystem Integration" },
        before: {
          id: "Portal SIAKAD, PMB, E-Learning, dan LPPM berdiri sendiri-sendiri tanpa titik temu navigasi terpusat.",
          en: "SIAKAD, Admissions, E-learning, and LPPM systems stood disconnected without a centralized navigation gateway.",
        },
        after: {
          id: "Single gateway navigasi terpadu yang memudahkan seluruh sivitas akademika menjangkau portal manapun dengan satu klik.",
          en: "Unified single-gateway navigation enabling the entire campus community to seamlessly navigate between systems with one click.",
        },
      },
    ],
  },
];

