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
    slug: "universitas-battuta-elearning-system",
    type: "web",
    acronym: "E-LEARNING BATTUTA",
    title: {
      id: "Sistem Manajemen Pembelajaran (E-Learning) Universitas Battuta",
      en: "Universitas Battuta Learning Management System (E-Learning)",
    },
    subtitle: {
      id: "Platform Perkuliahan Daring Terpadu (Kelas Virtual, Materi Kuliah, Presensi Daring, Kuis & Penugasan Terintegrasi Jadwal KRS)",
      en: "Integrated Digital Learning Platform (Virtual Classrooms, Course Modules, Online Attendance, Quizzes & Assignments Synced with KRS Timetables)",
    },
    category: {
      id: "Fullstack Web App · Learning Management System (LMS)",
      en: "Fullstack Web App · Learning Management System (LMS)",
    },
    summary: {
      id: "Ekosistem pembelajaran digital kampus terintegrasi yang memfasilitasi perkuliahan hybrid: distribusi modul materi per pertemuan, pengumpulan tugas daring terstruktur, evaluasi kuis, serta presensi sesi kelas yang tersinkronisasi otomatis dengan jadwal KRS bagi ribuan mahasiswa dan dosen.",
      en: "Integrated campus digital learning ecosystem facilitating hybrid and blended lectures: session-by-session module distribution, structured online assignment submissions, quiz evaluations, and automated session attendance synchronized with KRS schedules for thousands of students and faculty.",
    },
    overview: {
      id: "E-Learning Universitas Battuta dibangun dari fondasi awal untuk menyediakan media belajar digital yang tangguh, interaktif, dan mudah digunakan di desktop maupun mobile. Frontend dibangun dengan React, Vite, dan Tailwind CSS untuk pengalaman navigasi yang instan, ditopang oleh backend arsitektur modular NestJS dan database PostgreSQL berkinerja tinggi yang menangani ribuan transaksi akademik harian secara stabil.",
      en: "E-Learning Universitas Battuta was engineered from the ground up to deliver a robust, interactive, and responsive digital learning environment across desktop and mobile devices. The frontend leverages React, Vite, and Tailwind CSS for snappy navigation, backed by a modular NestJS architecture and high-performance PostgreSQL database handling thousands of daily academic transactions.",
    },
    context: {
      id: "Kebutuhan perkuliahan hybrid dan blended learning menuntut adanya sistem LMS independen kampus yang cepat, tidak lambat diakses ribuan civitas akademika, serta terhubung selaras dengan struktur kurikulum dan jadwal mata kuliah di SIAKAD.",
      en: "The demand for hybrid and blended learning required a dedicated, high-speed university LMS capable of handling concurrent usage without lag, tightly integrated with the curriculum structure and timetable from SIAKAD.",
    },
    contribution: {
      id: "Bertindak sebagai Lead Fullstack Developer dan UI/UX Designer secara mandiri (Solo Project). Merancang antarmuka modern yang bersih dan intuitif, membangun RESTful API performa tinggi menggunakan NestJS, merancang skema relasional PostgreSQL, serta mengonfigurasi dan mengelola deployment server Linux VPS.",
      en: "Acted as solo Lead Fullstack Developer and UI/UX Designer. Designed clean, modern, and intuitive user interfaces, implemented high-performance RESTful APIs with NestJS, modeled PostgreSQL relational schemas, and managed end-to-end deployment on Linux VPS.",
    },
    solution: {
      id: "Membangun arsitektur SPA yang ringan menggunakan React + Vite dan Tailwind CSS, ditopang backend NestJS berstandar enterprise dengan validasi ketat, autentikasi aman JWT, query PostgreSQL yang teroptimasi, serta manajemen file materi dan tugas kuliah yang terstruktur.",
      en: "Constructed a lightweight SPA architecture using React + Vite and Tailwind CSS, backed by enterprise-grade NestJS micro-services with robust validation, secure JWT auth, optimized PostgreSQL queries, and organized course asset storage.",
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
    liveUrl: "https://elearning.battuta.ac.id",
    image: "/media/projects/elearning-battuta-login.webp",
    screenshots: [
      {
        id: "login",
        title: {
          id: "Portal Masuk Sivitas Akademika",
          en: "Academic Community Login Gateway",
        },
        caption: {
          id: "Gerbang autentikasi terpusat dosen dan mahasiswa dengan antarmuka clean light mode yang modern, tata kelola akses aman, dan identitas visual kampus.",
          en: "Centralized login gateway for faculty and students featuring a modern clean light interface, secure authentication, and campus visual identity.",
        },
        image: "/media/projects/elearning-battuta-login.webp",
        category: { id: "Portal Utama", en: "Main Portal" },
      },
      {
        id: "dashboard",
        title: {
          id: "Dashboard Perkuliahan Dosen",
          en: "Faculty Lecture Dashboard",
        },
        caption: {
          id: "Pusat aktivitas perkuliahan: ringkasan jadwal kelas harian, status persiapan sesi pertemuan perkuliahan, dan pengingat evaluasi tugas.",
          en: "Central teaching hub: daily lecture schedule overview, meeting session readiness tracking, and pending grading reminders.",
        },
        image: "/media/projects/elearning-battuta-dashboard.webp",
        category: { id: "Dashboard", en: "Dashboard" },
      },
      {
        id: "classes",
        title: {
          id: "Manajemen Kelas & Beban SKS Semester",
          en: "Course Management & Semester Credit Load",
        },
        caption: {
          id: "Katalog seluruh kelas yang diampu pada semester aktif tersinkronisasi dari SIAKAD, lengkap dengan filter sesi, pencarian cepat, dan monitoring peserta.",
          en: "Complete catalog of active semester courses synced from SIAKAD, featuring session filters, quick search, and student count metrics.",
        },
        image: "/media/projects/elearning-battuta-classes.webp",
        category: { id: "Kelas Saya", en: "My Classes" },
      },
      {
        id: "pertemuan",
        title: {
          id: "Ruang Perkuliahan & Distribusi 16 Pertemuan",
          en: "Classroom Hub & 16-Session Module Syllabus",
        },
        caption: {
          id: "Struktur silabus per pertemuan (Pertemuan 1 - 16) dengan kontrol materi modul kuliah, video pembelajaran, sesi presensi, dan kuis interaktif.",
          en: "Structured 16-session syllabus featuring lecture module controls, video materials, attendance sessions, and interactive quizzes.",
        },
        image: "/media/projects/elearning-battuta-pertemuan.webp",
        category: { id: "Modul Pertemuan", en: "Courseware" },
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "2,000+",
        label: { id: "Mahasiswa & Dosen", en: "Students & Faculty" },
        description: {
          id: "Digunakan aktif setiap semester untuk kegiatan belajar mengajar hybrid",
          en: "Actively utilized every semester for hybrid course delivery",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "Fullstack & UI/UX", en: "Solo Fullstack" },
        description: {
          id: "Dikerjakan mandiri mulai dari desain UI Figma, frontend React, backend NestJS, hingga deployment server",
          en: "Independently engineered from Figma UI design, React frontend, NestJS backend, to Linux VPS deployment",
        },
      },
      {
        value: "Realtime",
        label: { id: "Sinkronisasi KRS", en: "KRS Timetable Sync" },
        description: {
          id: "Kelas dan jadwal perkuliahan terhubung langsung dengan data akademik kampus",
          en: "Classes and course timetables seamlessly connected with academic system data",
        },
      },
      {
        value: "100%",
        label: { id: "Paperless Assignment", en: "Paperless Assignment" },
        description: {
          id: "Pengumpulan tugas, pembagian materi ajar, dan rekap nilai terselenggara secara digital",
          en: "Assignment submissions, lecture modules, and evaluation recap managed digitally",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "mahasiswa",
        roleTitle: { id: "Untuk Mahasiswa", en: "For Students" },
        roleBadge: { id: "Akses Mahasiswa", en: "Student Portal" },
        summary: {
          id: "Memberikan ruang belajar digital yang fleksibel, akses modul kuliah, pengumpulan tugas daring, dan absensi per sesi perkuliahan.",
          en: "Provides a flexible digital learning space, module access, online assignment submissions, and per-session attendance.",
        },
        items: [
          {
            id: "m-kelas",
            iconName: "book",
            title: {
              id: "Ruang Perkuliahan Virtual",
              en: "Virtual Classroom Hub",
            },
            desc: {
              id: "Akses daftar kelas aktif semester ini lengkap dengan rincian dosen pengampu, silabus, dan jadwal pertemuan.",
              en: "Access active course lists for the semester with lecturer profiles, syllabus, and meeting schedules.",
            },
            tag: { id: "Perkuliahan", en: "Lectures" },
          },
          {
            id: "m-materi",
            iconName: "file-text",
            title: {
              id: "Modul & Bahan Ajar Terstruktur",
              en: "Structured Learning Modules",
            },
            desc: {
              id: "Unduh presentasi kuliah, modul PDF, dan rekaman materi perkuliahan per sesi pertemuan kapan saja.",
              en: "Download lecture slides, PDF modules, and meeting resources organized session by session.",
            },
            tag: { id: "Materi Kuliah", en: "Courseware" },
          },
          {
            id: "m-presensi",
            iconName: "check-circle",
            title: {
              id: "Presensi Daring Per Pertemuan",
              en: "Per-Session Online Attendance",
            },
            desc: {
              id: "Konfirmasi kehadiran kuliah secara mandiri selama sesi absensi dibuka oleh dosen pengampu.",
              en: "Confirm class attendance independently during open attendance windows initiated by the lecturer.",
            },
            tag: { id: "Kehadiran", en: "Attendance" },
          },
          {
            id: "m-tugas",
            iconName: "award",
            title: {
              id: "Pengumpulan Tugas & Kuis Interaktif",
              en: "Assignment Submissions & Quizzes",
            },
            desc: {
              id: "Unggah lembar tugas sebelum batas waktu dan ikuti kuis evaluasi pemahaman materi secara daring.",
              en: "Upload homework before deadlines and participate in online comprehension evaluation quizzes.",
            },
            tag: { id: "Evaluasi", en: "Evaluation" },
          },
        ],
      },
      {
        roleKey: "dosen",
        roleTitle: { id: "Untuk Dosen", en: "For Lecturers" },
        roleBadge: { id: "Akses Dosen", en: "Faculty Portal" },
        summary: {
          id: "Memfasilitasi dosen mendistribusikan bahan ajar, membuka sesi presensi, serta menilai tugas mahasiswa secara efisien dan terorganisir.",
          en: "Empowers faculty to distribute courseware, manage attendance sessions, and evaluate student assignments efficiently.",
        },
        items: [
          {
            id: "d-materi",
            iconName: "book",
            title: {
              id: "Manajemen Bahan Ajar & Sesi",
              en: "Session & Courseware Management",
            },
            desc: {
              id: "Unggah materi presentasi, referensi bacaan, dan instruksi pembelajaran untuk setiap pertemuan kuliah.",
              en: "Upload lecture slides, reading references, and learning instructions for each class meeting.",
            },
            tag: { id: "Bahan Ajar", en: "Courseware" },
          },
          {
            id: "d-absen",
            iconName: "check-circle",
            title: {
              id: "Kontrol Presensi Kelas",
              en: "Class Attendance Control",
            },
            desc: {
              id: "Buka dan tutup sesi presensi perkuliahan dengan batas waktu tertentu serta rekap kehadiran mahasiswa.",
              en: "Open and close attendance sessions with customizable time limits and instant presence audit.",
            },
            tag: { id: "Presensi", en: "Attendance" },
          },
          {
            id: "d-tugas",
            iconName: "file-text",
            title: {
              id: "Penugasan & Penilaian Mahasiswa",
              en: "Assignment Grading & Review",
            },
            desc: {
              id: "Buat tugas dengan rubrik penilaian, periksa berkas unggahan mahasiswa, dan berikan feedback nilai langsung.",
              en: "Create assignments with scoring rubrics, review submitted student files, and provide direct grade feedback.",
            },
            tag: { id: "Penilaian", en: "Grading" },
          },
          {
            id: "d-monitoring",
            iconName: "users",
            title: {
              id: "Monitoring Partisipasi Belajar",
              en: "Learning Engagement Monitoring",
            },
            desc: {
              id: "Pantau tingkat keaktifan mahasiswa, statistik pengerjaan tugas, dan progress pembelajaran kelas.",
              en: "Monitor student engagement levels, assignment completion rates, and overall class learning progress.",
            },
            tag: { id: "Analitik", en: "Analytics" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "materi-flow",
        topic: { id: "Distribusi Bahan Ajar Perkuliahan", en: "Course Material Distribution" },
        before: {
          id: "Slide materi kuliah dan silabus dibagikan lewat grup chat WhatsApp atau flashdisk yang sering hilang dan tidak terarsipkan.",
          en: "Lecture slides and syllabus shared via chat groups or USB drives that easily get lost without archival.",
        },
        after: {
          id: "Repositori materi kuliah tertata rapi per pertemuan (Pertemuan 1 - 16), selalu dapat diunduh mahasiswa kapan saja.",
          en: "Structured courseware repository per session (Sessions 1 - 16), permanently accessible to enrolled students anytime.",
        },
      },
      {
        id: "presensi-flow",
        topic: { id: "Pencatatan Presensi Sesi Kelas", en: "Class Meeting Attendance Recording" },
        before: {
          id: "Absensi mengandalkan lembaran kertas tanda tangan manual yang menyita waktu kuliah dan rawan kecurangan.",
          en: "Roll call relied on physical paper sign sheets that consumed class time and were prone to proxy attendance.",
        },
        after: {
          id: "Presensi digital berbasis sesi dengan token/waktu validasi otomatis yang langsung tersimpan dalam database PostgreSQL.",
          en: "Digital session-based attendance with automatic validation windows stored directly in PostgreSQL.",
        },
      },
      {
        id: "tugas-flow",
        topic: { id: "Pengumpulan & Pemeriksaan Tugas", en: "Assignment Submissions & Grading" },
        before: {
          id: "Tugas dikirim via email atau cetak fisik kertas; dosen kesulitan memantau mahasiswa yang terlambat mengumpulkan.",
          en: "Assignments submitted via email or paper prints; difficult to track late submissions and provide feedback.",
        },
        after: {
          id: "Pengumpulan tugas terpusat dengan penanda waktu (timestamp) otomatis, pencegahan keterlambatan, dan lembar nilai terpadu.",
          en: "Centralized uploads with automated timestamps, deadline enforcement, and integrated grading ledger.",
        },
      },
      {
        id: "arsip-flow",
        topic: { id: "Evaluasi & Riwayat Pembelajaran Semester", en: "Semester Learning History & Evaluation" },
        before: {
          id: "Riwayat perkuliahan semester lalu hilang setelah kelas selesai tanpa dokumentasi pembelajaran yang terstruktur.",
          en: "Previous semester learning logs vanished after courses ended without structured institutional documentation.",
        },
        after: {
          id: "Arsip lengkap perkuliahan, riwayat materi, dan rekap keaktifan tersimpan aman dan terhubung dengan ekosistem kampus.",
          en: "Comprehensive lecture logs, courseware archives, and engagement recaps securely maintained in the campus ecosystem.",
        },
      },
    ],
  },
  {
    slug: "universitas-battuta-hris-system",
    type: "web",
    acronym: "HRIS BATTUTA",
    title: {
      id: "Sistem Informasi SDM & Presensi Kepegawaian (HRIS) Universitas Battuta",
      en: "Universitas Battuta Human Resource Information System (HRIS)",
    },
    subtitle: {
      id: "Aplikasi Kepegawaian Mobile-First (Presensi Biometrik Wajah, Validasi Radius Geofencing, Manajemen Cuti, Lembur & Integrasi Portal SSO)",
      en: "Mobile-First HR Platform (Biometric Face Verification, Geofencing Radius Validation, Leave & Overtime Management, and SSO Integration)",
    },
    category: {
      id: "Fullstack Web App · Sistem Informasi SDM & Presensi",
      en: "Fullstack Web App · HRIS & Biometric Attendance",
    },
    summary: {
      id: "Platform layanan mandiri SDM kampus berbasis mobile-first yang mengotomasi pencatatan kehadiran pegawai dan dosen melalui validasi radius GPS (geofencing) 25 meter dan verifikasi biometrik wajah, pengajuan cuti tahunan, pelaporan sesi lembur, hingga integrasi akun terpusat dengan Portal SSO Universitas Battuta.",
      en: "Mobile-first university human resource self-service platform automating staff and faculty attendance through 25-meter GPS geofencing and facial biometric verification, annual leave requests, overtime tracking, and unified authentication via the Universitas Battuta SSO Portal.",
    },
    overview: {
      id: "HRIS Universitas Battuta dirancang dengan paradigma mobile-first yang mengutamakan kecepatan akses dan kenyamanan interaksi di smartphone pegawai. Menggunakan React, Vite, dan Tailwind CSS dengan styling native-app feel, aplikasi ini terhubung ke backend NestJS dan database PostgreSQL berkeamanan tinggi untuk memastikan seluruh catatan waktu kerja, koordinat presensi, dan berkas pengajuan SDM tervalidasi secara presisi dan anti-fraud.",
      en: "HRIS Universitas Battuta was engineered with a mobile-first paradigm prioritizing fast load times and seamless smartphone interactions. Built with React, Vite, and Tailwind CSS delivering a native app feel, it connects to a secure NestJS and PostgreSQL backend to ensure all work hours, GPS coordinates, and HR submissions are validated with anti-fraud precision.",
    },
    context: {
      id: "Pencatatan absensi manual dengan mesin fingerprint konvensional sering menimbulkan antrean, sulit dipantau secara realtime oleh pimpinan, dan rentan terhadap ketidaksesuaian lokasi kerja staf di lingkungan kampus.",
      en: "Manual paper attendance and conventional fingerprint clocks created physical queues, made real-time monitoring difficult for leadership, and lacked flexible location validation across campus facilities.",
    },
    contribution: {
      id: "Bertindak sebagai Lead Fullstack Developer dan UI/UX Designer secara mandiri (Solo Project). Merancang antarmuka mobile-first bernuansa modern dan ramah sentuhan, mengintegrasikan API browser untuk verifikasi biometrik wajah dan deteksi geofencing GPS, serta merancang skema database PostgreSQL dan API NestJS kepegawaian.",
      en: "Acted as solo Lead Fullstack Developer and UI/UX Designer. Designed a modern touch-friendly mobile-first UI, integrated browser APIs for facial biometric verification and GPS geofencing, and engineered NestJS HR APIs backed by PostgreSQL.",
    },
    solution: {
      id: "Mengembangkan aplikasi web mobile-first dengan navigasi bottom-bar intuitif, sistem presensi 2-langkah (validasi radius GPS Gedung Administrasi + pengenalan wajah), kartu status jam kerja realtime, manajemen cuti & lembur digital, serta audit log kehadiran yang transparan.",
      en: "Developed a mobile-first web app featuring an intuitive bottom navigation bar, 2-step attendance workflow (GPS campus geofencing + facial recognition), real-time work duration tracking, digital leave/overtime workflows, and transparent audit logs.",
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
    liveUrl: "https://hris.battuta.ac.id",
    image: "/media/projects/hris-battuta-login.webp",
    screenshots: [
      {
        id: "dashboard",
        title: {
          id: "Dashboard Mandiri Kepegawaian (Mobile)",
          en: "Employee Self-Service Dashboard (Mobile)",
        },
        caption: {
          id: "Beranda mobile menampilkan status kehadiran hari ini, durasi kerja berjalan realtime, akses cepat menu SDM, jadwal shift, dan histori presensi terakhir.",
          en: "Mobile homepage featuring real-time attendance status, active work duration counter, quick HR action shortcuts, shift schedule, and recent attendance history.",
        },
        image: "/media/projects/hris-battuta-dashboard.webp",
        category: { id: "Mobile Dashboard", en: "Mobile Dashboard" },
      },
      {
        id: "absen",
        title: {
          id: "Presensi Biometrik & Geofencing GPS",
          en: "Biometric & GPS Geofenced Attendance",
        },
        caption: {
          id: "Alur presensi 2-langkah dengan validasi radius lokasi GPS (Gedung Administrasi radius 25 meter) dan verifikasi biometrik wajah anti-titip absen.",
          en: "Two-step attendance flow combining GPS geofence radius validation (25m campus perimeter) and facial biometric verification to prevent attendance fraud.",
        },
        image: "/media/projects/hris-battuta-absen.webp",
        category: { id: "Presensi Digital", en: "Digital Attendance" },
      },
      {
        id: "rekap",
        title: {
          id: "Rekap Kehadiran & Statistik Disiplin",
          en: "Attendance History & Discipline Metrics",
        },
        caption: {
          id: "Laporan rekapitulasi jam masuk dan jam pulang per hari, indikator ketepatan waktu, dan persentase kedisiplinan kerja bulanan.",
          en: "Detailed daily check-in and check-out ledger, punctuality status indicators, and monthly work discipline percentage.",
        },
        image: "/media/projects/hris-battuta-rekap.webp",
        category: { id: "Rekap & Statistik", en: "Records & Stats" },
      },
      {
        id: "face-scan",
        title: {
          id: "Presensi Biometrik Wajah & Liveness Detection",
          en: "Facial Biometric & Liveness Verification",
        },
        caption: {
          id: "Pemindaian biometrik wajah realtime dengan tantangan liveness acak (kedipan mata, toleh arah) berbasis model InsightFace untuk memastikan keaslian kehadiran tanpa manipulasi foto.",
          en: "Real-time facial biometric scanning with dynamic randomized liveness challenges (eye blink, head turning) powered by InsightFace AI to prevent photo and spoofing fraud.",
        },
        image: "/media/projects/hris-battuta-face-scan.webp",
        category: { id: "Biometrik AI", en: "AI Biometrics" },
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "InsightFace / Biometric AI",
      "Geolocation API",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "25 m",
        label: { id: "Radius Geofencing", en: "Geofence Radius" },
        description: {
          id: "Validasi presensi akurat di titik koordinat Gedung Administrasi kampus",
          en: "Accurate attendance boundary locked to campus administration coordinates",
        },
      },
      {
        value: "2-Step",
        label: { id: "Verifikasi Kehadiran", en: "Dual Verification" },
        description: {
          id: "Kombinasi sensor lokasi GPS presisi dan verifikasi wajah biometrik",
          en: "Integrated precision GPS boundary and biometric facial recognition",
        },
      },
      {
        value: "Realtime",
        label: { id: "Durasi & Status Kerja", en: "Live Work Counter" },
        description: {
          id: "Perhitungan jam kerja dan status shift terupdate otomatis per detik",
          en: "Real-time shift calculation and active working hours counter",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "Fullstack & UI/UX", en: "Solo Fullstack" },
        description: {
          id: "Dikerjakan mandiri mulai dari desain mobile UI, frontend React, hingga backend NestJS",
          en: "Independently engineered from mobile UI design, React frontend, to NestJS backend",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "pegawai",
        roleTitle: { id: "Untuk Pegawai & Dosen", en: "For Staff & Faculty" },
        roleBadge: { id: "Akses Karyawan", en: "Staff Portal" },
        summary: {
          id: "Memudahkan pegawai mencatatkan kehadiran secara cepat dari smartphone, memantau histori jam kerja, dan mengajukan cuti tanpa birokrasi rumit.",
          en: "Enables staff to record attendance swiftly from smartphones, track work hours, and submit leave requests without bureaucratic friction.",
        },
        items: [
          {
            id: "p-absen",
            iconName: "check-circle",
            title: {
              id: "Presensi Mandiri Cepat",
              en: "Fast Self-Service Attendance",
            },
            desc: {
              id: "Absen masuk dan pulang hanya dengan beberapa sentuhan saat berada di dalam radius kampus.",
              en: "Clock in and out in seconds when physically inside the designated campus perimeter.",
            },
            tag: { id: "Presensi", en: "Attendance" },
          },
          {
            id: "p-durasi",
            iconName: "calendar",
            title: {
              id: "Monitoring Jam & Shift Kerja",
              en: "Shift & Work Hours Tracker",
            },
            desc: {
              id: "Pantau sisa waktu shift kerja hari ini dan total akumulasi jam kerja bulanan.",
              en: "Monitor active daily shift duration and total monthly work hour accumulation.",
            },
            tag: { id: "Jadwal", en: "Schedule" },
          },
          {
            id: "p-cuti",
            iconName: "file-text",
            title: {
              id: "Pengajuan Cuti & Izin Online",
              en: "Online Leave & Permit Requests",
            },
            desc: {
              id: "Kirim permohonan cuti tahunan dan izin kerja langsung dari aplikasi dengan status persetujuan transparan.",
              en: "Submit annual leave and permit requests directly from the app with transparent approval tracking.",
            },
            tag: { id: "Layanan SDM", en: "HR Service" },
          },
          {
            id: "p-sso",
            iconName: "shield",
            title: {
              id: "Keamanan Akun Terpadu SSO",
              en: "Unified SSO Security",
            },
            desc: {
              id: "Manajemen kredensial dan sesi login terpusat melalui gerbang Portal SSO Universitas Battuta.",
              en: "Centralized credential and session management through Universitas Battuta's SSO Gateway.",
            },
            tag: { id: "Keamanan", en: "Security" },
          },
        ],
      },
      {
        roleKey: "institusi",
        roleTitle: { id: "Untuk Manajemen & Biro SDM", en: "For HR Management" },
        roleBadge: { id: "Manajemen SDM", en: "HR Governance" },
        summary: {
          id: "Memberikan visibilitas penuh atas kehadiran seluruh pegawai, kepatuhan jam kerja, dan otomasi rekapitulasi data penggajian.",
          en: "Provides full visibility over employee attendance, shift compliance, and automated payroll reporting.",
        },
        items: [
          {
            id: "i-geofence",
            iconName: "compass",
            title: {
              id: "Pengendalian Radius Lokasi (Anti-Fraud)",
              en: "Location Perimeter Control (Anti-Fraud)",
            },
            desc: {
              id: "Mencegah kecurangan presensi palsu dengan verifikasi koordinat GPS dan validasi biometrik.",
              en: "Eliminates attendance spoofing through GPS geofencing and facial biometrics.",
            },
            tag: { id: "Anti-Fraud", en: "Anti-Fraud" },
          },
          {
            id: "i-rekap",
            iconName: "award",
            title: {
              id: "Rekapitulasi Disiplin Otomatis",
              en: "Automated Discipline Ledger",
            },
            desc: {
              id: "Kalkulasi otomatis hari masuk, keterlambatan, dan jam kerja efektif tanpa rekap kertas manual.",
              en: "Automatic calculation of check-ins, tardiness, and effective work hours without paper logs.",
            },
            tag: { id: "Otomasi", en: "Automation" },
          },
          {
            id: "i-cuti",
            iconName: "check-circle",
            title: {
              id: "Approval Cuti Terstruktur",
              en: "Structured Leave Approvals",
            },
            desc: {
              id: "Alur persetujuan cuti berjenjang yang langsung memotong sisa kuota hak cuti tahunan pegawai.",
              en: "Multi-tier leave approvals automatically deducting from the employee's annual leave balance.",
            },
            tag: { id: "Manajemen", en: "Management" },
          },
          {
            id: "i-sso",
            iconName: "settings",
            title: {
              id: "Integrasi Ekosistem Kampus",
              en: "Campus Ecosystem Integration",
            },
            desc: {
              id: "Terhubung selaras dengan database identitas pegawai dan ekosistem digital kampus lainnya.",
              en: "Seamlessly connected with employee master data and the broader digital campus ecosystem.",
            },
            tag: { id: "Terintegrasi", en: "Integrated" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "absen-flow",
        topic: { id: "Metode Pencatatan Kehadiran Kerja", en: "Attendance Logging Method" },
        before: {
          id: "Mesin fingerprint fisik yang sering macet, menimbulkan antrean panjang di pintu masuk, dan tidak fleksibel.",
          en: "Physical fingerprint clocks that jammed frequently, caused queues at entry points, and lacked flexibility.",
        },
        after: {
          id: "Presensi mandiri instan di smartphone pegawai dengan verifikasi radius geofencing 25 meter dan validasi biometrik wajah.",
          en: "Instant smartphone check-in featuring 25-meter GPS geofencing and anti-fraud facial biometric validation.",
        },
      },
      {
        id: "waktu-flow",
        topic: { id: "Pemantauan Jam Kerja & Disiplin", en: "Work Hour & Punctuality Tracking" },
        before: {
          id: "Rekap jam kerja staf harus diunduh manual dari mesin setiap akhir bulan, menyulitkan monitoring keterlambatan.",
          en: "Monthly manual data extraction from physical devices, making real-time tardiness oversight impossible.",
        },
        after: {
          id: "Dashboard realtime menghitung durasi kerja detik-per-detik, status keterlambatan otomatis, dan indeks kedisiplinan bulanan.",
          en: "Real-time dashboard computing work duration live, automatic tardiness status, and monthly discipline scores.",
        },
      },
      {
        id: "cuti-flow",
        topic: { id: "Pengajuan Cuti & Perizinan", en: "Leave & Permit Workflows" },
        before: {
          id: "Formulir kertas fisik yang harus ditandatangani manual oleh beberapa atasan dan rawan tercecer.",
          en: "Paper-based forms requiring multiple in-person signatures that were frequently misplaced.",
        },
        after: {
          id: "Pengajuan cuti digital satu pintu dengan kalkulasi sisa kuota cuti otomatis dan verifikasi persetujuan instan.",
          en: "Unified online leave submission with automatic balance deduction and instant digital approval status.",
        },
      },
      {
        id: "sso-flow",
        topic: { id: "Autentikasi & Keamanan Akun", en: "Authentication & Account Security" },
        before: {
          id: "Setiap sistem internal kampus menggunakan kredensial dan database login yang terpisah-pisah.",
          en: "Each internal campus system maintained disconnected user credentials and separate databases.",
        },
        after: {
          id: "Satu akun resmi kepegawaian terintegrasi dengan Portal SSO (Single Sign-On) Universitas Battuta.",
          en: "Single official employee identity seamlessly integrated with Universitas Battuta's SSO Portal.",
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
  {
    slug: "universitas-battuta-shortlink-system",
    type: "web",
    acronym: "SHORTLINK BATTUTA",
    title: {
      id: "Layanan Pemendek Tautan Resmi (Shortlink) Universitas Battuta",
      en: "Universitas Battuta Official URL Shortener & QR Management System",
    },
    subtitle: {
      id: "Platform Pemendek Tautan Kampus (Slug Kustom, Generator QR Code Instan, Analisis Klik & Integrasi SSO)",
      en: "Campus Shortlink Infrastructure (Custom Branded Slugs, Instant Dynamic QR Codes, Click Analytics & SSO Integration)",
    },
    category: {
      id: "Fullstack Web App · Infrastruktur Utilitas & Pengalihan Tautan",
      en: "Fullstack Web App · Utility Infrastructure & Link Redirection",
    },
    summary: {
      id: "Layanan pemendek tautan resmi kampus (domain s.battuta.ac.id) yang dirancang untuk menyederhanakan URL panjang pengumuman akademik, pendaftaran PMB, formulir wisuda, dan survei kampus menjadi tautan bermerek yang ringkas, mudah diingat, dapat dipantau statistik kliknya, dan dilengkapi generator QR Code otomatis beresolusi tinggi.",
      en: "Official university URL shortening service (powered by s.battuta.ac.id) designed to condense complex campus URLs—from admissions (PMB) to academic surveys—into clean, branded links with live click tracking and automatic high-resolution QR code generation.",
    },
    overview: {
      id: "Shortlink Universitas Battuta dibangun sebagai utilitas sentral untuk mendukung publikasi dan promosi informasi digital kampus. Menggunakan antarmuka desktop modern berbasis React dan Tailwind CSS, aplikasi ini memungkinkan staf dan pimpinan mengelola slug kustom, memantau trafik pengunjung secara realtime, mengunduh QR Code siap cetak, serta terintegrasi penuh dengan Single Sign-On (SSO) Universitas Battuta.",
      en: "Universitas Battuta Shortlink was engineered as a centralized utility to power digital campus communications. Built with a modern desktop UI using React and Tailwind CSS, it enables faculty and staff to manage branded custom slugs, track visitor engagement in real-time, export print-ready QR codes, and seamlessly authenticate via Universitas Battuta SSO.",
    },
    context: {
      id: "URL formulir online, survei akademik, dan sistem kampus seringkali sangat panjang, rumit untuk diketik secara manual pada brosur cetak atau slide presentasi, serta tidak memiliki pencatatan performa klik terpusat.",
      en: "Campus forms, academic surveys, and internal portal URLs were often unwieldy and hard to type from print flyers or lecture slides, lacking centralized click-through analytics.",
    },
    contribution: {
      id: "Bertindak sebagai Lead Fullstack Developer dan UI/UX Designer secara mandiri (Solo Project). Merancang arsitektur database relasional, antarmuka web responsif, engine pengalihan tautan berlatensi rendah, generator QR Code SVG/PNG otomatis, dan integrasi Single Sign-On kampus.",
      en: "Served as solo Lead Fullstack Developer and UI/UX Designer. Engineered relational data schema, responsive web interface, ultra-low latency redirection engine, automated SVG/PNG QR generator, and unified campus SSO integration.",
    },
    solution: {
      id: "Mengembangkan aplikasi pemendek tautan berstandar enterprise dengan dashboard manajemen intuitif, validasi slug kustom anti-duplikasi, tombol toggle aktif/nonaktif instan, generator QR Code sekali klik, dan tracking klik real-time.",
      en: "Engineered an enterprise-grade URL shortening platform featuring an intuitive management dashboard, anti-collision custom slug validation, instant active status toggles, one-click QR code export, and real-time click tracking.",
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
      id: "Live di Kampus / Digunakan Resmi",
      en: "Live in Production / Official Campus Utility",
    },
    client: {
      id: "Universitas Battuta",
      en: "Universitas Battuta",
    },
    liveUrl: "https://shortlink.battuta.ac.id",
    image: "/media/projects/shortlink-battuta-login.webp",
    screenshots: [
      {
        id: "dashboard",
        title: {
          id: "Dashboard Pengelolaan Tautan & Statistik Trafik",
          en: "Link Management Dashboard & Click Analytics",
        },
        caption: {
          id: "Pusat kontrol tautan kampus menampilkan daftar link aktif, URL tujuan, slug kustom s.battuta.ac.id, switch status aktif/nonaktif, dan total akumulasi klik pengunjung.",
          en: "Centralized link control panel displaying active URLs, destinations, custom s.battuta.ac.id slugs, active toggle switches, and total visitor click counts.",
        },
        image: "/media/projects/shortlink-battuta-dashboard.webp",
        category: { id: "Dashboard Tautan", en: "Link Dashboard" },
      },
      {
        id: "create",
        title: {
          id: "Formulir Pembuatan Tautan & Slug Kustom",
          en: "Shortlink Creation & Custom Slug Validation",
        },
        caption: {
          id: "Modal pembuatan tautan baru dengan validasi otomatis URL tujuan, judul deskriptif, dan kustomisasi slug bermerek (contoh: s.battuta.ac.id/pmb-2026).",
          en: "Creation modal with real-time target URL validation, descriptive titles, and custom branded slug assignment (e.g. s.battuta.ac.id/pmb-2026).",
        },
        image: "/media/projects/shortlink-battuta-create.webp",
        category: { id: "Pembuat Tautan", en: "Link Creator" },
      },
      {
        id: "qrcode",
        title: {
          id: "Generator QR Code Dinamis Siap Cetak",
          en: "Dynamic QR Code Generator & PNG Export",
        },
        caption: {
          id: "Fitur pembuatan QR Code otomatis beresolusi tinggi dengan tombol Unduh PNG instan untuk dicetak pada brosur, banner PMB, dan poster kegiatan kampus.",
          en: "Automated high-resolution QR code generator with one-click PNG download for physical brochures, admissions banners, and campus event posters.",
        },
        image: "/media/projects/shortlink-battuta-qrcode.webp",
        category: { id: "QR Code Dinamis", en: "Dynamic QR Code" },
      },
      {
        id: "login",
        title: {
          id: "Portal Masuk & Integrasi Akun Terpusat",
          en: "Authentication Portal & Campus SSO Integration",
        },
        caption: {
          id: "Gerbang login aman dengan branding khas Universitas Battuta dan integrasi manajemen hak akses staff/administrator kampus.",
          en: "Secure branded authentication gateway integrated with Universitas Battuta's centralized staff and administrator role management.",
        },
        image: "/media/projects/shortlink-battuta-login.webp",
        category: { id: "Autentikasi", en: "Authentication" },
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Node.js / Express",
      "PostgreSQL",
      "QR Code Engine",
      "Portal SSO Battuta",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "s.battuta.ac.id",
        label: { id: "Domain Bermerek", en: "Branded Domain" },
        description: {
          id: "Domain pendek resmi universitas yang kredibel dan tepercaya untuk publikasi",
          en: "Official credible short domain recognized by students and external partners",
        },
      },
      {
        value: "Realtime",
        label: { id: "Pelacakan Klik", en: "Click Tracking" },
        description: {
          id: "Pencatatan statistik kunjungan tautan akurat detik-per-detik",
          en: "Accurate real-time visitor click monitoring on every active link",
        },
      },
      {
        value: "Instant",
        label: { id: "Generator QR Code", en: "QR Code Export" },
        description: {
          id: "Generasi kode QR vektor siap unduh format gambar PNG resolusi tinggi",
          en: "Instant high-resolution PNG QR code creation for physical print media",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "Fullstack Engineering", en: "Solo Engineering" },
        description: {
          id: "Dikerjakan mandiri mulai dari desain UI, integrasi SSO, hingga arsitektur backend",
          en: "Independently built from frontend design, SSO integration, to backend routing",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "humas",
        roleTitle: { id: "Untuk Tim Promosi & Humas", en: "For PR & Marketing Teams" },
        roleBadge: { id: "Promosi & Publikasi", en: "Outreach & Media" },
        summary: {
          id: "Memudahkan tim publikasi dan humas kampus mendistribusikan materi promosi dengan tautan pendek bermerek yang rapi dan dapat dievaluasi performa kliknya.",
          en: "Enables university outreach and PR teams to distribute promotional content via clean branded short URLs with quantifiable click metrics.",
        },
        items: [
          {
            id: "h-brand",
            iconName: "globe",
            title: {
              id: "Tautan Pendek Bermerek Resmi",
              en: "Official Branded Shortlinks",
            },
            desc: {
              id: "Menghasilkan URL berawalan domain resmi s.battuta.ac.id untuk meningkatkan rasa percaya dan keamanan sivitas akademika.",
              en: "Generates links under the official s.battuta.ac.id domain to maximize student trust and institutional credibility.",
            },
            tag: { id: "Kredibel", en: "Credible" },
          },
          {
            id: "h-qr",
            iconName: "sparkles",
            title: {
              id: "QR Code Siap Cetak Brosur & Spanduk",
              en: "Print-Ready QR Codes for Flyers & Banners",
            },
            desc: {
              id: "Ekspor gambar QR Code beresolusi tinggi sekali klik yang siap ditempel pada materi cetak PMB dan poster kegiatan.",
              en: "One-click export of high-resolution QR codes directly usable on admissions brochures, event roll-ups, and posters.",
            },
            tag: { id: "Praktis", en: "Effortless" },
          },
          {
            id: "h-analytics",
            iconName: "check-circle",
            title: {
              id: "Evaluasi Trafik Kampanye PMB",
              en: "Campaign Performance Analytics",
            },
            desc: {
              id: "Pantau tautan promosi mana yang paling banyak menghasilkan kunjungan pendaftar mahasiswa baru secara transparan.",
              en: "Transparently monitor which campaign links drive the highest prospective student visitor engagement.",
            },
            tag: { id: "Terukur", en: "Measurable" },
          },
        ],
      },
      {
        roleKey: "akademik",
        roleTitle: { id: "Untuk Unit BAAK & Panitia Kegiatan", en: "For Academic Units & Committees" },
        roleBadge: { id: "Administrasi Kampus", en: "Campus Operations" },
        summary: {
          id: "Membantu kepanitiaan acara dan unit kerja membagikan formulir survei, registrasi seminar, atau berkas akademik tanpa link rumit.",
          en: "Assists event committees and academic units in distributing registration forms, event surveys, and files without lengthy URLs.",
        },
        items: [
          {
            id: "a-simple",
            iconName: "file-text",
            title: {
              id: "Penyederhanaan Link Formulir Panjang",
              en: "Simplifying Long Form Links",
            },
            desc: {
              id: "Mengubah tautan Google Form, Zoom meeting, atau Cloud Drive yang panjang menjadi slug kustom ringkas seperti s.battuta.ac.id/wisuda-5.",
              en: "Condenses lengthy Google Form, Zoom, or Cloud Drive links into concise custom slugs like s.battuta.ac.id/wisuda-5.",
            },
            tag: { id: "Rapi & Ringkas", en: "Clean & Concise" },
          },
          {
            id: "a-toggle",
            iconName: "settings",
            title: {
              id: "Kontrol Status Tautan (On/Off)",
              en: "Instant Link Availability Control",
            },
            desc: {
              id: "Tutup akses pendaftaran secara instan hanya dengan mematikan toggle switch tanpa perlu menghapus tautan dari sistem.",
              en: "Close form submissions or registration instantly by flipping the status toggle without deleting the link record.",
            },
            tag: { id: "Fleksibel", en: "Flexible" },
          },
          {
            id: "a-sso",
            iconName: "shield",
            title: {
              id: "Akses Aman Berbasis SSO Kampus",
              en: "Campus SSO-Backed Security",
            },
            desc: {
              id: "Autentikasi terpusat memastikan pembuatan dan perubahan tautan hanya dapat dilakukan oleh staf berwenang Universitas Battuta.",
              en: "Centralized campus authentication ensures link creation and modifications are restricted to authorized university personnel.",
            },
            tag: { id: "Aman", en: "Secure" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "distribusi-flow",
        topic: { id: "Metode Distribusi Tautan Kampus", en: "Campus Link Distribution Method" },
        before: {
          id: "Membagikan tautan mentah Google Form atau URL sistem internal yang sangat panjang dan sulit diketik manual oleh mahasiswa.",
          en: "Sharing raw, lengthy Google Form URLs or internal system links that were prone to typos and difficult to type manually.",
        },
        after: {
          id: "Tautan bermerek resmi kampus (s.battuta.ac.id/...) yang elegan, ringkas, mudah diingat, dan dilengkapi kode QR otomatis.",
          en: "Elegant, official branded links (s.battuta.ac.id/...) that are concise, memorable, and paired with automatic QR codes.",
        },
      },
      {
        id: "visibilitas-flow",
        topic: { id: "Transparansi Efektivitas Informasi", en: "Campaign & Click Visibility" },
        before: {
          id: "Tidak ada visibilitas mengenai berapa banyak calon mahasiswa atau civitas yang mengeklik tautan pengumuman.",
          en: "Zero visibility into how many prospective students or faculty clicked announcement links.",
        },
        after: {
          id: "Statistik klik terpantau realtime di dashboard sehingga efektivitas media promosi dan pengumuman dapat dievaluasi.",
          en: "Real-time click counts directly in the dashboard, enabling accurate measurement of outreach campaigns.",
        },
      },
      {
        id: "qr-flow",
        topic: { id: "Kebutuhan Materi Promosi Cetak", en: "Print Promotional Material Readiness" },
        before: {
          id: "Desainer grafis harus membuat kode QR manual dari situs pihak ketiga yang sering disisipi iklan dan kadaluwarsa.",
          en: "Designers relied on third-party ad-laden QR generators for print flyers which could expire.",
        },
        after: {
          id: "Satu klik untuk mengunduh QR Code resmi beresolusi tinggi langsung dari dashboard tautan kampus.",
          en: "One-click instant official high-res PNG QR code download directly from the university dashboard.",
        },
      },
    ],
  },
  {
    slug: "desa-simpang-tiga-evoting-system",
    type: "web",
    acronym: "E-VOTING PILKADES",
    title: {
      id: "Sistem Pemilihan Kepala Dusun Elektronik (E-Voting) Desa Simpang Tiga",
      en: "Desa Simpang Tiga Electronic Village Election System (E-Voting)",
    },
    subtitle: {
      id: "Platform Demokrasi Digital Tingkat Desa (Autentikasi NIK 16-Digit, Verifikasi Identitas e-KYC KTP & Live Quick Count Realtime)",
      en: "Village-Level Digital Democracy Platform (16-Digit NIK Auth, e-KYC KTP Verification & Real-Time Live Quick Count)",
    },
    category: {
      id: "Fullstack Web App · Civic Tech & Sistem Pemungutan Suara Digital",
      en: "Fullstack Web App · Civic Tech & Digital Voting System",
    },
    summary: {
      id: "Aplikasi pemilihan elektronik (e-voting) berbasis web untuk pemilihan kepala dusun di Desa Simpang Tiga, Kec. Sawit Seberang, Kab. Langkat. Menggantikan proses bilik suara konvensional dengan sistem digital yang aman melalui verifikasi NIK 16-digit, validasi e-KYC berkas KTP pemilih, serta rekapitulasi perolehan suara live quick count yang diperbarui secara realtime setiap 5 detik guna menjamin transparansi mutlak.",
      en: "A secure web-based electronic voting (e-voting) platform for village hamlet head elections in Desa Simpang Tiga, Sawit Seberang, Langkat Regency. Modernizes physical paper ballots into a fraud-resistant digital voting workflow featuring 16-digit NIK authentication, digital e-KYC identity verification, and real-time live quick count polling refreshed every 5 seconds for complete electoral transparency.",
    },
    overview: {
      id: "Sistem E-Voting Desa Simpang Tiga diinisiasi untuk mengatasi kendala logistik, inefisiensi pencoblosan kertas, serta potensi sengketa rekapitulasi suara manual pada pemilihan tingkat dusun. Dibangun dengan stack Laravel, Tailwind CSS, dan Alpine.js, sistem ini menyajikan antarmuka pemilih yang intuitif, ramah bagi seluruh kalangan warga desa, serta menjamin prinsip pemilihan Luber Jurdil (Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil) lewat validasi identitas digital dan rekapitulasi terbuka.",
      en: "The Desa Simpang Tiga E-Voting platform was developed to eliminate geographical barriers, costly paper ballots, and manual tally discrepancies in rural community leadership elections. Engineered using Laravel, Tailwind CSS, and Alpine.js, the system delivers an accessible, intuitive voter experience that upholds democratic integrity through digital voter validation, mandatory e-KYC checks, and an open real-time tally.",
    },
    context: {
      id: "Pemilihan kepala dusun konvensional di Desa Simpang Tiga sebelumnya memerlukan biaya logistik pencetakan surat suara fisik, waktu penghitungan manual yang panjang di TPS hingga larut malam, serta risiko manipulasi data suara atau suara tidak sah akibat kertas rusak.",
      en: "Traditional village elections in Desa Simpang Tiga previously required expensive paper ballot printing, prolonged manual vote tallying late into the night, and recurring risks of ballot invalidation or tabulation disputes.",
    },
    contribution: {
      id: "Bertindak sebagai Fullstack Web Developer dan perancang sistem. Merancang pemodelan basis data pemilih berbasis NIK, modul upload dan validasi e-KYC foto KTP warga, antarmuka pemilih responsif, engine quick count polling realtime 5-detik, serta konfigurasi deployment pada server VPS Linux.",
      en: "Acted as Fullstack Web Developer and system architect. Designed NIK-indexed voter database schemas, implemented voter e-KYC KTP document verification, crafted clean responsive voter UI, developed 5-second polling live quick-count feeds, and configured secure production Linux hosting.",
    },
    solution: {
      id: "Menghadirkan platform civic tech terintegrasi dengan alur satu pemilih satu suara (one-man one-vote) terlindungi sesi unik, validasi KTP sebelum hak suara dibuka, profil interaktif visi-misi pasangan calon nomor urut, serta dashboard hasil perhitungan suara live yang transparan dan dapat disaksikan langsung oleh seluruh warga.",
      en: "Delivered an integrated civic-tech platform enforcing one-person-one-vote via unique session tokens, mandatory pre-vote e-KYC KTP validation, candidate vision-mission comparison cards, and public live quick-count monitoring.",
    },
    role: {
      id: "Fullstack Web Developer & System Architect",
      en: "Fullstack Web Developer & System Architect",
    },
    period: {
      id: "2025 - Sekarang (Aktif Digunakan)",
      en: "2025 - Present (Live in Production)",
    },
    status: {
      id: "Live di Produksi / Digunakan Pemerintah Desa",
      en: "Live in Production / Official Village Deployment",
    },
    client: {
      id: "Desa Simpang Tiga, Kec. Sawit Seberang, Kab. Langkat",
      en: "Desa Simpang Tiga, Kec. Sawit Seberang, Kab. Langkat",
    },
    liveUrl: "https://e-voting.technolabs.co.id",
    image: "/media/projects/evoting-simpang-tiga-login.webp",
    screenshots: [
      {
        id: "dashboard",
        title: {
          id: "Beranda Pemilih & Status Hak Suara",
          en: "Voter Dashboard & Ballot Eligibility Status",
        },
        caption: {
          id: "Antarmuka utama bagi warga terdaftar yang menampilkan status hak pilih, ilustrasi kotak suara 3D, serta notifikasi persyaratan verifikasi berkas KTP sebelum memberikan suara.",
          en: "Main voter home interface displaying voting eligibility status, 3D ballot box illustration, and mandatory e-KYC identity verification requirements before casting a vote.",
        },
        image: "/media/projects/evoting-simpang-tiga-dashboard.webp",
        category: { id: "Portal Pemilih", en: "Voter Portal" },
      },
      {
        id: "candidates",
        title: {
          id: "Profil Pasangan Calon & Visi Misi",
          en: "Candidate Nominees, Profiles & Manifestos",
        },
        caption: {
          id: "Katalog digital pasangan calon Kepala Dusun lengkap dengan nomor urut, foto kandidat, dan ringkasan visi misi untuk membantu warga menentukan pilihan secara bijak.",
          en: "Interactive candidate directory featuring ballot numbers, candidate portraits, and detailed manifestos to guide voters in making informed decisions.",
        },
        image: "/media/projects/evoting-simpang-tiga-candidates.webp",
        category: { id: "Kandidat Paslon", en: "Candidates" },
      },
      {
        id: "results",
        title: {
          id: "Live Quick Count & Rekapitulasi Suara Realtime",
          en: "Real-Time Live Quick Count & Vote Tally",
        },
        caption: {
          id: "Dashboard rekapitulasi suara terbuka dengan auto-polling setiap 5 detik, menampilkan total suara masuk, persentase partisipasi pemilih, dan perolehan suara masing-masing paslon.",
          en: "Transparent public live tally dashboard updating every 5 seconds, displaying total votes cast, voter turnout percentages, and real-time candidate vote shares.",
        },
        image: "/media/projects/evoting-simpang-tiga-results.webp",
        category: { id: "Quick Count Realtime", en: "Live Quick Count" },
      },
      {
        id: "ktp",
        title: {
          id: "Verifikasi Identitas Digital e-KYC Berkas KTP",
          en: "Digital e-KYC Identity & KTP Verification",
        },
        caption: {
          id: "Modul verifikasi identitas pemilih berbasis unggah foto KTP guna memastikan keabsahan data kependudukan warga desa dan mencegah kecurangan pemilih ganda.",
          en: "Voter identity verification workflow requiring photo KTP uploads to authenticate residency and prevent duplicate or fraudulent ballots.",
        },
        image: "/media/projects/evoting-simpang-tiga-ktp.webp",
        category: { id: "Verifikasi e-KYC", en: "e-KYC Verification" },
      },
      {
        id: "login",
        title: {
          id: "Portal Autentikasi Pemilih Berbasis NIK 16-Digit",
          en: "16-Digit NIK Voter Authentication Portal",
        },
        caption: {
          id: "Laman masuk split-screen elegan yang memvalidasi Nomor Induk Kependudukan (NIK) terdaftar pada Daftar Pemilih Tetap (DPT) Desa Simpang Tiga.",
          en: "Secure split-screen voter gateway validating 16-digit national ID numbers (NIK) against the village registered voter database (DPT).",
        },
        image: "/media/projects/evoting-simpang-tiga-login.webp",
        category: { id: "Autentikasi Pemilih", en: "Voter Auth" },
      },
    ],
    techStack: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "MySQL",
      "e-KYC Verification",
      "Real-Time Polling",
      "Cloudflare Protected",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "16-Digit NIK",
        label: { id: "Validasi DPT", en: "Voter Registry Auth" },
        description: {
          id: "Autentikasi pemilih presisi berbasis Nomor Induk Kependudukan resmi",
          en: "Precision voter authentication based on official citizen identification numbers",
        },
      },
      {
        value: "5 Detik",
        label: { id: "Auto-Refresh Suara", en: "Auto-Refresh Polling" },
        description: {
          id: "Pembaruan live quick count otomatis tanpa reload laman untuk transparansi mutlak",
          en: "Automatic live quick count polling without page reload for absolute transparency",
        },
      },
      {
        value: "100% Digital",
        label: { id: "Bilik Suara Digital", en: "Paperless Ballots" },
        description: {
          id: "Mengeliminasi biaya cetak surat suara fisik dan memangkas waktu hitung berjam-jam",
          en: "Eliminating physical paper ballot costs and cutting tally times from hours to seconds",
        },
      },
      {
        value: "e-KYC Validated",
        label: { id: "Integritas Suara", en: "Voter Integrity" },
        description: {
          id: "Pencegahan suara ganda melalui verifikasi foto KTP asli pemilih desa",
          en: "Rigorous prevention of duplicate votes through photo ID verification",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "pemilih",
        roleTitle: { id: "Untuk Warga Pemilih (Masyarakat Desa)", en: "For Village Voters" },
        roleBadge: { id: "Warga Desa", en: "Village Residents" },
        summary: {
          id: "Memudahkan warga desa memberikan hak suara secara mandiri, rahasia, dan terverifikasi dari perangkat manapun tanpa harus mengantre berjam-jam di TPS fisik.",
          en: "Enables village residents to cast their confidential, verified ballots independently from any device without waiting in long queues at polling stations.",
        },
        items: [
          {
            id: "v-nik",
            iconName: "shield",
            title: {
              id: "Login Praktis dengan NIK Kependudukan",
              en: "Seamless 16-Digit NIK Login",
            },
            desc: {
              id: "Akses akun pemilih instan hanya menggunakan 16 digit NIK yang sudah terverifikasi dalam Daftar Pemilih Tetap (DPT).",
              en: "Instant voter login using the resident's 16-digit national ID pre-registered in the official electoral roll.",
            },
            tag: { id: "Mudah", en: "Simple" },
          },
          {
            id: "v-candidate",
            iconName: "users",
            title: {
              id: "Eksplorasi Visi & Misi Paslon",
              en: "Candidate Manifesto Exploration",
            },
            desc: {
              id: "Melihat profil lengkap dan gagasan kerja setiap calon kepala dusun secara objektif sebelum menjatuhkan pilihan.",
              en: "Review comprehensive profiles and work programs of each candidate pair before casting a vote.",
            },
            tag: { id: "Transparan", en: "Transparent" },
          },
          {
            id: "v-ballot",
            iconName: "check-circle",
            title: {
              id: "Pemberian Suara Sekali Klik yang Aman",
              en: "One-Click Encrypted Ballot Casting",
            },
            desc: {
              id: "Mekanisme pencoblosan digital dengan konfirmasi ganda dan perlindungan token satu suara untuk mencegah duplikasi.",
              en: "Secure digital voting mechanism with dual confirmation and single-use cryptographic token protection.",
            },
            tag: { id: "Luber Jurdil", en: "Fair & Secret" },
          },
          {
            id: "v-live",
            iconName: "sparkles",
            title: {
              id: "Pantau Hasil Live Quick Count",
              en: "Live Quick Count Monitoring",
            },
            desc: {
              id: "Menyaksikan perkembangan perolehan suara paslon secara langsung begitu proses pemungutan suara berlangsung.",
              en: "Watch real-time candidate vote share updates as ballots are cast throughout election day.",
            },
            tag: { id: "Realtime", en: "Realtime" },
          },
        ],
      },
      {
        roleKey: "panitia",
        roleTitle: { id: "Untuk Panitia Pemilihan & Pemerintah Desa", en: "For Election Committee & Village Admin" },
        roleBadge: { id: "Penyelenggara Pemilu", en: "Election Organizers" },
        summary: {
          id: "Memberikan kendali penuh bagi panitia pilkades dalam mengelola DPT, memvalidasi bukti e-KYC warga, dan mengumumkan hasil akhir pemilu secara akuntabel.",
          en: "Empowers the election committee with complete control over voter registries, e-KYC document verification, and auditable election result announcements.",
        },
        items: [
          {
            id: "p-ekyc",
            iconName: "file-text",
            title: {
              id: "Verifikasi Berkas e-KYC KTP",
              en: "e-KYC Document Verification",
            },
            desc: {
              id: "Memeriksa kesesuaian identitas foto KTP yang diunggah warga untuk memastikan pemilih benar merupakan penduduk sah dusun.",
              en: "Review uploaded KTP identity cards to confirm valid village hamlet residency and approve voting clearance.",
            },
            tag: { id: "Akuntabel", en: "Accountable" },
          },
          {
            id: "p-tally",
            iconName: "check-circle",
            title: {
              id: "Rekapitulasi Suara Otomatis & Cepat",
              en: "Instant Automated Vote Tabulation",
            },
            desc: {
              id: "Mengeliminasi penghitungan manual di lembar plano yang melelahkan dengan kalkulasi persentase dan suara masuk instan.",
              en: "Replaces tedious manual paper sheet counting with instant automated vote tallies and turnout percentages.",
            },
            tag: { id: "Cepat & Akurat", en: "Fast & Accurate" },
          },
          {
            id: "p-audit",
            iconName: "globe",
            title: {
              id: "Audit Trail & Pencegahan Kecurangan",
              en: "Audit Trail & Fraud Prevention",
            },
            desc: {
              id: "Setiap suara terlindungi log sistem yang memastikan prinsip satu NIK hanya dapat melakukan voting tepat satu kali.",
              en: "Every submitted ballot is locked to prevent ballot box stuffing, ensuring strict one-NIK one-vote compliance.",
            },
            tag: { id: "Aman", en: "Secure" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "metode-flow",
        topic: { id: "Metode Pemilihan & Bilik Suara", en: "Voting Method & Polling Station Experience" },
        before: {
          id: "Mencetak ribuan lembar surat suara kertas, antrean panjang di TPS fisik, serta potensi surat suara rusak atau tercoblos ganda.",
          en: "Printing thousands of paper ballots, long physical TPS queues, and high risk of spoiled or invalid paper ballots.",
        },
        after: {
          id: "Bilik suara digital yang dapat diakses melalui gawai pemilih, terlindungi verifikasi NIK dan validasi KTP tanpa antrean fisik.",
          en: "Digital ballot box accessible from voter devices, safeguarded by NIK and KTP validation without long physical lines.",
        },
      },
      {
        id: "rekapitulasi-flow",
        topic: { id: "Kecepatan & Akurasi Rekapitulasi Suara", en: "Vote Tally Speed & Accuracy" },
        before: {
          id: "Penghitungan suara manual memakan waktu berjam-jam hingga larut malam dengan potensi kesalahan hitung atau perselisihan saksi.",
          en: "Manual ballot counting took hours into the night with risks of human calculation errors and witness disputes.",
        },
        after: {
          id: "Live Quick Count otomatis diperbarui setiap 5 detik dengan grafik persentase transparan yang dapat disaksikan seluruh warga secara bersamaan.",
          en: "Live Quick Count automatically refreshes every 5 seconds with transparent percentage charts viewable by all residents simultaneously.",
        },
      },
      {
        id: "integritas-flow",
        topic: { id: "Validitas Identitas & Pencegahan Suara Ganda", en: "Voter Identity Validity & Anti-Fraud" },
        before: {
          id: "Pengecekan buku absensi DPT manual di TPS rawan pemilih siluman atau penggunaan identitas warga lain.",
          en: "Manual attendance sheet checks at polling stations were prone to ghost voters or proxy voting abuse.",
        },
        after: {
          id: "Sistem mengunci setiap akun pemilih dengan NIK 16-digit unik dan verifikasi upload foto KTP asli, mencegah duplikasi suara 100%.",
          en: "System locks each voter to an authentic 16-digit NIK combined with photo KTP verification, eliminating duplicate ballots.",
        },
      },
    ],
  },
  {
    slug: "pt-belligat-global-logistik-company-profile",
    type: "web",
    acronym: "BELLGLOBAL LOGISTIK",
    title: {
      id: "Company Profile & Portal Manajemen Kargo PT. Belligat Global Logistik",
      en: "PT. Belligat Global Logistik Corporate Profile & Cargo Management Portal",
    },
    subtitle: {
      id: "Platform Profil Korporat & Katalog Solusi Ekspedisi Logistik Kargo Berat Skala Nasional (Hingga 150+ Ton)",
      en: "Corporate Profile & Heavy Cargo Management Platform for National-Scale Logistics (Up to 150+ Tons)",
    },
    category: {
      id: "Web App · Profil Perusahaan Logistik & Ekspedisi Kargo Berat",
      en: "Web App · Heavy Cargo Logistics & Freight Management Profile",
    },
    summary: {
      id: "Platform profil perusahaan dan katalog logistik modern untuk PT. Belligat Global Logistik, perusahaan ekspedisi profesional terkemuka yang bergerak di bidang manajemen kargo berat, pengangkutan antarpulau multimoda (laut, darat, dan udara), penanganan project cargo hingga kapasitas 150+ ton, serta konsultasi kepabeanan di seluruh wilayah Indonesia.",
      en: "A modern corporate profile and logistics catalog platform for PT. Belligat Global Logistik, an established cargo management enterprise specializing in heavy industrial freight, multimodal inter-island shipping (sea, land, air), 150+ ton project cargo execution, and customs consultation across Indonesia.",
    },
    overview: {
      id: "Website korporat PT. Belligat Global Logistik dirancang untuk memperkuat kredibilitas perusahaan di mata mitra korporasi, industri manufaktur, dan kontraktor migas maupun kelapa sawit nasional. Menggunakan perpaduan warna merah industri yang tegas, tipografi elegan, dan galeri studi kasus nyata, platform ini menyajikan katalog terperinci mulai dari manajemen transportasi kargo, spesialisasi kargo bermuatan besar (heavy lift), portofolio proyek terfilter, profil tim ahli berpengalaman, hingga integrasi formulir penawaran harga cepat.",
      en: "Engineered to elevate corporate credibility for enterprise industrial clients, palm oil manufacturers, and infrastructure contractors across Indonesia. Featuring a bold industrial aesthetic, refined typography, and authentic project case studies, the platform showcases freight management services, 150+ ton heavy-lift capabilities, filterable project archives, expert leadership profiles, and interactive quote inquiry workflows.",
    },
    context: {
      id: "Sebagai perusahaan ekspedisi yang menangani kargo bernilai tinggi dan berspesifikasi khusus, PT. Belligat Global Logistik membutuhkan representasi digital bereputasi tinggi yang mampu memperlihatkan rekam jejak riil pengangkutan alat berat, kapal tongkang, serta armada ekspedisi darat secara transparan kepada calon klien B2B.",
      en: "Handling high-value, specialized industrial cargo, PT. Belligat Global Logistik required a prestigious digital presence to showcase authentic track records of heavy equipment transport, sea barges, and heavy-haul truck fleets to B2B enterprise partners.",
    },
    contribution: {
      id: "Merancang dan mengembangkan seluruh antarmuka web responsif, katalog layanan interaktif, direktori portofolio kargo dengan filter dinamis, sistem galeri dokumentasi ekspedisi proyek, serta formulir pengajuan konsultasi penawaran harga berbasis Laravel dan Tailwind CSS.",
      en: "Designed and engineered the responsive web interface, interactive service catalog, filterable project directory, heavy equipment documentation galleries, and rapid quote inquiry pipeline using Laravel and Tailwind CSS.",
    },
    solution: {
      id: "Membangun arsitektur website modern dengan navigasi responsif, tata letak kartu studi kasus proyek dengan filter kategori industri (seperti Pabrik Kelapa Sawit, Tambang, dan Infrastruktur), detail rute pengiriman, serta saluran komunikasi terintegrasi yang memudahkan klien korporat menjadwalkan konsultasi kargo.",
      en: "Built a high-performance web architecture featuring intuitive navigation, categorized case study cards tagged by industry (Palm Oil, Mining, Infrastructure), transit route documentation, and unified client communication channels.",
    },
    role: {
      id: "Fullstack Web Developer & UI/UX Designer",
      en: "Fullstack Web Developer & UI/UX Designer",
    },
    period: {
      id: "2025 - Sekarang (Aktif Digunakan)",
      en: "2025 - Present (Live in Production)",
    },
    status: {
      id: "Live di Produksi / Website Resmi Korporat",
      en: "Live in Production / Official Corporate Website",
    },
    client: {
      id: "PT. Belligat Global Logistik",
      en: "PT. Belligat Global Logistik",
    },
    liveUrl: "https://bell.technolabs.co.id",
    image: "/media/projects/belligat-logistik-home.webp",
    screenshots: [
      {
        id: "home",
        title: {
          id: "Beranda Korporat & Nilai Unggulan Kargo Berat",
          en: "Corporate Homepage & Heavy Cargo Value Proposition",
        },
        caption: {
          id: "Tampilan beranda utama yang menyajikan positioning perusahaan 'Smarter, Wiser, and Stronger', foto dokumentasi armada kargo berat, ringkasan kapasitas 150+ ton, dan akses cepat layanan.",
          en: "Hero landing page presenting the corporate positioning 'Smarter, Wiser, and Stronger', heavy cargo fleet documentation, 150+ ton capacity summary, and service action prompts.",
        },
        image: "/media/projects/belligat-logistik-home.webp",
        category: { id: "Beranda Utama", en: "Homepage Hero" },
      },
      {
        id: "about",
        title: {
          id: "Profil Perusahaan & Komitmen Nilai Unggul",
          en: "Corporate Profile, History & Core Values",
        },
        caption: {
          id: "Halaman pengenalan sejarah dan profil korporat PT. Belligat Global Logistik, visi misi ekspedisi, standar keselamatan operasional, serta komitmen keandalan manajemen kargo.",
          en: "Company introduction page highlighting PT. Belligat Global Logistik's background, vision and mission, rigorous safety standards, and operational cargo excellence.",
        },
        image: "/media/projects/belligat-logistik-about.webp",
        category: { id: "Profil Perusahaan", en: "About Us" },
      },
      {
        id: "services",
        title: {
          id: "Katalog Solusi Layanan Kargo Terintegrasi",
          en: "Integrated Cargo Management & Logistics Catalog",
        },
        caption: {
          id: "Katalog komprehensif yang menampilkan 3 pilar layanan utama: Freight Transport Management (darat, laut, udara), Project Cargo khusus alat berat, dan Freight Consultation.",
          en: "Comprehensive services catalog showcasing 3 core pillars: Freight Transport Management (multimodal sea/air/land), heavy Project Cargo, and Freight Customs Consultation.",
        },
        image: "/media/projects/belligat-logistik-services.webp",
        category: { id: "Layanan Kargo", en: "Services Catalog" },
      },
      {
        id: "service-detail",
        title: {
          id: "Detail Layanan Spesialisasi Project Cargo 150+ Ton",
          en: "Project Cargo Specialist Service Detail",
        },
        caption: {
          id: "Laman rincian kapabilitas penanganan kargo berukuran besar (oversized) dan berbobot ekstrem hingga 150+ ton menggunakan armada khusus dan perencanaan rute matang.",
          en: "Specialized service detail page detailing oversized and extreme heavy cargo handling up to 150+ tons with custom heavy-lift equipment and route surveys.",
        },
        image: "/media/projects/belligat-logistik-service-detail.webp",
        category: { id: "Spesialisasi Kargo", en: "Project Cargo" },
      },
      {
        id: "projects",
        title: {
          id: "Direktori Portofolio Proyek Ekspedisi Nasional",
          en: "National Logistics Portfolio & Filterable Case Studies",
        },
        caption: {
          id: "Pusat dokumentasi proyek pengiriman kargo dengan filter dinamis berdasarkan kategori industri dan tahun, memperlihatkan rekam jejak sukses ekspedisi di berbagai pulau.",
          en: "Project showcase directory with dynamic filtering by industry category and year, demonstrating successful cargo operations across the Indonesian archipelago.",
        },
        image: "/media/projects/belligat-logistik-projects.webp",
        category: { id: "Portofolio Proyek", en: "Projects Directory" },
      },
      {
        id: "project-detail",
        title: {
          id: "Studi Kasus Pengangkutan Logistik Pabrik Kelapa Sawit",
          en: "Industrial Case Study: Palm Oil Equipment Transport",
        },
        caption: {
          id: "Dokumentasi mendalam pengangkutan tangki dan mesin boiler raksasa untuk industri kelapa sawit rute Palembang menuju Bengkulu, lengkap dengan galeri foto lapangan.",
          en: "In-depth case study of transporting heavy industrial palm oil boilers from Palembang to Bengkulu, featuring comprehensive on-site equipment photo documentation.",
        },
        image: "/media/projects/belligat-logistik-project-detail.webp",
        category: { id: "Studi Kasus", en: "Case Study" },
      },
      {
        id: "team",
        title: {
          id: "Struktur Manajemen & Tenaga Ahli Operasional",
          en: "Leadership Team & Logistics Operations Specialists",
        },
        caption: {
          id: "Profil pimpinan dan tim profesional logistik yang berpengalaman dalam menangani kepabeanan, perizinan transportasi alat berat, dan manajemen rantai pasok.",
          en: "Profiles of executive leadership and logistics specialists experienced in customs clearance, heavy transport permits, and supply chain management.",
        },
        image: "/media/projects/belligat-logistik-team.webp",
        category: { id: "Tim Profesional", en: "Our Team" },
      },
      {
        id: "contact",
        title: {
          id: "Formulir Permintaan Penawaran & Kontak Kantor",
          en: "Inquiry Form, Quote Request & Office Location",
        },
        caption: {
          id: "Portal kontak terintegrasi dengan formulir 'Get Quote' untuk konsultasi kebutuhan kargo, informasi kantor pusat di Deli Serdang/Medan, dan saluran bantuan responsif.",
          en: "Integrated contact portal featuring a 'Get Quote' form for cargo consultation, headquarters location in Deli Serdang/Medan, and direct communication channels.",
        },
        image: "/media/projects/belligat-logistik-contact.webp",
        category: { id: "Kontak & Penawaran", en: "Contact & Quote" },
      },
    ],
    techStack: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "B2B Lead Generation",
      "Responsive UI/UX",
      "Linux VPS",
      "Cloudflare Protected",
    ],
    metrics: [
      {
        value: "150+ Ton",
        label: { id: "Kapasitas Kargo", en: "Max Cargo Capacity" },
        description: {
          id: "Kemampuan penanganan kargo berat dan mesin industri berskala besar",
          en: "Handling heavy oversized cargo and large-scale industrial machinery",
        },
      },
      {
        value: "5+ Tahun",
        label: { id: "Pengalaman Industri", en: "Industry Experience" },
        description: {
          id: "Rekam jejak keandalan operasional ekspedisi darat, laut, dan udara",
          en: "Proven operational track record across land, sea, and air logistics",
        },
      },
      {
        value: "50+ Proyek",
        label: { id: "Proyek Selesai", en: "Projects Completed" },
        description: {
          id: "Penyelesaian pengangkutan kargo lintas provinsi dan antarpulau di Indonesia",
          en: "Successful delivery of complex cargo shipments across Indonesia",
        },
      },
      {
        value: "24/7",
        label: { id: "Layanan Konsultasi", en: "Consultation Support" },
        description: {
          id: "Dukungan komunikasi responsif untuk perencanaan logistik & kepabeanan",
          en: "Responsive communication for route planning and customs advisory",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "klien",
        roleTitle: { id: "Untuk Klien Korporasi & Industri", en: "For Enterprise & Industrial Clients" },
        roleBadge: { id: "Klien B2B", en: "B2B Partners" },
        summary: {
          id: "Memberikan kemudahan bagi pimpinan proyek dan manajer logistik korporat untuk memverifikasi kapabilitas kargo, meninjau rekam jejak proyek sejenis, dan mengajukan permintaan penawaran secara cepat.",
          en: "Empowers corporate project heads and logistics managers to verify cargo capabilities, audit peer case studies, and submit rapid quote requests.",
        },
        items: [
          {
            id: "c-heavy",
            iconName: "shield",
            title: {
              id: "Verifikasi Kapabilitas Kargo Berat (150+ Ton)",
              en: "Heavy Cargo Capability Audit (150+ Tons)",
            },
            desc: {
              id: "Meninjau kesiapan armada alat berat, kapal tongkang, dan perizinan jalan untuk muatan over-dimension dan over-weight.",
              en: "Review heavy-haul equipment, barge readiness, and transit permits for over-dimension and over-weight loads.",
            },
            tag: { id: "Tervalidasi", en: "Verified" },
          },
          {
            id: "c-portfolio",
            iconName: "globe",
            title: {
              id: "Eksplorasi Rekam Jejak Proyek Riil",
              en: "Authentic Project Case Study Directory",
            },
            desc: {
              id: "Melihat portofolio pengiriman terdahulu berdasarkan industri (seperti sawit, pertambangan, dan manufaktur) beserta foto dokumentasi lapangan.",
              en: "Explore historical shipments categorized by industry (palm oil, mining, manufacturing) complete with on-site photos.",
            },
            tag: { id: "Transparan", en: "Transparent" },
          },
          {
            id: "c-quote",
            iconName: "check-circle",
            title: {
              id: "Permintaan Penawaran Cepat (Get Quote)",
              en: "Rapid Online Quote Request",
            },
            desc: {
              id: "Formulir interaktif terstruktur untuk mendeskripsikan dimensi muatan, rute tujuan, dan estimasi waktu pelaksanaan proyek.",
              en: "Structured inquiry form specifying cargo dimensions, destination routes, and project execution timelines.",
            },
            tag: { id: "Praktis", en: "Effortless" },
          },
        ],
      },
      {
        roleKey: "operasional",
        roleTitle: { id: "Untuk Manajemen Korporat & Pemasaran", en: "For Corporate Management & Marketing" },
        roleBadge: { id: "Manajemen Logistik", en: "Logistics Management" },
        summary: {
          id: "Menjadikan website sebagai aset representasi bisnis utama yang memperkuat citra profesional PT. Belligat Global Logistik saat proses tender dan negosiasi kontrak korporat.",
          en: "Establishes the website as a prime corporate asset reinforcing PT. Belligat Global Logistik's professional standing during corporate contract bidding.",
        },
        items: [
          {
            id: "m-branding",
            iconName: "award",
            title: {
              id: "Branding Korporat Tingkat Tinggi",
              en: "High-Credibility Corporate Branding",
            },
            desc: {
              id: "Membangun kepercayaan klien B2B melalui desain yang kokoh, berwibawa, dan menonjolkan standar keselamatan bersertifikasi.",
              en: "Fosters B2B client trust with robust industrial design emphasizing certified occupational safety standards.",
            },
            tag: { id: "Kredibel", en: "Credible" },
          },
          {
            id: "m-lead",
            iconName: "sparkles",
            title: {
              id: "Akuisisi Prospek Bisnis B2B",
              en: "Inbound B2B Lead Generation",
            },
            desc: {
              id: "Menyalurkan pertanyaan dan calon klien potensial langsung ke tim pemasaran melalui integrasi formulir dan kontak kantor.",
              en: "Channels high-intent client inquiries directly to sales engineers through integrated inquiry forms and direct lines.",
            },
            tag: { id: "Konversi Tinggi", en: "High Conversion" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "kredibilitas-flow",
        topic: { id: "Representasi Kredibilitas Perusahaan", en: "Corporate Credibility Presentation" },
        before: {
          id: "Mengandalkan profil cetak konvensional atau PDF statis yang terbatas dalam memuat dokumentasi visual armada kargo berat.",
          en: "Relied on conventional printed company profiles or static PDFs that lacked dynamic visual proof of heavy cargo fleets.",
        },
        after: {
          id: "Platform website modern dengan estetika industri elegan yang dapat diakses oleh mitra korporat di seluruh dunia selama 24/7.",
          en: "Modern web platform with a refined industrial aesthetic accessible to corporate partners worldwide 24/7.",
        },
      },
      {
        id: "portofolio-flow",
        topic: { id: "Visibilitas Rekam Jejak Pengiriman Kargo", en: "Shipment Track Record Visibility" },
        before: {
          id: "Calon klien sulit meninjau dokumentasi proyek sebelumnya karena arsip foto terpisah-pisah dan tidak terorganisir.",
          en: "Prospective clients struggled to inspect previous project records due to fragmented and unorganized photo archives.",
        },
        after: {
          id: "Direktori portofolio terstruktur dengan filter kategori, detail rute asal-tujuan, dan galeri foto penanganan kargo riil.",
          en: "Structured portfolio directory with category filters, origin-destination route details, and genuine handling photo galleries.",
        },
      },
      {
        id: "inquiry-flow",
        topic: { id: "Kecepatan Pengajuan Penawaran Harga", en: "Quote Inquiry Speed & Convenience" },
        before: {
          id: "Proses permintaan estimasi biaya pengiriman kargo lambat dan memerlukan korespondensi berulang tanpa data spesifikasi terstruktur.",
          en: "Cargo freight estimation requests were sluggish, requiring back-and-forth correspondence lacking structured specs.",
        },
        after: {
          id: "Formulir 'Get Quote' digital yang efisien, memudahkan calon klien mengirimkan parameter muatan dan rute langsung ke tim sales.",
          en: "Streamlined digital 'Get Quote' form allowing clients to submit cargo parameters and routes directly to the sales team.",
        },
      },
    ],
  },
  {
    slug: "protype-battuta-typing-race-platform",
    type: "web",
    acronym: "PROTYPE BATTUTA",
    title: {
      id: "Platform Balap Mengetik Realtime Multiplayer (ProType) Universitas Battuta",
      en: "Universitas Battuta Real-Time Multiplayer Typing Race Platform (ProType)",
    },
    subtitle: {
      id: "Platform Kompetisi Mengetik Daring Realtime (Sinkronisasi WebSocket Sub-Milidetik, Kamus Bahasa Indonesia, Deteksi Typo Instan & Papan Peringkat Podium)",
      en: "Real-Time Online Typing Race Platform (Sub-Millisecond WebSocket Sync, Indonesian Corpus, Instant Typo Detection & Live Podium Standings)",
    },
    category: {
      id: "Fullstack Web App · Platform Game Edukasi & Kompetisi Realtime",
      en: "Fullstack Web App · Real-Time Educational Gaming Platform",
    },
    summary: {
      id: "Platform balap mengetik daring multipemain (multiplayer typing race) yang dikembangkan untuk sivitas akademika Universitas Battuta dan komunitas teknologi Proasta. Memadukan kecepatan sinkronisasi state via WebSockets, algoritma deteksi typo instan, korpus bahasa Indonesia yang variatif, serta kalkulasi WPM (Words Per Minute) dan akurasi presisi dalam antarmuka futuristik bertema dark-tech neon.",
      en: "Real-time multiplayer typing race platform engineered for Universitas Battuta students and the Proasta tech community. Blends sub-millisecond WebSocket state synchronization, instant typo detection algorithms, rich Indonesian language corpus streams, and precision WPM & accuracy metrics wrapped in a sleek cyberpunk dark-tech aesthetic.",
    },
    overview: {
      id: "ProType Battuta merupakan arena balap mengetik cepat berbasis web yang menggabungkan kompetisi interaktif dengan teknologi sinkronisasi data real-time. Dibangun menggunakan Next.js dengan Turbopack dan Tailwind CSS, platform ini menyediakan room multiplayer instan berbasis kode 6 digit, visualisasi progress balapan langsung antar pemain, validasi keystroke karakter demi karakter, dan layar podium hasil balapan dengan statistik performa lengkap.",
      en: "ProType Battuta is an interactive web-based speed typing arena uniting competitive gaming with real-time data synchronization. Engineered with Next.js, Turbopack, and Tailwind CSS, it offers instant 6-character room code matchmaking, live multiplayer progress tracking, strict character-by-character keystroke validation, and a championship podium screen with comprehensive performance analytics.",
    },
    context: {
      id: "Pengembangan keterampilan mengetik 10 jari bagi mahasiswa teknologi seringkali terasa monoton jika hanya menggunakan tes teks statis biasa. Diperlukan platform interaktif yang memicu adrenalin kompetitif, ramah latensi, dan menggunakan teks bahasa Indonesia yang kontekstual.",
      en: "Mastering 10-finger typing speed often feels repetitive with conventional static tests. Students and developer communities needed a fast-paced, competitive, low-latency multiplayer race platform utilizing rich contextual Indonesian texts.",
    },
    contribution: {
      id: "Bertindak sebagai Lead Fullstack Developer dan UI/UX Designer secara mandiri (Solo Project). Merancang arsitektur sinkronisasi WebSocket untuk multi-peserta, mendesain antarmuka bertema gelap neon cyan/emerald dengan kontras tinggi, menyusun korpus teks bahasa Indonesia, dan mengimplementasikan engine kalkulasi WPM serta akurasi real-time.",
      en: "Served as solo Lead Fullstack Developer and UI/UX Designer. Architected low-latency WebSocket multi-client synchronization, crafted high-contrast neon cyan/emerald dark-tech UI, curated Indonesian text corpora, and implemented real-time keystroke accuracy and WPM calculation algorithms.",
    },
    solution: {
      id: "Membangun web app modern dengan Next.js yang membagi alur permainan menjadi 4 fase mulus: pembuatan/pencarian room via kode unik, lobi sinkronisasi peserta bersama Host, arena balap dengan highlight teks interaktif dan peringatan typo instan, serta selebrasi podium dengan rincian kata per menit dan akurasi.",
      en: "Engineered a responsive Next.js application structured around 4 seamless game states: 6-character room matchmaking, synchronized lobby with host controls, live typing arena with inline typo alerts, and a podium celebration screen detailing net WPM and accuracy scores.",
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
      id: "Live di Internet / Platform Aktif",
      en: "Live in Production / Active Platform",
    },
    client: {
      id: "Universitas Battuta (Proasta)",
      en: "Universitas Battuta (Proasta)",
    },
    liveUrl: "https://protype.proasta.battuta.ac.id",
    image: "/media/projects/protype-battuta-home.webp",
    screenshots: [
      {
        id: "home",
        title: {
          id: "Beranda Utama & Sistem Pembuatan Room Balapan",
          en: "Main Arena Homepage & Room Creation Hub",
        },
        caption: {
          id: "Halaman muka bergaya dark-tech modern dengan form bergabung instan (Join a Race) via kode unik room 6 karakter atau tombol membuat arena balap baru (Create New Room).",
          en: "Dark-tech styled landing interface featuring instant race joining via 6-character room code or new custom lobby creation (Create New Room).",
        },
        image: "/media/projects/protype-battuta-home.webp",
        category: { id: "Beranda Arena", en: "Arena Homepage" },
      },
      {
        id: "lobby",
        title: {
          id: "Lobi Menunggu Pemain & Manajemen Host",
          en: "Multiplayer Waiting Lobby & Host Controls",
        },
        caption: {
          id: "Ruang tunggu pemain bersama (Room Lobby) dengan tampilan daftar pembalap terkoneksi, identitas Host, status kesiapan pemain, dan tombol kendali 'Start Race' untuk memulai kompetisi.",
          en: "Synchronized multiplayer waiting room displaying connected racers, host badge, player ready status, and host 'Start Race' command button.",
        },
        image: "/media/projects/protype-battuta-lobby.webp",
        category: { id: "Lobi Balapan", en: "Race Lobby" },
      },
      {
        id: "arena",
        title: {
          id: "Arena Balap Mengetik & Teks Korpus Indonesia",
          en: "Live Race Arena & Indonesian Corpus Stream",
        },
        caption: {
          id: "Sirkuit pengetikan aktif dengan teks artikel bahasa Indonesia yang diacak, kursor pengetikan interaktif, progress bar persentase penyelesaian, penghitung karakter, dan pemantau waktu live.",
          en: "Active typing track featuring randomized Indonesian text corpus, interactive typing cursor, live race progress bar, character counter, and real-time clock.",
        },
        image: "/media/projects/protype-battuta-arena.webp",
        category: { id: "Sirkuit Mengetik", en: "Race Track" },
      },
      {
        id: "racing",
        title: {
          id: "Umpan Balik Realtime & Deteksi Typo Instan",
          en: "Real-Time Typing Feedback & Instant Typo Detection",
        },
        caption: {
          id: "Mekanisme visual penyorotan teks: indikator garis bawah merah dan peringatan 'TYPO DETECTED' seketika ketika terjadi kesalahan ejaan karakter untuk menjaga kualitas ketikan.",
          en: "Visual feedback engine displaying inline red underline cues and instant 'TYPO DETECTED' alerts upon keystroke inaccuracy to reinforce typing precision.",
        },
        image: "/media/projects/protype-battuta-racing.webp",
        category: { id: "Deteksi Kesalahan", en: "Typo Engine" },
      },
      {
        id: "results",
        title: {
          id: "Papan Hasil Balapan, Kecepatan WPM & Akurasi",
          en: "Race Complete Podium, WPM Speed & Accuracy",
        },
        caption: {
          id: "Layar hasil akhir perlombaan menampilkan trofi kemenangan, metrik kecepatan bersih (58 WPM), akurasi 100%, dan papan peringkat Final Standings para pembalap.",
          en: "Race conclusion screen featuring championship trophy, net typing speed (58 WPM), 100% accuracy score, and live Final Standings podium.",
        },
        image: "/media/projects/protype-battuta-results.webp",
        category: { id: "Hasil & Peringkat", en: "Podium Standings" },
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "WebSockets",
      "Tailwind CSS",
      "Turbopack",
      "Real-Time State Engine",
      "Linux VPS",
    ],
    metrics: [
      {
        value: "Sub-ms",
        label: { id: "Sinkronisasi Balap", en: "Race Synchronization" },
        description: {
          id: "Engine WebSocket berlatensi rendah untuk kompetisi multipemain realtime",
          en: "Ultra-low latency WebSocket engine powering real-time races",
        },
      },
      {
        value: "100%",
        label: { id: "Tracking Akurasi", en: "Accuracy Tracking" },
        description: {
          id: "Kalkulasi WPM dan presisi keystroke karakter-per-karakter secara instan",
          en: "Instant character-by-character keystroke precision and WPM metrics",
        },
      },
      {
        value: "Dark Tech",
        label: { id: "Desain Antarmuka", en: "UI/UX Aesthetic" },
        description: {
          id: "Nuansa cyberpunk modern dengan kontras tinggi untuk fokus mengetik optimal",
          en: "Modern high-contrast dark cyberpunk theme designed for typing focus",
        },
      },
      {
        value: "Multiplayer",
        label: { id: "Room Interaktif", en: "Interactive Lobbies" },
        description: {
          id: "Sistem ruang balap bersama via 6-digit room code tanpa batasan peserta",
          en: "6-character room codes for instant multiplayer lobby match-ups",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "racer",
        roleTitle: { id: "Untuk Pembalap & Mahasiswa", en: "For Racers & Students" },
        roleBadge: { id: "Pengalaman Bermain", en: "Player Experience" },
        summary: {
          id: "Memberikan pengalaman kompetisi mengetik yang adiktif, seru, dan memacu peningkatan kecepatan mengetik 10 jari secara natural.",
          en: "Delivers an addictive and thrilling competitive environment that naturally sharpens 10-finger typing speed.",
        },
        items: [
          {
            id: "r-room",
            iconName: "globe",
            title: {
              id: "Pembuatan & Bergabung Room Instan",
              en: "Instant Room Creation & Joining",
            },
            desc: {
              id: "Cukup bagikan kode 6 digit kepada teman untuk langsung bertanding dalam satu lintasan balap yang sama.",
              en: "Share a concise 6-character room code with peers to instantly join the exact same race track.",
            },
            tag: { id: "Mudah", en: "Effortless" },
          },
          {
            id: "r-typo",
            iconName: "shield",
            title: {
              id: "Pemberitahuan Typo Seketika",
              en: "Instant Keystroke Correction Guidance",
            },
            desc: {
              id: "Animasi dan indikator merah langsung mengunci kesalahan pengetikan sebelum pemain dapat melangkah ke kata berikutnya.",
              en: "Real-time red highlights pause progression until typos are rectified, encouraging clean muscle memory.",
            },
            tag: { id: "Presisi", en: "Precision" },
          },
          {
            id: "r-metrics",
            iconName: "check-circle",
            title: {
              id: "Analisis WPM & Akurasi Karakter",
              en: "Detailed WPM & Accuracy Metrics",
            },
            desc: {
              id: "Evaluasi performa komprehensif setelah garis akhir berupa kalkulasi kata per menit (WPM) dan persentase ketepatan huruf.",
              en: "Post-race performance report providing gross/net words-per-minute and exact character precision percentages.",
            },
            tag: { id: "Komprehensif", en: "Detailed" },
          },
          {
            id: "r-podium",
            iconName: "award",
            title: {
              id: "Papan Peringkat Podium Bersama",
              en: "Live Competitive Leaderboard",
            },
            desc: {
              id: "Melihat posisi ranking pemenang secara realtime begitu seluruh peserta melewati garis finis.",
              en: "Dynamic leaderboard revealing podium positions the moment contenders cross the finish line.",
            },
            tag: { id: "Kompetitif", en: "Competitive" },
          },
        ],
      },
      {
        roleKey: "komunitas",
        roleTitle: { id: "Untuk Komunitas Proasta & Kampus", en: "For Proasta Community & Campus Events" },
        roleBadge: { id: "Kompetisi Kampus", en: "Campus Events" },
        summary: {
          id: "Menjadi sarana perlombaan teknologi informasi internal kampus Universitas Battuta yang menyenangkan dan dapat diadakan sewaktu-waktu.",
          en: "Serves as an engaging platform for university IT tournaments, ice-breaking activities, and student community challenges.",
        },
        items: [
          {
            id: "k-tourney",
            iconName: "sparkles",
            title: {
              id: "Turnamen Cepat Mengetik Cepat",
              en: "Fast-Paced Typing Tournaments",
            },
            desc: {
              id: "Dapat digunakan sebagai cabang kompetisi interaktif dalam acara pameran teknologi, ospek, atau gathering Proasta.",
              en: "Ideal for student tech fairs, orientation events, and Proasta community tournaments.",
            },
            tag: { id: "Seru", en: "Engaging" },
          },
          {
            id: "k-corpus",
            iconName: "book",
            title: {
              id: "Korpus Bahasa Indonesia yang Kaya",
              en: "Rich Indonesian Language Corpus",
            },
            desc: {
              id: "Materi latihan mengambil kutipan ensiklopedia dan warta Indonesia yang relevan untuk memperkaya wawasan sekaligus melatih reflek jari.",
              en: "Sentence sources utilize authentic Indonesian prose and news excerpts to train natural typing rhythms.",
            },
            tag: { id: "Lokal", en: "Localized" },
          },
          {
            id: "k-speed",
            iconName: "settings",
            title: {
              id: "Performa Cepat Tanpa Lag",
              en: "Zero-Latency Performance",
            },
            desc: {
              id: "Dioptimalkan menggunakan Turbopack dan koneksi WebSocket ringan sehingga lancar diakses dari laptop maupun lab komputer kampus.",
              en: "Optimized with Turbopack and lightweight WebSockets for flawless operation on laptops and campus computer labs.",
            },
            tag: { id: "Optimal", en: "Optimized" },
          },
          {
            id: "k-multi",
            iconName: "users",
            title: {
              id: "Dukungan Banyak Pemain Sekaligus",
              en: "Multi-Racer Concurrent Scalability",
            },
            desc: {
              id: "Arsitektur room terisolasi memungkinkan beberapa grup balapan berlangsung secara paralel tanpa saling mengganggu.",
              en: "Isolated room architecture enables multiple concurrent race cohorts without packet collision.",
            },
            tag: { id: "Skalabel", en: "Scalable" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "sync-flow",
        topic: { id: "Metode Sinkronisasi Perlombaan", en: "Multiplayer Synchronization Method" },
        before: {
          id: "Aplikasi pengetikan berbasis polling HTTP konvensional yang menghasilkan jeda waktu (lag) antar peserta dan peringkat yang tidak akurat.",
          en: "Conventional HTTP-polling apps suffered from noticeable latency jitter between competitors and out-of-sync standings.",
        },
        after: {
          id: "Koneksi WebSocket real-time sub-milidetik menyiarkan progress bar dan kecepatan setiap pembalap tanpa jeda.",
          en: "Sub-millisecond WebSocket channels broadcast competitor progress bars and typing speed without latency.",
        },
      },
      {
        id: "typo-flow",
        topic: { id: "Umpan Balik Kesalahan Mengetik", en: "Typo Feedback & Accuracy Training" },
        before: {
          id: "Hanya menandai kesalahan di akhir tes sehingga peserta tidak menyadari letak typo saat sedang memacu kecepatan.",
          en: "Only flagged typos at the end of the session, blinding racers to mistakes while in high-speed flow.",
        },
        after: {
          id: "Deteksi typo instan dengan border merah tegas dan indikator dinamis yang mendidik pemain mengetik presisi sebelum melaju.",
          en: "Instant inline error flagging with vivid red borders guiding racers to achieve pristine muscle memory.",
        },
      },
      {
        id: "theme-flow",
        topic: { id: "Desain Visual & Pengalaman Pengguna", en: "Visual Design & Competitive Atmosphere" },
        before: {
          id: "Tampilan putih standar menyerupai formulir ujian yang membosankan dan melelahkan mata dalam jangka panjang.",
          en: "Bland light interfaces reminiscent of sterile examination forms that strained eyes during extended use.",
        },
        after: {
          id: "Antarmuka dark-tech neon cyan & emerald yang imersif, futuristik, dan sangat nyaman dipandang dalam sesi balap panjang.",
          en: "Futuristic dark-tech aesthetic with neon cyan and emerald accents creating an electric, eye-friendly racing atmosphere.",
        },
      },
    ],
  },
  {
    slug: "thrifty-circular-marketplace-app",
    type: "mobile",
    acronym: "THRIFTY",
    title: {
      id: "Thrifty - Circular Marketplace & Platform Donasi Hyperlocal Medan",
      en: "Thrifty - Circular Marketplace & Hyperlocal Donation Mobile App",
    },
    subtitle: {
      id: "Aplikasi Mobile Thrifting Berkelanjutan (Donasi Gratis, Jual Beli Barang Bekas, Hyperlocal Medan, & Real-time Impact Tracker)",
      en: "Sustainable Mobile Thrifting Platform (Free Donations, Secondhand Marketplace, Hyperlocal Medan, & Real-time Impact Tracking)",
    },
    category: {
      id: "Mobile App · Circular Economy & Hyperlocal Marketplace",
      en: "Mobile App · Circular Economy & Hyperlocal Marketplace",
    },
    summary: {
      id: "Aplikasi mobile berbasis Flutter yang menginisiasi ekonomi sirkular di Kota Medan dengan memfasilitasi donasi barang layak pakai secara gratis serta jual beli barang bekas terkurasi. Mengintegrasikan pelacakan dampak lingkungan (kg sampah rumah tangga dialihkan), filter hyperlocal per kawasan Medan, dan koordinasi langsung via WhatsApp tanpa potongan komisi.",
      en: "A Flutter-powered mobile application pioneering circular economy in Medan by facilitating free direct donations and curated thrifting transactions. Features real-time environmental impact counters (diverted household waste in kg), hyperlocal neighborhood filters, and seamless direct WhatsApp peer-to-peer coordination with zero platform fees.",
    },
    overview: {
      id: "Thrifty dirancang untuk menjawab permasalahan penumpukan barang bekas layak pakai dan tingginya timbulan sampah rumah tangga di Kota Medan. Melalui antarmuka mobile yang bersih, ramah pengguna, dan berfokus pada kemudahan akses, warga dapat mendonasikan barang dalam hitungan menit, menemukan barang gratis yang siap dijemput di lokasi sekitar, serta melihat kontribusi nyata terhadap kelestarian lingkungan.",
      en: "Thrifty was engineered to tackle household clutter and reduce urban landfill waste across Medan. Built with an intuitive, eco-conscious mobile interface in Flutter, it empowers residents to post preloved items within minutes, discover nearby free donations for pickup, and transparently track collective environmental impact.",
    },
    context: {
      id: "Banyak warga memiliki barang layak pakai (buku, sepatu, pakaian, elektronik) yang menumpuk di rumah namun enggan menjualnya di marketplace konvensional karena rumitnya sistem logistik atau potongan komisi tinggi. Di sisi lain, proses donasi manual sering kali tidak tepat sasaran dan minim transparansi lokasi penjemputan.",
      en: "Many households possess usable preloved items (books, footwear, apparel, electronics) yet hesitate to list on conventional marketplaces due to cumbersome shipping logistics or steep commissions. Conversely, conventional charity drives lack hyperlocal pickup convenience and direct transparency.",
    },
    contribution: {
      id: "Bertindak sebagai Lead Mobile Developer dan UI/UX Designer secara mandiri (Solo Project). Merancang antarmuka mobile bernuansa alam yang ramah pengguna, membangun arsitektur Flutter yang modular, merancang alur listing jual/donasi terstruktur dengan klasifikasi kondisi, serta mengintegrasikan deep linking WhatsApp untuk komunikasi instan.",
      en: "Acted as solo Lead Mobile Developer and UI/UX Designer. Designed a clean, eco-friendly mobile interface, built a modular Flutter architecture, created structured sell/donate listing workflows with condition grading, and integrated WhatsApp deep linking for instant direct communication.",
    },
    solution: {
      id: "Membangun aplikasi mobile Flutter cross-platform dengan arsitektur modular yang ringan, navigasi tab bottom bar yang intuitif, sistem listing cepat dengan klasifikasi kondisi (Baru, Seperti Baru, Baik, Cukup Baik), integrasi filter hyperlocal kecamatan di Medan, serta counter dampak sirkular yang transparan.",
      en: "Developed a lightweight, high-performance Flutter mobile application featuring intuitive bottom-bar navigation, rapid listing workflows with condition grading (New, Like New, Good, Fair), hyperlocal Medan neighborhood filtering, and transparent circular impact metrics.",
    },
    role: {
      id: "Lead Mobile Developer & UI/UX Designer (Solo Project)",
      en: "Lead Mobile Developer & UI/UX Designer (Solo Project)",
    },
    period: {
      id: "2026 - Sekarang",
      en: "2026 - Present",
    },
    status: {
      id: "Mobile App Project / Portofolio Aktif",
      en: "Mobile App Project / Active Portfolio",
    },
    client: {
      id: "Inisiatif Pribadi / Circular Economy Medan",
      en: "Personal Initiative / Circular Economy Medan",
    },
    image: "/media/projects/thrifty-mobile-hero.webp",
    screenshots: [
      {
        id: "beranda",
        title: {
          id: "Beranda & Metrik Dampak Sirkular",
          en: "Home Dashboard & Circular Impact Metrics",
        },
        caption: {
          id: "Beranda utama yang menyajikan kampanye ekonomi sirkular, metrik listing aktif & donasi siap jemput, counter dampak sampah yang dialihkan (kg), serta feed donasi terbaru.",
          en: "Main home screen showcasing circular campaign highlights, live active listings, ready-to-pickup donations, environmental impact metrics, and recent donation feed.",
        },
        image: "/media/projects/thrifty-mobile-beranda.webp",
        category: { id: "Beranda", en: "Home Dashboard" },
      },
      {
        id: "jelajahi",
        title: {
          id: "Katalog Hyperlocal & Filter Donasi",
          en: "Hyperlocal Catalog & Donation Filters",
        },
        caption: {
          id: "Eksplorasi barang bekas dan donasi gratis terdekat berdasarkan area kecamatan di Medan (Medan Petisah, Simpang Waspada, Medan Krio) lengkap dengan tag kondisi dan kategori barang.",
          en: "Explore nearby preloved goods and free donations filtered by Medan sub-districts, categorized by item type, condition grading, and distance.",
        },
        image: "/media/projects/thrifty-mobile-jelajahi.webp",
        category: { id: "Katalog Jelajahi", en: "Explore Catalog" },
      },
      {
        id: "detail",
        title: {
          id: "Detail Barang & Hubungi via WhatsApp",
          en: "Item Detail & Direct WhatsApp Connect",
        },
        caption: {
          id: "Tampilan detail barang donasi/jual menampilkan galeri foto, status kelayakan, kalkulasi dampak donasi lokal, serta tombol aksi cepat untuk terhubung ke WhatsApp donatur.",
          en: "Product detail screen with image gallery, condition badge, local donation impact estimation, and one-tap WhatsApp contact button for easy pickup coordination.",
        },
        image: "/media/projects/thrifty-mobile-detail.webp",
        category: { id: "Detail Barang", en: "Product Detail" },
      },
      {
        id: "post",
        title: {
          id: "Alur Posting Cepat (Jual / Donasi)",
          en: "Fast Posting Flow (Sell / Donate)",
        },
        caption: {
          id: "Formulir pasang listing yang praktis dengan opsi Jual atau Donasi Gratis, unggah hingga 3 foto, pemilihan kategori, serta kurasi kondisi barang yang transparan.",
          en: "Frictionless listing submission flow offering Sell or Free Donate modes, multi-photo uploads (up to 3 images), category dropdowns, and transparent item condition rating.",
        },
        image: "/media/projects/thrifty-mobile-post.webp",
        category: { id: "Pasang Listing", en: "Create Listing" },
      },
      {
        id: "profil",
        title: {
          id: "Profil Pengguna & Jejak Dampak",
          en: "User Profile & Impact Footprint",
        },
        caption: {
          id: "Halaman profil pengguna yang merangkum data kontak, jumlah listing aktif, riwayat barang yang berhasil disalurkan, serta jejak kontribusi sosial warga.",
          en: "User profile overview summarizing contact details, active listings, fulfilled donation history, and personal environmental contribution footprint.",
        },
        image: "/media/projects/thrifty-mobile-profil.webp",
        category: { id: "Profil Pengguna", en: "User Profile" },
      },
      {
        id: "auth",
        title: {
          id: "Gerbang Autentikasi Pengguna",
          en: "User Authentication Gateway",
        },
        caption: {
          id: "Portal masuk dan pendaftaran akun pengguna dengan identitas visual ramah lingkungan dan tata letak yang bersih.",
          en: "Streamlined login and registration portal featuring eco-friendly visual branding and clutter-free mobile ergonomics.",
        },
        image: "/media/projects/thrifty-mobile-auth.webp",
        category: { id: "Autentikasi", en: "Authentication" },
      },
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Material Design 3",
      "State Management",
      "WhatsApp Direct API",
      "Android",
    ],
    metrics: [
      {
        value: "100%",
        label: { id: "Gratis Tanpa Komisi", en: "Zero Platform Fees" },
        description: {
          id: "Donasi dan handoff barang langsung antar warga tanpa potongan perantara",
          en: "Direct peer-to-peer donation and handoff without middleman commissions",
        },
      },
      {
        value: "Hyperlocal",
        label: { id: "Kawasan Medan", en: "Medan Hyperlocal" },
        description: {
          id: "Mempermudah jemput barang di lingkungan sekitar tanpa biaya logistik",
          en: "Facilitates neighborhood pickups avoiding packaging and shipping fees",
        },
      },
      {
        value: "Eco Impact",
        label: { id: "Pelacak Sampah Dialihkan", en: "Waste Diversion Metric" },
        description: {
          id: "Mencatat estimasi kilogram barang layak pakai yang terselamatkan dari TPA",
          en: "Tracks estimated kilograms of usable household items saved from urban landfills",
        },
      },
      {
        value: "Solo Dev",
        label: { id: "Mobile & UI/UX", en: "Solo Mobile Dev" },
        description: {
          id: "Dikerjakan mandiri dari konsep UX, desain antarmuka, hingga kode Flutter",
          en: "Independently developed from UX concept, UI design system, to Flutter implementation",
        },
      },
    ],
    roleGroups: [
      {
        roleKey: "donatur",
        roleTitle: { id: "Untuk Donatur & Penjual", en: "For Donors & Sellers" },
        roleBadge: { id: "Pemberi Barang", en: "Item Providers" },
        summary: {
          id: "Memudahkan warga menyalurkan barang layak pakai yang menumpuk di rumah secara cepat, transparan, dan berdampak nyata bagi lingkungan.",
          en: "Enables residents to declutter and repurpose usable household items quickly, transparently, and with meaningful eco-impact.",
        },
        items: [
          {
            id: "d-listing",
            iconName: "sparkles",
            title: {
              id: "Posting Cepat dalam 2 Menit",
              en: "2-Minute Rapid Listing",
            },
            desc: {
              id: "Unggah foto barang dari ponsel, pilih kategori, tentukan kondisi, dan listing siap tayang dalam hitungan detik.",
              en: "Snap and upload photos, pick category, set condition grading, and publish your listing within seconds.",
            },
            tag: { id: "Cepat & Praktis", en: "Fast & Simple" },
          },
          {
            id: "d-pilihan",
            iconName: "check-circle",
            title: {
              id: "Pilihan Donasi Gratis atau Jual Terjangkau",
              en: "Flexible Free Donate or Thrift Pricing",
            },
            desc: {
              id: "Fleksibilitas penuh menentukan apakah barang ingin dihibahkan secara cuma-cuma atau dijual dengan harga terjangkau.",
              en: "Full flexibility to gift items completely free of charge or set an accessible secondhand price.",
            },
            tag: { id: "Fleksibel", en: "Flexible" },
          },
          {
            id: "d-wa",
            iconName: "users",
            title: {
              id: "Koordinasi Langsung via WhatsApp",
              en: "Direct WhatsApp Coordination",
            },
            desc: {
              id: "Calon penerima atau pembeli langsung terhubung ke chat WhatsApp pribadi tanpa perantara bot atau sistem tiket.",
              en: "Prospective recipients or buyers connect directly via personal WhatsApp without bots or ticketing systems.",
            },
            tag: { id: "Direct Chat", en: "Direct Chat" },
          },
          {
            id: "d-track",
            iconName: "award",
            title: {
              id: "Pantau Jejak Kebaikan & Dampak",
              en: "Track Personal Impact Footprint",
            },
            desc: {
              id: "Lihat akumulasi barang yang telah berhasil disalurkan dan estimasi pengurangan limbah yang Anda kontribusikan.",
              en: "Review accumulated items successfully handed over and your estimated waste diversion contribution.",
            },
            tag: { id: "Transparan", en: "Transparent" },
          },
        ],
      },
      {
        roleKey: "pencari",
        roleTitle: { id: "Untuk Pencari & Pembeli", en: "For Seekers & Thrifters" },
        roleBadge: { id: "Pencari Barang", en: "Item Seekers" },
        summary: {
          id: "Membantu warga dan mahasiswa menemukan kebutuhan barang layak pakai gratis atau berbiaya hemat di dekat lingkungan tempat tinggal.",
          en: "Helps local residents and students discover essential preloved goods for free or minimal cost within their local neighborhood.",
        },
        items: [
          {
            id: "p-hyperlocal",
            iconName: "compass",
            title: {
              id: "Filter Hyperlocal Berbasis Kawasan",
              en: "Neighborhood Hyperlocal Filter",
            },
            desc: {
              id: "Telusuri barang berdasarkan area terdekat di Medan (Medan Petisah, Simpang Waspada, Medan Krio, dan sekitarnya).",
              en: "Filter listings by nearby Medan sub-districts (Medan Petisah, Simpang Waspada, Medan Krio, and surroundings).",
            },
            tag: { id: "Dekat Rumah", en: "Nearby" },
          },
          {
            id: "p-kondisi",
            iconName: "shield",
            title: {
              id: "Transparansi Rating Kondisi Barang",
              en: "Transparent Condition Ratings",
            },
            desc: {
              id: "Informasi kondisi yang jujur (Baru, Seperti Baru, Baik, Cukup Baik) memastikan barang yang diterima sesuai ekspektasi.",
              en: "Honest condition tags (New, Like New, Good, Fair) ensure item quality aligns with user expectations.",
            },
            tag: { id: "Jujur & Jelas", en: "Accurate" },
          },
          {
            id: "p-gratis",
            iconName: "sparkles",
            title: {
              id: "Akses Donasi Tanpa Biaya",
              en: "Zero-Cost Free Donations",
            },
            desc: {
              id: "Dapatkan perlengkapan buku, sepatu, hobi, dan peralatan rumah tangga yang masih sangat layak pakai secara gratis.",
              en: "Obtain books, footwear, hobbies, and household essentials in great condition at zero expense.",
            },
            tag: { id: "Gratis 100%", en: "100% Free" },
          },
          {
            id: "p-chat",
            iconName: "users",
            title: {
              id: "Jemput Barang Mandiri",
              en: "Self-Pickup Arrangement",
            },
            desc: {
              id: "Sepakati waktu penjemputan barang secara fleksibel dengan pemilik barang tanpa ketergantungan jasa ekspedisi.",
              en: "Agree on flexible pickup times directly with the item owner without courier delivery dependencies.",
            },
            tag: { id: "Bebas Ongkir", en: "No Shipping" },
          },
        ],
      },
      {
        roleKey: "lingkungan",
        roleTitle: { id: "Dampak Lingkungan & Sosial", en: "Eco & Community Impact" },
        roleBadge: { id: "Ekonomi Sirkular", en: "Circular Economy" },
        summary: {
          id: "Mengubah paradigma konsumsi perkotaan menuju siklus hidup barang yang lebih panjang dan berkelanjutan bagi Kota Medan.",
          en: "Shifting urban consumer behavior toward extended product lifecycles and sustainable communal stewardship in Medan.",
        },
        items: [
          {
            id: "e-divert",
            iconName: "globe",
            title: {
              id: "Pengalihan Sampah dari TPA Kota",
              en: "Landfill Waste Diversion",
            },
            desc: {
              id: "Setiap barang yang didonasikan atau ditukar memperpanjang usia pakai dan mencegah sampah menumpuk di TPA Terjun Medan.",
              en: "Every donated or thrifted item extends product life and prevents landfill accumulation in Medan.",
            },
            tag: { id: "Eco-Friendly", en: "Eco-Friendly" },
          },
          {
            id: "e-reuse",
            iconName: "sparkles",
            title: {
              id: "Budaya Thrifting & Sirkularitas",
              en: "Thrifting & Circular Culture",
            },
            desc: {
              id: "Membangun kesadaran generasi muda bahwa barang bekas berkualitas memiliki nilai fungsi tinggi dan kebanggaan tersendiri.",
              en: "Cultivating awareness among youth that preloved quality goods offer high utility and conscious pride.",
            },
            tag: { id: "Berkelanjutan", en: "Sustainable" },
          },
          {
            id: "e-komunitas",
            iconName: "users",
            title: {
              id: "Solidaritas Komunitas Lokal",
              en: "Local Community Solidarity",
            },
            desc: {
              id: "Mempererat hubungan sosial antar tetangga melalui aksi saling berbagi barang yang bermakna bagi yang membutuhkan.",
              en: "Strengthening community bonds between neighbors through meaningful item sharing for those in need.",
            },
            tag: { id: "Solidaritas", en: "Solidarity" },
          },
        ],
      },
    ],
    comparisons: [
      {
        id: "donasi-flow",
        topic: { id: "Penyaluran Barang Layak Pakai", en: "Preloved Goods Distribution" },
        before: {
          id: "Barang menumpuk di lemari atau berakhir di tempat sampah karena bingung menyalurkannya ke mana.",
          en: "Usable items sat idle in storage closets or ended up in trash bins due to lack of accessible outlets.",
        },
        after: {
          id: "Cukup foto dan pasang status donasi, warga sekitar yang membutuhkan langsung siap menjemput barang ke lokasi.",
          en: "Snap photos and publish as a donation; nearby neighbors in need arrange self-pickup promptly.",
        },
      },
      {
        id: "transaksi-flow",
        topic: { id: "Biaya & Skema Transaksi", en: "Fees & Packaging Friction" },
        before: {
          id: "Marketplace konvensional mengenakan potongan biaya admin seller dan mewajibkan ongkir serta bungkus bubble wrap plastik.",
          en: "Conventional marketplaces charge seller admin fees and enforce paid shipping with single-use plastic bubble wraps.",
        },
        after: {
          id: "100% bebas potongan komisi, handoff langsung di lokasi setempat tanpa tambahan limbah kemasan ekspedisi.",
          en: "Zero seller commission fees, direct local handoff without single-use logistics packaging waste.",
        },
      },
      {
        id: "transparansi-flow",
        topic: { id: "Pelacakan Dampak Lingkungan", en: "Environmental Impact Visibility" },
        before: {
          id: "Tidak ada pencatatan atau kesadaran terhadap seberapa besar kontribusi reuse barang dalam mengurangi sampah kota.",
          en: "Zero metrics or visibility into how individual reuse actions actively divert waste from municipal dumps.",
        },
        after: {
          id: "Tersedia pelacak dampak realtime yang menghitung estimasi kilogram sampah yang berhasil diselamatkan dari TPA.",
          en: "Built-in real-time impact tracker calculating estimated kilograms of waste successfully saved from landfills.",
        },
      },
    ],
  },
];


