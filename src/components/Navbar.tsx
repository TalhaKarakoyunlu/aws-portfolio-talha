import { motion } from 'framer-motion';
import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

const MotionNav = motion.nav;

type NavbarProps = {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
    return (
        <MotionNav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-app-bg/70 border-b border-app-border"
        >
            <a
                href="#top"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
                Talha.dev
            </a>

            <div className="flex flex-wrap items-center gap-6 text-sm text-app-muted">
                <a href="#about" className="hover:text-app-text transition-colors">About</a>
                <a href="#experience" className="hover:text-app-text transition-colors">Experience</a>
                <a href="#projects" className="hover:text-app-text transition-colors">Projects</a>
                <a href="#skills" className="hover:text-app-text transition-colors">Skills</a>
                <a href="#contact" className="hover:text-app-text transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3 text-app-muted">
                <button
                    type="button"
                    onClick={onToggleTheme}
                    className="inline-flex items-center justify-center rounded-full border border-app-border bg-app-surface/60 p-2 text-app-text hover:bg-app-surface transition-colors"
                    aria-label="Toggle color theme"
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
                <a
                    href="https://github.com/TalhaKarakoyunlu"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-app-accent transition-colors text-xl"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/talhakarakoyunlu"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-app-accent transition-colors text-xl"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://TalhaKarakoyunlu.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-app-accent transition-colors text-xl"
                    aria-label="Portfolio website"
                >
                    <FaGlobe />
                </a>
                <a
                    href="mailto:Karakoyunlutalha34@gmail.com"
                    className="hover:text-app-accent transition-colors text-xl"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
        </MotionNav>
    );
};

export default Navbar;