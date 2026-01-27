import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-blue-400 font-mono text-lg mb-4"
            >
                Hi, I am Talha Bahadir Karakoyunlu
            </motion.h2>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                Computer Engineer building reliable mobile and web systems.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-zinc-400 max-w-3xl text-base md:text-lg leading-relaxed"
            >
                I have hands-on experience across frontend, backend, and databases, with production work in
                Flutter, ASP.NET MVC, REST APIs, and SQL Server. I enjoy shipping clear, maintainable systems
                and working with real users, real data, and real constraints.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl w-full text-left"
            >
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <h3 className="text-white font-semibold mb-2">Recent work</h3>
                    <ul className="text-zinc-300 text-sm space-y-2">
                        <li>Built courier and restaurant apps with Flutter for live operations.</li>
                        <li>Delivered admin panels with tracking, CRUD flows, and map views.</li>
                        <li>Implemented REST APIs and authentication in ASP.NET MVC.</li>
                    </ul>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <h3 className="text-white font-semibold mb-2">Strengths</h3>
                    <ul className="text-zinc-300 text-sm space-y-2">
                        <li>Full-stack delivery: UI, APIs, and data layers.</li>
                        <li>SQL Server and MySQL with performance-aware queries.</li>
                        <li>Integrations with external APIs and OCR tooling.</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
                <a
                    href="mailto:Karakoyunlutalha34@gmail.com"
                    className="px-6 py-3 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
                >
                    Contact me
                </a>
                <a
                    href="https://TalhaKarakoyunlu.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
                >
                    View portfolio
                </a>
            </motion.div>
        </div>
    );
};

export default Home;