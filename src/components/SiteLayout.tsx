import type { ReactNode } from "react";
import { messages } from "../data/site";
import type { Route } from "../router";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children, route }: { children: ReactNode; route: Route }) {
  const locale = route.locale;

  return (
    <>
      <a className="skip-link" href="#main-content">{messages[locale].skip}</a>
      <div className="site-shell">
        <SiteHeader route={route} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} />
      </div>
    </>
  );
}
