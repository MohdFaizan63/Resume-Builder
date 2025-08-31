//TemplateSelectionPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon,
  EyeIcon,
  CheckIcon,
  StarIcon,
  XMarkIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import TemplatePreview from '../components/TemplatePreview';
import { getAllTemplates } from '../components/templates';

const TemplateSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const templates = getAllTemplates();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handlePreviewTemplate = (template) => {
    setPreviewTemplate(template);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewTemplate(null);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      navigate('/builder', { 
        state: { 
          selectedTemplate: selectedTemplate.id,
          templateData: selectedTemplate 
        } 
      });
    }
  };

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'Professional', name: 'Professional', count: templates.filter(t => t.category === 'Professional').length },
    { id: 'Creative', name: 'Creative', count: templates.filter(t => t.category === 'Creative').length },
    { id: 'Technical', name: 'Technical', count: templates.filter(t => t.category === 'Technical').length }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
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
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BoltIcon className="w-4 h-4" />
              <span>Choose Your Professional Template</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
              Create Your Perfect
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Select from our professionally designed templates, each crafted to help you stand out in your industry. 
              Every template is optimized for ATS systems and modern hiring practices.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                selectedTemplate?.id === template.id 
                  ? 'ring-2 ring-emerald-500 ring-offset-4' 
                  : ''
              }`}
              onClick={() => handleTemplateSelect(template)}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              {/* Template Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-emerald-200">
                {/* Template Preview */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${template.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {template.name.charAt(0)}
                  </div>
                  
                  {/* Hover Overlay */}
                  {hoveredTemplate === template.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 flex items-center justify-center"
                    >
                      <div className="flex space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePreviewTemplate(template);
                          }}
                          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors backdrop-blur-sm"
                        >
                          <EyeIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">Preview</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Selected Checkmark */}
                  {selectedTemplate?.id === template.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckIcon className="w-5 h-5 text-white" />
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      template.category === 'Professional' ? 'bg-blue-100 text-blue-700' :
                      template.category === 'Creative' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg">{template.name}</h3>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 font-medium">{template.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 font-medium">
                      Difficulty: {template.difficulty}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            template.difficulty === 'Easy' ? 'bg-green-400' :
                            template.difficulty === 'Medium' ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {template.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {template.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{template.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center mb-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={handleContinue}
            disabled={!selectedTemplate}
            className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              selectedTemplate
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedTemplate ? (
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-6 h-6" />
                <span>Continue with {selectedTemplate.name}</span>
              </div>
            ) : (
              'Select a Template'
            )}
          </motion.button>
        </div>

        {/* Professional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our Templates?</h3>
            <p className="text-gray-600">Professional designs that help you stand out</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ATS Optimized</h4>
              <p className="text-gray-600 text-sm">All templates are designed to pass Applicant Tracking Systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Industry Specific</h4>
              <p className="text-gray-600 text-sm">Templates tailored for different industries and career levels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Professional Design</h4>
              <p className="text-gray-600 text-sm">Modern, clean designs that make a lasting impression</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Template Preview Modal */}
      {showPreview && previewTemplate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closePreview}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{previewTemplate.name} Template</h2>
                <p className="text-emerald-600 mt-1 font-medium">{previewTemplate.description}</p>
              </div>
              <button
                onClick={closePreview}
                className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Template Preview */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Template Preview</h3>
                  <div className="border-2 border-emerald-200 rounded-xl p-6 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <TemplatePreview
                      template={previewTemplate}
                      isSelected={false}
                      onClick={() => {}}
                    />
                  </div>
                </div>

                {/* Template Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Template Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {previewTemplate.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm rounded-lg font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-1">Category</h4>
                        <p className="text-gray-600">{previewTemplate.category}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-1">Difficulty</h4>
                        <p className="text-gray-600">{previewTemplate.difficulty}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-1">Rating</h4>
                        <div className="flex items-center space-x-1">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-600 font-medium">{previewTemplate.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2">Perfect For</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {previewTemplate.category === 'Professional' && 'Traditional industries, corporate environments, and formal business settings. Ideal for finance, law, consulting, and executive roles.'}
                        {previewTemplate.category === 'Creative' && 'Design, marketing, creative agencies, and modern startups. Perfect for designers, marketers, and creative professionals.'}
                        {previewTemplate.category === 'Technical' && 'Software development, engineering, and technology companies. Great for developers, engineers, and technical roles.'}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-4">
                    <button
                      onClick={() => {
                        setSelectedTemplate(previewTemplate);
                        closePreview();
                      }}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Select This Template
                    </button>
                    <button
                      onClick={closePreview}
                      className="w-full border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Continue Browsing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TemplateSelectionPage; 