'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  const navItems = ['home', 'services', 'gallery', 'contact'];
  
  const directLinks = [
    'Instagram',
    'Facebook', 
    'Book Online',
    'Call Us',
    'Location'
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05 * i
      }
    })
  };

  const childContainer = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
        <div className="flex justify-between items-center h-15">
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
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-[#FECD8C]' : 'text-white hover:text-[#FECD8C]'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-[#FECD8C] text-gray-800 px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Book Now
          </motion.button>

          {/* Mobile Hamburger Menu */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-6 h-4 flex flex-col justify-between z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 7 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`block h-0.5 w-full ${menuOpen ? 'bg-white' : scrolled ? 'bg-gray-800' : 'bg-white'} `}
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`block h-0.5 w-full ${menuOpen ? 'bg-white' : scrolled ? 'bg-gray-800' : 'bg-white'} `}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center px-8"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col space-y-8 w-64"
            >
              {navItems.map((item, index) => (
                <div key={item} className="overflow-hidden">
                  <motion.button
                    variants={childContainer}
                    onClick={() => scrollToSection(item)}
                    className="text-3xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FECD8C] to-[#e6b87d] text-left w-full"
                  >
                    {item}
                  </motion.button>
                </div>
              ))}
            </motion.div>

            {/* Directly To Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 border-[3px] border-[#FECD8C] rounded-[15px] p-6 w-64"
            >
              <h3 className="text-white font-bold uppercase text-lg mb-4">Directly To</h3>
              <div className="flex flex-col space-y-3">
                {directLinks.map((link, index) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-[#FECD8C] text-base text-left transition-colors"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
