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

export function EmptyState({ type }: { type: "certificates" | "cv" }) {
  const isCertificates = type === "certificates";
  return (
    <section className="empty-state" aria-live="polite">
      <div className="empty-state__index">{isCertificates ? "00" : "PDF"}</div>
      <div>
        <p className="eyebrow">{"Ready for content"}</p>
        <h2>{isCertificates ? ("No certificates displayed yet.") : ("The CV is being prepared.")}</h2>
        <p>{isCertificates
          ? ("The data structure and gallery are ready. Certificates will appear here once the title, issuer, date, image, and credential link are added.")
          : ("The preview area and download button will activate after the final PDF is added.")}</p>
        {!isCertificates && <BrutalButton aria-disabled="true" href="" tabIndex={-1}>{"Download CV"}<ArrowDownToLine aria-hidden="true" /></BrutalButton>}
      </div>
    </section>
  );
}
