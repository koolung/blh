'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: '✨',
    title: 'Ash Blonde Ombre',
    category: 'Hair Coloring',
    description: 'Sophisticated ash blonde gradient with seamless color transition',
    price: 'From $280',
    duration: '2 hrs',
    video: '/images/services/ash-blonde-ombre.mp4',
    route: '/services/ash-blonde-ombre'
  },
  {
    icon: '🎨',
    title: 'Balayage',
    category: 'Hair Coloring',
    description: 'Hand-painted highlights for a natural, sun-kissed look',
    price: 'From $280',
    duration: '2 hrs',
    video: '/images/services/balayage.mp4',
    route: '/services/balayage'
  },
  {
    icon: '🎨',
    title: 'Blonde Balayage',
    category: 'Hair Coloring',
    description: 'Beautiful blonde balayage with dimensional tones',
    price: 'From $280',
    duration: '2 hrs',
    video: '/images/services/blonde-balayage.mp4',
    route: '/services/blonde-balayage'
  },
  {
    icon: '💆',
    title: 'Dry Scalp Care',
    category: 'Hair Treatment',
    description: 'Specialized treatment to soothe and nourish dry, flaky scalp',
    price: 'From $80',
    duration: '0.5 hrs',
    video: '/images/services/dry-scalp-care.mp4',
    route: '/services/dry-scalp-care'
  },
  {
    icon: '✂️',
    title: 'Keratin Treatment',
    category: 'Hair Treatment',
    description: 'Smooth, frizz-free hair with our signature keratin service',
    price: 'From $280',
    duration: '1 hr',
    video: '/images/services/keratin-treatment.mp4',
    route: '/services/keratin-treatment'
  },
  {
    icon: '🌟',
    title: 'Light Gold & Beige Highlight',
    category: 'Hair Coloring',
    description: 'Warm, luminous highlights in gold and beige tones',
    price: 'From $280',
    duration: '1.5 hrs',
    video: '/images/services/light-gold-and-beige-highlight.mp4',
    route: '/services/light-gold-and-beige-highlight'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);

  // Mobile carousel scroll
  const scrollToIndex = (index: number) => {
    if (mobileCarouselRef.current) {
      const cardWidth = mobileCarouselRef.current.offsetWidth * 0.85; // Card width (85%) with gap (3%)
      mobileCarouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  // Mobile navigation
  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < services.length ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  // Desktop carousel scroll (multiple cards at a time)
  const scrollDesktopToIndex = (index: number) => {
    if (desktopCarouselRef.current) {
      const cardWidth = desktopCarouselRef.current.offsetWidth / 3; // 3 cards visible on large screens
      desktopCarouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setDesktopIndex(index);
    }
  };

  // Desktop navigation (moves 3 cards at a time for lg screens, 2 for md)
  const handleDesktopPrev = () => {
    const newIndex = desktopIndex > 0 ? desktopIndex - 3 : 0;
    scrollDesktopToIndex(newIndex);
  };

  const handleDesktopNext = () => {
    const maxIndex = Math.max(0, services.length - 2); // Prevent scrolling past end
    const newIndex = Math.min(desktopIndex + 3, maxIndex);
    scrollDesktopToIndex(newIndex);
  };

  return (
    <section id="services" className="py-20 bg-transparent mt-[30%] md:mt-40">
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
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-[3px] border-black rounded-[10px] px-6 py-3 text-black font-bold uppercase hover:bg-black hover:text-white transition-colors"
            >
              Explore services and pricing
            </motion.button>
          </Link>
        </motion.div>
        

        {/* Mobile Carousel */}
        <div className="md:hidden pl-[3%]">
          <div 
            ref={mobileCarouselRef}
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
                {/* Background Video */}
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* View Button - Top Right */}
                <Link href={service.route}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 w-[50px] h-[50px] rounded-[15px] border-2 border-[#FECD8C] bg-transparent/40 backdrop-blur-sm flex items-center justify-center z-10"
                  >
                    <span className="text-[#FECD8C] text-xs font-semibold">View</span>
                  </motion.button>
                </Link>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-1">{service.category}</p>
                  <p className="text-lg font-semibold text-[#FECD8C] mb-1">{service.price}</p>
                  <p className="text-sm text-white/70">{service.duration}</p>
                </div>
              </motion.div>
            ))}

            {/* Browse More Card */}
            <Link href="/services" className="flex-shrink-0 w-[82%] h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: services.length * 0.1 }}
                className="relative w-full h-full rounded-[10px] overflow-hidden snap-start bg-[#001317] flex flex-col items-center justify-center px-[10%] text-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[#FECD8C] mb-4">Browse More Services</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-[15px] border-[3px] border-[#FECD8C] bg-transparent text-[#FECD8C] font-semibold text-sm mb-4"
                >
                  Browse More
                </motion.button>
              
              {/* Instagram Icon */}
              <motion.a
                href="https://www.instagram.com/beaute_lia_hairsalon/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#FECD8C] font-semibold text-xs uppercase">Or check our insta</span>
                <div className="w-10 h-10 rounded-full bg-transparent border-2 border-[#FECD8C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-[#FECD8C]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </motion.a>
              </motion.div>
            </Link>
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

        {/* Desktop Carousel */}
        <div className="hidden md:flex flex-col px-[3%]">
          <div 
            ref={desktopCarouselRef}
            className="flex overflow-x-scroll scrollbar-hide gap-8"
            style={{ height: '70vh' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[45%] lg:w-[30%] h-full rounded-[10px] overflow-hidden"
              >
                {/* Background Video */}
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* View Button - Top Right */}
                <Link href={service.route}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 w-[50px] h-[50px] rounded-[15px] border-2 border-[#FECD8C] bg-transparent/40 backdrop-blur-sm flex items-center justify-center z-10"
                  >
                    <span className="text-[#FECD8C] text-xs font-semibold">View</span>
                  </motion.button>
                </Link>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-1">{service.category}</p>
                  <p className="text-lg font-semibold text-[#FECD8C] mb-1">{service.price}</p>
                  <p className="text-sm text-white/70">{service.duration}</p>
                </div>
              </motion.div>
            ))}

            {/* Browse More Card */}
            <Link href="/services" className="flex-shrink-0 w-[45%] lg:w-[30%] h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: services.length * 0.1 }}
                className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#001317] flex flex-col items-center justify-center px-[10%] text-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[#FECD8C] mb-4">Browse More Services</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-[15px] border-[3px] border-[#FECD8C] bg-transparent text-[#FECD8C] font-semibold text-sm mb-4"
                >
                  Browse More
                </motion.button>
              
              {/* Instagram Icon */}
              <motion.a
                href="https://www.instagram.com/beaute_lia_hairsalon/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#FECD8C] font-semibold text-xs uppercase">Or check our insta</span>
                <div className="w-10 h-10 rounded-full bg-transparent border-2 border-[#FECD8C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-[#FECD8C]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </motion.a>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="flex gap-3 justify-end mt-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDesktopPrev}
              className="w-12 h-12 rounded-full bg-[#FECD8C] flex items-center justify-center text-black"
            >
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDesktopNext}
              className="w-12 h-12 rounded-full bg-[#FECD8C] flex items-center justify-center text-black"
            >
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
