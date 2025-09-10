# 🚀 Focus Hub

> Your personal command center for crushing goals, tracking habits, and staying in the zone.

[![GitHub stars](https://img.shields.io/github/stars/Asnan07/Focus-Hub?style=flat-square)](https://github.com/Asnan07/Focus-Hub/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Asnan07/Focus-Hub?style=flat-square)](https://github.com/Asnan07/Focus-Hub/network)
[![GitHub issues](https://img.shields.io/github/issues/Asnan07/Focus-Hub?style=flat-square)](https://github.com/Asnan07/Focus-Hub/issues)
[![MIT License](https://img.shields.io/github/license/Asnan07/Focus-Hub?style=flat-square)](LICENSE)

---

## 🧠 What is Focus Hub?

**Focus Hub** is a minimalist productivity dashboard that helps you:

- 🎯 Stay laser-focused on your goals
- 📆 Track your habits and daily streaks
- 🧘‍♂️ Enter deep work sessions
- 🔔 Get spiritual or psychological reminder prompts
- 📈 Reflect on your progress weekly

It’s built for devs, students, and anyone who wants to beat procrastination and build a focused lifestyle.

---

## 🌐 Live Demo

> https://focushub-v0.netlify.app/

---

## 📦 Tech Stack

| Frontend         | Backend        | Other           |
|------------------|----------------|-----------------|
| HTML, CSS, JS    | Node.js + Express (planned) | LocalStorage / MongoDB |
| React (soon)     | API Integration (future) | Git + GitHub |

---

## ⚙️ Installation

```bash
git clone https://github.com/Asnan07/Focus-Hub.git
cd Focus-Hub
# open index.html directly in browser or run with live server
```

---

## 📤 How to Upload Your Local Project to GitHub

Got a local project folder you want to upload to GitHub? Here's how to do it step by step:

### Method 1: Upload to a New Repository

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and click the "+" icon → "New repository"
   - Give it a name (e.g., "poketto")
   - Choose public/private
   - Don't initialize with README if you have files locally
   - Click "Create repository"

2. **Upload your local project:**
   ```bash
   # Navigate to your local project folder
   cd /path/to/your/project
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Make your first commit
   git commit -m "Initial commit"
   
   # Connect to your GitHub repository (replace with your details)
   git remote add origin https://github.com/yourusername/poketto.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Method 2: Upload to an Existing Repository

If you already created the repository with files:

```bash
# Clone the repository first
git clone https://github.com/yourusername/poketto.git
cd poketto

# Copy your local files to this directory
# (use file manager or cp command)

# Add, commit and push
git add .
git commit -m "Add project files"
git push origin main
```

### Method 3: Using GitHub Desktop (GUI)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Click "File" → "Add Local Repository"
3. Select your project folder
4. Click "Publish repository" to upload to GitHub

### Method 4: Drag & Drop via GitHub Web Interface

1. Go to your empty repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop your files or click "choose your files"
4. Add a commit message and click "Commit changes"

### 🛠️ Useful Git Commands

```bash
# Check status of your files
git status

# See what changes you made
git diff

# View commit history
git log --oneline

# Create and switch to a new branch
git checkout -b feature-branch

# Push new branch to GitHub
git push -u origin feature-branch
```

### 🚨 Common Issues & Solutions

**Problem:** `remote origin already exists`
```bash
# Solution: Remove and re-add the remote
git remote remove origin
git remote add origin https://github.com/yourusername/yourrepo.git
```

**Problem:** `Permission denied (publickey)`
```bash
# Solution: Use HTTPS instead of SSH, or set up SSH keys
git remote set-url origin https://github.com/yourusername/yourrepo.git
```

**Problem:** Files too large
- Use Git LFS for files > 100MB
- Add large files to `.gitignore`
