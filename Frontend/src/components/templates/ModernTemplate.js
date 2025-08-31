import React from 'react';

const ModernTemplate = ({ data }) => {
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
    <div className="font-sans text-gray-900 bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-xl text-blue-100 mb-4">Software Engineer</p>
        <div className="grid md:grid-cols-2 gap-4 text-blue-200">
          <div>
            {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          </div>
          <div>
            {data.personalInfo.location.city && (
              <div>{data.personalInfo.location.city}, {data.personalInfo.location.state}</div>
            )}
            {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} className="text-blue-200 hover:text-white">
              LinkedIn
            </a>
          )}
          {data.personalInfo.github && (
            <a href={data.personalInfo.github} className="text-blue-200 hover:text-white">
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </span>
                </div>
                <div className="text-lg text-gray-700 mb-2">{exp.company}</div>
                {exp.location && <div className="text-gray-500 mb-3">{exp.location}</div>}
                {exp.description && (
                  <p className="text-gray-700 mb-3">{exp.description}</p>
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
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-purple-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </span>
                </div>
                <div className="text-lg text-gray-700 mb-1">{edu.institution}</div>
                {edu.location && <div className="text-gray-500 mb-1">{edu.location}</div>}
                {edu.gpa && <div className="text-gray-500 mb-2">GPA: {edu.gpa}</div>}
                {edu.description && (
                  <p className="text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full capitalize">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                  <span className="text-gray-600 text-sm">
                    {formatDateRange(project.startDate, project.endDate, project.current)}
                  </span>
                </div>
                {project.description && (
                  <p className="text-gray-700 mb-3">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Languages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{lang.name}</span>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full capitalize">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {data.customSections && data.customSections.length > 0 && (
        <div className="space-y-8">
          {data.customSections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{section.title}</h2>
              <div className="text-gray-700">{section.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;