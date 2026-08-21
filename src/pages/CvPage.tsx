import { ArrowDownToLine } from "lucide-react";
import { siteConfig, type Locale } from "../data/site";
import { EmptyState } from "./PagePrimitives";

export function CvPage({ locale: _locale }: { locale: Locale }) {
  const resumeSrc = siteConfig.media.resume.src;
  const title = "Curriculum Vitae";

  return (
    <div className="cv-page">
      <header className="cv-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>
      {resumeSrc ? (
        <section className="cv-viewer">
          <div className="cv-viewer__toolbar">
            <p>{"CV document"}</p>
            <a
              className="brutal-button brutal-button--primary"
              href={resumeSrc}
              download
            >
              {"Download CV"}
              <ArrowDownToLine aria-hidden="true" />
            </a>
          </div>
          <iframe
            className="cv-viewer__frame"
            src={`${resumeSrc}#toolbar=0`}
            title={"Fatahul Ahmad Dzikri CV preview"}
          />
        </section>
      ) : (
        <EmptyState type="cv" />
      )}
    </div>
  );
}
