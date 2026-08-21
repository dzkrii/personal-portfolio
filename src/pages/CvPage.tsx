import { ArrowDownToLine } from "lucide-react";
import { siteConfig, type Locale } from "../data/site";
import { EmptyState, navLabel, PageIntro } from "./PagePrimitives";

export function CvPage({ locale }: { locale: Locale }) {
  const resumeSrc = siteConfig.media.resume.src;
  return <><PageIntro title={navLabel("cv", locale)} description={"A concise overview of my experience, skills, and professional journey."} />{resumeSrc ? <section className="cv-viewer"><div className="cv-viewer__toolbar"><p>{"CV document"}</p><a className="brutal-button brutal-button--primary" href={resumeSrc} download>{"Download CV"}<ArrowDownToLine aria-hidden="true" /></a></div><iframe className="cv-viewer__frame" src={`${resumeSrc}#toolbar=0`} title={"Fatahul Ahmad Dzikri CV preview"} /></section> : <EmptyState type="cv" />}</>;
}
