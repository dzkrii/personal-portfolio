import { MediaFrame } from "../components/ui/MediaFrame";
import { SectionHeading } from "../components/ui/SectionHeading";
import { experiences, messages, profile, siteConfig, skills, type Locale } from "../data/site";
import { navLabel, PageIntro } from "./PagePrimitives";

export function AboutPage({ locale }: { locale: Locale }) {
  return <>
    <PageIntro title={navLabel("about", locale)} description={profile.bio[locale]} />
    <div className="about-grid"><MediaFrame alt={messages[locale].imagePlaceholder} fallbackLabel={messages[locale].imagePlaceholder} portrait recommendedSize={siteConfig.media.portrait.recommended} src={siteConfig.media.portrait.src} /><section><SectionHeading>{locale === "id" ? "Pengalaman" : "Experience"}</SectionHeading>{experiences.map((item) => <article className="experience" key={item.company}><h3>{item.role[locale]}</h3><p><strong>{item.company}</strong><br />{item.period[locale]}</p><p>{item.summary[locale]}</p></article>)}</section></div>
    <section className="principles-section"><SectionHeading>{locale === "id" ? "Prinsip kerja" : "Working principles"}</SectionHeading><div className="principle-list">{profile.principles.map((item) => <article key={item.title.en}><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></article>)}</div></section>
    <section className="skills-section"><SectionHeading>{locale === "id" ? "Keahlian" : "Skills"}</SectionHeading><div className="skill-groups">{Object.entries(skills).map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(", ")}</p></div>)}</div></section>
  </>;
}
