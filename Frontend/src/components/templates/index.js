// Template Components
export { default as ClassicTemplate } from './ClassicTemplate';
export { default as ModernTemplate } from './ModernTemplate';
export { default as TechTemplate } from './TechTemplate';

// Template Configuration
export const templateConfig = {
  classic: {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional professional layout with clean typography',
    category: 'Professional',
    difficulty: 'Easy',
    rating: 4.8,
    features: ['Clean Layout', 'Professional', 'ATS Friendly'],
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600',
    component: 'ClassicTemplate'
  },
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with bold colors and modern typography',
    category: 'Creative',
    difficulty: 'Medium',
    rating: 4.9,
    features: ['Bold Colors', 'Modern Typography', 'Creative'],
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    component: 'ModernTemplate'
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    description: 'Artistic and unique styling for creative professionals',
    category: 'Creative',
    difficulty: 'Hard',
    rating: 4.7,
    features: ['Unique Design', 'Creative', 'Stand Out'],
    color: 'bg-green-500',
    gradient: 'from-green-500 to-teal-500',
    component: 'CreativeTemplate'
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant design focusing on content',
    category: 'Professional',
    difficulty: 'Easy',
    rating: 4.6,
    features: ['Simple', 'Elegant', 'Content Focused'],
    color: 'bg-gray-500',
    gradient: 'from-gray-500 to-gray-600',
    component: 'MinimalTemplate'
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    description: 'Corporate and formal design for business professionals',
    category: 'Professional',
    difficulty: 'Medium',
    rating: 4.8,
    features: ['Corporate', 'Formal', 'Business Ready'],
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-purple-500',
    component: 'ProfessionalTemplate'
  },
  tech: {
    id: 'tech',
    name: 'Tech',
    description: 'Perfect for developers and engineers with code-like styling',
    category: 'Technical',
    difficulty: 'Medium',
    rating: 4.9,
    features: ['Developer Friendly', 'Code Styling', 'Technical'],
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-red-500',
    component: 'TechTemplate'
  },
  design: {
    id: 'design',
    name: 'Design',
    description: 'Creative design template for designers and artists',
    category: 'Creative',
    difficulty: 'Hard',
    rating: 4.7,
    features: ['Design Focused', 'Creative', 'Portfolio Ready'],
    color: 'bg-pink-500',
    gradient: 'from-pink-500 to-rose-500',
    component: 'DesignTemplate'
  },
  executive: {
    id: 'executive',
    name: 'Executive',
    description: 'Senior-level template with executive styling',
    category: 'Professional',
    difficulty: 'Medium',
    rating: 4.8,
    features: ['Executive', 'Senior Level', 'Leadership'],
    color: 'bg-slate-500',
    gradient: 'from-slate-500 to-slate-600',
    component: 'ExecutiveTemplate'
  }
};

// Get all templates as array
export const getAllTemplates = () => Object.values(templateConfig);

// Get template by ID
export const getTemplateById = (id) => templateConfig[id];

// Get templates by category
export const getTemplatesByCategory = (category) => 
  Object.values(templateConfig).filter(template => template.category === category);

// Get templates by difficulty
export const getTemplatesByDifficulty = (difficulty) => 
  Object.values(templateConfig).filter(template => template.difficulty === difficulty);