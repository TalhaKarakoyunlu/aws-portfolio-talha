import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '@/data/profile';

const SPRING = { type: 'spring', stiffness: 260, damping: 20 } as const;

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });
  const cardHover = shouldReduceMotion ? undefined : { y: -6, transition: SPRING };

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          About
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          Building reliable systems for real-world operations
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 leading-relaxed">
          Computer Engineering graduate with experience across mobile and web application development.
          I've shipped Flutter apps for courier and restaurant operations, built admin panels with
          real-time tracking, and implemented backend features in ASP.NET MVC with SQL Server. I enjoy
          projects that demand reliability, solid data models, and clean user flows.
        </motion.p>
        <motion.p {...fadeUp(0.25)} className="text-app-muted mt-4 leading-relaxed">
          I got into computer engineering because I wanted to build things that actually work under
          pressure. Not demos, not prototypes, but systems that hold up when real people depend on
          them. That thread runs through everything I've worked on: courier logistics apps that had to
          be reliable during peak hours, a fire detection model that had to run on constrained
          hardware, a cancer classification pipeline that had to be reproducible. I care less about
          the stack and more about whether the output is something you can trust.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.3)} className="text-2xl font-semibold text-app-text mb-6">
          Experience
        </motion.h2>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp(0.35)}
            whileHover={cardHover}
            className="rounded-xl border border-app-border bg-app-surface/60 p-5"
          >
            <h3 className="text-app-text font-semibold">SA Tech — Software Developer Intern</h3>
            <ul className="text-app-muted text-sm space-y-2 mt-3 list-disc list-inside">
              <li>Built Flutter apps for courier and restaurant operations; real production use, not internal tooling.</li>
              <li>Handled live async location data in the map UI — keeping state clean across driver updates was the sharpest edge.</li>
              <li>Built REST APIs and authentication flows; learned how quickly an untested auth layer becomes a liability.</li>
              <li>Delivered admin panels with full CRUD; learned to treat data integrity as a design constraint, not an afterthought.</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            whileHover={cardHover}
            className="rounded-xl border border-app-border bg-app-surface/60 p-5"
          >
            <h3 className="text-app-text font-semibold">AFAC Tech — Computer Vision Intern</h3>
            <p className="text-xs text-app-muted mt-1">Aug 2024 - Sep 2024</p>
            <p className="text-app-muted text-sm mt-3">
              Built a fire and smoke detection pipeline from OpenCV preprocessing through YOLOv5 to a
              production YOLOv8 model, plus an email alerting system that fired on detection events.
              Trained locally on an RTX 3060 under hard VRAM constraints.
            </p>
            <div className="mt-4">
              <Link
                to="/projects/fire-detection"
                className="inline-flex items-center justify-center px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
              >
                View case study
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.45)} className="text-2xl font-semibold text-app-text mb-6">
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-3 text-sm text-app-text">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full border border-app-border bg-app-surface/60">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.5)} className="text-2xl font-semibold text-app-text mb-6">
          Education
        </motion.h2>
        <motion.div
          {...fadeUp(0.55)}
          whileHover={cardHover}
          className="rounded-xl border border-app-border bg-app-surface/60 p-5"
        >
          <h3 className="text-app-text font-semibold">Abdullah Gül University</h3>
          <p className="text-app-muted text-sm mt-2">
            B.S. Computer Engineering — 09/2021 to 08/2025 · CGPA 3.19 / 4.00
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.h2 {...fadeUp(0.6)} className="text-2xl font-semibold text-app-text mb-4">
          What I'm looking for
        </motion.h2>
        <motion.p {...fadeUp(0.65)} className="text-app-muted leading-relaxed">
          I'm currently open to both full-time engineering roles and graduate programs in AI or
          software engineering. I'm looking for a team that takes the engineering seriously and has
          the discipline to do the work properly.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <motion.div
          {...fadeUp(0.7)}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-xl font-semibold text-app-text">Ready to collaborate?</h2>
            <p className="text-app-muted mt-2">Reach out for roles, projects, or collaborations.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
          >
            Contact me
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
