import { motion } from 'framer-motion';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <a
                href="#top"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
                Talha.dev
            </a>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-4 text-white/80">
                <a
                    href="https://TalhaKarakoyunlu.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 transition-colors text-xl"
                    aria-label="Portfolio website"
                >
                    <FaGlobe />
                </a>
                <a
                    href="mailto:Karakoyunlutalha34@gmail.com"
                    className="hover:text-blue-400 transition-colors text-xl"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;