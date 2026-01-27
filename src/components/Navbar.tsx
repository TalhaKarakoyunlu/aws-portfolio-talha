import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            {/* Logo Area */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                Talha.dev
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-white/80">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors text-xl">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors text-xl">
                    <FaLinkedin />
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;