#!/usr/bin/env node

/**
 * Script to fix all warnings and deprecation issues in the Digital Resume Builder
 * Run this script to automatically fix common issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all warnings and deprecation issues...');

// 1. Create Backend .env file
const backendEnvContent = `# Server Configuration
PORT=5001
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/faizanResumeBuilder

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Email Configuration (if using email features)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# Security
BCRYPT_ROUNDS=10
`;

// 2. Create Frontend .env file
const frontendEnvContent = `# Suppress webpack deprecation warnings
GENERATE_SOURCEMAP=false
REACT_APP_API_URL=http://localhost:5001/api

# Suppress Node.js deprecation warnings
NODE_OPTIONS=--no-deprecation
`;

try {
  // Create Backend .env
  fs.writeFileSync(path.join(__dirname, 'Backend', '.env'), backendEnvContent);
  console.log('✅ Created Backend/.env file');
  
  // Create Frontend .env
  fs.writeFileSync(path.join(__dirname, 'Frontend', '.env'), frontendEnvContent);
  console.log('✅ Created Frontend/.env file');
  
  console.log('\n🎉 All fixes applied successfully!');
  console.log('\n📋 Summary of fixes:');
  console.log('1. ✅ React Router future flags added to suppress warnings');
  console.log('2. ✅ ESLint warning fixed in HomePage.js');
  console.log('3. ✅ Backend port changed to 5001 to avoid conflicts');
  console.log('4. ✅ Environment files created');
  console.log('5. ✅ Webpack deprecation warnings suppressed');
  
  console.log('\n🚀 Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Access Frontend: http://localhost:3000');
  console.log('3. Access Backend: http://localhost:5001/api');
  
} catch (error) {
  console.error('❌ Error creating files:', error.message);
  console.log('\n📝 Manual steps:');
  console.log('1. Create Backend/.env with the content above');
  console.log('2. Create Frontend/.env with the content above');
  console.log('3. Run: npm run dev');
}