'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '✂️',
    title: 'Precision Cuts',
    description: 'Expert haircuts tailored to your unique style and face shape',
    price: 'From $45'
  },
  {
    icon: '🎨',
    title: 'Color & Highlights',
    description: 'Vibrant colors and natural highlights using premium products',
    price: 'From $85'
  },
  {
    icon: '💆',
    title: 'Hair Treatments',
    description: 'Nourishing treatments for healthy, shiny, and strong hair',
    price: 'From $60'
  },
  {
    icon: '👰',
    title: 'Special Occasions',
    description: 'Stunning updos and styles for weddings and events',
    price: 'From $95'
  },
  {
    icon: '✨',
    title: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair with our signature keratin service',
    price: 'From $150'
  },
  {
    icon: '💇',
    title: 'Extensions',
    description: 'Add length and volume with our premium hair extensions',
    price: 'From $200'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 bg-transparent mt-[15%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FECD8C]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional hair services designed to bring out your natural beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
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
