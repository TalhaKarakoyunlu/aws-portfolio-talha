import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Motion = motion;

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });
  const cardHover = shouldReduceMotion ? undefined : { y: -6 };

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-6xl mx-auto">
        <Motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          Projects
        </Motion.p>
        <Motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          All projects
        </Motion.h1>
        <Motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 max-w-2xl">
          Browse the full set of projects and open any case study for deeper details.
        </Motion.p>
      </section>

      <section className="max-w-6xl mx-auto mt-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.div
              key={project.slug}
              {...fadeUp(0.25 + index * 0.05)}
              whileHover={cardHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-app-border bg-app-surface/60 p-5 flex flex-col"
            >
              <img
                src={project.gallery[0]?.src}
                alt={project.gallery[0]?.alt || `${project.title} preview`}
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="mt-4 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-app-text">{project.title}</h2>
                {project.featured ? (
                  <span className="text-xs uppercase tracking-widest text-app-accent/80">Featured</span>
                ) : null}
              </div>
              <p className="text-sm text-app-muted mt-2">{project.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs text-app-text mt-4">
                {project.stack.map((item) => (
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
                  to={`/projects/${project.slug}`}
                  className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
                >
                  View details
                </Link>
                {project.links[0] ? (
                  <a
                    href={project.links[0].href}
                    target={project.links[0].external ? '_blank' : undefined}
                    rel={project.links[0].external ? 'noreferrer' : undefined}
                    className="px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
                  >
                    {project.links[0].label}
                  </a>
                ) : null}
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
