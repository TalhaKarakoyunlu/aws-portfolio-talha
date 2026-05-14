import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const MotionNav = motion.nav;

type NavbarProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const { locale, setLocale, messages: m } = useLanguage();

  return (
    <MotionNav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-app-bg/70 border-b border-app-border"
    >
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Talha.dev
      </Link>

      <div className="flex flex-wrap items-center gap-6 text-sm text-app-muted">
        <Link to="/" className="hover:text-app-text transition-colors">
          {m.nav.home}
        </Link>
        <Link to="/about" className="hover:text-app-text transition-colors">
          {m.nav.about}
        </Link>
        <Link to="/projects" className="hover:text-app-text transition-colors">
          {m.nav.projects}
        </Link>
        <Link to="/contact" className="hover:text-app-text transition-colors">
          {m.nav.contact}
        </Link>
      </div>

      <div className="flex items-center gap-2 text-app-muted">
        <div className="flex items-center rounded-full border border-app-border bg-app-surface p-0.5">
          <button
            type="button"
            onClick={() => setLocale('tr')}
            className={`px-2 py-1 text-base rounded-full transition-colors ${
              locale === 'tr' ? 'bg-app-accent/15 text-app-text' : 'hover:text-app-text'
            }`}
            aria-label={m.nav.switchToTr}
            aria-pressed={locale === 'tr'}
          >
            🇹🇷
          </button>
          <button
            type="button"
            onClick={() => setLocale('en')}
            className={`px-2 py-1 text-base rounded-full transition-colors ${
              locale === 'en' ? 'bg-app-accent/15 text-app-text' : 'hover:text-app-text'
            }`}
            aria-label={m.nav.switchToEn}
            aria-pressed={locale === 'en'}
          >
            🇬🇧
          </button>
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex items-center justify-center rounded-full border border-app-border bg-app-surface p-2 text-app-text hover:bg-app-surface transition-colors"
          aria-label={m.nav.toggleTheme}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <a
          href="https://github.com/TalhaKarakoyunlu"
          target="_blank"
          rel="noreferrer"
          className="hover:text-app-accent transition-colors text-xl"
          aria-label={m.nav.github}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/talhakarakoyunlu"
          target="_blank"
          rel="noreferrer"
          className="hover:text-app-accent transition-colors text-xl"
          aria-label={m.nav.linkedin}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://TalhaKarakoyunlu.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-app-accent transition-colors text-xl"
          aria-label={m.nav.portfolioSite}
        >
          <FaGlobe />
        </a>
        <a
          href="mailto:karakoyunlutalha34@gmail.com"
          className="hover:text-app-accent transition-colors text-xl"
          aria-label={m.nav.email}
        >
          <FaEnvelope />
        </a>
      </div>
    </MotionNav>
  );
};

export default Navbar;
