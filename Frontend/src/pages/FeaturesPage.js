//FeaturesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckIcon,
  BoltIcon,
  ShieldCheckIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  CogIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  RocketLaunchIcon,
  StarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const FeaturesPage = () => {
  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "AI-Powered Templates",
      description: "Choose from 10+ professionally designed templates crafted by industry experts",
      details: [
        "Multiple industry-specific designs",
        "ATS-optimized layouts",
        "Customizable color schemes",
        "Professional typography"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8" />,
      title: "Real-time Preview",
      description: "See your changes instantly as you type with our live preview feature",
      details: [
        "Instant visual feedback",
        "Mobile and desktop preview",
        "Print-ready formatting",
        "High-resolution output"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Share & Collaborate",
      description: "Share your resume with unique links and collaborate with others",
      details: [
        "Public and private sharing",
        "View tracking analytics",
        "Feedback collection",
        "Team collaboration tools"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track views, downloads, and engagement with detailed analytics",
      details: [
        "View count tracking",
        "Download statistics",
        "Geographic insights",
        "Performance metrics"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: "Live Preview",
      description: "See exactly how your resume will look before downloading",
      details: [
        "Real-time formatting",
        "Multiple format previews",
        "Print layout view",
        "Mobile optimization check"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <ArrowDownTrayIcon className="w-8 h-8" />,
      title: "Multiple Formats",
      description: "Download your resume in PDF, Word, or plain text formats",
      details: [
        "High-quality PDF export",
        "Editable Word documents",
        "Plain text versions",
        "Print-optimized layouts"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const advancedFeatures = [
    {
      icon: <CogIcon className="w-6 h-6" />,
      title: "Advanced Customization",
      description: "Fine-tune every aspect of your resume with our powerful editor"
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "ATS Optimization",
      description: "All templates are designed to pass Applicant Tracking Systems"
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6" />,
      title: "Industry Templates",
      description: "Specialized designs for different industries and career levels"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      title: "Mobile Responsive",
      description: "Create and edit your resume on any device, anywhere"
    },
    {
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Works seamlessly across Windows, Mac, and Linux"
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      title: "Cloud Sync",
      description: "Your resumes are automatically saved and synced across devices"
    }
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
                <BoltIcon className="w-5 h-5" />
                <span>Powerful Features</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-4">
                Everything You Need to
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Build Your Resume
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                Discover the powerful features that make Resume Builder the ultimate tool for creating professional resumes that get you noticed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative z-10 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>Advanced Features</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                Professional <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tools</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Take your resume to the next level with our advanced features designed for professionals
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-emerald-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Resumes Created", icon: <DocumentTextIcon className="w-8 h-8" /> },
              { number: "98%", label: "Success Rate", icon: <StarIcon className="w-8 h-8" /> },
              { number: "4.9★", label: "User Rating", icon: <HeartIcon className="w-8 h-8" /> },
              { number: "24/7", label: "Support", icon: <ShieldCheckIcon className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Start building your professional resume today with all these powerful features
            </p>
            <Link 
              to="/templates" 
              className="inline-flex items-center space-x-3 px-12 py-5 bg-white text-emerald-600 hover:text-emerald-700 font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SparklesIcon className="w-6 h-6" />
              <span>Start Building Now</span>
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

export default FeaturesPage;