# 🚀 Deployment Guide - Faizan CV Builder

This guide will help you deploy your personalized resume builder project to production environments.

## 📋 Prerequisites

- GitHub account
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)
- Render/Railway account (free tier available)

## 🗄️ Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project
4. Build a free cluster (M0 tier)
5. Choose your preferred cloud provider and region

### 2. Configure Database Access

1. Go to **Database Access** in the left sidebar
2. Click **Add New Database User**
3. Create a username and password (save these!)
4. Select **Read and write to any database**
5. Click **Add User**

### 3. Configure Network Access

1. Go to **Network Access** in the left sidebar
2. Click **Add IP Address**
3. For development: Click **Allow Access from Anywhere** (0.0.0.0/0)
4. For production: Add your deployment platform's IP ranges

### 4. Get Connection String

1. Go to **Database** in the left sidebar
2. Click **Connect**
3. Choose **Connect your application**
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `faizanResumeBuilder`

## 🌐 Frontend Deployment (Vercel)

### 1. Prepare Your Repository

1. Push your code to GitHub
2. Ensure your repository is public or you have a Vercel Pro account

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up with your GitHub account
3. Click **New Project**
4. Import your GitHub repository
5. Configure the project settings:

```bash
# Build Command
cd resume-builder-frontend && npm run build

# Output Directory
resume-builder-frontend/build

# Install Command
npm run install-all
```

### 3. Environment Variables

Add these environment variables in Vercel:

```env
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_ENVIRONMENT=production
```

### 4. Deploy

1. Click **Deploy**
2. Wait for the build to complete
3. Your frontend will be available at `https://your-project.vercel.app`

## ⚙️ Backend Deployment (Render)

### 1. Deploy to Render

1. Go to [Render](https://render.com)
2. Sign up with your GitHub account
3. Click **New +** and select **Web Service**
4. Connect your GitHub repository

### 2. Configure Service

```bash
# Name
faizan-resume-builder-api

# Environment
Node

# Build Command
cd resume-builder-backend && npm install

# Start Command
cd resume-builder-backend && npm start

# Root Directory
resume-builder-backend
```

### 3. Environment Variables

Add these environment variables in Render:

```env
NODE_ENV=production
PORT=10000
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/faizanResumeBuilder?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=30d
FRONTEND_URL=https://your-frontend-url.vercel.app

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

### 4. Deploy

1. Click **Create Web Service**
2. Wait for the deployment to complete
3. Your backend will be available at `https://your-service-name.onrender.com`

## 🔧 Alternative Backend Deployment (Railway)

### 1. Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Sign up with your GitHub account
3. Click **New Project**
4. Select **Deploy from GitHub repo**
5. Choose your repository

### 2. Configure Service

```bash
# Root Directory
resume-builder-backend

# Build Command
npm install

# Start Command
npm start
```

### 3. Environment Variables

Add the same environment variables as in the Render section.

## 🔐 Security Configuration

### 1. JWT Secret

Generate a strong JWT secret:

```bash
# In your terminal
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 2. CORS Configuration

Update your backend CORS settings to allow your frontend domain:

```javascript
// In server.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

### 3. Rate Limiting

Your backend already includes rate limiting, but you can adjust it:

```javascript
// In server.js
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
```

## 📱 Custom Domain Setup

### 1. Buy a Domain

1. Purchase a domain from providers like:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)

### 2. Configure DNS

#### For Vercel (Frontend):
1. Go to your Vercel project settings
2. Click **Domains**
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

#### For Render/Railway (Backend):
1. Go to your service settings
2. Add your custom domain
3. Update your DNS records as instructed

### 3. Update Environment Variables

Update your environment variables with the new domain:

```env
FRONTEND_URL=https://faizanresume.com
REACT_APP_API_URL=https://api.faizanresume.com
```

## 🔄 CI/CD Pipeline

### 1. GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST "https://api.render.com/v1/services/${{ secrets.RENDER_SERVICE_ID }}/deploys" \
            -H "Authorization: Bearer ${{ secrets.RENDER_API_KEY }}" \
            -H "Content-Type: application/json"
```

## 📊 Monitoring & Analytics

### 1. Application Monitoring

- **Vercel Analytics**: Built-in analytics for frontend
- **Render/Railway Logs**: Built-in logging for backend
- **MongoDB Atlas**: Database monitoring

### 2. Error Tracking

Add error tracking services:

```bash
# Install Sentry
npm install @sentry/react @sentry/tracing

# Or install LogRocket
npm install logrocket
```

## 🔧 Post-Deployment Checklist

- [ ] Test all features on production
- [ ] Verify database connections
- [ ] Check email functionality
- [ ] Test file uploads (if applicable)
- [ ] Verify CORS settings
- [ ] Test authentication flows
- [ ] Check mobile responsiveness
- [ ] Verify PDF generation
- [ ] Test share functionality
- [ ] Monitor error logs

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check your CORS configuration
   - Verify frontend URL in environment variables

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network access settings
   - Ensure database user has correct permissions

3. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

4. **Environment Variables**
   - Ensure all required variables are set
   - Check for typos in variable names
   - Verify variable values are correct

### Getting Help

- Check the deployment platform's documentation
- Review error logs in your deployment dashboard
- Test locally with production environment variables
- Use the health check endpoint: `GET /api/health`

## 🎉 Success!

Once deployed, your resume builder will be available at:
- **Frontend**: `https://your-domain.com`
- **Backend API**: `https://api.your-domain.com`
- **Health Check**: `https://api.your-domain.com/api/health`

Share your live project with recruiters and showcase your development skills! 🚀

---

**Built with ❤️ by Mohd Faizan**
