import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProject } from '@/data/projects';
import { metrics } from '@/data/profile';

const CARD_LIFT =
    'transition-transform duration-200 ease-out hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none';

const Home = () => {
    const shouldReduceMotion = useReducedMotion();
    const featuredProject = getFeaturedProject();
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
                            Hi, I am Talha Bahadır Karakoyunlu
                        </motion.h2>

                        <motion.h1
                            {...fadeUp(0.6)}
                            className="text-5xl md:text-7xl font-bold text-app-text mb-6 tracking-tight"
                        >
                            Computer Engineer building reliable systems.
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
                                Download resume
                            </a>
                            <Link
                                to="/contact"
                                className="px-6 py-3 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
                            >
                                Contact me
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-2xl border border-app-border bg-app-surface p-4 text-center">
                            <img
                                src="/Talha_photo.webp"
                                alt="Talha Bahadır Karakoyunlu"
                                className="w-72 h-72 object-cover mx-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="max-w-5xl mx-auto mt-20 scroll-mt-28">
                <motion.h2 {...fadeUp(0.1)} className="text-2xl font-semibold text-app-text mb-4">
                    About
                </motion.h2>
                <p className="text-app-muted leading-relaxed">
                    Recent Computer Engineering graduate focused on reliable web and mobile systems. I ship
                    product-ready experiences with clean data models and steady user flows.
                </p>
                <div className="mt-5">
                    <Link
                        to="/about"
                        className="inline-flex items-center justify-center px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors text-sm"
                    >
                        Read more
                    </Link>
                </div>
            </section>

            <section id="impact" className="max-w-5xl mx-auto mt-12 scroll-mt-28">
                <div className="grid gap-4 sm:grid-cols-3">
                    {metrics.map((metric) => (
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
                    Experience
                </motion.h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <motion.div
                        className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
                    >
                        <h3 className="text-app-text font-semibold mb-2">SA Tech · Software Developer Intern</h3>
                        <p className="text-app-muted text-sm">
                            Built Flutter apps and admin panels for courier and restaurant operations, handling live tracking, REST APIs, and SQL Server.
                        </p>
                    </motion.div>
                    <motion.div
                        className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
                    >
                        <h3 className="text-app-text font-semibold mb-2">AFAC Tech · Computer Vision Intern</h3>
                        <p className="text-app-muted text-sm">
                            Built an AI fire and smoke detection pipeline with YOLOv8, trained on consumer hardware. Full case study on the projects page.
                        </p>
                    </motion.div>
                    <motion.div
                        className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
                    >
                        <h3 className="text-app-text font-semibold mb-2">AGU · AI Research Intern</h3>
                        <p className="text-app-muted text-sm">
                            Fine-tuned Qwen2.5 with LoRA into a customer support chatbot, with a Gradio UI for testing. Full case study on the projects page.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section id="projects" className="max-w-6xl mx-auto mt-16 scroll-mt-28">
                <div className="flex items-center justify-between mb-6">
                    <motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text">
                        Featured case study
                    </motion.h2>
                    <span className="text-sm text-app-muted">Deep dive</span>
                </div>
                {featuredProject ? (
                    <motion.div
                        className={`relative rounded-2xl border border-app-border bg-app-surface p-6 focus-within:ring-2 focus-within:ring-app-accent/40 ${CARD_LIFT}`}
                    >
                        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-app-text">
                                    {featuredProject.title}
                                </h3>
                                <p className="text-sm text-app-muted mt-2">
                                    {featuredProject.summary}
                                </p>
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
                                        to="/projects/fire-detection"
                                        aria-label={`View case study for ${featuredProject.title}`}
                                        className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors after:absolute after:inset-0 after:content-[''] after:rounded-2xl focus:outline-none"
                                    >
                                        View case study
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
                        Featured case study will appear here soon.
                    </div>
                )}
                <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                        to="/projects"
                        className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors text-sm"
                    >
                        View all projects
                    </Link>
                </div>
            </section>

            <section id="education" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text mb-6">
                    Education
                </motion.h2>
                <motion.div
                    className={`rounded-xl border border-app-border bg-app-surface p-5 ${CARD_LIFT}`}
                >
                    <h3 className="text-app-text font-semibold">Abdullah Gül University</h3>
                    <p className="text-app-muted text-sm mt-2">
                        B.S. Computer Engineering · 09/2021 to 08/2025 · CGPA 3.19 / 4.00
                    </p>
                </motion.div>
            </section>

            <section id="contact" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <motion.div
                    {...fadeUp(0.2)}
                    className="rounded-2xl border border-app-border bg-app-surface p-8 text-center"
                >
                    <h2 className="text-2xl font-semibold text-app-text">Let's build something together</h2>
                    <p className="text-app-muted mt-3">
                        Reach out for roles, collaborations, interesting problems, or just to say hi.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
                        >
                            Get in touch
                        </Link>
                    </div>
                </motion.div>
            </section>

            <footer className="max-w-6xl mx-auto mt-16 border-t border-app-border pt-8 text-sm text-app-muted">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <span>Quick links</span>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:karakoyunlutalha34@gmail.com"
                            className="hover:text-app-text transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="hover:text-app-text transition-colors"
                        >
                            Resume
                        </a>
                        <a
                            href="https://github.com/TalhaKarakoyunlu"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-app-text transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Home;
