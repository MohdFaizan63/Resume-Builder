//HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  StarIcon,
  CheckIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  RocketLaunchIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "AI-Powered Templates",
      description: "Choose from 10+ professionally designed templates",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8" />,
      title: "Real-time Preview",
      description: "See your changes instantly as you type",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Share & Collaborate",
      description: "Share your resume with unique links",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track views and downloads of your resume",
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "3 Professional Templates",
        "Basic Customization",
        "PDF Download",
        "Email Support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      features: [
        "All Templates (10+)",
        "Advanced Customization",
        "Unlimited Downloads",
        "Priority Support",
        "Resume Analytics",
        "Custom Branding"
      ],
      popular: true,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "API Access",
        "Custom Templates",
        "Dedicated Support",
        "White-label Options"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const faqItems = [
    {
      question: "How do I create my first resume?",
      answer: "Simply sign up, choose a template, fill in your information, and download your professional resume in PDF format."
    },
    {
      question: "Are the templates ATS-friendly?",
      answer: "Yes! All our templates are designed to pass Applicant Tracking Systems and are optimized for modern hiring practices."
    },
    {
      question: "Can I customize the templates?",
      answer: "Absolutely! You can customize colors, fonts, layouts, and add your own sections to make it uniquely yours."
    },
    {
      question: "How do I download my resume?",
      answer: "Once you're satisfied with your resume, simply click the download button to get a high-quality PDF file."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Professional Background Image */}
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
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <SparklesIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Resume Builder
                </span>
                <div className="text-xs text-emerald-600 font-medium">Professional Templates</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Pricing
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  <span>Support</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                      Help Center
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                      Contact Us
                    </Link>
                    <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Privacy
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/login" 
                className="px-6 py-3 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/templates" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <Link to="/features" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Features
              </Link>
              <Link to="/pricing" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Pricing
              </Link>
              <Link to="/help" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Help Center
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Contact Us
              </Link>
              <Link to="/faq" className="block text-gray-700 hover:text-emerald-600 font-medium">
                FAQ
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-emerald-600 font-medium">
                About
              </Link>
              <Link to="/privacy" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Privacy
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link to="/login" className="block text-emerald-600 font-semibold mb-3">
                  Sign In
                </Link>
                <Link to="/templates" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <RocketLaunchIcon className="w-5 h-5" />
                <span>Trusted by 50,000+ professionals worldwide</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                Create Your Perfect
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Resume Today
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Build stunning, professional resumes that stand out with our AI-powered builder. 
                Choose from multiple templates, customize everything, and download instantly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 md:mb-16 px-4">
                <Link 
                  to="/templates" 
                  className="group px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg sm:text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                >
                  <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Start Building Now</span>
                  <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">50K+</div>
                  <div className="text-gray-600 font-medium">Resumes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">98%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">4.9★</div>
                  <div className="text-gray-600 font-medium">User Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute top-48 right-20 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-emerald-300 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BoltIcon className="w-4 h-4" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resume Builder</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Everything you need to create a professional resume that gets you noticed by top employers
              </p>
            </motion.div>
          </div>

          {/* Rotating Feature Highlight */}
          <div className="mb-12 md:mb-16 px-4">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center max-w-4xl mx-auto border border-emerald-100 shadow-xl"
            >
              <div className={`w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r ${features[currentFeature].color} rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg`}>
                <div className="text-white">
                  {features[currentFeature].icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{features[currentFeature].title}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{features[currentFeature].description}</p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 ${
                  index === currentFeature ? 'ring-2 ring-emerald-500 shadow-xl' : ''
                }`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>Simple Pricing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                Choose Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Start free and upgrade when you need more features
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-emerald-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transform hover:scale-105 shadow-lg'
                    : 'bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 border-2 border-transparent hover:border-emerald-300'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <HeartIcon className="w-4 h-4" />
                <span>User Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                What Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Users Say</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                content: "Resume Builder helped me create a stunning resume that landed me my dream job! The templates are professional and the real-time preview is amazing.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Michael Chen",
                role: "Product Manager at Microsoft",
                content: "The AI-powered suggestions and professional templates made resume building effortless. Highly recommended for anyone serious about their career!",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer at Apple",
                content: "Finally, a resume builder that actually looks good and is easy to use. The customization options are incredible and the results speak for themselves.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-emerald-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <QuestionMarkCircleIcon className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                Got <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>?
              </h2>
            </motion.div>
          </div>

          <div className="space-y-4 md:space-y-6 px-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{item.question}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <PhoneIcon className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                Need <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Help</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our support team is here to help you create the perfect resume
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600">support@resumebuilder.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Ready to Create Your Professional Resume?
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Join thousands of professionals who trust Resume Builder to create their resumes
            </p>
            <Link 
              to="/templates" 
              className="inline-flex items-center space-x-3 px-6 sm:px-12 py-4 sm:py-5 bg-white text-emerald-600 hover:text-emerald-700 font-bold text-lg sm:text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Start Building Your Resume</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Brand */}
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
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <GlobeAltIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/templates" className="hover:text-emerald-400 transition-colors">Templates</Link></li>
                <li><Link to="/features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/help" className="hover:text-emerald-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Resume Builder. Built with ❤️ by Mohd Faizan.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;