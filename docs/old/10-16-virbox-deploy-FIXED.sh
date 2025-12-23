#!/bin/bash

################################################################################
# VIRBOX COMPLETE DEPLOYMENT SCRIPT - FIXED VERSION
# Master Deployment Script - All Operations in One File
# Usage: bash virbox-deploy.sh [command]
################################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project paths - FIXED: Removed extra 'virbox/' level
PROJECT_ROOT="$(pwd)"
FRONTEND_DIR="${PROJECT_ROOT}/frontend"
BACKEND_DIR="${PROJECT_ROOT}/backend"
LOGS_DIR="${PROJECT_ROOT}/logs"

################################################################################
# UTILITY FUNCTIONS
################################################################################

print_header() {
  echo -e "${BLUE}================================${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}================================${NC}"
}

print_success() {
  echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
  echo -e "${RED}❌ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
  echo -e "${BLUE}ℹ️  $1${NC}"
}

check_command() {
  if ! command -v $1 &> /dev/null; then
    print_error "$1 is not installed. Please install it first."
    exit 1
  fi
}

create_logs_dir() {
  mkdir -p "${LOGS_DIR}"
  print_success "Logs directory created at ${LOGS_DIR}"
}

verify_directories() {
  print_info "Verifying project structure..."
  
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    print_info "Current directory: $(pwd)"
    print_info "Available directories:"
    ls -la
    exit 1
  fi
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    print_info "Current directory: $(pwd)"
    print_info "Available directories:"
    ls -la
    exit 1
  fi
  
  print_success "Project directories verified"
  print_info "Frontend: ${FRONTEND_DIR}"
  print_info "Backend: ${BACKEND_DIR}"
}

################################################################################
# ENVIRONMENT SETUP
################################################################################

setup_environment() {
  print_header "Setting Up Environment"
  
  # Verify directories first
  verify_directories
  
  # Check required commands
  print_info "Checking required tools..."
  check_command node
  check_command npm
  check_command git
  
  print_success "Node.js version: $(node --version)"
  print_success "npm version: $(npm --version)"
  print_success "Git version: $(git --version)"
  
  # Create logs directory
  create_logs_dir
}

setup_env_files() {
  print_header "Setting Up Environment Files"
  
  # Frontend .env.production
  if [ ! -f "${FRONTEND_DIR}/.env.production" ]; then
    print_info "Creating frontend .env.production..."
    cat > "${FRONTEND_DIR}/.env.production" << 'EOF'
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=VirBox
VITE_VERSION=1.0.0
EOF
    print_success "Frontend .env.production created"
  else
    print_warning "Frontend .env.production already exists"
  fi
  
  # Backend .env.production
  if [ ! -f "${BACKEND_DIR}/.env.production" ]; then
    print_info "Creating backend .env.production..."
    cat > "${BACKEND_DIR}/.env.production" << 'EOF'
# Server Configuration
PORT=3000
NODE_ENV=production

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=secure_password
DB_NAME=virbox_prod

# JWT
JWT_SECRET=your-super-secret-key-change-in-production

# CORS
CORS_ORIGIN=http://localhost:5173

# Logging
LOG_LEVEL=info
LOG_FILE=./logs/app.log

# API
API_VERSION=v1
API_TIMEOUT=30000
EOF
    print_success "Backend .env.production created"
  else
    print_warning "Backend .env.production already exists"
  fi
}

################################################################################
# FRONTEND OPERATIONS
################################################################################

install_frontend_deps() {
  print_header "Installing Frontend Dependencies"
  
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    exit 1
  fi
  
  cd "${FRONTEND_DIR}"
  
  print_info "Current directory: $(pwd)"
  
  if [ -f "package-lock.json" ]; then
    print_info "Using npm ci for reproducible installs..."
    npm ci
  else
    print_info "Using npm install..."
    npm install
  fi
  
  print_success "Frontend dependencies installed"
  cd "${PROJECT_ROOT}"
}

build_frontend() {
  print_header "Building Frontend"
  
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    exit 1
  fi
  
  cd "${FRONTEND_DIR}"
  
  print_info "Running TypeScript type check..."
  npm run type-check 2>&1 | tee "${LOGS_DIR}/frontend-typecheck.log" || true
  
  print_info "Building frontend bundle..."
  npm run build 2>&1 | tee "${LOGS_DIR}/frontend-build.log"
  
  if [ -d "dist" ]; then
    local size=$(du -sh dist | cut -f1)
    print_success "Frontend build complete (Size: ${size})"
    print_info "Build output: ${FRONTEND_DIR}/dist/"
  else
    print_error "Frontend build failed"
    exit 1
  fi
  
  cd "${PROJECT_ROOT}"
}

run_frontend_dev() {
  print_header "Starting Frontend Development Server"
  
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    exit 1
  fi
  
  cd "${FRONTEND_DIR}"
  print_info "Frontend running on http://localhost:5173"
  npm run dev
  
  cd "${PROJECT_ROOT}"
}

lint_frontend() {
  print_header "Linting Frontend Code"
  
  if [ ! -d "${FRONTEND_DIR}" ]; then
    print_error "Frontend directory not found at: ${FRONTEND_DIR}"
    exit 1
  fi
  
  cd "${FRONTEND_DIR}"
  npm run lint 2>&1 | tee "${LOGS_DIR}/frontend-lint.log" || print_warning "Some linting issues found"
  
  cd "${PROJECT_ROOT}"
}

################################################################################
# BACKEND OPERATIONS
################################################################################

install_backend_deps() {
  print_header "Installing Backend Dependencies"
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    exit 1
  fi
  
  cd "${BACKEND_DIR}"
  
  print_info "Current directory: $(pwd)"
  
  if [ -f "package-lock.json" ]; then
    print_info "Using npm ci for reproducible installs..."
    npm ci
  else
    print_info "Using npm install..."
    npm install
  fi
  
  print_success "Backend dependencies installed"
  cd "${PROJECT_ROOT}"
}

build_backend() {
  print_header "Building Backend"
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    exit 1
  fi
  
  cd "${BACKEND_DIR}"
  
  print_info "Compiling TypeScript..."
  npm run build 2>&1 | tee "${LOGS_DIR}/backend-build.log"
  
  if [ -d "dist" ]; then
    print_success "Backend build complete"
    print_info "Build output: ${BACKEND_DIR}/dist/"
  else
    print_error "Backend build failed"
    exit 1
  fi
  
  cd "${PROJECT_ROOT}"
}

run_backend_dev() {
  print_header "Starting Backend Development Server"
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    exit 1
  fi
  
  cd "${BACKEND_DIR}"
  print_info "Backend running on http://localhost:3000"
  npm run dev
  
  cd "${PROJECT_ROOT}"
}

run_backend_prod() {
  print_header "Starting Backend Production Server"
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    exit 1
  fi
  
  cd "${BACKEND_DIR}"
  print_info "Backend running on http://localhost:3000"
  npm start 2>&1 | tee "${LOGS_DIR}/backend-prod.log"
  
  cd "${PROJECT_ROOT}"
}

lint_backend() {
  print_header "Linting Backend Code"
  
  if [ ! -d "${BACKEND_DIR}" ]; then
    print_error "Backend directory not found at: ${BACKEND_DIR}"
    exit 1
  fi
  
  cd "${BACKEND_DIR}"
  npm run lint 2>&1 | tee "${LOGS_DIR}/backend-lint.log" || print_warning "Some linting issues found"
  
  cd "${PROJECT_ROOT}"
}

################################################################################
# DOCKER OPERATIONS
################################################################################

check_docker() {
  if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
  fi
  
  if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
  fi
  
  print_success "Docker: $(docker --version)"
  print_success "Docker Compose: $(docker-compose --version)"
}

docker_build() {
  print_header "Building Docker Images"
  
  check_docker
  
  cd "${PROJECT_ROOT}"
  
  print_info "Building Docker images..."
  docker-compose build --no-cache 2>&1 | tee "${LOGS_DIR}/docker-build.log"
  
  print_success "Docker images built successfully"
}

docker_up() {
  print_header "Starting Docker Containers"
  
  check_docker
  
  cd "${PROJECT_ROOT}"
  
  print_info "Starting containers..."
  docker-compose up -d 2>&1 | tee "${LOGS_DIR}/docker-up.log"
  
  sleep 5
  
  print_success "Containers started"
  docker-compose ps
}

docker_down() {
  print_header "Stopping Docker Containers"
  
  check_docker
  
  cd "${PROJECT_ROOT}"
  
  print_info "Stopping containers..."
  docker-compose down 2>&1 | tee "${LOGS_DIR}/docker-down.log"
  
  print_success "Containers stopped"
}

docker_logs() {
  print_header "Viewing Docker Logs"
  
  check_docker
  
  cd "${PROJECT_ROOT}"
  docker-compose logs -f
}

docker_clean() {
  print_header "Cleaning Docker Resources"
  
  check_docker
  
  cd "${PROJECT_ROOT}"
  
  print_warning "This will remove all stopped containers, dangling images, and volumes"
  read -p "Are you sure? (y/n) " -n 1 -r
  echo
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Removing containers..."
    docker-compose down --volumes --remove-orphans 2>&1 | tee "${LOGS_DIR}/docker-clean.log"
    
    print_info "Removing dangling images..."
    docker image prune -f
    
    print_success "Docker cleanup completed"
  else
    print_warning "Cleanup cancelled"
  fi
}

################################################################################
# TESTING OPERATIONS
################################################################################

test_endpoints() {
  print_header "Testing API Endpoints"
  
  print_info "Testing backend health..."
  if curl -s http://localhost:3000/api/health | grep -q "healthy"; then
    print_success "Backend health check passed"
  else
    print_warning "Backend health check failed"
  fi
  
  print_info "Testing frontend..."
  if curl -s http://localhost:5173 > /dev/null; then
    print_success "Frontend is accessible"
  else
    print_warning "Frontend is not accessible"
  fi
}

run_lighthouse() {
  print_header "Running Lighthouse Audit"
  
  if ! command -v lhci &> /dev/null; then
    print_warning "Lighthouse CI not installed. Installing..."
    npm install -g @lhci/cli@latest
  fi
  
  print_info "Running Lighthouse audit on http://localhost:5173..."
  lhci autorun || print_warning "Lighthouse audit incomplete"
}

################################################################################
# DEPLOYMENT OPERATIONS
################################################################################

deploy_all() {
  print_header "Full Production Deployment"
  
  setup_environment
  setup_env_files
  
  print_info "Building frontend..."
  install_frontend_deps
  build_frontend
  
  print_info "Building backend..."
  install_backend_deps
  build_backend
  
  print_success "Deployment completed successfully!"
  print_info "Frontend: ${FRONTEND_DIR}/dist/"
  print_info "Backend: ${BACKEND_DIR}/dist/"
  print_info "Logs: ${LOGS_DIR}/"
}

deploy_frontend_only() {
  print_header "Frontend-Only Deployment"
  
  setup_environment
  setup_env_files
  
  install_frontend_deps
  build_frontend
  
  print_success "Frontend deployment completed!"
}

deploy_backend_only() {
  print_header "Backend-Only Deployment"
  
  setup_environment
  setup_env_files
  
  install_backend_deps
  build_backend
  
  print_success "Backend deployment completed!"
}

################################################################################
# DEVELOPMENT OPERATIONS
################################################################################

dev_start() {
  print_header "Starting Development Environment"
  
  setup_environment
  setup_env_files
  
  print_info "Installing dependencies..."
  install_frontend_deps
  install_backend_deps
  
  print_success "Development environment ready!"
  print_info "To start development servers:"
  print_info "  Terminal 1: cd frontend && npm run dev"
  print_info "  Terminal 2: cd backend && npm run dev"
}

dev_frontend() {
  setup_environment
  setup_env_files
  install_frontend_deps
  run_frontend_dev
}

dev_backend() {
  setup_environment
  setup_env_files
  install_backend_deps
  run_backend_dev
}

################################################################################
# CLEANUP & MAINTENANCE
################################################################################

clean_builds() {
  print_header "Cleaning Build Artifacts"
  
  print_info "Cleaning frontend..."
  rm -rf "${FRONTEND_DIR}/dist" 2>/dev/null || true
  
  print_info "Cleaning backend..."
  rm -rf "${BACKEND_DIR}/dist" 2>/dev/null || true
  
  print_success "Build artifacts cleaned"
}

clean_node_modules() {
  print_header "Cleaning Node Modules"
  
  print_info "Cleaning frontend node_modules..."
  rm -rf "${FRONTEND_DIR}/node_modules" 2>/dev/null || true
  
  print_info "Cleaning backend node_modules..."
  rm -rf "${BACKEND_DIR}/node_modules" 2>/dev/null || true
  
  print_success "Node modules cleaned"
}

clean_all() {
  print_header "Complete Cleanup"
  
  clean_builds
  clean_node_modules
  
  print_info "Removing log files..."
  rm -rf "${LOGS_DIR}" 2>/dev/null || true
  
  print_success "Complete cleanup finished"
}

reinstall_deps() {
  print_header "Reinstalling All Dependencies"
  
  clean_node_modules
  install_frontend_deps
  install_backend_deps
  
  print_success "Dependencies reinstalled"
}

################################################################################
# MONITORING & STATUS
################################################################################

show_status() {
  print_header "System Status"
  
  print_info "Current directory: $(pwd)"
  
  print_info "Frontend directory:"
  ls -la "${FRONTEND_DIR}" | head -10
  
  print_info "Backend directory:"
  ls -la "${BACKEND_DIR}" | head -10
  
  print_info "Node processes:"
  ps aux | grep node | grep -v grep || print_warning "No Node processes running"
  
  print_info "Port usage:"
  netstat -tlnp 2>/dev/null | grep -E ":(3000|5173|3001|5432)" || print_warning "Ports not in use"
}

show_logs() {
  print_header "Recent Log Files"
  
  if [ -d "${LOGS_DIR}" ]; then
    ls -lhta "${LOGS_DIR}"
  else
    print_warning "No logs directory found"
  fi
}

tail_logs() {
  print_header "Tailing Logs"
  
  tail -f "${LOGS_DIR}"/*.log 2>/dev/null || print_warning "No log files found"
}

################################################################################
# HELP & USAGE
################################################################################

show_help() {
  cat << EOF
${BLUE}========================================${NC}
${BLUE}VirBox Deployment Script${NC}
${BLUE}========================================${NC}

${GREEN}USAGE:${NC}
  bash virbox-deploy.sh [command]

${GREEN}SETUP COMMANDS:${NC}
  setup                   - Setup environment and create .env files
  install                 - Install all dependencies
  reinstall               - Clean and reinstall dependencies
  
${GREEN}BUILD COMMANDS:${NC}
  build                   - Build frontend and backend
  build-frontend          - Build frontend only
  build-backend           - Build backend only
  
${GREEN}DEPLOYMENT COMMANDS:${NC}
  deploy                  - Full production deployment
  deploy-frontend         - Frontend deployment only
  deploy-backend          - Backend deployment only
  
${GREEN}DOCKER COMMANDS:${NC}
  docker-build            - Build Docker images
  docker-up               - Start Docker containers
  docker-down             - Stop Docker containers
  docker-logs             - View Docker logs
  docker-clean            - Clean Docker resources
  
${GREEN}DEVELOPMENT COMMANDS:${NC}
  dev                     - Start development environment
  dev-frontend            - Run frontend dev server
  dev-backend             - Run backend dev server
  
${GREEN}TESTING COMMANDS:${NC}
  test                    - Test API endpoints
  lint                    - Run linters
  lighthouse              - Run Lighthouse audit
  
${GREEN}MAINTENANCE COMMANDS:${NC}
  clean                   - Clean build artifacts
  clean-all               - Complete cleanup
  status                  - Show system status
  logs                    - Show recent logs
  tail-logs               - Follow logs in real-time
  
${GREEN}HELP COMMANDS:${NC}
  help                    - Show this help message
  version                 - Show version information

${GREEN}EXAMPLES:${NC}
  bash virbox-deploy.sh setup
  bash virbox-deploy.sh deploy
  bash virbox-deploy.sh dev-frontend
  bash virbox-deploy.sh docker-up
  bash virbox-deploy.sh test

${BLUE}========================================${NC}
EOF
}

show_version() {
  echo "VirBox Deployment Script v1.0.0 (FIXED)"
  echo "Node: $(node --version)"
  echo "npm: $(npm --version)"
}

################################################################################
# MAIN COMMAND HANDLER
################################################################################

main() {
  local command="${1:-help}"
  
  case "${command}" in
    # Setup
    setup)
      setup_environment
      setup_env_files
      ;;
    install)
      setup_environment
      install_frontend_deps
      install_backend_deps
      ;;
    reinstall)
      reinstall_deps
      ;;
    
    # Build
    build)
      setup_environment
      build_frontend
      build_backend
      ;;
    build-frontend)
      setup_environment
      build_frontend
      ;;
    build-backend)
      setup_environment
      build_backend
      ;;
    
    # Deployment
    deploy)
      deploy_all
      ;;
    deploy-frontend)
      deploy_frontend_only
      ;;
    deploy-backend)
      deploy_backend_only
      ;;
    
    # Docker
    docker-build)
      docker_build
      ;;
    docker-up)
      docker_up
      ;;
    docker-down)
      docker_down
      ;;
    docker-logs)
      docker_logs
      ;;
    docker-clean)
      docker_clean
      ;;
    
    # Development
    dev)
      dev_start
      ;;
    dev-frontend)
      dev_frontend
      ;;
    dev-backend)
      dev_backend
      ;;
    
    # Testing
    test)
      test_endpoints
      ;;
    lint)
      lint_frontend
      lint_backend
      ;;
    lighthouse)
      run_lighthouse
      ;;
    
    # Maintenance
    clean)
      clean_builds
      ;;
    clean-all)
      clean_all
      ;;
    status)
      show_status
      ;;
    logs)
      show_logs
      ;;
    tail-logs)
      tail_logs
      ;;
    
    # Help
    help)
      show_help
      ;;
    version)
      show_version
      ;;
    
    *)
      print_error "Unknown command: ${command}"
      echo ""
      show_help
      exit 1
      ;;
  esac
}

# Run main function with all arguments
main "$@"

################################################################################
# END OF SCRIPT
################################################################################
