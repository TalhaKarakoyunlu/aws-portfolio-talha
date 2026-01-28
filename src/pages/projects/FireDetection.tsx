import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Motion = motion;

const stack = ['Python', 'OpenCV', 'YOLOv5', 'YOLOv8', 'Roboflow', 'RTX 3060'];

const highlights = [
  { label: 'Realtime inference', value: 'Camera-ready pipeline' },
  { label: 'Accuracy range', value: '65-90% confidence' },
  { label: 'Model upgrade', value: 'YOLOv5 to YOLOv8' },
  { label: 'Dataset workflow', value: 'Curated + augmented' },
];

const approach = [
  'Built OpenCV preprocessing to validate image quality and handle noise in smoke-heavy scenes.',
  'Trained a YOLOv5 baseline to balance detection speed with initial confidence thresholds.',
  'Upgraded to YOLOv8 for faster inference and stronger precision on small fire regions.',
  'Used Roboflow datasets with augmentation to close gaps in smoke and low-light samples.',
  'Benchmarked on real-time camera feeds while staying within RTX 3060 memory limits.',
];

const outcome = [
  'Delivered a real-time fire and smoke detection pipeline running on live camera input.',
  'Improved inference confidence and throughput after the YOLOv8 migration.',
  'Established a repeatable process for dataset ingestion, training, and evaluation.',
];

const challenges = [
  'Dataset imbalance between fire and smoke classes.',
  'Long training cycles (12+ hours) on limited GPU memory.',
  'Maintaining accuracy without sacrificing real-time performance.',
];

const gallery = [
  {
    src: '/featured-fire-detection-1.svg',
    alt: 'Dataset samples placeholder',
    caption: 'Dataset samples curated and augmented for training.',
  },
  {
    src: '/featured-fire-detection-2.svg',
    alt: 'Real-time detection overlay placeholder',
    caption: 'Real-time camera overlay during smoke detection tests.',
  },
];

const FireDetection = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });
  const cardHover = shouldReduceMotion ? undefined : { y: -6 };
  const imageHover = shouldReduceMotion ? undefined : { scale: 1.02 };

  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <Motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
              Case study
            </Motion.p>
            <Motion.h1
              {...fadeUp(0.1)}
              className="text-4xl md:text-5xl font-semibold text-app-text mt-2"
            >
              Fire & Smoke Detection
            </Motion.h1>
            <Motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 max-w-2xl">
              Real-time detection pipeline trained on public datasets and tuned to run reliably on
              constrained hardware.
            </Motion.p>
          </div>
          <Motion.div
            {...fadeUp(0.25)}
            className="rounded-xl border border-app-border bg-app-surface/60 px-5 py-4 text-sm text-app-muted"
          >
            <div className="text-app-text font-semibold">Computer Vision Intern</div>
            <div className="mt-1">Aug 2024 - Sep 2024</div>
          </Motion.div>
        </div>

        <Motion.div
          {...fadeUp(0.3)}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <div className="flex flex-wrap gap-2 text-sm text-app-text">
            {stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-app-border bg-app-bg/60"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:karakoyunlutalha34@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors text-sm"
            >
              Email me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors text-sm"
            >
              Download resume
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
            >
              Contact me
            </Link>
          </div>
        </Motion.div>
      </section>

      <section className="max-w-6xl mx-auto mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <Motion.div
              key={highlight.label}
              {...fadeUp(0.35 + index * 0.05)}
              whileHover={cardHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="rounded-xl border border-app-border bg-app-surface/60 p-4 text-center"
            >
              <div className="text-xl font-semibold text-app-text">{highlight.value}</div>
              <div className="text-xs text-app-muted mt-1">{highlight.label}</div>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-12 grid gap-6 lg:grid-cols-3">
        <Motion.div
          {...fadeUp(0.45)}
          whileHover={cardHover}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <h2 className="text-lg font-semibold text-app-text mb-3">Problem</h2>
          <p className="text-app-muted text-sm leading-relaxed">
            AFAC Tech needed a cost-effective system to detect fire and smoke in real time, without
            relying on heavy cloud infrastructure.
          </p>
        </Motion.div>
        <Motion.div
          {...fadeUp(0.5)}
          whileHover={cardHover}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <h2 className="text-lg font-semibold text-app-text mb-3">Approach</h2>
          <ul className="text-app-muted text-sm space-y-2 list-disc list-inside">
            {approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Motion.div>
        <Motion.div
          {...fadeUp(0.55)}
          whileHover={cardHover}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <h2 className="text-lg font-semibold text-app-text mb-3">Outcome</h2>
          <ul className="text-app-muted text-sm space-y-2 list-disc list-inside">
            {outcome.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      </section>

      <section className="max-w-6xl mx-auto mt-12">
        <Motion.h2 {...fadeUp(0.6)} className="text-2xl font-semibold text-app-text mb-6">
          Gallery
        </Motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map((item, index) => (
            <Motion.div
              key={item.src}
              {...fadeUp(0.65 + index * 0.05)}
              whileHover={cardHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-app-border bg-app-surface/60 p-4"
            >
              <Motion.img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover rounded-xl"
                whileHover={imageHover}
                transition={{ duration: 0.3 }}
              />
              <p className="text-sm text-app-muted mt-3">{item.caption}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-12">
        <Motion.h2 {...fadeUp(0.7)} className="text-2xl font-semibold text-app-text mb-4">
          Constraints handled
        </Motion.h2>
        <div className="rounded-2xl border border-app-border bg-app-surface/60 p-6">
          <ul className="text-app-muted text-sm space-y-2 list-disc list-inside">
            {challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default FireDetection;
