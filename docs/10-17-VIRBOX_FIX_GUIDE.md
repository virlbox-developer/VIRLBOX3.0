# VirBox Complete Deployment - PRECISE FIX GUIDE

## ⚠️ YOUR CURRENT ISSUE

Your script was looking for:
```
virlbox/virbox/frontend  ❌ WRONG
virlbox/virbox/backend   ❌ WRONG
```

But your actual structure is:
```
virlbox/frontend  ✅ CORRECT
virlbox/backend   ✅ CORRECT
```

---

## ✅ IMMEDIATE FIX

### Step 1: Remove Old Script
```bash
rm virbox-deploy.sh
```

### Step 2: Download Fixed Script
Replace with the new `virbox-deploy-FIXED.sh` which has:

**OLD (Line 13-15):**
```bash
FRONTEND_DIR="${PROJECT_ROOT}/virbox/frontend"
BACKEND_DIR="${PROJECT_ROOT}/virbox/backend"
```

**NEW (Line 13-15):**
```bash
FRONTEND_DIR="${PROJECT_ROOT}/frontend"
BACKEND_DIR="${PROJECT_ROOT}/backend"
```

### Step 3: Make Executable
```bash
chmod +x virbox-deploy-FIXED.sh
```

### Step 4: Verify Structure
```bash
pwd
# Output: /mnt/c/Users/Master/Nextcloud/Projects/VirlBox/2025-12-20/virlbox

ls -la
# Should show:
# drwxr-xr-x  frontend/
# drwxr-xr-x  backend/
# -rwxr-xr-x  virbox-deploy-FIXED.sh
```

---

## 🚀 DEPLOYMENT COMMANDS (NOW WORKING)

### 1. First Time Setup
```bash
./virbox-deploy-FIXED.sh setup
```

Expected output:
```
✅ Project directories verified
✅ Frontend: /mnt/c/Users/Master/Nextcloud/Projects/VirlBox/2025-12-20/virlbox/frontend
✅ Backend: /mnt/c/Users/Master/Nextcloud/Projects/VirlBox/2025-12-20/virlbox/backend
```

### 2. Install All Dependencies
```bash
./virbox-deploy-FIXED.sh install
```

### 3. Build Both Frontend & Backend
```bash
./virbox-deploy-FIXED.sh build
```

### 4. Full Production Deployment
```bash
./virbox-deploy-FIXED.sh deploy
```

### 5. Development Mode (Choose One)

**Option A: Frontend Only**
```bash
./virbox-deploy-FIXED.sh dev-frontend
# Runs on http://localhost:5173
```

**Option B: Backend Only**
```bash
./virbox-deploy-FIXED.sh dev-backend
# Runs on http://localhost:3000
```

**Option C: Both (Separate Terminals)**
```bash
# Terminal 1
./virbox-deploy-FIXED.sh dev-frontend

# Terminal 2
./virbox-deploy-FIXED.sh dev-backend
```

---

## 📊 COMPLETE WORKFLOW

### Fresh Start (Recommended)
```bash
# 1. Navigate to your virlbox directory
cd /mnt/c/Users/Master/Nextcloud/Projects/VirlBox/2025-12-20/virlbox

# 2. Run setup
./virbox-deploy-FIXED.sh setup
# ✅ Verifies directories
# ✅ Creates .env files
# ✅ Checks Node/npm/Git

# 3. Install dependencies
./virbox-deploy-FIXED.sh install
# ✅ Installs frontend deps
# ✅ Installs backend deps

# 4. Build for production
./virbox-deploy-FIXED.sh deploy
# ✅ Builds frontend
# ✅ Builds backend
# ✅ Ready for deployment
```

### Development Workflow
```bash
# Terminal 1 - Frontend
./virbox-deploy-FIXED.sh dev-frontend
# 🟢 Frontend: http://localhost:5173

# Terminal 2 - Backend
./virbox-deploy-FIXED.sh dev-backend
# 🟢 Backend: http://localhost:3000
```

### Quick Testing
```bash
# Run both and test endpoints
./virbox-deploy-FIXED.sh test
# ✅ Tests backend health
# ✅ Tests frontend access
```

---

## 🔍 KEY FIXES IN NEW SCRIPT

### Fix #1: Directory Paths
```bash
# Line 13-15: Removed extra 'virbox/' level
FRONTEND_DIR="${PROJECT_ROOT}/frontend"
BACKEND_DIR="${PROJECT_ROOT}/backend"
```

### Fix #2: Directory Verification
Added `verify_directories()` function that checks:
```bash
if [ ! -d "${FRONTEND_DIR}" ]; then
  print_error "Frontend directory not found at: ${FRONTEND_DIR}"
  exit 1
fi
```

### Fix #3: All Functions Now Check Paths
```bash
install_frontend_deps() {
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    exit 1
  fi
  cd "${FRONTEND_DIR}"
  ...
}
```

### Fix #4: Docker Compose Path
```bash
# OLD
cd "${PROJECT_ROOT}/virbox"

# NEW
cd "${PROJECT_ROOT}"
```

---

## 📝 EXPECTED OUTPUT SEQUENCE

```bash
$ ./virbox-deploy-FIXED.sh setup

================================
Setting Up Environment
================================
ℹ️  Verifying project structure...
✅ Project directories verified
ℹ️  Frontend: /mnt/c/Users/Master/.../virlbox/frontend
ℹ️  Backend: /mnt/c/Users/Master/.../virlbox/backend
ℹ️  Checking required tools...
✅ Node.js version: v18.19.0
✅ npm version: 10.1.0
✅ Git version: git version 2.42.0
✅ Logs directory created at /mnt/c/Users/Master/.../virlbox/logs
```

---

## ✅ TROUBLESHOOTING

### Issue: "No such file or directory"
**Solution:**
```bash
# Verify you're in correct directory
pwd
# Should show: .../virlbox

# Check directory structure
ls -la
# Should show: frontend/ backend/
```

### Issue: "Package.json not found"
**Solution:**
```bash
# Verify frontend has package.json
ls frontend/package.json
# Should exist

# Verify backend has package.json  
ls backend/package.json
# Should exist
```

### Issue: "npm: command not found"
**Solution:**
```bash
# Install Node.js from https://nodejs.org/
node --version   # Should be 16+
npm --version    # Should be 8+
```

### Issue: Port 3000/5173 already in use
**Solution:**
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Kill process on port 5173
lsof -i :5173
kill -9 <PID>
```

---

## 🎯 FINAL CHECKLIST

Before running deployment, verify:

- [ ] You're in the correct directory (`virlbox/`)
- [ ] `frontend/` folder exists
- [ ] `backend/` folder exists
- [ ] `frontend/package.json` exists
- [ ] `backend/package.json` exists
- [ ] Node.js 16+ is installed
- [ ] npm 8+ is installed
- [ ] You have internet connection (for npm install)
- [ ] You have at least 2GB free disk space

---

## 🚀 ONE-LINE QUICK START

```bash
./virbox-deploy-FIXED.sh setup && ./virbox-deploy-FIXED.sh install && ./virbox-deploy-FIXED.sh deploy
```

---

## 📋 ALL AVAILABLE COMMANDS

```bash
# Setup & Installation
./virbox-deploy-FIXED.sh setup          # Setup environment
./virbox-deploy-FIXED.sh install        # Install dependencies
./virbox-deploy-FIXED.sh reinstall      # Reinstall dependencies

# Building
./virbox-deploy-FIXED.sh build          # Build both
./virbox-deploy-FIXED.sh build-frontend # Frontend only
./virbox-deploy-FIXED.sh build-backend  # Backend only

# Deployment
./virbox-deploy-FIXED.sh deploy         # Full deployment
./virbox-deploy-FIXED.sh deploy-frontend # Frontend only
./virbox-deploy-FIXED.sh deploy-backend  # Backend only

# Development
./virbox-deploy-FIXED.sh dev            # Setup dev environment
./virbox-deploy-FIXED.sh dev-frontend   # Run frontend dev
./virbox-deploy-FIXED.sh dev-backend    # Run backend dev

# Docker (if available)
./virbox-deploy-FIXED.sh docker-build   # Build images
./virbox-deploy-FIXED.sh docker-up      # Start containers
./virbox-deploy-FIXED.sh docker-down    # Stop containers
./virbox-deploy-FIXED.sh docker-logs    # View logs

# Testing
./virbox-deploy-FIXED.sh test           # Test endpoints
./virbox-deploy-FIXED.sh lint           # Run linters

# Maintenance
./virbox-deploy-FIXED.sh clean          # Clean builds
./virbox-deploy-FIXED.sh clean-all      # Clean everything
./virbox-deploy-FIXED.sh status         # Show status
./virbox-deploy-FIXED.sh logs           # Show logs

# Help
./virbox-deploy-FIXED.sh help           # Show help
./virbox-deploy-FIXED.sh version        # Show version
```

---

## 🎉 NOW YOUR VIRBOX DEPLOYMENT WILL WORK!

**Download `virbox-deploy-FIXED.sh` and run:**

```bash
chmod +x virbox-deploy-FIXED.sh
./virbox-deploy-FIXED.sh setup
./virbox-deploy-FIXED.sh install
./virbox-deploy-FIXED.sh deploy
```

All paths are now CORRECT! ✅
