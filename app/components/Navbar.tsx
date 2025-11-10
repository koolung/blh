'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-40 h-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={scrolled ? 'black' : 'white'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={scrolled ? '/images/logo/black.svg' : '/images/logo/white.svg'}
                  alt="Beauté Lia Hair"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'gallery', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-300'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => scrollToSection('contact')}
            className="bg-[#FECD8C] text-gray-800 px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
