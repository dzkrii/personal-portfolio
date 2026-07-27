# Konsep Portofolio Personal Fatahul Ahmad Dzikri

## Ringkasan

Portofolio Fatahul Ahmad Dzikri adalah situs personal seorang creative developer yang ditujukan
terutama untuk calon klien. Website harus menampilkan karakter kreatif yang kuat
sekaligus membangun kepercayaan melalui karya web nyata. Pendekatannya bersifat
personal dan informatif, bukan landing page penjualan dengan CTA agresif.

## Tujuan dan Prinsip Konten

- Menjadikan proyek sebagai bukti utama kemampuan desain dan development.
- Menjelaskan peran, pemikiran, solusi, dan hasil, bukan hanya menampilkan galeri.
- Menggunakan bahasa yang mudah dipahami calon klien tanpa menghilangkan detail
  teknis yang relevan.
- Menampilkan CTA kontak secara wajar setelah pengunjung memahami profil dan
  kualitas karya.
- Menyediakan konten Indonesia dan Inggris dengan struktur yang identik.

## Struktur Website

| Halaman | Isi dan tujuan |
| --- | --- |
| **Beranda** `/{locale}` | Hero dan foto personal, perkenalan singkat, 2-3 proyek unggulan, keahlian inti, serta ajakan kontak ringan. |
| **Proyek** `/{locale}/projects` | Daftar 3-4 proyek web terkurasi yang menunjukkan variasi kemampuan dan kualitas hasil. |
| **Detail Proyek** `/{locale}/projects/{slug}` | Konteks atau masalah, peran, solusi, stack, visual, hasil, serta tautan demo atau repository bila tersedia. |
| **Tentang** `/{locale}/about` | Profil, prinsip kerja, pengalaman, keahlian, foto personal, dan tautan unduh CV. |
| **Kontak** `/{locale}/contact` | Pesan singkat, alamat email, serta tautan GitHub dan LinkedIn tanpa formulir. |

Navigasi utama terdiri dari **Beranda, Proyek, Tentang, Kontak**, dan pengalih
bahasa. Bahasa menggunakan prefix `/id` dan `/en`; rute `/` diarahkan ke `/id`.
Pengalih bahasa mempertahankan halaman yang sedang dibuka bila padanannya
tersedia.

## Arah Visual dan Pengalaman

- Mempertahankan karakter neo-brutalist melalui Space Grotesk, garis tegas, dan
  hard shadow, tanpa membawa identitas brand produk sebelumnya.
- Menggunakan palet Electric Moss yang ekspresif namun tetap fokus pada karya:
  Ink `#191A17`, Electric Moss `#B7E43A`, Moss Soft `#DDF2A4`, dan Paper `#F3F3EC`.
- Memakai Electric Moss sebagai aksen tindakan utama dan Moss Soft sebagai tint
  pendukung; warna netral menjadi dasar agar visual proyek tetap menonjol.
- Menggunakan light mode saja pada versi awal.
- Memakai foto asli untuk memberi sisi personal dan meningkatkan kepercayaan.
- Mengutamakan hierarki yang jelas, kontras yang mudah dibaca, navigasi keyboard,
  serta layout responsif.
- Menggunakan motion secara terarah untuk menambah karakter tanpa mengganggu
  konten, dengan tetap menghormati `prefers-reduced-motion`.

## Batasan Versi Awal

Versi awal tidak mencakup blog/lab, halaman layanan terperinci, testimoni, form
kontak, dark mode, maupun CMS. Konten dikelola langsung di aplikasi React.
Materi 3-4 proyek, foto personal, CV PDF, alamat email, dan tautan sosial harus
disiapkan sebelum implementasi konten final.

Fondasi teknis tetap menggunakan React, TypeScript, Vite, Tailwind CSS, dan
Motion. Keputusan teknis lanjutan harus menjaga struktur kedua bahasa tetap
setara serta menjadikan proyek sebagai fokus utama website.

## Roadmap Pengembangan

Kerjakan tahap berikut secara berurutan. Sebuah tahap dianggap selesai setelah
hasil akhirnya tersedia dan dapat diperiksa sebelum melanjutkan.

### 1. Siapkan Materi [SELESAI]

> Selesai pada 27 Juli 2026. Copy dua bahasa, pengalaman, keahlian, tiga proyek,
> kontak, serta daftar aset placeholder tersedia di
> [`docs/content-inventory.md`](content-inventory.md). Foto, CV, screenshot,
> tautan proyek, stack final, dan hasil terukur akan diganti atau dikonfirmasi
> pada tahap integrasi konten final.

- Tulis profil, prinsip kerja, pengalaman, dan daftar keahlian dalam dua bahasa.
- Pilih 3-4 proyek; kumpulkan konteks, peran, solusi, stack, hasil, screenshot,
  serta tautan demo atau repository.
- Siapkan foto personal teroptimasi, CV PDF, email, GitHub, dan LinkedIn.
- **Hasil:** seluruh konten mentah tersedia dan proyek memiliki materi yang cukup.

### 2. Tetapkan Fondasi Aplikasi [SELESAI]

> Selesai pada 27 Juli 2026. Routing bilingual, redirect awal, halaman 404,
> language switcher yang mempertahankan halaman aktif, data terpusat, metadata
> dasar, favicon, serta placeholder media responsif telah tersedia.

- Tambahkan routing untuk `/id` dan `/en`, redirect `/` ke `/id`, halaman 404,
  serta pengalih bahasa yang mempertahankan halaman aktif.
- Susun data terpusat untuk navigasi, profil, proyek, pengalaman, dan terjemahan;
  jangan menulis konten berulang langsung di komponen.
- Tetapkan metadata dasar, favicon, struktur URL, dan aturan gambar.
- **Hasil:** semua rute dapat dibuka dengan konten placeholder tanpa error.

### 3. Bangun Design System [SELESAI]

> Selesai pada 27 Juli 2026. Token warna, tipografi, spacing, border, hard
> shadow, breakpoint, motion, dan layer telah dirapikan. Layout, header, footer,
> tombol, judul section, kartu proyek, language switcher, dan media kini menjadi
> komponen bersama dengan state interaksi, loading, fallback, fokus, serta
> reduced motion yang konsisten.

- Rapikan token warna, tipografi, spacing, border, hard shadow, dan breakpoint.
- Buat komponen bersama: layout, header, footer, tombol, judul section, kartu
  proyek, language switcher, serta elemen media.
- Tentukan state hover, focus, active, loading, dan reduced motion.
- **Hasil:** komponen dasar konsisten, responsif, dan dapat diakses.

### 4. Bangun Halaman

- Kerjakan Beranda lebih dahulu, kemudian Proyek, Detail Proyek, Tentang,
  Kontak, dan 404.
- Isi Beranda dengan 2-3 proyek unggulan; semua proyek tetap tersedia pada
  halaman Proyek.
- Pastikan setiap detail proyek menjelaskan masalah, kontribusi, solusi, dan
  hasil sebelum menampilkan stack atau tautan eksternal.
- **Hasil:** seluruh alur utama lengkap pada desktop dan mobile dalam dua bahasa.

### 5. Integrasikan Konten Final

- Ganti placeholder dengan copy, gambar proyek, foto, CV, dan tautan sebenarnya.
- Optimalkan gambar dan gunakan ukuran/aspect ratio yang stabil agar layout
  tidak bergeser saat media dimuat.
- Periksa kesetaraan makna, navigasi, dan slug antara bahasa Indonesia-Inggris.
- **Hasil:** tidak ada placeholder, tautan kosong, atau materi yang belum final.

### 6. Quality Assurance

- Uji navigasi, redirect, language switcher, unduhan CV, email, dan semua tautan.
- Uji tampilan pada lebar 375, 768, 1024, dan 1440 px serta browser modern.
- Periksa keyboard navigation, focus state, heading, alt text, kontras, dan
  `prefers-reduced-motion`.
- Jalankan typecheck dan production build; perbaiki error serta warning penting.
- **Hasil:** seluruh pemeriksaan lulus tanpa error yang diketahui.

### 7. Persiapan Rilis

- Lengkapi title, description, canonical, `hreflang`, Open Graph, sitemap, dan
  robots.txt untuk setiap bahasa.
- Pasang domain, analytics ringan bila diperlukan, dan deployment production.
- Lakukan smoke test pada URL production dan periksa tampilan saat tautan dibagikan.
- **Hasil:** website dapat diakses publik, terindeks dengan benar, dan siap
  dibagikan kepada calon klien.

## Definition of Done

Portfolio selesai ketika semua halaman tersedia dalam dua bahasa, 3-4 studi
kasus menggunakan konten final, navigasi dan kontak berfungsi, CV dapat diunduh,
tampilan responsif serta aksesibel, production build lulus, dan website telah
diverifikasi pada domain production.
