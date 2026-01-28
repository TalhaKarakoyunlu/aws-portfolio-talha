import { motion, useReducedMotion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';

const Motion = motion;

const ProjectDetail = () => {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();
  const project = getProjectBySlug(slug ?? '');
  const hasMeta = Boolean(project?.role || project?.timeline);
  const caseStudyLabel = project?.featured ? 'Featured case study' : 'Case study';

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });
  const cardHover = shouldReduceMotion ? undefined : { y: -6 };
  const imageHover = shouldReduceMotion ? undefined : { scale: 1.02 };

  if (!project) {
    return (
      <main className="min-h-screen px-4 pt-28 pb-24">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-app-text mb-4">
            Project not found
          </h1>
          <p className="text-app-muted mb-6">
            The project you are looking for does not exist yet. Browse the homepage for current
            highlights.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
          >
            Back to projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <Motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
              {caseStudyLabel}
            </Motion.p>
            <Motion.h1
              {...fadeUp(0.1)}
              className="text-4xl md:text-5xl font-semibold text-app-text mt-2"
            >
              {project.title}
            </Motion.h1>
            <Motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 max-w-2xl">
              {project.summary}
            </Motion.p>
          </div>
          {hasMeta ? (
            <Motion.div
              {...fadeUp(0.25)}
              className="rounded-xl border border-app-border bg-app-surface/60 px-5 py-4 text-sm text-app-muted"
            >
              {project.role ? <div className="text-app-text font-semibold">{project.role}</div> : null}
              {project.timeline ? <div className="mt-1">{project.timeline}</div> : null}
            </Motion.div>
          ) : null}
        </div>

        <Motion.div
          {...fadeUp(0.3)}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <div className="flex flex-wrap gap-2 text-sm text-app-text">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-app-border bg-app-bg/60"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isExternal = link.external ?? link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="inline-flex items-center justify-center px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors text-sm"
                >
                  {link.label}
                </a>
              );
            })}
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
          {project.highlights.map((highlight, index) => (
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
          <p className="text-app-muted text-sm leading-relaxed">{project.problem}</p>
        </Motion.div>
        <Motion.div
          {...fadeUp(0.5)}
          whileHover={cardHover}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
        >
          <h2 className="text-lg font-semibold text-app-text mb-3">Approach</h2>
          <ul className="text-app-muted text-sm space-y-2 list-disc list-inside">
            {project.approach.map((item) => (
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
            {project.outcome.map((item) => (
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
          {project.gallery.map((item, index) => (
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
          Challenges & constraints
        </Motion.h2>
        <div className="rounded-2xl border border-app-border bg-app-surface/60 p-6">
          <ul className="text-app-muted text-sm space-y-2 list-disc list-inside">
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
