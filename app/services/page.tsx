'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useRef, useEffect } from 'react';

export default function ServicesAndPricing() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('haircut');
  const categoriesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    { id: 'haircut', label: '✂️ Haircut' },
    { id: 'perm', label: '💇 Perm' },
    { id: 'coloring', label: '🎨 Colouring' },
    { id: 'other', label: '✨ Other' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const category of categories) {
        const element = categoriesRef.current[category.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = categoriesRef.current[categoryId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(categoryId);
    }
  };
  const haircuts = [
    { name: "Men's Haircut", duration: '30 minutes', price: 'from $30' },
    { name: 'Bang', duration: '5 minutes', price: 'from $15' },
    { name: "Women's Haircut", duration: '30 minutes', price: 'from $35' },
    { name: "Girl's Haircut (U12)", duration: '30 minutes', price: 'from $30' },
    { name: "Boy's Haircut (U12)", duration: '30 minutes', price: 'from $25' }
  ];

  const perms = [
    { name: 'Bang Perm', duration: '40 minutes', price: 'from $60.00' },
    { name: 'Treatment Straight Perm', duration: '2 hours', price: 'from $280.00' },
    { name: 'Volume C-Curl Perm', duration: '2 hours', price: 'from $280.00' },
    { name: 'Korean Heating Perm', duration: '2 hours', price: 'from $180.00' },
    { name: "Women's Perm", duration: '1 hour 30 minutes', price: 'from $120.00' },
    { name: "Down Perm w/ Cut", duration: '40 minutes', price: 'from $100.00' },
    { name: "Men's Perm", duration: '1 hour', price: 'from $100.00' }
  ];

  const coloring = [
    { name: 'Color - add on Toner to Cut', duration: '1 hour 30 minutes', price: 'from $240.00' },
    { name: 'Foil 1/2 and Root Retouch', duration: '1 hour 30 minutes', price: 'from $260.00' },
    { name: 'Foil 1/4 and Root Retouch', duration: '1 hour 30 minutes', price: 'from $240.00' },
    { name: 'Color Retouch', duration: '50 minutes', price: 'from $115.00' },
    { name: 'Foil 1/4 Head', duration: '40 minutes', price: 'from $180.00' },
    { name: 'Color-Express Root Retouch', duration: '1 hour', price: 'from $180.00' },
    { name: 'Foils - Face Framing', duration: '1 hour', price: 'from $130.00' },
    { name: 'Balayage', duration: '2 hours', price: 'from $280.00' },
    { name: 'Bleach', duration: '1 hour', price: 'from $100.00' },
    { name: 'Highlights 1/2 Foil', duration: '1 hour 30 minutes', price: 'from $220.00' },
    { name: 'Root Touch-up', duration: '1 hour', price: 'from $70.00' },
    { name: 'Full Foil Highlights', duration: '1 hour 30 minutes', price: 'from $250.00' },
    { name: 'Full Colour', duration: '1 hour 30 minutes', price: 'from $150.00' }
  ];

  const otherServices = [
    { name: 'Upstyle', duration: '40 minutes', price: 'from $75.00' },
    { name: 'Blow-Dry and Heat Styling', duration: '30 minutes', price: 'from $45.00' },
    { name: 'Defy Damage Treatment System', duration: '30 minutes', price: 'from $45.00' },
    { name: 'Scalp Massage Shampoo', duration: '30 minutes', price: 'from $30.00' },
    { name: 'Special Treatment', duration: '1 hour', price: 'from $120.00' },
    { name: 'Treatment', duration: '1 hour', price: 'from $60.00' },
    { name: 'Shampoo', duration: '10 minutes', price: 'from $5.00' }
  ];

  const ServiceTable = ({ services, categoryTitle, categoryId }: { services: typeof haircuts; categoryTitle: string; categoryId: string }) => (
    <div ref={(el) => { if (el) categoriesRef.current[categoryId] = el; }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">{categoryTitle}</h3>
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#001317] text-white">
                <th className="px-4 md:px-8 py-4 text-left font-bold text-sm md:text-base">Service Name</th>
                <th className="px-4 md:px-8 py-4 text-left font-bold text-sm md:text-base">Duration</th>
                <th className="px-4 md:px-8 py-4 text-left font-bold text-sm md:text-base">Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <motion.tr
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border-b border-gray-200 hover:bg-[#FECD8C]/10 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="px-4 md:px-8 py-4 text-sm md:text-base font-medium text-gray-800">{service.name}</td>
                  <td className="px-4 md:px-8 py-4 text-sm md:text-base text-gray-600">{service.duration}</td>
                  <td className="px-4 md:px-8 py-4 text-sm md:text-base font-semibold text-[#FECD8C]">{service.price}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FECD8C]">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[55vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001317] to-[#003a42] rounded-b-[30px] flex flex-col justify-end"
      >
        <div className="relative max-w-4xl z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl uppercase font-extrabold mb-6 text-white"
          >
            Services <span className="text-[#FECD8C]">&</span> Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Comprehensive pricing for all our professional hair services
          </motion.p>
        </div>
      </section>

      {/* Services Tables Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-6xl mx-auto">
          <ServiceTable services={haircuts} categoryTitle="✂️ Haircut" categoryId="haircut" />
          <ServiceTable services={perms} categoryTitle="💇 Perm" categoryId="perm" />
          <ServiceTable services={coloring} categoryTitle="🎨 Colouring Services" categoryId="coloring" />
          <ServiceTable services={otherServices} categoryTitle="✨ Other Services" categoryId="other" />

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Book?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your appointment today and experience our premium services
            </p>
            <motion.a
              href="https://dikidi.app/962128"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-[#001317] text-[#FECD8C] font-extrabold text-xl rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(254,205,140,0.6)] transition-all border-3 border-[#FECD8C]"
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Side Navigation Panel */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : 'calc(100% - 32px)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 w-32"
      >
        {/* Panel Content */}
        <motion.div
          className="bg-white/20 backdrop-blur-md rounded-l-xl shadow-lg p-2 pr-3 border border-white/30"
        >
          <div className="space-y-1">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left px-1.5 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap overflow-hidden text-ellipsis ${
                  activeCategory === category.id
                    ? 'bg-[#FECD8C] text-gray-800 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-[#FECD8C] text-gray-800 w-7 h-7 rounded-l-lg flex items-center justify-center font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? '›' : '‹'}
        </motion.button>
      </motion.div>

      <Footer />
    </main>
  );
}
