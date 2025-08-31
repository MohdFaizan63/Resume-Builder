import React from 'react';

const ClassicTemplate = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const formatDateRange = (startDate, endDate, current) => {
    const start = formatDate(startDate);
    const end = current ? 'Present' : formatDate(endDate);
    return `${start} - ${end}`;
  };

  return (
    <div className="font-serif text-gray-900 bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600 mb-3">Software Engineer</p>
        <div className="text-sm text-gray-500 space-x-4">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
          {data.personalInfo.location.city && (
            <span>• {data.personalInfo.location.city}, {data.personalInfo.location.state}</span>
          )}
        </div>
        <div className="text-sm text-gray-500 mt-2 space-x-4">
          {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          {data.personalInfo.linkedin && <span>• {data.personalInfo.linkedin}</span>}
          {data.personalInfo.github && <span>• {data.personalInfo.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <span className="text-gray-600 text-sm">
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </span>
                </div>
                <div className="text-gray-600 mb-2">{exp.company}</div>
                {exp.location && <div className="text-gray-500 text-sm mb-2">{exp.location}</div>}
                {exp.description && (
                  <p className="text-gray-700 mb-2">{exp.description}</p>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </span>
                </div>
                <div className="text-gray-600 mb-1">{edu.institution}</div>
                {edu.location && <div className="text-gray-500 text-sm mb-1">{edu.location}</div>}
                {edu.gpa && <div className="text-gray-500 text-sm mb-1">GPA: {edu.gpa}</div>}
                {edu.description && (
                  <p className="text-gray-700 text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600 capitalize">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <span className="text-gray-600 text-sm">
                    {formatDateRange(project.startDate, project.endDate, project.current)}
                  </span>
                </div>
                {project.description && (
                  <p className="text-gray-700 mb-2">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </div>
                )}
                <div className="flex space-x-4 text-sm">
                  {project.link && (
                    <a href={project.link} className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-blue-600 hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Certifications
          </h2>
          <div className="space-y-3">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <div className="text-gray-600">{cert.issuer}</div>
                  {cert.credentialId && (
                    <div className="text-sm text-gray-500">ID: {cert.credentialId}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-gray-600 text-sm">
                    {cert.date && formatDate(cert.date)}
                  </div>
                  {cert.expiryDate && (
                    <div className="text-sm text-gray-500">
                      Expires: {formatDate(cert.expiryDate)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{lang.name}</span>
                <span className="text-gray-600 capitalize">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {data.customSections && data.customSections.length > 0 && (
        <div className="space-y-6">
          {data.customSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                {section.title}
              </h2>
              <div className="text-gray-700">{section.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;