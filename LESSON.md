# Building and Deploying React App to GitHub Pages - Complete Guide

## Overview
This document outlines the complete process for building a React + Vite application and deploying it to GitHub Pages. This includes all setup steps, configurations, troubleshooting, and how to resolve common issues.

---

## Part 1: Initial Project Setup

### 1.1 Create React + Vite Project
```bash
npm create vite@latest project-name -- --template react
cd project-name
npm install
```

### 1.2 Add Required Dependencies
```bash
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 1.3 Configure Tailwind CSS
Update `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

---

## Part 2: GitHub Pages Configuration - CRITICAL STEPS

### 2.1 Update `vite.config.js` with Base Path
**This is ESSENTIAL for GitHub Pages to find your assets correctly.**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',  // IMPORTANT: Replace with your actual repo name
})
```

**Example:** If your repo is `https://github.com/StoryBeeBooks/bwsupplychain.ca.git`, use:
```javascript
base: '/bwsupplychain.ca/',
```

### 2.2 Replace BrowserRouter with HashRouter
**This prevents "Page Not Found" errors on GitHub Pages.**

In `src/App.jsx`, change:
```javascript
// BEFORE
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// AFTER
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
```

The `HashRouter` uses URL hashes (`/#/page-name`) instead of direct paths, which works reliably on GitHub Pages.

---

## Part 3: GitHub Actions Deployment Workflow

### 3.1 Create Deployment Workflow File
Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### 3.2 Create `.gitignore`
Include `.git` folder files that should not be tracked:
```
node_modules/
dist/
.env
.env.local
```

---

## Part 4: Initial Push to GitHub

### 4.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 4.2 Verify GitHub Actions is Running
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see "Deploy to GitHub Pages" workflow queued or running (yellow circle)
4. Wait for it to complete and turn green (✓ Success)

---

## Part 5: GitHub Pages Configuration

### 5.1 Enable GitHub Pages
1. Go to **Settings → Pages**
2. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
3. Click **Save** (if needed)

### 5.2 Verify Your Site is Live
- Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
- Example: `https://StoryBeeBooks.github.io/bwsupplychain.ca/`

---

## Part 6: Troubleshooting Common Issues

### Issue 1: Site is Blank or Shows "Page Not Found"
**Cause:** Missing base path configuration or wrong router type.

**Solution:**
1. Double-check `vite.config.js` has correct `base: '/repo-name/'`
2. Ensure you're using `HashRouter` not `BrowserRouter` in `src/App.jsx`
3. Rebuild and push: `git add . && git commit -m "Fix config" && git push`

### Issue 2: GitHub Actions Workflow Not Running
**Cause:** Workflow file not in correct location or syntax error.

**Solution:**
1. Verify file path is exactly: `.github/workflows/deploy.yml` (NOT `.github/deploy.yml`)
2. Check YAML syntax (indentation matters!)
3. Verify branch name is `main` (or whatever your default branch is)

### Issue 3: Git Push Failed - "Updates were rejected"
**Cause:** Diverged branches (local vs remote have different commits).

**Solution:**
```bash
# Option 1: Pull and rebase (recommended)
git pull origin main --rebase
git push origin main

# Option 2: Force push (use with caution, only if Option 1 fails)
git reset --hard HEAD
git push origin main --force
```

### Issue 4: Git Lock File Error
**Cause:** Interrupted git process left a lock file.

**Solution:**
```bash
# Remove the lock file
Remove-Item -Force ".git/index.lock"

# Or on Mac/Linux:
rm -f .git/index.lock

# Then retry your git command
git push
```

### Issue 5: Stuck in Rebase State
**Cause:** Interrupted rebase operation.

**Solution:**
```bash
# Abort the rebase
git rebase --abort

# Clean reset
git reset --hard HEAD

# Push again
git push origin main
```

---

## Part 7: Making Updates and Pushing Changes

### 7.1 Standard Workflow for Updates
```bash
# Make changes to your files

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to GitHub (this automatically triggers the deploy workflow)
git push origin main
```

### 7.2 Verify Deployment
1. Go to **Actions** tab on GitHub
2. Verify the new workflow run is green (success)
3. Your site will update automatically within 1-2 minutes

---

## Part 8: Quick Reference - Common Commands

```bash
# Check status
git status

# View recent commits
git log --oneline -5

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View branch info
git branch -a

# Delete local branch
git branch -d branch-name
```

---

## Part 9: Project Structure
```
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Showcase.jsx
│   │   ├── FAQ.jsx
│   │   └── Policy.jsx
│   ├── App.jsx                 # Must use HashRouter
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js              # Must have base: '/repo-name/'
├── tailwind.config.js
└── postcss.config.js
```

---

## Part 10: Important Checklist

- [ ] `vite.config.js` has `base: '/your-repo-name/'`
- [ ] Using `HashRouter` in `App.jsx`
- [ ] `.github/workflows/deploy.yml` exists and has correct syntax
- [ ] `.gitignore` includes `node_modules/`, `dist/`
- [ ] Initial push completed: `git push -u origin main`
- [ ] GitHub Actions workflow ran successfully (green checkmark)
- [ ] GitHub Pages is set to "GitHub Actions" source
- [ ] Site is live at `https://username.github.io/repo-name/`

---

## Part 11: If Everything Fails - Full Reset

```bash
# Option 1: Start fresh deployment
git add .
git commit -m "Reset deployment"
git push origin main --force

# Then go to GitHub > Actions and check if workflow runs

# Option 2: Complete repository reset
git reset --hard HEAD
git clean -fd
git push origin main --force
```

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Last Updated:** February 11, 2026  
**Status:** Active & Tested
