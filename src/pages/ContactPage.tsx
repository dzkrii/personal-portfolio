import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig, type Locale } from "../data/site";
import { riseIn, staggerContainer } from "../motion/variants";
import { navLabel } from "./PagePrimitives";

function GithubIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.672c.458 0 .66-.21.916-.458l2.198-2.137 4.57 3.376c.842.465 1.447.225 1.657-.783l2.997-14.122c.307-1.23-.47-1.787-1.284-1.493z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg
      className="contact-card__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const title = navLabel("contact", locale);

  const contactItems = [
    {
      name: "Github",
      handle: "dzkrii",
      href: siteConfig.social.github,
      icon: GithubIcon,
      isExternal: true,
    },
    {
      name: "LinkedIn",
      handle: "fatahul-ahmad-dzikri",
      href: siteConfig.social.linkedin,
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      name: "Instagram",
      handle: "@dzkrii_12",
      href: siteConfig.social.instagram,
      icon: InstagramIcon,
      isExternal: true,
    },
    {
      name: "Gmail",
      handle: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: GmailIcon,
      isExternal: false,
    },
    {
      name: "YouTube",
      handle: "@kyuradev",
      href: siteConfig.social.youtube,
      icon: YoutubeIcon,
      isExternal: true,
    },
    {
      name: "TikTok",
      handle: "@kyuradev",
      href: siteConfig.social.tiktok,
      icon: TiktokIcon,
      isExternal: true,
    },
    {
      name: "Telegram",
      handle: "@dzkkrii",
      href: siteConfig.social.telegram,
      icon: TelegramIcon,
      isExternal: true,
    },
  ];

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>

      <p className="contact-intro-text">
        {locale === "id"
          ? "Terbuka untuk diskusi proyek, kolaborasi, atau sekadar bertukar ide. Hubungi saya melalui kanal di bawah ini."
          : "Open for project discussions, collaborations, or simply sharing ideas. Reach out to me through any channel below."}
      </p>

      <motion.div
        className="contact-grid"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noreferrer" : undefined}
              className="contact-card contact-card--center-last"
              variants={riseIn}
            >
              <div className="contact-card__icon-box">
                <Icon />
              </div>
              <div className="contact-card__info">
                <span className="contact-card__title">{item.name}</span>
                <span className="contact-card__handle">{item.handle}</span>
              </div>
              <ArrowUpRight className="contact-card__arrow" size={20} aria-hidden="true" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* <div className="contact-note-box">
        <p style={{ margin: 0 }}>
          {locale === "id"
            ? "Tanpa form dan tanpa balasan otomatis. Pesan Anda langsung terhubung ke inbox pribadi saya."
            : "No form and no automated reply. Your message connects directly to my personal inbox."}
        </p>
      </div> */}
    </div>
  );
}
