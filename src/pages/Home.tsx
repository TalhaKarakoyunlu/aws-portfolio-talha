import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">

            {/* Animated Greeting */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-blue-400 font-mono text-lg mb-4"
            >
                Hi, my name is
            </motion.h2>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            >
                Talha Karakoyunlu
            </motion.h1>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed"
            >
                I am a Computer Engineer specializing in <span className="text-white font-semibold">Cloud Architecture</span> and <span className="text-white font-semibold">Full Stack Development</span>.
                Currently building scalable solutions on AWS.
            </motion.p>

            {/* Call to Action Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1.4 }}
                className="mt-10 px-8 py-3 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
            >
                Check out my work
            </motion.button>
        </div>
    );
};

export default Home;