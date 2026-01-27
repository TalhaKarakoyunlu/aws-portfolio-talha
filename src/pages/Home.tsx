import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main id="top" className="min-h-screen px-4 pt-28 pb-24">
            <section id="hero" className="max-w-6xl mx-auto scroll-mt-28">
                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-blue-400 font-mono text-lg mb-4"
                        >
                            Hi, I am Talha Bahadir Karakoyunlu
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            Computer Engineer building reliable mobile and web systems.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed"
                        >
                            I build full-stack solutions with Flutter, ASP.NET MVC, REST APIs, and SQL
                            Server. I focus on clarity, maintainability, and real-world constraints.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-3 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
                            >
                                Download resume
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Contact me
                            </a>
                        </motion.div>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                            <img
                                src="/profile-placeholder.svg"
                                alt="Profile placeholder"
                                className="w-64 h-64 object-cover mx-auto"
                            />
                            <p className="text-xs text-zinc-400 mt-3">Profile image placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="max-w-5xl mx-auto mt-20 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
                <p className="text-zinc-300 leading-relaxed">
                    Computer Engineering graduate with experience across mobile and web application
                    development. I have shipped Flutter apps for courier and restaurant operations, built
                    admin panels with real-time tracking, and implemented backend features in ASP.NET MVC
                    with SQL Server. I enjoy projects that demand reliability, solid data models, and clean
                    user flows.
                </p>
            </section>

            <section id="experience" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience highlights</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <h3 className="text-white font-semibold mb-2">SA Tech — Software Developer Intern</h3>
                        <ul className="text-zinc-300 text-sm space-y-2">
                            <li>Built Flutter apps for courier and restaurant workflows.</li>
                            <li>Delivered admin panels with tracking, CRUD, and map-based UI.</li>
                            <li>Implemented REST APIs, authentication, and SQL Server logic.</li>
                        </ul>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <h3 className="text-white font-semibold mb-2">AFAC Tech — Intern</h3>
                        <ul className="text-zinc-300 text-sm space-y-2">
                            <li>Built an AI fire and smoke detection system with OpenCV.</li>
                            <li>Improved accuracy by refining datasets and processing pipelines.</li>
                            <li>Integrated detection logic into the system architecture.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="projects" className="max-w-6xl mx-auto mt-16 scroll-mt-28">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-white">Projects</h2>
                    <span className="text-sm text-zinc-400">Images are placeholders</span>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <img
                            src="/project-placeholder-1.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-white font-semibold mt-4">Pixie (Flutter)</h3>
                        <p className="text-zinc-300 text-sm mt-2">
                            Lightweight mobile photo editor with smooth, mobile-first UI.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Pixie"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <img
                            src="/project-placeholder-2.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-white font-semibold mt-4">Music App (Spotify API)</h3>
                        <p className="text-zinc-300 text-sm mt-2">
                            Web app for music browsing and playlist management.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Music-App"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <img
                            src="/project-placeholder-3.svg"
                            alt="Project placeholder"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-white font-semibold mt-4">Chat App (Flutter + MySQL)</h3>
                        <p className="text-zinc-300 text-sm mt-2">
                            Real-time messaging with AES-256 encrypted communication.
                        </p>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a
                                href="https://github.com/TalhaKarakoyunlu/Chat-App"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
                <div className="flex flex-wrap gap-3 text-sm text-white/90">
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
                            className="px-3 py-1 rounded-full border border-white/15 bg-white/5"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section id="contact" className="max-w-5xl mx-auto mt-16 scroll-mt-28">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white">Let us build something reliable</h2>
                    <p className="text-zinc-300 mt-3">
                        Reach me at <span className="text-white">karakoyunlutalha34@gmail.com</span> and I
                        will respond as soon as possible.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:karakoyunlutalha34@gmail.com"
                            className="px-6 py-3 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
                        >
                            Email me
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
                        >
                            Download resume
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;