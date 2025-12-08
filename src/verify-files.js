#!/usr/bin/env node

/**
 * Pulse Studio - File Verification Script
 * Run this before `npm install` to ensure all files are present
 * 
 * Usage: node verify-files.js
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.node.json',
  'index.html',
  '.gitignore',
  '.eslintrc.cjs',
  'App.tsx',
  'src/main.tsx',
  'styles/globals.css',
  'SETUP.md',
  'README.md'
];

const requiredDirs = [
  'components',
  'components/ui',
  'data',
  'styles',
  'src'
];

const componentFiles = [
  'components/ChatPanel.tsx',
  'components/ChatBubble.tsx',
  'components/LogoUpload.tsx',
  'components/MoodboardCard.tsx',
  'components/MoodboardGallery.tsx',
  'components/PlatformPreview.tsx',
  'components/SocialPreview.tsx',
  'components/TemplateModal.tsx',
  'components/figma/ImageWithFallback.tsx'
];

const dataFiles = [
  'data/backgrounds.ts',
  'data/templates.ts',
  'data/mockConcepts.ts',
  'data/mockData.ts',
  'data/socialPlatforms.ts'
];

console.log('🔍 Verifying Pulse Studio file structure...\n');

let missingFiles = [];
let missingDirs = [];
let allGood = true;

// Check required files
console.log('📄 Checking core files...');
requiredFiles.forEach(file => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ❌ Missing: ${file}`);
    missingFiles.push(file);
    allGood = false;
  } else {
    console.log(`   ✅ ${file}`);
  }
});

// Check required directories
console.log('\n📁 Checking directories...');
requiredDirs.forEach(dir => {
  if (!fs.existsSync(path.join(__dirname, dir))) {
    console.log(`   ❌ Missing: ${dir}/`);
    missingDirs.push(dir);
    allGood = false;
  } else {
    console.log(`   ✅ ${dir}/`);
  }
});

// Check component files
console.log('\n🧩 Checking component files...');
componentFiles.forEach(file => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ❌ Missing: ${file}`);
    missingFiles.push(file);
    allGood = false;
  } else {
    console.log(`   ✅ ${file}`);
  }
});

// Check data files
console.log('\n📊 Checking data files...');
dataFiles.forEach(file => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ❌ Missing: ${file}`);
    missingFiles.push(file);
    allGood = false;
  } else {
    console.log(`   ✅ ${file}`);
  }
});

// Summary
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All required files present!');
  console.log('\n🚀 You can now run:');
  console.log('   npm install');
  console.log('   npm run dev');
} else {
  console.log('❌ Some files are missing!\n');
  console.log('Missing files:');
  missingFiles.forEach(file => console.log(`   - ${file}`));
  if (missingDirs.length > 0) {
    console.log('\nMissing directories:');
    missingDirs.forEach(dir => console.log(`   - ${dir}/`));
  }
  console.log('\n⚠️  Please ensure all files are downloaded before running npm install.');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);
