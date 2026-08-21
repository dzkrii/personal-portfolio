import { ArrowUpRight } from "lucide-react";
import { siteConfig, type Locale } from "../data/site";
import { navLabel } from "./PagePrimitives";

export function ContactPage({ locale }: { locale: Locale }) {
  const title = navLabel("contact", locale);

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>
      <div className="contact-links">
        <a href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
          GitHub
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <p className="contact-note">
        {
          "No form and no automated reply. Your email goes directly to my inbox."
        }
      </p>
    </div>
  );
}
