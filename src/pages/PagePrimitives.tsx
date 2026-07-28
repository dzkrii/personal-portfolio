import { ArrowDownToLine } from "lucide-react";
import { BrutalButton } from "../components/ui/BrutalButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import { navigation, type Locale } from "../data/site";

export function PageIntro({ title, description }: { title: string; description: string }) {
  return <section className="page-intro"><SectionHeading as="h1" description={description}>{title}</SectionHeading></section>;
}

export function navLabel(key: (typeof navigation)[number]["key"], locale: Locale) {
  return navigation.find((item) => item.key === key)?.label[locale] ?? key;
}

export function EmptyState({ locale, type }: { locale: Locale; type: "certificates" | "cv" }) {
  const isCertificates = type === "certificates";
  return (
    <section className="empty-state" aria-live="polite">
      <div className="empty-state__index">{isCertificates ? "00" : "PDF"}</div>
      <div>
        <p className="eyebrow">{locale === "id" ? "Siap diisi" : "Ready for content"}</p>
        <h2>{isCertificates ? (locale === "id" ? "Belum ada sertifikat ditampilkan." : "No certificates displayed yet.") : (locale === "id" ? "CV sedang disiapkan." : "The CV is being prepared.")}</h2>
        <p>{isCertificates
          ? (locale === "id" ? "Struktur data dan galeri sudah tersedia. Sertifikat akan muncul di sini setelah judul, penerbit, tanggal, gambar, dan tautan kredensial ditambahkan." : "The data structure and gallery are ready. Certificates will appear here once the title, issuer, date, image, and credential link are added.")
          : (locale === "id" ? "Area pratinjau dan tombol unduh akan aktif setelah PDF final ditambahkan." : "The preview area and download button will activate after the final PDF is added.")}</p>
        {!isCertificates && <BrutalButton aria-disabled="true" href="" tabIndex={-1}>{locale === "id" ? "Unduh CV" : "Download CV"}<ArrowDownToLine aria-hidden="true" /></BrutalButton>}
      </div>
    </section>
  );
}
