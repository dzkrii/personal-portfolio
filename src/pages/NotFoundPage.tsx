import { BrutalButton } from "../components/ui/BrutalButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import { messages, navigation, type Locale } from "../data/site";
import { pathFor } from "../router";

export function NotFoundPage({ locale }: { locale: Locale }) {
  return <section className="not-found"><p>404</p><SectionHeading as="h1" description={messages[locale].notFoundBody}>{messages[locale].notFoundTitle}</SectionHeading><BrutalButton href={pathFor("home")}>{navigation[0].label[locale]}</BrutalButton></section>;
}
