'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section on home page
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (section && pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleNavClick = (item: string) => {
    if (item === 'home') {
      if (pathname !== '/') {
        router.push('/');
      } else {
        scrollToSection('home');
      }
    } else if (item === 'services') {
      if (pathname !== '/') {
        router.push('/?section=services');
      } else {
        scrollToSection('services');
      }
    } else if (item === 'book now') {
      window.open('https://dikidi.app/962128', '_blank');
    } else if (item === 'contact') {
      window.location.href = 'tel:9029895949';
    } else {
      scrollToSection(item);
    }
  };

  const navItems = ['home', 'services', 'book now', 'contact'];
  
  const directLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/beaute_lia_hairsalon/' },
    { name: 'Book Online', url: 'https://dikidi.app/962128' },
    { name: 'Call Us', url: 'tel:9029895949' },
    { name: 'Location', url: 'https://www.google.com/maps/place/Beauté+Lia+Hair/' },
    { name: 'Work With Us', url: '/work-with-us' }
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
                onClick={() => handleNavClick(item)}
                className={`capitalize font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-[#FECD8C]' : 'text-white hover:text-[#FECD8C]'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <motion.a
            href="https://dikidi.app/962128"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(254, 205, 140, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-[#FECD8C] to-[#e6b87d] text-black px-10 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(254,205,140,0.6)] transition-all border-2 border-[#FECD8C]"
            style={{ boxShadow: "0 10px 25px rgba(254, 205, 140, 0.3)" }}
          >
            Book Now
          </motion.a>

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
                    onClick={() => handleNavClick(item)}
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
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-[#FECD8C] text-base text-left transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
