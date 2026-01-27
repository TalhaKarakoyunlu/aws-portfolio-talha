import { motion, useReducedMotion } from 'framer-motion';

const Motion = motion;

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-5xl mx-auto text-center">
        <Motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          Contact
        </Motion.p>
        <Motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          Let us build something reliable
        </Motion.h1>
        <Motion.p {...fadeUp(0.2)} className="text-app-muted mt-4">
          Reach me at <span className="text-app-text">karakoyunlutalha34@gmail.com</span> and I will
          respond as soon as possible.
        </Motion.p>
      </section>

      <section className="max-w-5xl mx-auto mt-10">
        <Motion.div
          {...fadeUp(0.3)}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:karakoyunlutalha34@gmail.com"
              className="px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
            >
              Email me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
            >
              Download resume
            </a>
            <a
              href="https://github.com/TalhaKarakoyunlu"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
            >
              GitHub
            </a>
          </div>
        </Motion.div>
      </section>
    </main>
  );
};

export default Contact;
