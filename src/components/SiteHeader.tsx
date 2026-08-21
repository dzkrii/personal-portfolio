import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { messages, navigation, siteConfig } from "../data/site";
import { pathFor, type Route } from "../router";
import { Link } from "./Link";

export function SiteHeader({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const locale = "en" as const;

  useEffect(() => setOpen(false), [route]);

  return (
    <header className="site-header">
      <Link
        className="github-badge"
        href={siteConfig.social.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Buka profil GitHub dzkrii"
      >
        <span className="github-badge__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              fill="currentColor"
              d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.28c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
            />
          </svg>
        </span>
        <span className="github-badge__copy">
          <strong>dzkrii</strong>
          <small>Open source / profile</small>
        </span>
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
        aria-label={"Primary navigation"}
      >
        {navigation.map((item) => (
          <Link
            key={item.key}
            href={pathFor(item.key)}
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
      </nav>
    </header>
  );
}
