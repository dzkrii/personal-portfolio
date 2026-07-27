import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { messages, navigation, siteConfig } from "../data/site";
import { pathFor, type Route } from "../router";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "./Link";

export function SiteHeader({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const locale = route.locale;

  useEffect(() => setOpen(false), [route]);

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={pathFor(locale, "home")}
        aria-label={`${siteConfig.name}, ${navigation[0].label[locale]}`}
      >
        <img src="/logo-fatahul.svg" width="180" height="48" alt={siteConfig.name} />
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? messages[locale].closeMenu : messages[locale].menu}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      <nav
        id="primary-navigation"
        className={open ? "nav nav--open" : "nav"}
        aria-label={locale === "id" ? "Navigasi utama" : "Primary navigation"}
      >
        {navigation.map((item) => (
          <Link
            key={item.key}
            href={pathFor(locale, item.key)}
            aria-current={
              route.page === item.key ||
              (item.key === "projects" && route.page === "project" && route.projectExists)
                ? "page"
                : undefined
            }
          >
            {item.label[locale]}
          </Link>
        ))}
        <LanguageSwitcher route={route} locale={locale} />
      </nav>
    </header>
  );
}
