import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <main id="top" className="min-h-screen px-4 pt-28 pb-24">
      <section className="max-w-6xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-sm uppercase text-app-accent/80 tracking-widest">
          Projects
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-semibold text-app-text mt-2">
          All projects
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-app-muted mt-4 max-w-2xl">
          These are the projects I can share publicly. Some of the internship deliverables were built for client or research use and are summarized in the About page rather than reproduced here, and a few personal projects are not publicly shared.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto mt-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...fadeUp(0.25 + index * 0.05)}
              className="relative rounded-2xl border border-app-border bg-app-surface p-5 flex flex-col transition-transform duration-200 ease-out hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none focus-within:ring-2 focus-within:ring-app-accent/40"
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
                  aria-label={`View details for ${project.title}`}
                  className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors after:absolute after:inset-0 after:content-[''] after:rounded-2xl focus:outline-none"
                >
                  View details
                </Link>
                {project.links[0] ? (() => {
                  const link = project.links[0];
                  const isExternal = link.external ?? link.href.startsWith('http');
                  return (
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="relative z-10 px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                })() : null}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
