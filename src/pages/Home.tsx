import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProject } from '@/data/projects';

const Motion = motion;

const metrics = [
    { label: 'Internships', value: '2' },
    { label: 'Years coding', value: '4+' },
    { label: 'Projects shipped', value: '10+' },
];

const projectStack = [
    { name: 'Pixie', stack: 'Flutter • Dart • Mobile' },
    { name: 'Music App', stack: 'EJS • Spotify API • JS' },
    { name: 'Chat App', stack: 'Flutter • MySQL • AES-256' },
];

const Home = () => {
    const shouldReduceMotion = useReducedMotion();
    const featuredProject = getFeaturedProject();
    const fadeUp = (delay = 0) => ({
        initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay, duration: 0.6 },
    });
    const cardHover = shouldReduceMotion ? undefined : { y: -6 };
    const imageHover = shouldReduceMotion ? undefined : { scale: 1.02 };

    return (
        <main id="top" className="min-h-screen px-4 pt-28 pb-24">
            <section id="hero" className="max-w-6xl mx-auto scroll-mt-28">
                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center">
                    <div>
                        <Motion.h2
                            {...fadeUp(0.4)}
                            className="text-app-accent font-mono text-lg mb-4"
                        >
                            Hi, I am Talha Bahadır Karakoyunlu
                        </Motion.h2>

                        <Motion.h1
                            {...fadeUp(0.6)}
                            className="text-5xl md:text-7xl font-bold text-app-text mb-6 tracking-tight"
                        >
                            Computer Engineer building reliable mobile and web systems.
                        </Motion.h1>

                        <Motion.div
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
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
                            >
                                Contact me
                            </a>
                        </Motion.div>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-2xl border border-app-border bg-app-surface/60 p-6 text-center">
                            <img
                                src="/profile-placeholder.svg"
                                alt="Profile placeholder"
                                className="w-64 h-64 object-cover mx-auto"
                            />
                            <p className="text-xs text-app-muted mt-3">Profile image placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="max-w-5xl mx-auto mt-20 scroll-mt-28">
                <Motion.h2 {...fadeUp(0.1)} className="text-2xl font-semibold text-app-text mb-4">
                    About
                </Motion.h2>
                <p className="text-app-muted leading-relaxed">
                    Computer Engineering graduate with experience across mobile and web application
                    development. I have shipped Flutter apps for courier and restaurant operations, built
                    admin panels with real-time tracking, and implemented backend features in ASP.NET MVC
                    with SQL Server. I enjoy projects that demand reliability, solid data models, and clean
                    user flows.
                </p>
            </section>

            <section id="impact" className="max-w-5xl mx-auto mt-12 scroll-mt-28">
                <div className="grid gap-4 sm:grid-cols-3">
                    {metrics.map((metric) => (
                        <Motion.div
                            key={metric.label}
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

            <section id="experience" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <Motion.h2 {...fadeUp(0.15)} className="text-2xl font-semibold text-app-text mb-6">
                    Experience highlights
                </Motion.h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <Motion.div
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

            <section id="projects" className="max-w-6xl mx-auto mt-16 scroll-mt-28">
                <div className="flex items-center justify-between mb-6">
                    <Motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text">
                        Projects
                    </Motion.h2>
                    <span className="text-sm text-app-muted">Images are placeholders</span>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <Motion.div
                        whileHover={cardHover}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="rounded-xl border border-app-border bg-app-surface/60 p-4"
                    >
                        <img
                            src="/project-placeholder-1.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-app-text font-semibold mt-4">Pixie (Flutter)</h3>
                        <p className="text-xs text-app-accent/80 mt-1">{projectStack[0].stack}</p>
                        <p className="text-app-muted text-sm mt-2">
                            Lightweight mobile photo editor with smooth, mobile-first UI.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <Link
                                to="/projects/pixie"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                View details
                            </Link>
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Pixie"
                                target="_blank"
                                rel="noreferrer"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                GitHub
                            </a>
                        </div>
                    </Motion.div>
                    <Motion.div
                        whileHover={cardHover}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="rounded-xl border border-app-border bg-app-surface/60 p-4"
                    >
                        <img
                            src="/project-placeholder-2.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-app-text font-semibold mt-4">Music App (Spotify API)</h3>
                        <p className="text-xs text-app-accent/80 mt-1">{projectStack[1].stack}</p>
                        <p className="text-app-muted text-sm mt-2">
                            Web app for music browsing and playlist management.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <Link
                                to="/projects/music-app"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                View details
                            </Link>
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Music-App"
                                target="_blank"
                                rel="noreferrer"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                GitHub
                            </a>
                        </div>
                    </Motion.div>
                    <Motion.div
                        whileHover={cardHover}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="rounded-xl border border-app-border bg-app-surface/60 p-4"
                    >
                        <img
                            src="/project-placeholder-3.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-app-text font-semibold mt-4">Chat App (Flutter + MySQL)</h3>
                        <p className="text-xs text-app-accent/80 mt-1">{projectStack[2].stack}</p>
                        <p className="text-app-muted text-sm mt-2">
                            Real-time messaging with AES-256 encrypted communication.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <Link
                                to="/projects/chat-app"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                View details
                            </Link>
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Chat-App"
                                target="_blank"
                                rel="noreferrer"
                                className="text-app-accent hover:text-app-accent/80"
                            >
                                GitHub
                            </a>
                        </div>
                    </Motion.div>
                </div>
            </section>

            <section id="featured" className="max-w-6xl mx-auto mt-16 scroll-mt-28">
                <div className="flex items-center justify-between mb-6">
                    <Motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text">
                        Featured case study
                    </Motion.h2>
                    <span className="text-sm text-app-muted">Deep dive</span>
                </div>
                {featuredProject ? (
                    <Motion.div
                        whileHover={cardHover}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="rounded-2xl border border-app-border bg-app-surface/60 p-6"
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
                                        to={`/projects/${featuredProject.slug}`}
                                        className="px-4 py-2 border border-app-accent text-app-accent rounded hover:bg-app-surface transition-colors"
                                    >
                                        View case study
                                    </Link>
                                    <a
                                        href="#contact"
                                        className="px-4 py-2 border border-app-border text-app-text rounded hover:bg-app-surface transition-colors"
                                    >
                                        Contact me
                                    </a>
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {featuredProject.gallery.slice(0, 2).map((image) => (
                                    <Motion.div
                                        key={image.src}
                                        whileHover={cardHover}
                                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                        className="rounded-xl border border-app-border bg-app-bg/60 p-3"
                                    >
                                        <Motion.img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-32 object-cover rounded-lg"
                                            whileHover={imageHover}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <p className="text-xs text-app-muted mt-2">{image.caption}</p>
                                    </Motion.div>
                                ))}
                            </div>
                        </div>
                    </Motion.div>
                ) : (
                    <div className="rounded-2xl border border-app-border bg-app-surface/60 p-6 text-app-muted">
                        Featured case study will appear here soon.
                    </div>
                )}
            </section>

            <section id="skills" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <Motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text mb-6">
                    Skills
                </Motion.h2>
                <div className="flex flex-wrap gap-3 text-sm text-app-text">
                    {[
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
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full border border-app-border bg-app-surface/60"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section id="education" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <Motion.h2 {...fadeUp(0.2)} className="text-2xl font-semibold text-app-text mb-6">
                    Education
                </Motion.h2>
                <Motion.div
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

            <section id="contact" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <Motion.div
                    {...fadeUp(0.2)}
                    className="rounded-2xl border border-app-border bg-app-surface/60 p-8 text-center"
                >
                    <h2 className="text-2xl font-semibold text-app-text">Let us build something reliable</h2>
                    <p className="text-app-muted mt-3">
                        Reach me at <span className="text-app-text">karakoyunlutalha34@gmail.com</span> and I
                        will respond as soon as possible.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
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
                    </div>
                </Motion.div>
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