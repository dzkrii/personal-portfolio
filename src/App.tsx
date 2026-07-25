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
          <a className="brand" href="#top" aria-label="KyuraDev, kembali ke atas">
            <img src="/logo-kyuradev.png" alt="KyuraDev" />
          </a>

          <nav aria-label="Navigasi utama">
            <a href="#foundation">Fondasi</a>
            <a className="nav-cta" href="mailto:hello@kyuradev.dev">
              Say hello!
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
              <span className="highlight highlight--coral"> berani</span>,
              <br />
              cepat, dan
              <span className="highlight highlight--mint"> berkarakter.</span>
            </motion.h1>

            <motion.p className="hero-copy" variants={riseIn}>
              Halo, saya Kyura — creative developer di balik{" "}
              <strong>{siteConfig.name}</strong>. Ini adalah fondasi baru untuk
              portofolio neo-brutalist saya.
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

            <div className="swatches" aria-label="Palet warna KyuraDev">
              <div className="swatch swatch--ink">
                <span>Ink</span>
                <code>#353540</code>
              </div>
              <div className="swatch swatch--coral">
                <span>Dev Coral</span>
                <code>#FF3340</code>
              </div>
              <div className="swatch swatch--mint">
                <span>Kyura Mint</span>
                <code>#14C99A</code>
              </div>
              <div className="swatch swatch--paper">
                <span>Warm Paper</span>
                <code>#F6F1E7</code>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} KyuraDev</span>
          <span>Build bold. Stay curious.</span>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
