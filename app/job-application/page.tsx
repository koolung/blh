'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function JobApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: 'Hair Stylist',
    experience: '',
    bio: '',
    resume: null as File | null,
    portfolio: null as File | null,
    coverLetter: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('bio', formData.bio);
      
      if (formData.resume) formDataToSend.append('resume', formData.resume);
      if (formData.portfolio) formDataToSend.append('portfolio', formData.portfolio);
      if (formData.coverLetter) formDataToSend.append('coverLetter', formData.coverLetter);

      // Placeholder for actual form submission
      // In production, you would send this to your backend API
      console.log('Form submitted:', formData);
      
      setSubmitMessage('Thank you for your application! We will review it and get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: 'Hair Stylist',
        experience: '',
        bio: '',
        resume: null,
        portfolio: null,
        coverLetter: null,
      });
    } catch (error) {
      setSubmitMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FECD8C]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl uppercase font-extrabold mb-4 text-gray-800"
          >
            Job Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            Apply to join the Beauté Lia Hair team
          </motion.p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FECD8C]">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-8 p-4 rounded-lg text-center font-semibold ${
                  submitMessage.includes('error') 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}

            {/* Personal Information Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                    placeholder="Enter your last name"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                    placeholder="+1 (902) 123-4567"
                  />
                </motion.div>
              </div>
            </div>

            {/* Application Details Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Details</h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Position of Interest *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors bg-white"
                >
                  <option value="Hair Stylist">Hair Stylist</option>
                  <option value="Junior Stylist">Junior Stylist</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                  placeholder="e.g., 3 years"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">About You</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FECD8C] focus:outline-none transition-colors"
                  placeholder="Tell us about yourself, your skills, and why you want to join our team..."
                  rows={5}
                />
              </motion.div>
            </div>

            {/* File Upload Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Documents & Portfolio</h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resume / CV *
                  <span className="text-xs text-gray-500 font-normal"> (PDF, DOC, DOCX)</span>
                </label>
                <div className="relative border-3 border-dashed border-[#FECD8C] rounded-lg p-6 text-center cursor-pointer hover:bg-[#FECD8C]/10 transition-colors">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'resume')}
                    accept=".pdf,.doc,.docx"
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                    </p>
                    {!formData.resume && <p className="text-xs text-gray-500">PDF, DOC or DOCX</p>}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Portfolio / Photos
                  <span className="text-xs text-gray-500 font-normal"> (JPG, PNG, PDF)</span>
                </label>
                <div className="relative border-3 border-dashed border-[#FECD8C] rounded-lg p-6 text-center cursor-pointer hover:bg-[#FECD8C]/10 transition-colors">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'portfolio')}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {formData.portfolio ? formData.portfolio.name : 'Click to upload or drag and drop'}
                    </p>
                    {!formData.portfolio && <p className="text-xs text-gray-500">JPG, PNG or PDF</p>}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter
                  <span className="text-xs text-gray-500 font-normal"> (PDF, DOC, DOCX - Optional)</span>
                </label>
                <div className="relative border-3 border-dashed border-[#FECD8C] rounded-lg p-6 text-center cursor-pointer hover:bg-[#FECD8C]/10 transition-colors">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'coverLetter')}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {formData.coverLetter ? formData.coverLetter.name : 'Click to upload or drag and drop'}
                    </p>
                    {!formData.coverLetter && <p className="text-xs text-gray-500">PDF, DOC or DOCX</p>}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FECD8C] to-[#e6b87d] text-black font-extrabold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>

            <p className="text-xs text-gray-500 text-center mt-4">
              * Required fields
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
