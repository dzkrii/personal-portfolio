import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { BrutalButton } from "./components/ui/BrutalButton";
import { siteConfig } from "./data/site";
import { riseIn, staggerContainer } from "./motion/variants";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <header className="site-header">
          <a
            className="brand"
            href="#top"
            aria-label="Fatahul Ahmad Dzikri, kembali ke atas"
          >
            <img src="/logo-fatahul.svg" alt="Fatahul Ahmad Dzikri" />
          </a>

          <nav aria-label="Navigasi utama">
            <a href="#foundation">Fondasi</a>
            <a className="nav-cta" href="#foundation">
              Lihat karya
            </a>
          </nav>
        </header>

        <main id="top">
          <motion.section
            className="hero"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="eyebrow" variants={riseIn}>
              <Sparkles aria-hidden="true" size={18} />
              Portfolio v0.1 sedang dirakit
            </motion.div>

            <motion.h1 variants={riseIn}>
              Membuat web yang
              <span className="highlight highlight--moss"> berani</span>,
              <br />
              cepat, dan
              <span className="highlight highlight--moss-soft"> berkarakter.</span>
            </motion.h1>

            <motion.p className="hero-copy" variants={riseIn}>
              Halo, saya <strong>{siteConfig.name}</strong> — creative developer
              yang memadukan desain, kode, dan motion untuk membuat pengalaman
              web yang jelas sekaligus berkarakter.
            </motion.p>

            <motion.div className="hero-actions" variants={riseIn}>
              <BrutalButton href="#foundation">
                Lihat fondasi
                <ArrowDownRight aria-hidden="true" size={20} strokeWidth={3} />
              </BrutalButton>
              <span className="micro-copy">React · TypeScript · Motion</span>
            </motion.div>

            <motion.div
              className="orbit-card"
              initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 4, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              aria-hidden="true"
            >
              <span>DESIGN</span>
              <span>×</span>
              <span>CODE</span>
            </motion.div>
          </motion.section>

          <section className="foundation" id="foundation">
            <div>
              <p className="section-kicker">01 / FOUNDATION</p>
              <h2>Brand system siap dipakai.</h2>
            </div>

            <div
              className="swatches"
              aria-label="Palet warna personal Fatahul Ahmad Dzikri"
            >
              <div className="swatch swatch--ink">
                <span>Ink</span>
                <code>#191A17</code>
              </div>
              <div className="swatch swatch--moss">
                <span>Electric Moss</span>
                <code>#B7E43A</code>
              </div>
              <div className="swatch swatch--moss-soft">
                <span>Moss Soft</span>
                <code>#DDF2A4</code>
              </div>
              <div className="swatch swatch--paper">
                <span>Paper</span>
                <code>#F3F3EC</code>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Designing clearly. Building thoughtfully.</span>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
