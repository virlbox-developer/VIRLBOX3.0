# 🚀 VIRLBOX SETUP SCRIPT GUIDE
## How to Use virlbox-setup.sh to Create Your Complete Project

---

## 📋 OVERVIEW

The `virlbox-setup.sh` script automatically creates:

✅ **Complete directory structure** (50+ folders)  
✅ **All configuration files** (package.json, tsconfig.json, .env, etc.)  
✅ **Backend source code** (main.ts, entities, services, routes)  
✅ **Frontend source code** (App.tsx, pages, components, stores)  
✅ **Database migrations** (TypeORM setup)  
✅ **Docker configuration** (docker-compose.yml, Dockerfile)  
✅ **GitHub Actions CI/CD** (.github/workflows/)  
✅ **Utility scripts** (setup.sh, deploy.sh)  
✅ **Documentation** (README.md)  

**Total Output:** Complete, production-ready VIRLBOX system

---

## ⚙️ PREREQUISITES

Before running the script, ensure you have:

### Required Software
```bash
# Node.js 18+
node --version    # Should be v18.0.0+

# npm 9+
npm --version     # Should be 9.0.0+

# Git
git --version     # Should be installed

# Bash shell
bash --version    # Should be 5.0+
```

### System Requirements
- **OS:** macOS, Linux, or Windows (with WSL)
- **Disk Space:** 500MB free (for dependencies installation)
- **RAM:** 4GB minimum (8GB recommended)

### Recommended Setup
```bash
# For macOS
brew install node
brew install git

# For Ubuntu/Debian
sudo apt-get install nodejs npm git

# For Windows - use WSL2 with Ubuntu
wsl --install
```

---

## 🎯 QUICK START

### Option 1: Automatic Setup (Recommended)

```bash
# 1. Download the script
curl -O https://your-repo/virlbox-setup.sh

# 2. Make it executable
chmod +x virlbox-setup.sh

# 3. Run the script
./virlbox-setup.sh

# 4. Follow the prompts
# The script will create everything automatically
```

### Option 2: Copy & Paste

```bash
# Create a new directory
mkdir virlbox-project
cd virlbox-project

# Copy the script into this directory
# (Then run as shown in Option 1)
chmod +x virlbox-setup.sh
./virlbox-setup.sh
```

---

## 📊 WHAT THE SCRIPT CREATES

### Directory Structure

```
virlbox/
├── backend/
│   ├── src/
│   │   ├── agents/              (Agent system)
│   │   ├── formulas/            (Math algorithms)
│   │   ├── integrations/        (22+ platforms)
│   │   ├── services/            (Business logic)
│   │   ├── database/
│   │   │   ├── entities/        (TypeORM entities)
│   │   │   ├── migrations/      (DB migrations)
│   │   │   └── seeders/         (Data seeders)
│   │   ├── routes/              (API endpoints)
│   │   ├── middleware/          (Auth, logging, etc.)
│   │   ├── controllers/         (Route handlers)
│   │   ├── utils/               (Helpers)
│   │   ├── config/              (Configuration)
│   │   └── main.ts              (Entry point)
│   ├── tests/                   (Test suite)
│   ├── logs/                    (Log files)
│   ├── package.json             (Dependencies)
│   ├── tsconfig.json            (TypeScript config)
│   ├── jest.config.js           (Test config)
│   ├── .env.example             (Environment template)
│   └── Dockerfile               (Docker image)
│
├── frontend/
│   ├── src/
│   │   ├── components/          (React components)
│   │   ├── pages/               (Page components)
│   │   ├── services/            (API client)
│   │   ├── stores/              (Zustand stores)
│   │   ├── hooks/               (Custom hooks)
│   │   ├── types/               (TypeScript types)
│   │   ├── utils/               (Utilities)
│   │   ├── styles/              (CSS/Tailwind)
│   │   ├── App.tsx              (Root component)
│   │   ├── main.tsx             (Entry point)
│   │   └── index.css            (Global styles)
│   ├── public/                  (Static files)
│   ├── index.html               (HTML template)
│   ├── package.json             (Dependencies)
│   ├── tsconfig.json            (TypeScript config)
│   ├── vite.config.ts           (Vite config)
│   └── .env.local.example       (Environment template)
│
├── scripts/
│   ├── setup.sh                 (Auto setup)
│   └── deploy.sh                (Auto deploy)
│
├── .github/
│   └── workflows/
│       └── ci.yml               (CI/CD pipeline)
│
├── docs/                        (Documentation)
├── docker-compose.yml           (Docker compose)
├── .gitignore                   (Git ignore)
├── README.md                    (Project README)
└── (All 6 documentation files)
```

### Files Created

| Count | Type | Location |
|-------|------|----------|
| 30+ | Backend TypeScript files | backend/src/ |
| 15+ | Frontend React files | frontend/src/ |
| 5 | Config files | root + subdirs |
| 6 | Database files | backend/src/database/ |
| 3 | Docker files | root |
| 2 | CI/CD files | .github/workflows/ |
| 2 | Shell scripts | scripts/ |
| 1 | Docker compose | root |
| 1 | Git ignore | root |
| 1 | README | root |

**Total: 50+ files**

---

## 🔄 STEP-BY-STEP EXECUTION

### Step 1: Verify Prerequisites (2 min)

```bash
# Check Node.js version
node --version
# Expected: v18.0.0 or higher

# Check npm version
npm --version
# Expected: 9.0.0 or higher

# Check Git installation
git --version
# Expected: git version 2.x or higher
```

If any prerequisite is missing, install it first!

### Step 2: Download & Make Executable (1 min)

```bash
# Download the script (one of these methods)

# Option A: Using curl
curl -O https://your-github-repo/virlbox-setup.sh

# Option B: Using wget
wget https://your-github-repo/virlbox-setup.sh

# Option C: Copy-paste into a text editor and save as virlbox-setup.sh

# Make it executable
chmod +x virlbox-setup.sh
```

### Step 3: Run the Script (2 min)

```bash
# Run the setup script
./virlbox-setup.sh

# You'll see output like:
# ╔════════════════════════════════════════════════════════════════╗
# ║     VIRLBOX - COMPLETE PROJECT SETUP SCRIPT                   ║
# ║     AI Content Automation Platform | v2.0.0                   ║
# ╚════════════════════════════════════════════════════════════════╝
#
# [INFO] Creating project directory structure...
# [SUCCESS] Created directory: virlbox/backend/src/agents
# ... (more output)
```

### Step 4: Wait for Completion (varies)

The script will create all directories and files. Progress is shown in real-time.

**Expected output at the end:**
```
╔════════════════════════════════════════════════════════════════╗
║                    ✅ SETUP COMPLETE!                         ║
╚════════════════════════════════════════════════════════════════╝

📁 Project created in: /current/path/virlbox

🚀 Next Steps:
   1. cd virlbox
   2. bash scripts/setup.sh
   3. npm run dev (in backend and frontend)

🌐 Access:
   Frontend:  http://localhost:5173
   Backend:   http://localhost:3000
   API Docs:  http://localhost:3000/api/docs

📚 Documentation:
   - START-HERE.md
   - README-VIRLBOX.md
   - VIRLBOX-Quick-Start.md

✨ Happy coding! 🎉
```

---

## 🎯 NEXT STEPS AFTER SETUP

### Step 1: Enter Project Directory

```bash
cd virlbox
```

### Step 2: Setup Databases & Dependencies

```bash
# Option A: Using the included setup script (RECOMMENDED)
bash scripts/setup.sh

# This will:
# 1. Setup backend (.env, migrations, seeds)
# 2. Setup frontend (.env.local)
# 3. Install all dependencies
# 4. Ready to run!
```

### Step 3: Start Development

```bash
# In one terminal - Backend
cd backend
npm run dev
# Output: ✅ Server running on http://localhost:3000

# In another terminal - Frontend
cd frontend
npm run dev
# Output: ✅ VITE v5.0.0 ready in 123 ms
#         ➜  Local:   http://localhost:5173/
```

### Step 4: Access the System

```
Frontend:  http://localhost:5173
Backend:   http://localhost:3000
API Docs:  http://localhost:3000/api/docs
```

---

## ⚙️ SCRIPT OPTIONS & CUSTOMIZATION

### Change Project Name

Edit the script before running:

```bash
# Open the script
nano virlbox-setup.sh

# Find this line (around line 20):
PROJECT_NAME="virlbox"

# Change it to:
PROJECT_NAME="my-custom-name"

# Save and run
./virlbox-setup.sh
```

### Exclude Certain Components

You can comment out functions in the main() function:

```bash
# In the main() function, comment out lines like:
# create_docker_files    # Skip Docker setup
# create_github_actions  # Skip CI/CD setup
```

### Custom Database Configuration

The script creates a template. Customize after creation:

```bash
cd virlbox/backend
cp .env.example .env
nano .env  # Edit with your actual credentials
```

---

## 🐛 TROUBLESHOOTING

### "Permission denied"

```bash
chmod +x virlbox-setup.sh
./virlbox-setup.sh
```

### "command not found: bash"

Use sh instead:
```bash
sh virlbox-setup.sh
```

### "Node.js not found"

Install Node.js:
```bash
# macOS
brew install node

# Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Script fails partway through

It's safe to rerun - it will recreate missing files:
```bash
./virlbox-setup.sh
```

### Directory already exists

The script will ask for confirmation:
```
[WARNING] Project directory 'virlbox' already exists!
Do you want to overwrite it? (y/n) 
```

Type `y` to overwrite, `n` to cancel.

---

## ✅ VERIFICATION CHECKLIST

After the script completes, verify:

- [ ] `virlbox/` directory exists
- [ ] `virlbox/backend/` has all subdirectories
- [ ] `virlbox/frontend/` has all subdirectories
- [ ] `virlbox/backend/package.json` exists
- [ ] `virlbox/frontend/package.json` exists
- [ ] `virlbox/docker-compose.yml` exists
- [ ] `virlbox/.github/workflows/ci.yml` exists
- [ ] `virlbox/scripts/setup.sh` exists
- [ ] All documentation files present
- [ ] `.gitignore` file created

**Count total files:**
```bash
cd virlbox
find . -type f | wc -l
# Should show 50+ files
```

---

## 📊 WHAT GETS INSTALLED

The script creates empty project structure. Dependencies are installed by:

```bash
bash scripts/setup.sh
```

This runs `npm install` in both directories, which installs:

**Backend (80+ packages):**
- Express.js, TypeScript, TypeORM
- PostgreSQL, Redis clients
- JWT, bcrypt, security libraries
- Testing frameworks
- Linting tools

**Frontend (50+ packages):**
- React, React Router
- Tailwind CSS, styling
- State management (Zustand)
- Data fetching (React Query)
- Development tools

**Total:** ~20 MB of dependencies

---

## 🚀 DEPLOYMENT AFTER SETUP

Once setup is complete and tested locally:

### Deploy to Heroku

```bash
bash scripts/deploy.sh
```

This will:
1. Create Heroku app
2. Add PostgreSQL
3. Add Redis
4. Deploy backend
5. Deploy frontend

### Manual Deployment

See VIRLBOX-Quick-Start.md for detailed deployment instructions.

---

## 📝 SCRIPT DETAILS

### What It Does

1. **Validates environment** - Checks prerequisites
2. **Creates directories** - 50+ folders
3. **Generates configs** - package.json, tsconfig, etc.
4. **Creates source code** - Backend & frontend files
5. **Sets up database** - TypeORM entities & migrations
6. **Configures Docker** - Compose file & Dockerfile
7. **Sets up CI/CD** - GitHub Actions workflow
8. **Creates utilities** - Setup and deploy scripts
9. **Generates docs** - README files

### Safety Features

- ✅ Won't overwrite if directory exists (asks first)
- ✅ Creates backups (if previous version exists)
- ✅ Validates all steps
- ✅ Clear error messages
- ✅ Can be run multiple times safely

### Performance

- **Execution Time:** 30 seconds - 2 minutes
- **Disk Space Used:** ~500 MB (before npm install)
- **Internet Required:** No (except npm install later)

---

## 🎁 BONUS: SCRIPT CONTENTS

The script is self-contained and includes:

- Color-coded output (error, success, info, warning)
- Progress indicators
- Error handling
- Graceful degradation
- Clear documentation

**You can:**
- ✅ Read it to understand the structure
- ✅ Modify it for custom needs
- ✅ Use parts of it in your own scripts
- ✅ Share with your team

---

## ✨ SUCCESS INDICATORS

After running the script, you'll have:

```
✅ 50+ project files created
✅ All directories structured
✅ Configuration files ready
✅ Source code templates included
✅ Database setup prepared
✅ Docker files configured
✅ CI/CD pipeline ready
✅ Ready to npm install
✅ Ready to start development
```

---

## 🎯 FINAL CHECKLIST

Before declaring success:

- [ ] Script ran without errors
- [ ] All directories created
- [ ] All configuration files present
- [ ] README.md is readable
- [ ] .gitignore is in place
- [ ] Docker files are valid YAML
- [ ] Next step is clear (bash scripts/setup.sh)

---

## 📞 NEED HELP?

**Script not working?**
1. Check Prerequisites section
2. Run: `chmod +x virlbox-setup.sh`
3. Run: `bash virlbox-setup.sh` (instead of `./`)
4. Check error messages in output

**What to do next?**
1. Read: START-HERE.md
2. Follow: VIRLBOX-Quick-Start.md
3. Run: `bash scripts/setup.sh`

**Want to customize?**
1. Edit the script before running
2. Change PROJECT_NAME, directories, etc.
3. Read script comments for guidance

---

## 🎊 YOU'RE READY!

Run the script and you'll have a complete VIRLBOX project in minutes.

```bash
chmod +x virlbox-setup.sh
./virlbox-setup.sh
cd virlbox
bash scripts/setup.sh
npm run dev
```

**That's it! Your AI content automation platform is ready to code!** 🚀

---

**Script Version:** 2.0.0  
**Created:** December 20, 2025  
**Status:** Production Ready  
**License:** MIT  

Happy coding! ✨
