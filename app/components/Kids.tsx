'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const kidsImages = [
  '/images/kids/kid1.png',
  '/images/kids/kid2.png',
  '/images/kids/kid3.png',
  '/images/kids/kid4.png',
];

export default function Kids() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kidsImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative py-8 md:px-28">
      <div className="w-full relative h-[40vh] overflow-hidden rounded-[30px] md:rounded-[15px]">
        {/* Background Images with Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={kidsImages[currentImageIndex]}
              alt={`Happy kid at salon ${currentImageIndex + 1}`}
              fill
              className="object-cover object-[center_-15px]"
              priority={currentImageIndex === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <div className="absolute inset-0 flex items-center justify-center z-10 mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold text-white text-center px-4 uppercase"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            Kids love us too!💖
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
