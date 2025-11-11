'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkWithUs() {
  return (
    <main className="min-h-screen bg-[#FECD8C]">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[55vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center rounded-b-[30px] flex flex-col justify-end"
        style={{ backgroundImage: 'url(/images/workwithusbg.png)' }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-b-[30px]"></div>
        <div className="relative max-w-4xl z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl uppercase font-extrabold mb-6 text-white"
          >
            Work With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Join our passionate team of hair artists at Beauté Lia Hair
          </motion.p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Why Join Beauté Lia Hair?
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: '💼',
                title: 'Professional Growth',
                description: 'Continuous training and education in the latest hair techniques, color trends'
              },
              {
                icon: '✨',
                title: 'Creative Freedom',
                description: 'Express your artistic vision with complete creative control over your work'
              },
              {
                icon: '🤝',
                title: 'Supportive Team',
                description: 'Work alongside talented, passionate professionals who collaborate and support each other'
              },
              {
                icon: '💰',
                title: 'Competitive Pay',
                description: 'Attractive compensation packages with commission structures and performance bonuses'
              },
              {
                icon: '📈',
                title: 'Career Growth',
                description: 'Clear pathways for advancement to senior stylist, manager, or educator positions'
              },
              {
                icon: '🌟',
                title: 'Premium Products',
                description: 'Work exclusively with high-quality, professional-grade hair care'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#001317] p-3 pt-5 pb-5 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl uppercase font-bold mb-2 text-[#FECD8C]">{benefit.title}</h3>
                <p className="text-sm md:text-base text-white font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Open Positions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: 'Hair Stylist',
                type: 'Full-time / Part-time',
                experience: '2+ years',
                description: 'We\'re seeking experienced hair stylists with a passion for creating beautiful looks and exceptional client experiences.'
              },
              {
                title: 'Junior Stylist',
                type: 'Full-time',
                experience: 'Recent graduate',
                description: 'Perfect opportunity for recent graduates to grow their skills in a supportive, professional environment.'
              }
            ].map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#FECD8C] hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{position.title}</h3>
                  <div className="flex gap-3 mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-[#FECD8C]/20 text-[#e6b87d] rounded-full text-sm font-semibold">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                      {position.experience}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <motion.a
                  href="/job-application"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#FECD8C] to-[#e6b87d] text-black font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Apply Now
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Application Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Submit Resume', description: 'Send your resume and portfolio' },
              { step: '2', title: 'Initial Interview', description: 'Phone or video screening' },
              { step: '3', title: 'In Person Interview', description: 'Interview with the Manager' },
              { step: '4', title: 'Join Us', description: 'Meet the team and start!' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-transparent rounded-full flex items-center justify-center border-3 border-black">
                  <span className="text-2xl font-extrabold text-black">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-gray-800"
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Send your resume and portfolio to get started
          </motion.p>
          <motion.a
            href="/job-application"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-[#001317] text-[#FECD8C] font-extrabold text-xl rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(254,205,140,0.6)] transition-all border-3 border-black"
          >
            Apply Now
          </motion.a>
          <div className="mt-8 text-[#001317]">
            <p>Or call us at: <a href="tel:9029895949" className="text-[#FECD8C] bg-[#001317] rounded-full px-4 py-2 font-semibold hover:text-[#e6b87d]">902-989-5949</a></p>

            <p className="mt-4 text-sm text-gray-600">
                Please submit your resume via our <a href="/job-application" className="underline hover:text-[#001317] transition-colors">Job Application Tool</a> before reaching out by phone
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
