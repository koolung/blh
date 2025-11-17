'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setIsSuccess(true);
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.error || 'Something went wrong');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 rounded-t-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#FECD8C] mb-4">
              Beauté Lia Hair
            </h3>
            <p className="text-gray-400">
              Transforming beauty through expert hair care and personalized styling since 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-[#FECD8C] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for special offers and tips.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-pink-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#FECD8C] px-6 py-2 rounded-r-lg font-semibold hover:opacity-90 transition-opacity text-gray-800 disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p
                  className={`text-sm ${
                    isSuccess ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Beauté Lia Hair. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
