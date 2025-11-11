'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    icon: '✨',
    title: 'Ash Blonde Ombre',
    category: 'Hair Coloring',
    description: 'Sophisticated ash blonde gradient with seamless color transition',
    price: '$180',
    duration: '3 hrs',
    image: '/images/services/ash-blonde-ombre.gif'
  },
  {
    icon: '🎨',
    title: 'Balayage',
    category: 'Hair Coloring',
    description: 'Hand-painted highlights for a natural, sun-kissed look',
    price: '$160',
    duration: '2.5 hrs',
    image: '/images/services/balayage.gif'
  },
  {
    icon: '�',
    title: 'Blonde Balayage',
    category: 'Hair Coloring',
    description: 'Beautiful blonde balayage with dimensional tones',
    price: '$175',
    duration: '3 hrs',
    image: '/images/services/blonde-balayage.gif'
  },
  {
    icon: '�',
    title: 'Dry Scalp Care',
    category: 'Hair Treatment',
    description: 'Specialized treatment to soothe and nourish dry, flaky scalp',
    price: '$80',
    duration: '1 hr',
    image: '/images/services/dry-scalp-care.gif'
  },
  {
    icon: '✂️',
    title: 'Keratin Treatment',
    category: 'Hair Treatment',
    description: 'Smooth, frizz-free hair with our signature keratin service',
    price: '$200',
    duration: '3.5 hrs',
    image: '/images/services/keratin-treatment.gif'
  },
  {
    icon: '🌟',
    title: 'Light Gold & Beige Highlight',
    category: 'Hair Coloring',
    description: 'Warm, luminous highlights in gold and beige tones',
    price: '$165',
    duration: '2.5 hrs',
    image: '/images/services/light-gold-and-beige-highlight.gif'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth * 0.85; // Card width (85%) with gap (3%)
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section id="services" className="py-20 bg-transparent mt-[30%]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-1xl uppercase text-left font-extrabold mb-4 text-[black]">
            Our Services
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-[3px] border-black rounded-[10px] px-6 py-3 text-black font-bold uppercase hover:bg-black hover:text-white transition-colors"
          >
            Explore services and pricing
          </motion.button>
        </motion.div>
        

        {/* Mobile Carousel */}
        <div className="md:hidden pl-[3%]">
          <div 
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-[3%] pb-16"
            style={{ height: '70vh' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[82%] h-full rounded-[10px] overflow-hidden snap-start"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* View Button - Top Right */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 w-[50px] h-[50px] rounded-[15px] border-2 border-[#FECD8C] bg-transparent/40 backdrop-blur-sm flex items-center justify-center z-10"
                >
                  <span className="text-[#FECD8C] text-xs font-semibold">View</span>
                </motion.button>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-1">{service.category}</p>
                  <p className="text-lg font-semibold text-[#FECD8C] mb-1">{service.price}</p>
                  <p className="text-sm text-white/70">{service.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 justify-end px-[3%] -mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#FECD8C] flex items-center justify-center text-black "
            >
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#FECD8C] flex items-center justify-center text-black "
            >
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative"
            >
              {/* View Button - Top Right */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 w-[50px] h-[50px] rounded-[15px] border-2 border-[#FECD8C] bg-white flex items-center justify-center z-10"
              >
                <span className="text-[#FECD8C] text-xs font-semibold">View</span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-5xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#FECD8C] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#FECD8C] font-semibold text-lg">
                  {service.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#FECD8C] font-medium hover:text-[#e6b87d] transition-colors"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
