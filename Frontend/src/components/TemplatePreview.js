import React from 'react';

const TemplatePreview = ({ template, isSelected, onClick }) => {
  // Sample data for preview
  const sampleData = {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      },
      website: 'johndoe.dev',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      summary: 'Experienced software engineer with 5+ years in full-stack development, specializing in React, Node.js, and cloud technologies.'
    },
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2022-01-01',
        endDate: null,
        current: true,
        description: 'Led development of scalable web applications using React and Node.js.',
        achievements: [
          'Improved application performance by 40%',
          'Mentored 3 junior developers',
          'Implemented CI/CD pipeline'
        ]
      },
      {
        company: 'Startup Inc',
        position: 'Full Stack Developer',
        location: 'New York, NY',
        startDate: '2020-03-01',
        endDate: '2021-12-31',
        current: false,
        description: 'Developed and maintained web applications using modern technologies.',
        achievements: [
          'Built 5+ client applications',
          'Reduced bug reports by 60%',
          'Optimized database queries'
        ]
      }
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Boston, MA',
        startDate: '2016-09-01',
        endDate: '2020-05-01',
        current: false,
        gpa: '3.8/4.0',
        description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development.'
      }
    ],
    skills: [
      { name: 'JavaScript', level: 'expert', category: 'technical' },
      { name: 'React', level: 'expert', category: 'technical' },
      { name: 'Node.js', level: 'advanced', category: 'technical' },
      { name: 'Python', level: 'intermediate', category: 'technical' },
      { name: 'Leadership', level: 'advanced', category: 'soft' },
      { name: 'Problem Solving', level: 'expert', category: 'soft' }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://github.com/johndoe/ecommerce',
        github: 'https://github.com/johndoe/ecommerce',
        startDate: '2023-01-01',
        endDate: '2023-06-01',
        current: false
      }
    ]
  };

  const renderTemplatePreview = () => {
    switch (template.id) {
      case 'classic':
        return <ClassicPreview data={sampleData} />;
      case 'modern':
        return <ModernPreview data={sampleData} />;
      case 'creative':
        return <CreativePreview data={sampleData} />;
      case 'minimal':
        return <MinimalPreview data={sampleData} />;
      case 'professional':
        return <ProfessionalPreview data={sampleData} />;
      case 'tech':
        return <TechPreview data={sampleData} />;
      case 'design':
        return <DesignPreview data={sampleData} />;
      case 'executive':
        return <ExecutivePreview data={sampleData} />;
      default:
        return <ClassicPreview data={sampleData} />;
    }
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary-500 ring-offset-2' : 'hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">{template.name}</h3>
          <p className="text-sm text-gray-600">{template.description}</p>
        </div>
        <div className="p-4 transform scale-75 origin-top-left" style={{ maxHeight: '400px', overflow: 'hidden' }}>
          {renderTemplatePreview()}
        </div>
      </div>
    </div>
  );
};

// Template Preview Components
const ClassicPreview = ({ data }) => (
  <div className="font-serif text-gray-900 max-w-sm">
    <div className="text-center border-b-2 border-gray-800 pb-4 mb-4">
      <h1 className="text-2xl font-bold uppercase tracking-wider">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-gray-600 mt-1">Software Engineer</p>
      <div className="text-sm text-gray-500 mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location.city}, {data.personalInfo.location.state}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-2">Experience</h2>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600">2022 - Present</span>
            </div>
            <div className="text-gray-600">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-2">Education</h2>
        <div>
          <div className="flex justify-between">
            <strong>{data.education[0].degree} in {data.education[0].field}</strong>
            <span className="text-gray-600">2020</span>
          </div>
          <div className="text-gray-600">{data.education[0].institution}</div>
        </div>
      </div>
    </div>
  </div>
);

const ModernPreview = ({ data }) => (
  <div className="font-sans text-gray-900 max-w-sm">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-4">
      <h1 className="text-2xl font-bold">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-blue-100 mt-1">Software Engineer</p>
      <div className="text-blue-200 text-sm mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-blue-600 mb-2">Experience</h2>
        <div className="space-y-2">
          <div className="border-l-4 border-blue-600 pl-3">
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CreativePreview = ({ data }) => (
  <div className="font-sans text-gray-900 max-w-sm">
    <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-4 rounded-full mb-4 text-center">
      <h1 className="text-xl font-bold">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-green-100 text-sm">Software Engineer</p>
    </div>
    
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-green-600 mb-2">Experience</h2>
        <div className="space-y-2">
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MinimalPreview = ({ data }) => (
  <div className="font-sans text-gray-900 max-w-sm">
    <div className="text-center mb-6">
      <h1 className="text-2xl font-light">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-gray-600 mt-1">Software Engineer</p>
      <div className="text-sm text-gray-500 mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-light border-b border-gray-200 pb-1 mb-2">Experience</h2>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between">
              <strong className="font-light">{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfessionalPreview = ({ data }) => (
  <div className="font-sans text-gray-900 max-w-sm">
    <div className="border-b-2 border-gray-800 pb-4 mb-4">
      <h1 className="text-2xl font-bold">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-gray-600 mt-1">Software Engineer</p>
      <div className="text-sm text-gray-500 mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location.city}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">Professional Experience</h2>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TechPreview = ({ data }) => (
  <div className="font-mono text-gray-900 max-w-sm">
    <div className="bg-gray-900 text-green-400 p-4 rounded mb-4">
      <h1 className="text-xl font-bold">{data.personalInfo.firstName}_{data.personalInfo.lastName}</h1>
      <p className="text-green-300 text-sm">// Software Engineer</p>
      <div className="text-green-400 text-sm mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">// Experience</h2>
        <div className="space-y-2">
          <div className="border-l-2 border-green-400 pl-3">
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DesignPreview = ({ data }) => (
  <div className="font-sans text-gray-900 max-w-sm">
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg mb-4">
      <h1 className="text-2xl font-bold">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-pink-100 mt-1">Software Engineer</p>
      <div className="text-pink-200 text-sm mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-pink-600 mb-2">Experience</h2>
        <div className="space-y-2">
          <div className="bg-pink-50 p-3 rounded-lg">
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExecutivePreview = ({ data }) => (
  <div className="font-serif text-gray-900 max-w-sm">
    <div className="text-center border-b-4 border-gray-800 pb-4 mb-4">
      <h1 className="text-2xl font-bold uppercase tracking-widest">{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p className="text-gray-600 mt-1 font-semibold">Senior Software Engineer</p>
      <div className="text-sm text-gray-500 mt-2">
        {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location.city}
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">Executive Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.personalInfo.summary}
        </p>
      </div>
      
      <div>
        <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">Professional Experience</h2>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between">
              <strong>{data.experience[0].position}</strong>
              <span className="text-gray-600 text-sm">2022 - Present</span>
            </div>
            <div className="text-gray-600 text-sm">{data.experience[0].company}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TemplatePreview;