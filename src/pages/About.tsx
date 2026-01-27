import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Motion = motion;

const metrics = [
  { label: 'Internships', value: '2' },
  { label: 'Years coding', value: '4+' },
  { label: 'Projects shipped', value: '10+' },
];

const skills = [
  'Flutter',
  'ASP.NET MVC',
  'REST APIs',
  'SQL Server',
  'MySQL',
  'C#',
  'Dart',
  'JavaScript',
  'Python',
  'OpenCV',
  'Firebase',
  'Git',
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });
  const cardHover = shouldReduceMotion ? undefined : { y: -6 };

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-5xl mx-auto">
        <Motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          About
        </Motion.p>
        <Motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          Building reliable systems for real-world operations
        </Motion.h1>
        <Motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 leading-relaxed">
          Computer Engineering graduate with experience across mobile and web application development.
          I have shipped Flutter apps for courier and restaurant operations, built admin panels with
          real-time tracking, and implemented backend features in ASP.NET MVC with SQL Server. I enjoy
          projects that demand reliability, solid data models, and clean user flows.
        </Motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <Motion.div
              key={metric.label}
              {...fadeUp(0.25 + index * 0.05)}
              whileHover={cardHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="rounded-xl border border-app-border bg-app-surface/60 p-5 text-center"
            >
              <div className="text-2xl font-semibold text-app-text">{metric.value}</div>
              <div className="text-sm text-app-muted mt-1">{metric.label}</div>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <Motion.h2 {...fadeUp(0.35)} className="text-2xl font-semibold text-app-text mb-6">
          Experience highlights
        </Motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Motion.div
            {...fadeUp(0.4)}
            whileHover={cardHover}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="rounded-xl border border-app-border bg-app-surface/60 p-5"
          >
            <h3 className="text-app-text font-semibold mb-2">SA Tech — Software Developer Intern</h3>
            <ul className="text-app-muted text-sm space-y-2">
              <li>Built Flutter apps for courier and restaurant workflows.</li>
              <li>Delivered admin panels with tracking, CRUD, and map-based UI.</li>
              <li>Implemented REST APIs, authentication, and SQL Server logic.</li>
            </ul>
          </Motion.div>
          <Motion.div
            {...fadeUp(0.45)}
            whileHover={cardHover}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="rounded-xl border border-app-border bg-app-surface/60 p-5"
          >
            <h3 className="text-app-text font-semibold mb-2">AFAC Tech — Intern</h3>
            <ul className="text-app-muted text-sm space-y-2">
              <li>Built an AI fire and smoke detection system with OpenCV.</li>
              <li>Improved accuracy by refining datasets and processing pipelines.</li>
              <li>Integrated detection logic into the system architecture.</li>
            </ul>
          </Motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <Motion.h2 {...fadeUp(0.5)} className="text-2xl font-semibold text-app-text mb-6">
          Skills
        </Motion.h2>
        <div className="flex flex-wrap gap-3 text-sm text-app-text">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full border border-app-border bg-app-surface/60">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <Motion.h2 {...fadeUp(0.55)} className="text-2xl font-semibold text-app-text mb-6">
          Education
        </Motion.h2>
        <Motion.div
          {...fadeUp(0.6)}
          whileHover={cardHover}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-xl border border-app-border bg-app-surface/60 p-5"
        >
          <h3 className="text-app-text font-semibold">Abdullah Gül University</h3>
          <p className="text-app-muted text-sm mt-2">
            B.S. Computer Engineering — 09/2021 to 08/2025 · CGPA 3.19 / 4.00
          </p>
        </Motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <Motion.div
          {...fadeUp(0.65)}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-xl font-semibold text-app-text">Ready to collaborate?</h2>
            <p className="text-app-muted mt-2">Reach out for internships, projects, or collaborations.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
          >
            Contact me
          </Link>
        </Motion.div>
      </section>
    </main>
  );
};

export default About;
