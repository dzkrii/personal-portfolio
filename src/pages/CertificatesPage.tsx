import { ArrowUpRight } from "lucide-react";
import { certificates, type Locale } from "../data/site";
import { EmptyState, navLabel, PageIntro } from "./PagePrimitives";

export function CertificatesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navLabel("certificates", locale)}
        description={
          "A record of learning, training, and credentials supporting my work."
        }
      />
      {certificates.length === 0 ? (
        <EmptyState type="certificates" />
      ) : (
        <section
          className="certificate-grid"
          aria-label={navLabel("certificates", locale)}
        >
          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={`${certificate.issuer}-${certificate.title.en}`}
            >
              <div className="certificate-card__visual">
                {certificate.image ? (
                  <img src={certificate.image} alt="" />
                ) : (
                  <span aria-hidden="true">CERT.</span>
                )}
              </div>
              <div>
                <p className="certificate-card__meta">
                  {certificate.issuer} · {certificate.issuedAt[locale]}
                </p>
                <h2>{certificate.title[locale]}</h2>
                {certificate.credentialUrl ? (
                  <a
                    className="text-link"
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"View credential"}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
