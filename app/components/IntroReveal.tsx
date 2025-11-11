'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger highlight after image is revealed
            setTimeout(() => {
              setIsHighlighted(true);
            }, 1600);
          } else {
            // Reset animation when scrolling away
            setIsVisible(false);
            setIsHighlighted(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full relative bg-gradient-to-b">
      <div 
        ref={imageRef}
        className="w-full relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]"
        >
          <Image
            src="/images/intro/intro1.png"
            alt="Best Rated Salon"
            fill
            className="object-cover"
            priority
            style={{ borderRadius: '30px' }}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHighlighted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-black/40 from-70% to-white/20 pointer-events-none border-[5px] border-[#474037]"
            style={{ borderRadius: '30px' }}
          />

          {/* Popup Caption */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isHighlighted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-[-130px] left-1/2 transform -translate-x-1/2 z-10 w-[85%]"
          >
            <div className="backdrop-blur-md rounded-2xl shadow-2xl px-8 py-4 w-full" style={{ backgroundColor: 'lab(10 0 0 / 0.95)' }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Image src="/images/star.svg" alt="Star" width={55} height={55} style={{ filter: 'brightness(0) invert(1)' }} />
                <span className="text-2xl font-extrabold text-[#FECD8C] uppercase">
                  4.9 Rating
                </span>
              </div>
              <div className="text-center text-white font-medium text-medium font-bold flex flex-col items-center justify-center gap-0">
                <span>Best Rated Salon on</span>
                <motion.a 
                  href="https://share.google/8XUBM4oyIkTGLZ3fY" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center hover:opacity-80 transition-opacity"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Image src="/images/google-maps-logo.svg" alt="Google Maps" width={208} height={62} />
                </motion.a>
              </div>
              <p className="text-center text-sm" style={{ color: 'lab(95 0 -0.01)' }}>
                with 200+ real reviews
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.span
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHighlighted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (star * 0.1) }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
