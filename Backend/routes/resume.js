const express = require('express');
const { body, validationResult } = require('express-validator');
const Resume = require('../models/resume');
const User = require('../models/user');
const { protect, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @desc    Create a new resume
// @route   POST /api/resumes
// @access  Private
router.post('/', protect, [
  body('title')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title is required and must be less than 100 characters'),
  body('template')
    .isIn(['classic', 'modern', 'creative', 'minimal', 'professional', 'tech', 'design', 'executive'])
    .withMessage('Please select a valid template'),
  body('personalInfo.firstName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name is required'),
  body('personalInfo.lastName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Last name is required'),
  body('personalInfo.email')
    .isEmail()
    .withMessage('Please provide a valid email')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: errors.array()
      });
    }

    // Add user to resume data
    const resumeData = {
      ...req.body,
      user: req.user.id
    };

    const resume = await Resume.create(resumeData);

    // Update user's resume count
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { resumeCount: 1 }
    });

    res.status(201).json({
      success: true,
      message: 'Resume created successfully',
      data: {
        resume: {
          id: resume._id,
          title: resume.title,
          template: resume.template,
          shareLink: resume.shareLink,
          createdAt: resume.createdAt
        }
      }
    });
  } catch (error) {
    console.error('Create resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during resume creation'
    });
  }
});

// @desc    Get all resumes for a user
// @route   GET /api/resumes
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = '-createdAt', search = '' } = req.query;

    const query = { user: req.user.id, isActive: true };
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { 'personalInfo.firstName': { $regex: search, $options: 'i' } },
        { 'personalInfo.lastName': { $regex: search, $options: 'i' } }
      ];
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort,
      select: 'title template personalInfo analytics shareLink settings createdAt updatedAt'
    };

    const resumes = await Resume.paginate(query, options);

    res.json({
      success: true,
      data: {
        resumes: resumes.docs,
        pagination: {
          currentPage: resumes.page,
          totalPages: resumes.totalPages,
          totalDocs: resumes.totalDocs,
          hasNextPage: resumes.hasNextPage,
          hasPrevPage: resumes.hasPrevPage
        }
      }
    });
  } catch (error) {
    console.error('Get resumes error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get a single resume
// @route   GET /api/resumes/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    res.json({
      success: true,
      data: {
        resume
      }
    });
  } catch (error) {
    console.error('Get resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update a resume
// @route   PUT /api/resumes/:id
// @access  Private
router.put('/:id', protect, [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title must be less than 100 characters'),
  body('template')
    .optional()
    .isIn(['classic', 'modern', 'creative', 'minimal', 'professional', 'tech', 'design', 'executive'])
    .withMessage('Please select a valid template')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: errors.array()
      });
    }

    let resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    resume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Resume updated successfully',
      data: {
        resume
      }
    });
  } catch (error) {
    console.error('Update resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during resume update'
    });
  }
});

// @desc    Delete a resume
// @route   DELETE /api/resumes/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Soft delete
    resume.isActive = false;
    await resume.save();

    // Update user's resume count
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { resumeCount: -1 }
    });

    res.json({
      success: true,
      message: 'Resume deleted successfully'
    });
  } catch (error) {
    console.error('Delete resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during resume deletion'
    });
  }
});

// @desc    Get public resume by share link
// @route   GET /api/resumes/share/:shareLink
// @access  Public
router.get('/share/:shareLink', optionalAuth, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      shareLink: req.params.shareLink,
      'settings.isPublic': true,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found or not public'
      });
    }

    // Check if resume has expired
    if (resume.settings.expiresAt && new Date() > resume.settings.expiresAt) {
      return res.status(410).json({
        success: false,
        message: 'This resume link has expired'
      });
    }

    // Increment view count
    await resume.incrementView(req.ip, req.get('User-Agent'));

    res.json({
      success: true,
      data: {
        resume: {
          id: resume._id,
          title: resume.title,
          template: resume.template,
          personalInfo: resume.personalInfo,
          experience: resume.experience,
          education: resume.education,
          skills: resume.skills,
          projects: resume.projects,
          certifications: resume.certifications,
          languages: resume.languages,
          customSections: resume.customSections,
          styling: resume.styling,
          settings: {
            allowDownload: resume.settings.allowDownload,
            allowPrint: resume.settings.allowPrint
          },
          analytics: {
            views: resume.analytics.views
          }
        }
      }
    });
  } catch (error) {
    console.error('Get shared resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update resume settings
// @route   PUT /api/resumes/:id/settings
// @access  Private
router.put('/:id/settings', protect, async (req, res) => {
  try {
    const { isPublic, allowDownload, allowPrint, password, expiresAt } = req.body;

    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    resume.settings = {
      ...resume.settings,
      isPublic: isPublic !== undefined ? isPublic : resume.settings.isPublic,
      allowDownload: allowDownload !== undefined ? allowDownload : resume.settings.allowDownload,
      allowPrint: allowPrint !== undefined ? allowPrint : resume.settings.allowPrint,
      password: password || resume.settings.password,
      expiresAt: expiresAt ? new Date(expiresAt) : resume.settings.expiresAt
    };

    await resume.save();

    res.json({
      success: true,
      message: 'Resume settings updated successfully',
      data: {
        settings: resume.settings
      }
    });
  } catch (error) {
    console.error('Update settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during settings update'
    });
  }
});

// @desc    Generate new share link
// @route   POST /api/resumes/:id/share-link
// @access  Private
router.post('/:id/share-link', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    await resume.generateNewShareLink();

    res.json({
      success: true,
      message: 'New share link generated successfully',
      data: {
        shareLink: resume.shareLink
      }
    });
  } catch (error) {
    console.error('Generate share link error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during share link generation'
    });
  }
});

// @desc    Get resume analytics
// @route   GET /api/resumes/:id/analytics
// @access  Private
router.get('/:id/analytics', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    res.json({
      success: true,
      data: {
        analytics: resume.analytics
      }
    });
  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Duplicate a resume
// @route   POST /api/resumes/:id/duplicate
// @access  Private
router.post('/:id/duplicate', protect, async (req, res) => {
  try {
    const originalResume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
      isActive: true
    });

    if (!originalResume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Create a copy without analytics and with new share link
    const resumeData = originalResume.toObject();
    delete resumeData._id;
    delete resumeData.analytics;
    delete resumeData.shareLink;
    delete resumeData.createdAt;
    delete resumeData.updatedAt;
    delete resumeData.version;

    resumeData.title = `${originalResume.title} (Copy)`;
    resumeData.user = req.user.id;

    const newResume = await Resume.create(resumeData);

    // Update user's resume count
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { resumeCount: 1 }
    });

    res.status(201).json({
      success: true,
      message: 'Resume duplicated successfully',
      data: {
        resume: {
          id: newResume._id,
          title: newResume.title,
          template: newResume.template,
          shareLink: newResume.shareLink,
          createdAt: newResume.createdAt
        }
      }
    });
  } catch (error) {
    console.error('Duplicate resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during resume duplication'
    });
  }
});

module.exports = router;
