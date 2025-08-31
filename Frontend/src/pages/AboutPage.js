//AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  ArrowLeftIcon,
  HeartIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Mohd Faizan",
      role: "Founder & CEO",
      bio: "Passionate about helping people create professional resumes that get them noticed by top employers.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Creating beautiful, professional templates that help users stand out in their job applications.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Building robust, user-friendly technology that makes resume creation simple and effective.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "User-First",
      description: "Everything we do is centered around helping our users succeed in their careers."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Quality",
      description: "We maintain the highest standards in design, functionality, and user experience."
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly improving and adding new features to stay ahead of industry trends."
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive community of professionals helping each other succeed."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "50,000+ Resumes Created",
      description: "Reached a major milestone of helping over 50,000 professionals create their resumes."
    },
    {
      year: "2023",
      title: "Platform Launch",
      description: "Successfully launched Resume Builder with 10+ professional templates."
    },
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to make professional resume creation accessible to everyone."
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
                <HeartIcon className="w-5 h-5" />
                <span>Our Story</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-4">
                About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resume Builder</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                We're on a mission to help professionals create stunning resumes that get them noticed by top employers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Careers Through <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Professional Resumes</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe that everyone deserves the opportunity to present themselves professionally. Our platform makes it easy for job seekers to create resumes that stand out and get them noticed by top employers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 50,000 resumes created and a 98% success rate, we've helped professionals across all industries land their dream jobs. Our commitment to quality, innovation, and user experience drives everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
                    <div className="text-gray-600">Resumes Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">4.9★</div>
                    <div className="text-gray-600">User Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <StarIcon className="w-4 h-4" />
                <span>Our Values</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What Drives <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide everything we do and help us deliver the best possible experience for our users.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <UserGroupIcon className="w-4 h-4" />
                <span>Meet Our Team</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                The People Behind <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resume Builder</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our passionate team is dedicated to helping you create professional resumes that get you noticed.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <span>View LinkedIn</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
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
                <span>Our Journey</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Key <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Milestones</span>
              </h2>
            </motion.div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                    <div className="text-3xl font-bold text-emerald-600 mb-4">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
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
              Ready to Create Your Professional Resume?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Join thousands of professionals who trust Resume Builder to create their resumes
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

export default AboutPage;