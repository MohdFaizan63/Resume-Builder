//PricingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        "3 Professional Templates",
        "Basic Customization",
        "PDF Download",
        "Email Support",
        "Basic Analytics"
      ],
      limitations: [
        "Limited to 3 templates",
        "No advanced features",
        "Basic support only"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600",
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: { monthly: 9.99, annual: 99.99 },
      features: [
        "All Templates (10+)",
        "Advanced Customization",
        "Unlimited Downloads",
        "Priority Support",
        "Resume Analytics",
        "Custom Branding",
        "Multiple Formats",
        "Cloud Storage"
      ],
      limitations: [],
      popular: true,
      color: "from-emerald-500 to-teal-500",
      icon: <BoltIcon className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      price: { monthly: 29.99, annual: 299.99 },
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "API Access",
        "Custom Templates",
        "Dedicated Support",
        "White-label Options",
        "Advanced Analytics",
        "SSO Integration"
      ],
      limitations: [],
      popular: false,
      color: "from-purple-500 to-indigo-500",
      icon: <UserGroupIcon className="w-6 h-6" />
    }
  ];

  const faqItems = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for your convenience."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Absolutely! You can cancel your subscription at any time from your account settings."
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
                <ShieldCheckIcon className="w-5 h-5" />
                <span>Simple Pricing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-4">
                Choose Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Plan</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
                Start free and upgrade when you need more features. All plans include a 14-day free trial.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-12 md:mb-16 px-4">
                <span className={`text-base sm:text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-10 sm:h-12 w-20 sm:w-24 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 sm:h-8 sm:w-8 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-10 sm:translate-x-12' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-base sm:text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    Save 17%
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 bg-white rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl ${
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

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {plan.price.monthly === 0 && (
                    <span className="text-emerald-600 font-semibold">Forever Free</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0">×</div>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transform hover:scale-105 shadow-lg'
                    : plan.price.monthly === 0
                    ? 'bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 border-2 border-transparent hover:border-emerald-300'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 border-2 border-emerald-200 hover:border-emerald-300'
                }`}>
                  {plan.price.monthly === 0 ? 'Get Started Free' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CogIcon className="w-4 h-4" />
                <span>Feature Comparison</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What's <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Included</span>
              </h2>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Feature</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-gray-900">Free</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-emerald-600">Pro</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-purple-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Templates", free: "3", pro: "10+", enterprise: "Unlimited" },
                    { feature: "Downloads", free: "Limited", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Customization", free: "Basic", pro: "Advanced", enterprise: "Full" },
                    { feature: "Support", free: "Email", pro: "Priority", enterprise: "Dedicated" },
                    { feature: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Enterprise" },
                    { feature: "Team Features", free: "×", pro: "×", enterprise: "✓" },
                    { feature: "API Access", free: "×", pro: "×", enterprise: "✓" },
                    { feature: "White-label", free: "×", pro: "×", enterprise: "✓" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">{row.feature}</td>
                      <td className="px-8 py-6 text-center text-gray-600">{row.free}</td>
                      <td className="px-8 py-6 text-center text-emerald-600 font-medium">{row.pro}</td>
                      <td className="px-8 py-6 text-center text-purple-600 font-medium">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <StarIcon className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Got <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>?
              </h2>
            </motion.div>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
              Ready to Get Started?
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

export default PricingPage;