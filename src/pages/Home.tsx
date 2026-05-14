import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { interpolate } from '@/locales/interpolate';
import { getFeaturedProject } from '@/data/projects';

const CARD_LIFT =
  'transition-transform duration-200 ease-out hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none';

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  const { locale, messages: m } = useLanguage();
  const featuredProject = getFeaturedProject(locale);
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section id="hero" className="max-w-6xl mx-auto scroll-mt-28">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <motion.h2
              {...fadeUp(0.4)}
              className="text-app-accent font-mono text-lg mb-4"
            >
              {m.home.heroGreeting}
            </motion.h2>

            <motion.h1
              {...fadeUp(0.6)}
              className="text-5xl md:text-7xl font-bold text-app-text mb-6 tracking-tight"
            >
              {m.home.heroTitle}
            </motion.h1>

            <motion.div
              {...fadeUp(1.1)}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface/80 transition-colors"
              >
                {m.home.downloadResume}
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
              >
                {m.home.contactMe}
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl border border-app-border bg-app-surface p-4 text-center">
              <img
                src="/Talha_photo.webp"
                alt={m.home.photoAlt}
                className="w-72 h-72 object-cover mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto mt-20 scroll-mt-28">
        <motion.h2 {...fadeUp(0.1)} className="text-2xl font-semibold text-app-text mb-4">
          {m.home.aboutHeading}
        </motion.h2>
        <p className="text-app-muted leading-relaxed">{m.home.aboutTeaser}</p>
        <div className="mt-5">
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors text-sm"
          >
            {m.home.readMore}
          </Link>
        </div>
      </section>

      <section id="impact" className="max-w-5xl mx-auto mt-12 scroll-mt-28">
        <div className="grid gap-4 sm:grid-cols-2">
          {m.metrics.map((metric) => (
            <motion.div
              key={metric.label}
              className={`rounded-xl border border-app-border bg-app-surface p-5 text-center ${CARD_LIFT}`}
            >
              <div className="text-2xl font-semibold text-app-text">{metric.value}</div>
              <div className="text-sm text-app-muted mt-1">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
        <motion.h2 {...fadeUp(0.15)} className="text-2xl font-semibold text-app-text mb-6">
          {m.home.experienceHeading}
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          <motion.div
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold mb-2">{m.home.expSaTitle}</h3>
            <p className="text-app-muted text-sm">{m.home.expSaBody}</p>
          </motion.div>
          <motion.div
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold mb-2">{m.home.expAfacTitle}</h3>
            <p className="text-app-muted text-sm">{m.home.expAfacBody}</p>
          </motion.div>
          <motion.div
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold mb-2">{m.home.expAguTitle}</h3>
            <p className="text-app-muted text-sm">{m.home.expAguBody}</p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto mt-16 scroll-mt-28">
        <div className="flex items-center justify-between mb-6">
          <motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text">
            {m.home.featuredHeading}
          </motion.h2>
          <span className="text-sm text-app-muted">{m.home.deepDive}</span>
        </div>
        {featuredProject ? (
          <motion.div
            className={`relative rounded-2xl border border-app-border bg-app-surface p-6 focus-within:ring-2 focus-within:ring-app-accent/40 ${CARD_LIFT}`}
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <h3 className="text-xl font-semibold text-app-text">{featuredProject.title}</h3>
                <p className="text-sm text-app-muted mt-2">{featuredProject.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-app-text mt-4">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-app-border bg-app-bg/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    aria-label={interpolate(m.home.viewCaseStudyAria, {
                      title: featuredProject.title,
                    })}
                    className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors after:absolute after:inset-0 after:content-[''] after:rounded-2xl focus:outline-none"
                  >
                    {m.home.viewCaseStudy}
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredProject.gallery.slice(0, 2).map((image) => (
                  <div
                    key={image.src}
                    className="rounded-xl border border-app-border bg-app-bg/60 p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <p className="text-xs text-app-muted mt-2">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-app-border bg-app-surface p-6 text-app-muted">
            {m.home.featuredEmpty}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
          >
            {m.home.viewAllProjects}
          </Link>
        </div>
      </section>

      <section id="education" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
        <motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text mb-6">
          {m.home.educationHeading}
        </motion.h2>
        <motion.div
          className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
        >
          <h3 className="text-app-text font-semibold">{m.home.eduAguTitle}</h3>
          <p className="text-app-muted text-sm mt-2">{m.home.eduAguBody}</p>
        </motion.div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl border border-app-border bg-app-surface p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-app-text">{m.home.ctaTitle}</h2>
          <p className="text-app-muted mt-3">{m.home.ctaBody}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
            >
              {m.home.getInTouch}
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="max-w-6xl mx-auto mt-16 border-t border-app-border pt-8 text-sm text-app-muted">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>{m.home.footerQuickLinks}</span>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:karakoyunlutalha34@gmail.com"
              className="hover:text-app-text transition-colors"
            >
              {m.home.footerEmail}
            </a>
            <a
              href="/resume.pdf"
              download
              className="hover:text-app-text transition-colors"
            >
              {m.home.footerResume}
            </a>
            <a
              href="https://github.com/TalhaKarakoyunlu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-app-text transition-colors"
            >
              {m.home.footerGithub}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
