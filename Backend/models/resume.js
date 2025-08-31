const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a resume title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  template: {
    type: String,
    required: [true, 'Please select a template'],
    enum: ['classic', 'modern', 'creative', 'minimal', 'professional', 'tech', 'design', 'executive']
  },
  personalInfo: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
      type: String,
      trim: true
    },
    location: {
      city: String,
      state: String,
      country: String
    },
    website: String,
    linkedin: String,
    github: String,
    summary: {
      type: String,
      maxlength: [500, 'Summary cannot be more than 500 characters']
    },
    avatar: String
  },
  experience: [{
    company: {
      type: String,
      required: true,
      trim: true
    },
    position: {
      type: String,
      required: true,
      trim: true
    },
    location: String,
    startDate: {
      type: Date,
      required: true
    },
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    achievements: [{
      type: String,
      maxlength: [200, 'Achievement cannot be more than 200 characters']
    }]
  }],
  education: [{
    institution: {
      type: String,
      required: true,
      trim: true
    },
    degree: {
      type: String,
      required: true,
      trim: true
    },
    field: String,
    location: String,
    startDate: {
      type: Date,
      required: true
    },
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    },
    gpa: String,
    description: String
  }],
  skills: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
      default: 'intermediate'
    },
    category: {
      type: String,
      enum: ['technical', 'soft', 'language', 'other'],
      default: 'technical'
    }
  }],
  projects: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    technologies: [String],
    link: String,
    github: String,
    startDate: Date,
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    }
  }],
  certifications: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    issuer: {
      type: String,
      required: true,
      trim: true
    },
    date: Date,
    expiryDate: Date,
    credentialId: String,
    link: String
  }],
  languages: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    proficiency: {
      type: String,
      enum: ['basic', 'conversational', 'fluent', 'native'],
      default: 'conversational'
    }
  }],
  customSections: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      maxlength: [1000, 'Content cannot be more than 1000 characters']
    },
    order: Number
  }],
  styling: {
    primaryColor: {
      type: String,
      default: '#0ea5e9'
    },
    secondaryColor: {
      type: String,
      default: '#d946ef'
    },
    fontFamily: {
      type: String,
      enum: ['Inter', 'Poppins', 'Roboto', 'Open Sans', 'Lato'],
      default: 'Inter'
    },
    fontSize: {
      type: String,
      enum: ['small', 'medium', 'large'],
      default: 'medium'
    },
    spacing: {
      type: String,
      enum: ['compact', 'normal', 'spacious'],
      default: 'normal'
    }
  },
  settings: {
    isPublic: {
      type: Boolean,
      default: false
    },
    allowDownload: {
      type: Boolean,
      default: true
    },
    allowPrint: {
      type: Boolean,
      default: true
    },
    password: String,
    expiresAt: Date
  },
  analytics: {
    views: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    lastViewed: Date,
    viewHistory: [{
      date: {
        type: Date,
        default: Date.now
      },
      ip: String,
      userAgent: String
    }]
  },
  shareLink: {
    type: String,
    unique: true,
    default: () => uuidv4()
  },
  version: {
    type: Number,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better performance
resumeSchema.index({ user: 1, createdAt: -1 });
resumeSchema.index({ shareLink: 1 });
resumeSchema.index({ 'settings.isPublic': 1 });

// Virtual for full name
resumeSchema.virtual('fullName').get(function() {
  return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

// Virtual for total experience years
resumeSchema.virtual('totalExperience').get(function() {
  if (!this.experience || this.experience.length === 0) return 0;
  
  let totalYears = 0;
  this.experience.forEach(exp => {
    const start = new Date(exp.startDate);
    const end = exp.current ? new Date() : new Date(exp.endDate);
    totalYears += (end - start) / (1000 * 60 * 60 * 24 * 365);
  });
  
  return Math.round(totalYears * 10) / 10;
});

// Method to increment view count
resumeSchema.methods.incrementView = function(ip, userAgent) {
  this.analytics.views += 1;
  this.analytics.lastViewed = new Date();
  this.analytics.viewHistory.push({
    date: new Date(),
    ip: ip,
    userAgent: userAgent
  });
  
  // Keep only last 100 view records
  if (this.analytics.viewHistory.length > 100) {
    this.analytics.viewHistory = this.analytics.viewHistory.slice(-100);
  }
  
  return this.save();
};

// Method to increment download count
resumeSchema.methods.incrementDownload = function() {
  this.analytics.downloads += 1;
  return this.save();
};

// Method to increment share count
resumeSchema.methods.incrementShare = function() {
  this.analytics.shares += 1;
  return this.save();
};

// Method to generate new share link
resumeSchema.methods.generateNewShareLink = function() {
  this.shareLink = uuidv4();
  return this.save();
};

// Pre-save middleware to update version
resumeSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.version += 1;
  }
  next();
});

// Add pagination plugin
resumeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Resume', resumeSchema);