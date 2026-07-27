import { navigation, siteConfig, type Locale } from "../data/site";
import { pathFor } from "../router";
import { Link } from "./Link";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <p>
        <strong>{siteConfig.name}</strong>
        <span>{siteConfig.role[locale]}</span>
      </p>
      <nav aria-label={locale === "id" ? "Navigasi footer" : "Footer navigation"}>
        {navigation.slice(1).map((item) => (
          <Link key={item.key} href={pathFor(locale, item.key)}>
            {item.label[locale]}
          </Link>
        ))}
      </nav>
      <small>© {new Date().getFullYear()}</small>
    </footer>
  );
}
