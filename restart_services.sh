#!/usr/bin/env bash
# Script to restart the backend and frontend services

# Exit on error
set -o errexit

# Display header
echo "======================================================"
echo "   AFRITEC BRIDGE LMS - RESTART SERVICES SCRIPT"
echo "======================================================"

# Function to handle errors
handle_error() {
  echo "❌ Error: $1"
  exit 1
}

# Navigate to project root
PROJECT_ROOT="/home/desire/My_Project/AB/afritech_bridge_website"
cd "$PROJECT_ROOT" || handle_error "Could not navigate to project root"

# Stop any running processes
echo "🛑 Stopping any running processes..."
pkill -f "node.*next" || echo "No Next.js processes found"
pkill -f "python.*main.py" || echo "No Python processes found"

# Check if port 5001 is available
if netstat -tuln | grep -q ":5001 "; then
  echo "⚠️ Warning: Port 5001 is already in use"
  echo "Please stop whatever process is using port 5001 and try again"
  echo "You can use: sudo lsof -i :5001"
  exit 1
fi

# Start backend
echo ""
echo "🚀 Starting backend server..."
cd "$PROJECT_ROOT/afritec_bridge_lms/backend" || handle_error "Backend directory not found"
./run.sh &
BACKEND_PID=$!
echo "Backend started with PID: $BACKEND_PID"

# Give backend time to start
sleep 2

# Verify backend is running
if ! ps -p $BACKEND_PID > /dev/null; then
  echo "❌ Backend failed to start properly"
  cat backend.log
  exit 1
fi

# Start frontend
echo ""
echo "🚀 Starting frontend server..."
cd "$PROJECT_ROOT/afritec_bridge_lms/frontend" || handle_error "Frontend directory not found"
echo "Running Next.js development server..."
npx next dev -p 3002 &
FRONTEND_PID=$!

# Give frontend time to start
sleep 5

echo ""
echo "✅ Services started successfully"
echo "Backend: http://localhost:5001"
echo "Frontend: http://localhost:3002"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to press Ctrl+C
wait $BACKEND_PID $FRONTEND_PID