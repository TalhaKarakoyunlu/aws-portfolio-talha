import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import { skills } from '@/data/profile';

const CARD_LIFT =
  'transition-transform duration-200 ease-out hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const { messages: m } = useLanguage();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-app-muted hover:text-app-text transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          {m.about.backHome}
        </Link>
      </div>

      <section className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          {m.about.kicker}
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          {m.about.title}
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 leading-relaxed">
          {m.about.p1}
        </motion.p>
        <motion.p {...fadeUp(0.25)} className="text-app-muted mt-4 leading-relaxed">
          {m.about.p2}
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.3)} className="text-2xl font-semibold text-app-text mb-6">
          {m.about.experienceHeading}
        </motion.h2>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp(0.35)}
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold">{m.about.saTitle}</h3>
            <ul className="text-app-muted text-sm space-y-2 mt-3 list-disc list-inside">
              {m.about.saItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold">{m.about.afacTitle}</h3>
            <p className="text-xs text-app-muted mt-1">{m.about.afacDates}</p>
            <p className="text-app-muted text-sm mt-3">{m.about.afacBody}</p>
            <div className="mt-4">
              <Link
                to="/projects/fire-detection"
                className="inline-flex items-center justify-center px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
              >
                {m.about.afacCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
          >
            <h3 className="text-app-text font-semibold">{m.about.aguTitle}</h3>
            <p className="text-xs text-app-muted mt-1">{m.about.aguDates}</p>
            <p className="text-app-muted text-sm mt-3">{m.about.aguBody}</p>
            <div className="mt-4">
              <Link
                to="/projects/qwen-chatbot"
                className="inline-flex items-center justify-center px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
              >
                {m.about.aguCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.45)} className="text-2xl font-semibold text-app-text mb-6">
          {m.about.skillsHeading}
        </motion.h2>
        <div className="flex flex-wrap gap-3 text-sm text-app-text">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full border border-app-border bg-app-surface">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.5)} className="text-2xl font-semibold text-app-text mb-6">
          {m.about.educationHeading}
        </motion.h2>
        <motion.div
          {...fadeUp(0.55)}
          className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
        >
          <h3 className="text-app-text font-semibold">{m.about.eduAguTitle}</h3>
          <p className="text-app-muted text-sm mt-2">{m.about.eduAguBody}</p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.6)} className="text-2xl font-semibold text-app-text mb-4">
          {m.about.lookingHeading}
        </motion.h2>
        <motion.p {...fadeUp(0.65)} className="text-app-muted leading-relaxed">
          {m.about.lookingBody}
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.div
          {...fadeUp(0.7)}
          className="rounded-2xl border border-app-border bg-app-surface p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-xl font-semibold text-app-text">{m.about.collaborateTitle}</h2>
            <p className="text-app-muted mt-2">{m.about.collaborateBody}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
          >
            {m.about.collaborateCta}
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
