import { SectionHeading } from "../components/ui/SectionHeading";
import {
  experiences,
  profile,
  technologies,
  type Locale,
} from "../data/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = {
    experienceTitle: "My experience",
    skillsTitle: "Technology I use.",
  };

  return (
    <div className="about-page">
      <section className="about-profile" aria-labelledby="about-profile-title">
        <div className="about-profile__portrait hero-illustration">
          <img
            src="/fatahul-hero-illustration.png"
            width="1003"
            height="1568"
            alt={"Neo-brutalist illustration of Fatahul Ahmad Dzikri"}
          />
          <span aria-hidden="true">01 / Fatahul</span>
        </div>
        <div className="about-profile__copy">
          <div id="about-profile-title">
            {profile.about[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="about-experience" aria-labelledby="experience-title">
        <SectionHeading as="h2" id="experience-title">
          {copy.experienceTitle}
        </SectionHeading>
        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience" key={`${item.company}-${item.period.en}`}>
              <div className="experience__content">
                <p className="experience__period">{item.period[locale]}</p>
                <h3>{item.role[locale]}</h3>
                <p className="experience__company">{item.company}</p>
                <p>{item.summary[locale]}</p>
              </div>
              <span className="experience__marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <SectionHeading as="h2" id="skills-title">
          {copy.skillsTitle}
        </SectionHeading>
        <div className="technology-grid">
          {technologies.map((technology) => (
            <article className="technology-card" key={technology.name}>
              <div className="technology-card__icon" aria-hidden="true">
                <img
                  src={`https://cdn.simpleicons.org/${technology.slug}/191a17`}
                  alt=""
                  onLoad={(event) => { event.currentTarget.classList.add("is-loaded"); }}
                  onError={(event) => { event.currentTarget.hidden = true; }}
                />
                <span>{technology.mark}</span>
              </div>
              <h3>{technology.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
