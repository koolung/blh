'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LightGoldBeigHighlightService() {
  return (
    <main className="min-h-screen bg-[#FECD8C]">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[55vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center rounded-b-[30px] flex flex-col justify-end"
        style={{ backgroundImage: 'url(/images/services/light-gold-and-beige-highlight.gif)' }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-b-[30px]"></div>
        <div className="relative max-w-4xl z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl uppercase font-extrabold mb-6 text-white"
          >
            Light Gold & Beige Highlight
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Warm, luminous highlights in gold and beige tones
          </motion.p>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-3 gap-3 mb-12 w-full"
          >
            <div className="bg-[#001317] p-3 pt-4 pb-4 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-[#FECD8C] mb-2">Price</h3>
              <p className="text-2xl font-bold text-[white]">from $280</p>
            </div>

            <div className="bg-[#001317] p-3 pt-4 pb-4 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-[#FECD8C] mb-2">Duration</h3>
              <p className="text-2xl font-bold text-[white]">1.5 hours</p>
            </div>

            <div className="bg-[#001317] p-3 pt-4 pb-4 rounded-2xl shadow-lg text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-bold text-[#FECD8C] mb-2">Category</h3>
              <p className="text-xl font-bold text-[white]">Hair Coloring</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#001317] p-8 md:p-12 rounded-2xl shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-[#FECD8C] mb-6">About This Service</h2>
            <p className="text-lg text-[white] mb-4 leading-relaxed">
              Add warmth and radiance to your hair with our Light Gold & Beige Highlight service. This sophisticated highlighting technique combines luminous gold tones with elegant beige hues, creating a warm, sun-kissed appearance that flatters most skin tones.
            </p>
            <p className="text-lg text-[white] mb-4 leading-relaxed">
              Our colorists hand-paint light gold and beige tones throughout your hair, focusing on face-framing pieces and strategic placement to maximize dimension. The warm tones add depth and create a glow that appears to emanate from within.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-[#FECD8C] mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {['Warm, luminous appearance', 'Flatters warm skin tones', 'Creates subtle dimension', 'Natural-looking highlights', 'Low maintenance', 'Long-lasting color'].map((benefit) => (
                    <li key={benefit} className="flex items-center text-[white]">
                      <span className="text-[#FECD8C] mr-3 text-lg">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FECD8C] mb-4">What to Expect</h3>
                <ul className="space-y-3 text-[white]">
                  <li><strong>Consultation:</strong> Discuss gold and beige tone placement</li>
                  <li><strong>Face-Framing:</strong> Strategic placement around your face</li>
                  <li><strong>Hand-Painting:</strong> Precise application of warm tones</li>
                  <li><strong>Blending:</strong> Seamless integration with your base color</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#001317] p-8 md:p-12 rounded-2xl shadow-lg text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#FECD8C] mb-6">Ready to Book?</h2>
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

          {/* Add-on and Save Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-[#001317] to-[#003a42] p-8 md:p-12 rounded-2xl shadow-lg border-3 border-[#FECD8C]"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FECD8C] mb-2">✨ Add-on and Save up to 15%!</h2>
              <p className="text-lg text-white">Bundle services for maximum savings</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white/10 p-6 rounded-xl border-2 border-[#FECD8C]/50 hover:border-[#FECD8C] transition-all">
                <h3 className="text-2xl font-bold text-[#FECD8C] mb-3">💆 Dry Scalp Care</h3>
                <p className="text-white mb-4">Specialized treatment to soothe and nourish your dry, flaky scalp with our premium care system</p>
                <p className="text-[#FECD8C] font-semibold">from $80 • 30 minutes</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white/10 p-6 rounded-xl border-2 border-[#FECD8C]/50 hover:border-[#FECD8C] transition-all">
                <h3 className="text-2xl font-bold text-[#FECD8C] mb-3">✂️ Professional Cut</h3>
                <p className="text-white mb-4">Get a fresh, expertly crafted cut tailored to your style and face shape by our skilled stylists</p>
                <p className="text-[#FECD8C] font-semibold">from $30-35 • 30 minutes</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="bg-[#FECD8C]/20 p-6 rounded-xl border-2 border-[#FECD8C] text-center">
              <p className="text-white text-lg mb-4"><span className="text-[#FECD8C] font-bold text-2xl">💰 Save up to 15%</span> when you bundle these services together!</p>
              <p className="text-white/80 mb-6">Combine your color service with a dry scalp treatment and fresh cut for the ultimate salon experience</p>
              <motion.a href="https://dikidi.app/962128" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-8 py-3 bg-[#FECD8C] text-[#001317] font-extrabold rounded-full hover:shadow-[0_0_20px_rgba(254,205,140,0.8)] transition-all">
                Book Bundle Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
