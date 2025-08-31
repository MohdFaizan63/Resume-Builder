//FAQPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <BoltIcon className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      items: [
        {
          question: "How do I create my first resume?",
          answer: "Creating your first resume is simple! Just sign up for a free account, choose a template that matches your industry, and start filling in your information. Our step-by-step builder will guide you through each section."
        },
        {
          question: "Do I need to create an account?",
          answer: "Yes, creating a free account allows you to save your progress, access multiple templates, and download your resume. Your data is securely stored and you can access it from any device."
        },
        {
          question: "How long does it take to create a resume?",
          answer: "Most users can create a professional resume in 15-30 minutes. The time depends on how much information you have ready and how much customization you want to do."
        },
        {
          question: "Can I edit my resume after creating it?",
          answer: "Absolutely! You can edit your resume anytime by logging into your account. All your resumes are saved and can be modified as needed."
        }
      ]
    },
    {
      title: "Templates & Design",
      icon: <SparklesIcon className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
      items: [
        {
          question: "Are the templates ATS-friendly?",
          answer: "Yes! All our templates are designed to pass Applicant Tracking Systems (ATS). They use clean layouts, standard fonts, and proper formatting that ATS software can easily read and parse."
        },
        {
          question: "Can I customize the templates?",
          answer: "Yes, you can customize colors, fonts, layouts, and add your own sections. Our editor gives you full control over the design while maintaining professional standards."
        },
        {
          question: "How many templates are available?",
          answer: "We offer 10+ professionally designed templates across different industries and career levels. Free users get access to 3 templates, while Pro users get all templates."
        },
        {
          question: "Are there templates for specific industries?",
          answer: "Yes, we have templates designed for various industries including technology, healthcare, finance, creative, education, and more. Each template is optimized for its target industry."
        }
      ]
    },
    {
      title: "Download & Export",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          question: "What formats can I download my resume in?",
          answer: "You can download your resume in PDF, Word (.docx), and plain text formats. PDF is recommended for job applications as it maintains formatting across all devices."
        },
        {
          question: "Is the PDF quality good for printing?",
          answer: "Yes, our PDF exports are high-quality and print-ready. They maintain crisp text and professional formatting suitable for both digital and printed applications."
        },
        {
          question: "Can I download multiple versions?",
          answer: "Pro users can download unlimited versions of their resume. Free users have limited downloads per month."
        },
        {
          question: "How do I share my resume?",
          answer: "You can share your resume by downloading it and sending the file, or by using our share link feature (Pro users) which creates a unique URL for your resume."
        }
      ]
    },
    {
      title: "Account & Billing",
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      items: [
        {
          question: "How do I change my password?",
          answer: "You can change your password in your account settings. Go to your profile and look for the 'Change Password' option in the security section."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact our support team for a full refund."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment partners."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <CogIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          question: "What browsers are supported?",
          answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        },
        {
          question: "Does it work on mobile devices?",
          answer: "Yes! Our resume builder is fully responsive and works great on mobile devices, tablets, and desktop computers."
        },
        {
          question: "How do I contact support?",
          answer: "You can contact our support team through email at support@resumebuilder.com, or use our live chat feature (Pro users). We typically respond within 24 hours."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use industry-standard encryption to protect your data. We never share your personal information with third parties."
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "Getting Started Guide", link: "/help/getting-started" },
    { title: "Template Selection Tips", link: "/help/templates" },
    { title: "Resume Writing Tips", link: "/help/writing-tips" },
    { title: "Contact Support", link: "/contact" }
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
                <QuestionMarkCircleIcon className="w-5 h-5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-4">
                How Can We <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Help</span>?
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                Find answers to common questions about creating professional resumes with our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative z-10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <Link to={link.link} className="flex items-center space-x-3 text-emerald-700 hover:text-emerald-800">
                  <ArrowRightIcon className="w-5 h-5" />
                  <span className="font-medium">{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Category Header */}
                <div className="p-8 bg-gradient-to-r from-gray-50 to-emerald-50 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600">Common questions about {category.title.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-100">
                  {category.items.map((item, itemIndex) => {
                    const isOpen = openItems.has(`${categoryIndex}-${itemIndex}`);
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        className="p-8 hover:bg-gray-50 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(`${categoryIndex}-${itemIndex}`)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h3 className="text-xl font-bold text-gray-900 pr-8">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUpIcon className="w-6 h-6 text-emerald-600" />
                            ) : (
                              <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                            )}
                          </div>
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6"
                          >
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <HeartIcon className="w-5 h-5" />
              <span>Still Need Help?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Can't Find Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Answer</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <SparklesIcon className="w-6 h-6" />
                <span>Contact Support</span>
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
              <Link 
                to="/help" 
                className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-emerald-300 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 font-bold text-lg rounded-2xl transition-all duration-300"
              >
                <StarIcon className="w-6 h-6" />
                <span>Help Center</span>
              </Link>
            </div>
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

export default FAQPage;