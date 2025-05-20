'use client';

import { useState, useEffect } from 'react';
import {
  Moon, Sun, Globe, Briefcase, Instagram, Mail, Github, Twitter
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const links = [
    { icon: <Globe size={18} />, label: 'Website', url: 'https://sanzy.dev' },
    { icon: <Briefcase size={18} />, label: 'Portfolio', url: 'https://dribbble.com/sanzy' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://instagram.com/sanzy' },
    { icon: <Mail size={18} />, label: 'Contact Me', url: 'https://wa.me/6281234567890' },
  ];

  const socials = [
    { icon: <Github size={18} />, url: 'https://github.com/sanzy' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com/sanzy' },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-zinc-900 transition-colors duration-500 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full -top-40 -left-40 pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-sky-400/20 blur-2xl rounded-full top-1/2 right-[-150px] pointer-events-none" />

      {/* THIN ABSTRACT SHAPES */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-dashed border-gray-300 dark:border-zinc-700 rounded-full opacity-40 pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300 dark:border-zinc-700 rotate-12 opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-dotted border-gray-300 dark:border-zinc-700 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none rounded-xl" />

      {/* DOT PATTERN */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" className="text-gray-300 dark:text-zinc-700" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
        className="relative z-10 max-w-md w-full text-center space-y-6 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 dark:border-zinc-700 transition-all duration-300"
      >
        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Avatar */}
        <motion.img
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.6 }}
          src="https://i.pravatar.cc/150?img=32"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto shadow-lg border-4 border-white dark:border-zinc-700"
        />

        {/* Name & Bio */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NamaAnda</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Programmer • Builder of Web Wonders 🚀</p>
        </div>

        {/* Link Buttons */}
        <div className="space-y-3">
          {links.map(({ icon, label, url }, idx) => (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/90 dark:bg-zinc-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-600 font-medium shadow transition duration-300"
            >
              {icon} {label}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 pt-2">
          {socials.map(({ icon, url }, idx) => (
            <a key={idx} href={url} target="_blank" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
              {icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 dark:text-gray-500 pt-6">Made with ❤️ by Sanzystore • © 2025</p>
      </motion.div>
    </main>
  );
}
