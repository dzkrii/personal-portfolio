import { ArrowUpRight } from "lucide-react";
import { siteConfig, type Locale } from "../data/site";
import { navLabel, PageIntro } from "./PagePrimitives";

export function ContactPage({ locale }: { locale: Locale }) {
  return <><PageIntro title={navLabel("contact", locale)} description={"Have a project or idea worth discussing? Send a message through one of these channels."} /><div className="contact-links"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight aria-hidden="true" /></a><a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight aria-hidden="true" /></a><a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight aria-hidden="true" /></a></div><p className="contact-note">{"No form and no automated reply. Your email goes directly to my inbox."}</p></>;
}
