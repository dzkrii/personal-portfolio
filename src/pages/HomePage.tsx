import { useEffect, useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { BrutalButton } from "../components/ui/BrutalButton";
import { profile, type Locale } from "../data/site";
import { pathFor } from "../router";

function RoleRotator() {
  const roles = ["Software Developer", "Creative Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % roles.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [roles.length]);
  return (
    <span className="role-rotator" aria-live="polite">
      <motion.span
        key={roles[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
      >
        {roles[index]}
      </motion.span>
    </span>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <section className="hero hero--intro">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-kicker">{"Hi, I am"}</p>
        <h1>
          Fatahul
          <br />
          Ahmad Dzikri.
        </h1>
        <p className="hero-role">
          {"I am a "}
          <RoleRotator />
        </p>
        <p className="hero-copy">{profile.intro[locale]}</p>
        <div className="hero-actions">
          <BrutalButton href={pathFor("cv")}>
            {"View CV"}
            <FileText aria-hidden="true" />
          </BrutalButton>
          <BrutalButton href={pathFor("about")} tone="secondary">
            {"About me"}
            <ArrowUpRight aria-hidden="true" />
          </BrutalButton>
        </div>
      </motion.div>
      <motion.div
        className="hero-illustration"
        initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ y: -5, rotate: 1 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/fatahul-hero-illustration.png"
          width="1003"
          height="1568"
          alt={"Neo-brutalist illustration of Fatahul Ahmad Dzikri"}
        />
        <span aria-hidden="true">01 / Fatahul</span>
      </motion.div>
    </section>
  );
}
