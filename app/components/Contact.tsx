'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-20 bg-[#FECD8C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Visit us or book your appointment online
          </p>
        </motion.div>

            {/* Book Appointment Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <motion.a
                href="https://dikidi.app/962128"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#001317] text-[#FECD8C] px-12 py-4 mb-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-[#FECD8C]"
              >
                Book an Appointment
              </motion.a>
            </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8 max-w-2xl mx-auto"
        >
            <div className="bg-[#001317] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#FECD8C]">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#FECD8C] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#FECD8C] mb-1">Address</h4>
                    <p className="text-gray-300">Boss Plaza <br /> 56 Supreme Court<br />Halifax, NS B3M 0E6</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#FECD8C] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.319.16.635.309.938.149.303.365.603.654.894l1.413-1.414a1 1 0 011.414 0l2.121 2.121a1 1 0 010 1.414l-1.414 1.414c.291.289.591.505.894.654.303.149.619.251.938.309l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.5A15.5 15.5 0 014.5 3H2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#FECD8C] mb-1">Phone</h4>
                    <p className="text-gray-300">(902) 989-5949</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#FECD8C] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.414L7.707 9.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.414V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#FECD8C] mb-1">Hours</h4>
                    <p className="text-gray-300">
                      Mon - Sat: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
        </motion.div>
      </div>
    </section>
  );
}
