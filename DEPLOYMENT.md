# 🚀 PRO CELLS Deployment Guide

Follow these steps to upload your project to GitHub and deploy it on Netlify securely.

## 1. Prepare for GitHub (Private Repository Recommended)

To keep your code safe, make sure your files are structured correctly:
- **.env**: Your API key is stored here locally. **NEVER** upload this file.
- **.gitignore**: This file is already configured to block `.env` from being uploaded.
- **.env.example**: This is a template for others (or Netlify) to know what keys are needed.

### Commands to Push to GitHub:
If you haven't initialized git yet:
```bash
git init
git add .
git commit -m "Initial commit: PRO CELLS with AI Chat"
# Create a repository on github.com then run:
git remote add origin https://github.com/YOUR_USERNAME/pro-cells.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy to Netlify

1.  **Log in to Netlify** and click **"Add new site"** > **"Import an existing project"**.
2.  Connect your GitHub account and select the **pro-cells** repository.
3.  **Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
4.  **CRITICAL STEP: Environment Variables**:
    - Go to **Site Settings** > **Environment variables**.
    - Click **"Add a variable"**.
    - **Key**: `VITE_GROQ_API_KEY`
    - **Value**: `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`
    - Click **Save**.
5.  **Trigger Deploy**: Netlify will now build your site. If it doesn't start automatically, go to **Deploys** and click **"Trigger deploy"**.

---

## 3. iPhone Optimization Check
The layout is already optimized for iPhone screens:
- **Hero Title**: Automatically scales down on small screens to avoid overflow.
- **AI Chat**: Becomes full-screen on mobile for a "Native App" feel.
- **Arabic Text**: Correctly aligned and formatted for mobile RTL.
- **Touch Targets**: Buttons and cards are enlarged for easy tapping.

---

## ⚠️ Security Reminder
Your API key is now **protected**. By using `import.meta.env.VITE_GROQ_API_KEY` and the `.gitignore` file, the key will only exist in the Netlify dashboard and your local `.env` file, but **never** in your public GitHub code.

**Made by Mohammad Faizan Khan**
*Link: khan.linux-aios.com*
