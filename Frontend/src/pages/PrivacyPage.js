//PrivacyPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  UserIcon,
  CogIcon,
  DocumentIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const PrivacyPage = () => {
  const privacySections = [
    {
      title: "Information We Collect",
      icon: <UserIcon className="w-6 h-6" />,
      content: [
        "Personal information (name, email, phone number)",
        "Resume content and templates you create",
        "Usage data and analytics",
        "Device and browser information"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <CogIcon className="w-6 h-6" />,
      content: [
        "To provide and improve our services",
        "To communicate with you about your account",
        "To send you updates and marketing materials (with consent)",
        "To analyze usage patterns and improve user experience"
      ]
    },
    {
      title: "Information Sharing",
      icon: <EyeIcon className="w-6 h-6" />,
      content: [
        "We never sell your personal information",
        "We may share data with trusted service providers",
        "We may disclose information if required by law",
        "Your resume content is private unless you choose to share it"
      ]
    },
    {
      title: "Data Security",
      icon: <LockClosedIcon className="w-6 h-6" />,
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers and data centers",
        "Regular security audits and updates",
        "Access controls and authentication measures"
      ]
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request deletion of your data",
    "Export your data",
    "Opt-out of marketing communications",
    "Lodge a complaint with authorities"
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Professional Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-100 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 text-emerald-700 hover:text-emerald-800 transition-colors group">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <ArrowLeftIcon className="w-5 h-5" />
                </div>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Resume Builder
                </span>
                <div className="text-xs text-emerald-600 font-medium">Professional Templates</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <ShieldCheckIcon className="w-5 h-5" />
                <span>Privacy Policy</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Privacy</span> Matters
              </h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <DocumentIcon className="w-4 h-4" />
                <span>Your Rights</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Rights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have the right to control your personal information. Here's what you can do:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-6 h-6 text-emerald-500" />
                  <span className="text-gray-900 font-medium">{right}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <ShieldCheckIcon className="w-5 h-5" />
              <span>Questions About Privacy?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              If you have any questions about our privacy policy or how we handle your data, please contact us.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SparklesIcon className="w-6 h-6" />
              <span>Contact Us</span>
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Resume Builder</span>
                  <div className="text-sm text-emerald-400">Professional Templates</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create professional resumes that get you noticed by top employers. 
                Our AI-powered builder helps you craft the perfect resume for your dream job.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/templates" className="hover:text-emerald-400 transition-colors">Templates</Link></li>
                <li><Link to="/features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/help" className="hover:text-emerald-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Resume Builder. Built with ❤️ by Mohd Faizan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;