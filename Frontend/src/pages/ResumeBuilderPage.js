//ResumeBuilderPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  Cog6ToothIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import ResumePreview from '../components/ResumePreview';

const ResumeBuilderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);

  // Get selected template from navigation state
  const selectedTemplate = location.state?.selectedTemplate || 'classic';
  const templateData = location.state?.templateData || {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional professional layout'
  };

  const [resumeData, setResumeData] = useState({
    title: 'My Professional Resume',
    template: selectedTemplate,
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: {
        city: '',
        state: '',
        country: ''
      },
      website: '',
      linkedin: '',
      github: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    customSections: []
  });

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'certifications', name: 'Certifications', icon: '🏆' },
    { id: 'languages', name: 'Languages', icon: '🌍' }
  ];

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handlePersonalInfoChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addItem = (section) => {
    const newItem = getDefaultItem(section);
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const getDefaultItem = (section) => {
    switch (section) {
      case 'experience':
        return {
          company: '',
          position: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
          achievements: []
        };
      case 'education':
        return {
          institution: '',
          degree: '',
          field: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          gpa: '',
          description: ''
        };
      case 'skills':
        return {
          name: '',
          level: 'intermediate',
          category: 'technical'
        };
      case 'projects':
        return {
          name: '',
          description: '',
          technologies: [],
          link: '',
          github: '',
          startDate: '',
          endDate: '',
          current: false
        };
      case 'certifications':
        return {
          name: '',
          issuer: '',
          date: '',
          expiryDate: '',
          credentialId: '',
          link: ''
        };
      case 'languages':
        return {
          name: '',
          proficiency: 'conversational'
        };
      default:
        return {};
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Resume saved successfully!');
    } catch (error) {
      toast.error('Failed to save resume');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = () => {
    toast.success('Generating PDF...');
    
    // Create a temporary div to render the resume content
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = '210mm'; // A4 width
    tempDiv.style.height = '297mm'; // A4 height
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.padding = '20mm';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '12pt';
    tempDiv.style.lineHeight = '1.4';
    
    // Get the resume preview content
    const previewElement = document.querySelector('.resume-preview-content');
    if (previewElement) {
      tempDiv.innerHTML = previewElement.innerHTML;
    } else {
      // Fallback: create basic resume content
      const { personalInfo, experience, education, skills } = resumeData;
      tempDiv.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h1 style="font-size: 24pt; margin: 0; color: #333;">${personalInfo.firstName} ${personalInfo.lastName}</h1>
          <p style="margin: 5px 0; color: #666;">${personalInfo.email} | ${personalInfo.phone}</p>
          <p style="margin: 5px 0; color: #666;">${personalInfo.location.city}, ${personalInfo.location.state}, ${personalInfo.location.country}</p>
        </div>
        
        ${personalInfo.summary ? `
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 16pt; margin: 0 0 10px 0; color: #333; border-bottom: 2px solid #333;">Professional Summary</h2>
          <p style="margin: 0;">${personalInfo.summary}</p>
        </div>
        ` : ''}
        
        ${experience.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 16pt; margin: 0 0 10px 0; color: #333; border-bottom: 2px solid #333;">Professional Experience</h2>
          ${experience.map(exp => `
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 14pt; margin: 0; color: #333;">${exp.position}</h3>
              <p style="margin: 5px 0; color: #666; font-weight: bold;">${exp.company}</p>
              <p style="margin: 5px 0; color: #666;">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</p>
              ${exp.description ? `<p style="margin: 5px 0;">${exp.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}
        
        ${education.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 16pt; margin: 0 0 10px 0; color: #333; border-bottom: 2px solid #333;">Education</h2>
          ${education.map(edu => `
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 14pt; margin: 0; color: #333;">${edu.degree}</h3>
              <p style="margin: 5px 0; color: #666; font-weight: bold;">${edu.institution}</p>
              <p style="margin: 5px 0; color: #666;">${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}
        
        ${skills.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 16pt; margin: 0 0 10px 0; color: #333; border-bottom: 2px solid #333;">Skills</h2>
          <p style="margin: 0;">${skills.map(skill => `${skill.name} (${skill.level})`).join(', ')}</p>
        </div>
        ` : ''}
      `;
    }
    
    document.body.appendChild(tempDiv);
    
    // Use html2canvas to capture the content
    import('html2canvas').then(html2canvas => {
      html2canvas.default(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      }).then(canvas => {
        // Convert canvas to PDF using jsPDF
        import('jspdf').then(jsPDF => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF.default('p', 'mm', 'a4');
          const imgWidth = 210;
          const pageHeight = 295;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;
          
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          
          // Download the PDF
          
          
          // Clean up
          document.body.removeChild(tempDiv);
          toast.success('PDF downloaded successfully!');
        }).catch(error => {
          console.error('PDF generation error:', error);
          document.body.removeChild(tempDiv);
          toast.error('Failed to generate PDF');
        });
      }).catch(error => {
        console.error('Canvas generation error:', error);
        document.body.removeChild(tempDiv);
        toast.error('Failed to generate PDF');
      });
    }).catch(error => {
      console.error('Library import error:', error);
      document.body.removeChild(tempDiv);
      toast.error('Failed to generate PDF - libraries not available');
    });
  };

  const handleShare = () => {
    try {
      const shareData = {
        title: 'My Resume',
        text: 'Check out my professional resume!',
        url: window.location.href
      };
      
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).then(() => {
          toast.success('Resume shared successfully!');
        }).catch((error) => {
          console.log('Share cancelled or failed:', error);
          // Fallback to clipboard
          navigator.clipboard.writeText(window.location.href).then(() => {
            toast.success('Share link copied to clipboard!');
          }).catch(() => {
            toast.error('Failed to share resume');
          });
        });
      } else {
        // Fallback for browsers that don't support native sharing
        navigator.clipboard.writeText(window.location.href).then(() => {
          toast.success('Share link copied to clipboard!');
        }).catch(() => {
          toast.error('Failed to copy share link');
        });
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error('Failed to share resume');
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
                            <input
                    type="text"
                    value={resumeData.personalInfo.firstName}
                    onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                    className="input-field"
                    placeholder="John"
                  />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
                          <input
                  type="text"
                  value={resumeData.personalInfo.lastName}
                  onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                  className="input-field"
                  placeholder="Doe"
                />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
                          <input
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  className="input-field"
                  placeholder="john.doe@email.com"
                />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
                          <input
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  className="input-field"
                  placeholder="+1 (555) 123-4567"
                />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
                          <input
                  type="text"
                  value={resumeData.personalInfo.location.city}
                  onChange={(e) => handlePersonalInfoChange('location', {
                    ...resumeData.personalInfo.location,
                    city: e.target.value
                  })}
                  className="input-field"
                  placeholder="New York"
                />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
                          <input
                  type="text"
                  value={resumeData.personalInfo.location.state}
                  onChange={(e) => handlePersonalInfoChange('location', {
                    ...resumeData.personalInfo.location,
                    state: e.target.value
                  })}
                  className="input-field"
                  placeholder="NY"
                />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
                          <input
                  type="text"
                  value={resumeData.personalInfo.location.country}
                  onChange={(e) => handlePersonalInfoChange('location', {
                    ...resumeData.personalInfo.location,
                    country: e.target.value
                  })}
                  className="input-field"
                  placeholder="United States"
                />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website
          </label>
                          <input
                  type="url"
                  value={resumeData.personalInfo.website}
                  onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                  className="input-field"
                  placeholder="https://johndoe.com"
                />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn
          </label>
                          <input
                  type="url"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                  className="input-field"
                  placeholder="https://linkedin.com/in/johndoe"
                />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GitHub
          </label>
                          <input
                  type="url"
                  value={resumeData.personalInfo.github}
                  onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                  className="input-field"
                  placeholder="https://github.com/johndoe"
                />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Professional Summary
        </label>
                    <textarea
              value={resumeData.personalInfo.summary}
              onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
              className="input-field"
              rows={4}
              placeholder="A brief summary of your professional background, key skills, and career objectives..."
            />
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Experience #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('experience', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company *
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                className="input-field"
                placeholder="Google"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position *
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)}
                className="input-field"
                placeholder="Software Engineer"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleArrayChange('experience', index, 'location', e.target.value)}
                className="input-field"
                placeholder="San Francisco, CA"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                  className="input-field"
                  disabled={exp.current}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => handleArrayChange('experience', index, 'current', e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">I currently work here</span>
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
              className="input-field"
              rows={3}
              placeholder="Describe your role, responsibilities, and achievements..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('experience')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Experience</span>
      </button>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Skill #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('skills', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skill Name *
              </label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleArrayChange('skills', index, 'name', e.target.value)}
                className="input-field"
                placeholder="JavaScript"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select
                value={skill.level}
                onChange={(e) => handleArrayChange('skills', index, 'level', e.target.value)}
                className="input-field"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={skill.category}
                onChange={(e) => handleArrayChange('skills', index, 'category', e.target.value)}
                className="input-field"
              >
                <option value="technical">Technical</option>
                <option value="soft">Soft Skills</option>
                <option value="language">Language</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('skills')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Skill</span>
      </button>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      {resumeData.education.map((edu, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Education #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('education', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                className="input-field"
                placeholder="University of Technology"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree *
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                className="input-field"
                placeholder="Bachelor of Science"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleArrayChange('education', index, 'field', e.target.value)}
                className="input-field"
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) => handleArrayChange('education', index, 'location', e.target.value)}
                className="input-field"
                placeholder="New York, NY"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => handleArrayChange('education', index, 'startDate', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => handleArrayChange('education', index, 'endDate', e.target.value)}
                className="input-field"
                disabled={edu.current}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPA
              </label>
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => handleArrayChange('education', index, 'gpa', e.target.value)}
                className="input-field"
                placeholder="3.8"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={edu.current}
                onChange={(e) => handleArrayChange('education', index, 'current', e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">I am currently studying here</span>
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={edu.description}
              onChange={(e) => handleArrayChange('education', index, 'description', e.target.value)}
              className="input-field"
              rows={3}
              placeholder="Relevant coursework, achievements, or activities..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('education')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Education</span>
      </button>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {resumeData.projects.map((project, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Project #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('projects', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)}
                className="input-field"
                placeholder="E-commerce Platform"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies
              </label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value.split(', ').filter(t => t))}
                className="input-field"
                placeholder="React, Node.js, MongoDB"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Link
              </label>
              <input
                type="url"
                value={project.link}
                onChange={(e) => handleArrayChange('projects', index, 'link', e.target.value)}
                className="input-field"
                placeholder="https://project-demo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GitHub Repository
              </label>
              <input
                type="url"
                value={project.github}
                onChange={(e) => handleArrayChange('projects', index, 'github', e.target.value)}
                className="input-field"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="month"
                value={project.startDate}
                onChange={(e) => handleArrayChange('projects', index, 'startDate', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="month"
                value={project.endDate}
                onChange={(e) => handleArrayChange('projects', index, 'endDate', e.target.value)}
                className="input-field"
                disabled={project.current}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={project.current}
                onChange={(e) => handleArrayChange('projects', index, 'current', e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">This is an ongoing project</span>
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
              className="input-field"
              rows={3}
              placeholder="Describe the project, your role, technologies used, and outcomes..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('projects')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Project</span>
      </button>
    </div>
  );

  const renderCertifications = () => (
    <div className="space-y-6">
      {resumeData.certifications.map((cert, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Certification #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('certifications', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certification Name *
              </label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) => handleArrayChange('certifications', index, 'name', e.target.value)}
                className="input-field"
                placeholder="AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issuing Organization *
              </label>
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => handleArrayChange('certifications', index, 'issuer', e.target.value)}
                className="input-field"
                placeholder="Amazon Web Services"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue Date
              </label>
              <input
                type="month"
                value={cert.date}
                onChange={(e) => handleArrayChange('certifications', index, 'date', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="month"
                value={cert.expiryDate}
                onChange={(e) => handleArrayChange('certifications', index, 'expiryDate', e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credential ID
              </label>
              <input
                type="text"
                value={cert.credentialId}
                onChange={(e) => handleArrayChange('certifications', index, 'credentialId', e.target.value)}
                className="input-field"
                placeholder="AWS-123456789"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Link
              </label>
              <input
                type="url"
                value={cert.link}
                onChange={(e) => handleArrayChange('certifications', index, 'link', e.target.value)}
                className="input-field"
                placeholder="https://verify.certification.com"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('certifications')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Certification</span>
      </button>
    </div>
  );

  const renderLanguages = () => (
    <div className="space-y-6">
      {resumeData.languages.map((language, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Language #{index + 1}
            </h3>
            <button
              onClick={() => removeItem('languages', index)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language *
              </label>
              <input
                type="text"
                value={language.name}
                onChange={(e) => handleArrayChange('languages', index, 'name', e.target.value)}
                className="input-field"
                placeholder="Spanish"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proficiency Level
              </label>
              <select
                value={language.proficiency}
                onChange={(e) => handleArrayChange('languages', index, 'proficiency', e.target.value)}
                className="input-field"
              >
                <option value="basic">Basic</option>
                <option value="conversational">Conversational</option>
                <option value="fluent">Fluent</option>
                <option value="native">Native</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => addItem('languages')}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Language</span>
      </button>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalInfo();
      case 'experience':
        return renderExperience();
      case 'education':
        return renderEducation();
      case 'skills':
        return renderSkills();
      case 'projects':
        return renderProjects();
      case 'certifications':
        return renderCertifications();
      case 'languages':
        return renderLanguages();
      default:
        return <div>Section content coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/templates')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Templates</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Template:</span>
              <span className="font-medium text-gray-900">{templateData?.name || 'Classic'}</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="btn-outline"
              >
                {showPreview ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                {showPreview ? 'Hide Preview' : 'Preview'}
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="btn-primary"
              >
                {isSaving ? 'Saving...' : 'Save Resume'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume Sections</h2>
              
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{section.icon}</span>
                      <span className="font-medium">{section.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleDownload}
                    className="w-full btn-outline flex items-center justify-center space-x-2"
                  >
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-full btn-outline flex items-center justify-center space-x-2"
                  >
                    <ShareIcon className="w-5 h-5" />
                    <span>Share Resume</span>
                  </button>
                  <button className="w-full btn-outline flex items-center justify-center space-x-2">
                    <Cog6ToothIcon className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {showPreview ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume Preview</h2>
                <div className="border border-gray-200 rounded-lg p-6 min-h-[800px] overflow-auto">
                  <div className="resume-preview-content">
                    <ResumePreview resumeData={resumeData} templateData={templateData} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {sections.find(s => s.id === activeSection)?.name}
                </h2>
                {renderSection()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;