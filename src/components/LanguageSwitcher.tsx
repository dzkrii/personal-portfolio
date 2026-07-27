import { Link } from "./Link";
import { messages, type Locale } from "../data/site";
import { localizedPath, type Route } from "../router";

export function LanguageSwitcher({
  locale,
  onNavigate,
  route,
}: {
  locale: Locale;
  onNavigate?: () => void;
  route: Route;
}) {
  const nextLocale = locale === "id" ? "en" : "id";

  return (
    <Link
      className="language-switcher"
      href={localizedPath(route, nextLocale)}
      hrefLang={nextLocale}
      lang={nextLocale}
      aria-label={messages[locale].language}
      onClick={onNavigate}
    >
      <span aria-hidden="true">{nextLocale.toUpperCase()}</span>
    </Link>
  );
}
