import React from 'react';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import TechTemplate from './templates/TechTemplate';

const ResumePreview = ({ resumeData, templateData }) => {
  const { personalInfo, experience, education, skills, projects } = resumeData;

  const renderClassicTemplate = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 mb-2">{personalInfo.email}</p>
        <p className="text-gray-600 mb-2">{personalInfo.phone}</p>
        <p className="text-gray-600">
          {personalInfo.location.city}, {personalInfo.location.state}, {personalInfo.location.country}
        </p>
        {personalInfo.website && (
          <p className="text-blue-600">{personalInfo.website}</p>
        )}
        {personalInfo.linkedin && (
          <p className="text-blue-600">{personalInfo.linkedin}</p>
        )}
        {personalInfo.github && (
          <p className="text-blue-600">{personalInfo.github}</p>
        )}
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-gray-600 text-sm">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-1">{exp.company}</p>
              {exp.location && <p className="text-gray-600 text-sm mb-2">{exp.location}</p>}
              {exp.description && (
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <span className="text-gray-600 text-sm">
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
              {edu.field && <p className="text-gray-600 text-sm mb-1">{edu.field}</p>}
              {edu.location && <p className="text-gray-600 text-sm mb-1">{edu.location}</p>}
              {edu.gpa && <p className="text-gray-600 text-sm mb-1">GPA: {edu.gpa}</p>}
              {edu.description && (
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <span className="text-gray-600 text-sm">
                  {project.startDate} - {project.current ? 'Present' : project.endDate}
                </span>
              </div>
              {project.description && (
                <p className="text-gray-700 leading-relaxed mb-2">{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <p className="text-gray-600 text-sm">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              )}
              {project.link && (
                <p className="text-blue-600 text-sm">{project.link}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderModernTemplate = () => (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h1 className="text-4xl font-bold text-gradient mb-3">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="grid md:grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="mb-1">{personalInfo.email}</p>
            <p className="mb-1">{personalInfo.phone}</p>
            <p>{personalInfo.location.city}, {personalInfo.location.state}</p>
          </div>
          <div className="text-right">
            {personalInfo.website && <p className="mb-1 text-blue-600">{personalInfo.website}</p>}
            {personalInfo.linkedin && <p className="mb-1 text-blue-600">{personalInfo.linkedin}</p>}
            {personalInfo.github && <p className="text-blue-600">{personalInfo.github}</p>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-primary-600 font-medium">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
              {exp.location && <p className="text-gray-600 mb-2">{exp.location}</p>}
              {exp.description && (
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-primary-600 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderMinimalTemplate = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-gray-600">{personalInfo.email} • {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location.city}, {personalInfo.location.state}</p>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-center">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-900 mb-4 text-center">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="text-center mb-2">
                <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              </div>
              {exp.description && (
                <p className="text-gray-700 text-center">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-light text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-700">{skills.map(skill => skill.name).join(' • ')}</p>
        </div>
      )}
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            {personalInfo.email}
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            {personalInfo.phone}
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            {personalInfo.location.city}, {personalInfo.location.state}
          </span>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 last:mb-0 border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
              <p className="text-lg text-purple-600 font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              {exp.description && (
                <p className="text-gray-700">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderProfessionalTemplate = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="grid md:grid-cols-3 gap-4 text-gray-600">
          <div>
            <p className="font-medium">Email</p>
            <p>{personalInfo.email}</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p>{personalInfo.phone}</p>
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p>{personalInfo.location.city}, {personalInfo.location.state}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-1">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                <span className="text-blue-600 font-medium">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p className="text-lg text-gray-700 font-medium mb-2">{exp.company}</p>
              {exp.location && <p className="text-gray-600 mb-2">{exp.location}</p>}
              {exp.description && (
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-1">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-blue-600 text-sm ml-2">({skill.level})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderElegantTemplate = () => (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-gray-600 space-y-1">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location.city}, {personalInfo.location.state}</p>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed italic">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center border-b border-gray-300 pb-2">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="text-xl font-serif text-gray-900 mb-1">{exp.position}</h3>
              <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              {exp.description && (
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-300 pb-2">Skills</h2>
          <p className="text-gray-700">{skills.map(skill => skill.name).join(' • ')}</p>
        </div>
      )}
    </div>
  );

  const renderBoldTemplate = () => (
    <div className="bg-black text-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-yellow-400 pb-6 mb-8">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <p className="text-yellow-400 font-bold">Email</p>
            <p>{personalInfo.email}</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold">Phone</p>
            <p>{personalInfo.phone}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">SUMMARY</h2>
          <p className="text-gray-300 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">EXPERIENCE</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
              <p className="text-lg text-yellow-400 font-bold mb-1">{exp.company}</p>
              <p className="text-gray-400 mb-2">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              {exp.description && (
                <p className="text-gray-300">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-400 text-black rounded font-bold text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderSimpleTemplate = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-gray-600">{personalInfo.email} | {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location.city}, {personalInfo.location.state}</p>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
              <p className="text-gray-700">{exp.company} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              {exp.description && (
                <p className="text-gray-600 mt-1">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Skills</h2>
          <p className="text-gray-700">{skills.map(skill => skill.name).join(', ')}</p>
        </div>
      )}
    </div>
  );

  // Choose template based on templateData
  const templateId = templateData?.id || 'classic';
  
  switch (templateId) {
    case 'classic':
      return <ClassicTemplate data={resumeData} />;
    case 'modern':
      return <ModernTemplate data={resumeData} />;
    case 'minimal':
      return renderMinimalTemplate();
    case 'creative':
      return renderCreativeTemplate();
    case 'professional':
      return renderProfessionalTemplate();
    case 'tech':
      return <TechTemplate data={resumeData} />;
    case 'design':
      return renderCreativeTemplate(); // Using creative template for design
    case 'executive':
      return renderProfessionalTemplate(); // Using professional template for executive
    default:
      return <ClassicTemplate data={resumeData} />;
  }
};

export default ResumePreview;