import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

const stats = [
  { value: '500K+', label: 'EUR generated with Teenwear' },
  { value: '51', label: 'countries reached' },
  { value: '18', label: 'age when Teenwear started' },
  { value: '2022', label: 'year the journey began' },
];

const timeline = [
  ['2022', 'Started Teenwear', 'Built the first version from scratch and began learning ecommerce by doing.'],
  ['2023', 'Found traction', 'Moved from experiments into a real business with repeatable demand and stronger operations.'],
  ['2024', 'Scaled the machine', 'Pushed Teenwear beyond a small store and started building systems, brand assets and international reach.'],
  ['Now', 'Building bigger', 'Focused on turning Teenwear into a serious global youth fashion company while exploring new products and ideas.'],
];

function Orb() {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <motion.div
        className="orb"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <span className="orb-ring ring-one" />
        <span className="orb-ring ring-two" />
        <span className="orb-core" />
      </motion.div>
    </div>
  );
}

function Marquee() {
  const items = useMemo(() => ['FOUNDER', 'TEENWEAR', 'ECOMMERCE', 'PRODUCT', 'BRAND', 'SYSTEMS'], []);
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}<b>↗</b></span>
        ))}
      </motion.div>
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.2]);

  return (
    <main>
      <div className="noise" />
      <nav className="nav shell">
        <a href="#top" className="logo">DS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#numbers">Numbers</a>
          <a href="#journey">Journey</a>
        </div>
        <a href="mailto:hello@danielsusina.com" className="nav-cta">Contact ↗</a>
      </nav>

      <section id="top" className="hero shell">
        <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Daniel Susina / Founder / Slovakia
          </motion.p>

          <h1>
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >I build things</motion.span>
            <motion.span
              className="outline-line"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >people remember.</motion.span>
          </h1>

          <div className="hero-bottom">
            <p>
              Entrepreneur and founder of Teenwear. I care about product, brand, growth and turning rough ideas into real systems that scale.
            </p>
            <a href="#about" className="circle-link" aria-label="Scroll to about section">↓</a>
          </div>
        </motion.div>
        <Orb />
      </section>

      <Marquee />

      <section id="about" className="section shell about-grid">
        <div>
          <p className="section-kicker">01 / About</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>I am not interested in looking busy. I am interested in building something real.</h2>
          <div className="two-col-copy">
            <p>I started building websites as a teenager. At 18, I turned that obsession into Teenwear, an ecommerce business focused on young fashion.</p>
            <p>Today I spend most of my time thinking about growth, operations, customer experience, creative direction and how to make a company feel bigger than the sum of its parts.</p>
          </div>
        </motion.div>
      </section>

      <section id="numbers" className="section shell">
        <div className="section-head">
          <p className="section-kicker">02 / Numbers</p>
          <p className="section-note">Selected milestones. No vanity dashboard.</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.article
              className="stat"
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="stat-index">0{index + 1}</span>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement-section">
        <div className="shell statement-wrap">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            BUILDING A BRAND IS NOT ABOUT LOOKING BIG. <span>IT IS ABOUT BECOMING BIG ENOUGH THAT THE LOOK FOLLOWS.</span>
          </motion.p>
        </div>
      </section>

      <section id="journey" className="section shell journey">
        <div className="section-head">
          <p className="section-kicker">03 / Journey</p>
          <p className="section-note">A compressed version of the story so far.</p>
        </div>
        <div className="timeline">
          {timeline.map(([year, title, copy], index) => (
            <motion.div
              className="timeline-row"
              key={year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <span className="timeline-year">{year}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="timeline-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section shell project-feature">
        <div className="feature-meta">
          <p className="section-kicker">04 / Main project</p>
          <span>Teenwear.eu</span>
        </div>
        <div className="feature-card">
          <div className="feature-copy">
            <p className="micro">GLOBAL YOUTH FASHION / ECOMMERCE</p>
            <h2>Teenwear</h2>
            <p>What started as a small online store became the project that taught me almost everything I know about business.</p>
            <a href="https://teenwear.eu" target="_blank" rel="noreferrer">Visit project ↗</a>
          </div>
          <div className="feature-visual" aria-hidden="true">
            <div className="scanner-line" />
            <span className="corner tl">+</span>
            <span className="corner tr">+</span>
            <span className="corner bl">+</span>
            <span className="corner br">+</span>
            <div className="brand-word">TEENWEAR</div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p className="section-kicker">05 / Contact</p>
          <h2>Have something worth building?</h2>
        </div>
        <div className="footer-actions">
          <a href="mailto:hello@danielsusina.com">Email me ↗</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="footer-bottom">
          <span>Daniel Susina © 2026</span>
          <span>Built with intent, not templates.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
