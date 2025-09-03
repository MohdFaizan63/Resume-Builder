# ⚡ Quick Start Guide - Faizan CV Builder

Get your personalized resume builder running locally in minutes!

## 🚀 Quick Setup (5 minutes.)

### 1. Install Dependencies

```bash
# Install all dependencies at once
npm run install-all

# Or install individually:
npm install
cd resume-builder-backend && npm install
cd ../resume-builder-frontend && npm install
```

### 2. Set Up Environment Variables

Create `.env` file in `resume-builder-backend/`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/faizanResumeBuilder
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

### 3. Start MongoDB (Choose one)

#### Option A: Local MongoDB
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account and cluster
3. Get connection string and replace `MONGO_URI` in `.env`

### 4. Start the Application

```bash
# Start both frontend and backend
npm run dev

# Or start individually:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

### 5. Open Your Browser

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 🎯 What You'll See

1. **Homepage** - Beautiful landing page with your branding
2. **Template Selection** - 8 professional templates to choose from
3. **Resume Builder** - Modern form with real-time preview
4. **Authentication** - User registration and login
5. **Analytics** - Track resume views and downloads

## 🔧 Development Commands

```bash
# Install dependencies
npm run install-all

# Start development servers
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Build for production
npm run build

# Test the application
npm test
```

## 📁 Project Structure

```
faizan-resume-builder/
├── resume-builder-frontend/     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   └── ...
│   ├── public/                # Static files
│   └── package.json
├── resume-builder-backend/      # Node.js backend
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   └── server.js
├── package.json               # Root package.json
└── README.md
```

## 🎨 Customization

### Change Branding

1. **Update Colors** - Modify `tailwind.config.js`
2. **Change Logo** - Replace logo in components
3. **Update Text** - Edit content in components
4. **Add Features** - Extend functionality

### Add New Templates

1. Create template component in `src/components/templates/`
2. Add to template selection page
3. Update template rendering logic

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

**MongoDB connection failed:**
- Check if MongoDB is running
- Verify connection string
- Check network access (for Atlas)

**Dependencies not found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear cache and rebuild
npm run build -- --reset-cache
```

### Getting Help

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is running
4. Check if all dependencies are installed

## 🚀 Next Steps

1. **Test all features** - Create a resume, save, download
2. **Customize branding** - Update colors, logo, text
3. **Add your own templates** - Create unique designs
4. **Deploy to production** - Follow the deployment guide
5. **Add more features** - Extend functionality

## 📞 Support

- **Documentation**: Check README.md for detailed info
- **Issues**: Create GitHub issue for bugs
- **Questions**: Check the troubleshooting section

---

**Happy coding! 🎉**

Built with ❤️ by Mohd Faizan
