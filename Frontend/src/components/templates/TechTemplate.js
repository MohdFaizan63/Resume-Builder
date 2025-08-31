import React from 'react';

const TechTemplate = ({ data }) => {
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
    <div className="font-mono text-gray bg-gray-900 text-green-400 p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-green-400 pb-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {data.personalInfo.firstName}_{data.personalInfo.lastName}
        </h1>
        <p className="text-green-300 text-lg mb-4">// Software Engineer</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            {data.personalInfo.email && <div>📧 {data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div>📱 {data.personalInfo.phone}</div>}
          </div>
          <div>
            {data.personalInfo.location.city && (
              <div>📍 {data.personalInfo.location.city}, {data.personalInfo.location.state}</div>
            )}
            {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
          </div>
        </div>
        <div className="flex space-x-4 mt-4 text-sm">
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} className="text-green-300 hover:text-green-200">
              🔗 LinkedIn
            </a>
          )}
          {data.personalInfo.github && (
            <a href={data.personalInfo.github} className="text-green-300 hover:text-green-200">
              💻 GitHub
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-3">// About</h2>
          <p className="text-green-300 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">// Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-green-300">{exp.position}</h3>
                  <span className="text-green-500 text-sm">
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </span>
                </div>
                <div className="text-green-400 mb-2">🏢 {exp.company}</div>
                {exp.location && <div className="text-green-500 text-sm mb-2">📍 {exp.location}</div>}
                {exp.description && (
                  <p className="text-green-300 mb-2">{exp.description}</p>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-green-300 space-y-1">
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
          <h2 className="text-xl font-bold text-green-400 mb-4">// Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-green-300">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="text-green-500 text-sm">
                    {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </span>
                </div>
                <div className="text-green-400 mb-1">🎓 {edu.institution}</div>
                {edu.location && <div className="text-green-500 text-sm mb-1">📍 {edu.location}</div>}
                {edu.gpa && <div className="text-green-500 text-sm mb-1">📊 GPA: {edu.gpa}</div>}
                {edu.description && (
                  <p className="text-green-300 text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">// Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-800 rounded">
                <span className="font-medium text-green-300">{skill.name}</span>
                <span className="text-sm text-green-500 bg-gray-700 px-2 py-1 rounded capitalize">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">// Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded border border-green-400">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-green-300">{project.name}</h3>
                  <span className="text-green-500 text-sm">
                    {formatDateRange(project.startDate, project.endDate, project.current)}
                  </span>
                </div>
                {project.description && (
                  <p className="text-green-300 mb-3">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-3">
                    <div className="text-sm text-green-500 mb-1">🔧 Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded border border-green-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex space-x-4 text-sm">
                  {project.link && (
                    <a href={project.link} className="text-green-400 hover:text-green-300">
                      🌐 Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-green-400 hover:text-green-300">
                      💻 GitHub
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
          <h2 className="text-xl font-bold text-green-400 mb-4">// Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded border border-green-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-green-300">{cert.name}</h3>
                    <div className="text-green-400">🏆 {cert.issuer}</div>
                    {cert.credentialId && (
                      <div className="text-sm text-green-500">🆔 ID: {cert.credentialId}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">
                      {cert.date && formatDate(cert.date)}
                    </div>
                    {cert.expiryDate && (
                      <div className="text-sm text-green-500">
                        ⏰ Expires: {formatDate(cert.expiryDate)}
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">// Languages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-800 rounded">
                <span className="font-medium text-green-300">🌍 {lang.name}</span>
                <span className="text-sm text-green-500 bg-gray-700 px-2 py-1 rounded capitalize">
                  {lang.proficiency}
                </span>
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
              <h2 className="text-xl font-bold text-green-400 mb-3">// {section.title}</h2>
              <div className="text-green-300">{section.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechTemplate;