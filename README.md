# 🚀 Faizan CV Builder - Professional Resume Creation Platform

> **Built with ❤️ by Mohd Faizan**  
> A modern, feature-rich resume builder that helps professionals create stunning resumes with AI-powered templates, real-time preview, and advanced analytics.

![Faizan CV Builder](https://img.shields.io/badge/Faizan-CV%20Builder-blue?style=for-the-badge&logo=react)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb)
![Version](https://img.shields.io/badge/Version-2.0.0-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Customizable color schemes
- **Smooth Animations** - Framer Motion powered interactions
- **Professional Templates** - 8+ beautifully designed templates
- **Real-time Preview** - See changes instantly as you type

### 🔐 **Authentication & Security**
- **JWT Authentication** - Secure user sessions
- **Password Encryption** - bcrypt hashing
- **Rate Limiting** - Protection against abuse
- **Input Validation** - Comprehensive data validation
- **CORS Protection** - Secure cross-origin requests

### 📊 **Advanced Features**
- **Analytics Dashboard** - Track views, downloads, and shares
- **Shareable Links** - Public resume sharing with unique URLs
- **Multiple Templates** - Classic, Modern, Creative, Minimal, Professional, Tech, Design, Executive
- **Export Options** - PDF download with high quality
- **Version Control** - Track resume changes and versions

### 🎯 **Professional Tools**
- **Drag & Drop** - Easy content organization
- **Custom Sections** - Add your own sections
- **Skill Levels** - Rate your skills (Beginner to Expert)
- **Project Showcase** - Highlight your best work
- **Certification Tracking** - Manage your credentials

### 🌟 **Premium Features**
- **Unlimited Resumes** - Create as many as you need
- **Advanced Analytics** - Detailed performance insights
- **Custom Branding** - Personalize colors and fonts
- **Priority Support** - Get help when you need it

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Heroicons** - Beautiful icons
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### DevOps & Tools
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Express Rate Limit** - Rate limiting
- **Express Validator** - Input validation
- **Nodemailer** - Email functionality
- **Cloudinary** - Image storage

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/faizan-resume-builder.git
cd faizan-resume-builder
```

### 2. Install Dependencies
```bash
# Install all dependencies (root, backend, and frontend)
npm run install-all

# Or install individually:
npm install
cd resume-builder-backend && npm install
cd ../resume-builder-frontend && npm install
```

### 3. Environment Configuration

Create `.env` files in the backend directory:

```env
# Backend Environment Variables
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/faizanResumeBuilder
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional: Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the Application

#### Development Mode
```bash
# Start both frontend and backend concurrently
npm run dev

# Or start individually:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

#### Production Mode
```bash
# Build the frontend
npm run build

# Start production server
cd resume-builder-backend
npm start
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `cd resume-builder-frontend && npm run build`
3. Set output directory: `resume-builder-frontend/build`
4. Add environment variables in Vercel dashboard

### Backend Deployment (Render/Railway)
1. Connect your GitHub repository
2. Set build command: `cd resume-builder-backend && npm install`
3. Set start command: `cd resume-builder-backend && npm start`
4. Add environment variables

### Database (MongoDB Atlas)
1. Create a free MongoDB Atlas cluster
2. Get your connection string
3. Add to environment variables

## 📱 API Documentation

### Authentication Endpoints
```
POST /api/auth/register    - Register new user
POST /api/auth/login       - User login
GET  /api/auth/me          - Get current user
PUT  /api/auth/profile     - Update profile
PUT  /api/auth/change-password - Change password
POST /api/auth/logout      - Logout user
```

### Resume Endpoints
```
POST   /api/resumes                    - Create resume
GET    /api/resumes                    - Get user resumes
GET    /api/resumes/:id                - Get single resume
PUT    /api/resumes/:id                - Update resume
DELETE /api/resumes/:id                - Delete resume
GET    /api/resumes/share/:shareLink   - Get public resume
PUT    /api/resumes/:id/settings       - Update settings
POST   /api/resumes/:id/share-link     - Generate share link
GET    /api/resumes/:id/analytics      - Get analytics
POST   /api/resumes/:id/duplicate      - Duplicate resume
```

### User Endpoints
```
GET    /api/users/dashboard            - Get dashboard stats
PUT    /api/users/subscription         - Update subscription
DELETE /api/users/account              - Delete account
```

## 🎨 Templates Available

1. **Classic** - Traditional professional layout
2. **Modern** - Clean and contemporary design
3. **Creative** - Artistic and unique styling
4. **Minimal** - Simple and elegant
5. **Professional** - Corporate and formal
6. **Tech** - Perfect for developers and engineers
7. **Design** - Creative professionals
8. **Executive** - Senior-level positions

## 🔧 Customization

### Adding New Templates
1. Create template component in `src/components/templates/`
2. Add template data to the templates configuration
3. Update the template selection logic

### Styling Customization
- Modify `tailwind.config.js` for color schemes
- Update CSS variables in `src/index.css`
- Customize component styles in individual files

## 📊 Analytics Features

- **View Tracking** - Monitor resume views
- **Download Analytics** - Track PDF downloads
- **Share Metrics** - Measure social sharing
- **Geographic Data** - View location analytics
- **Time-based Insights** - Track performance over time

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Inspiration**: Based on the original Digital Resume Builder project
- **Icons**: [Heroicons](https://heroicons.com/)
- **UI Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

- **Email**: faizan@example.com
- **LinkedIn**: [Mohd Faizan](https://linkedin.com/in/mohdfaizan)
- **GitHub**: [@mohdfaizan](https://github.com/mohdfaizan)

## 🎯 Roadmap

- [ ] **AI Resume Optimization** - AI-powered content suggestions
- [ ] **Multi-language Support** - Internationalization
- [ ] **Mobile App** - React Native version
- [ ] **Advanced Analytics** - More detailed insights
- [ ] **Team Collaboration** - Multi-user resume editing
- [ ] **Integration APIs** - LinkedIn, GitHub, etc.
- [ ] **Premium Templates** - Exclusive designs for pro users

---

<div align="center">
  <p>Made with ❤️ by <strong>Mohd Faizan</strong></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

