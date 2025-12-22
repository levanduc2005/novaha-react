#!/bin/bash

# NovaHA React App - Quick Start Script

echo ""
echo "==============================================="
echo "   NovaHA React App - Production Ready Setup"
echo "==============================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
else
    echo "✓ Dependencies already installed"
    echo ""
fi

# Show options
echo "Select what you want to do:"
echo ""
echo "   1. Start development server (npm run dev)"
echo "   2. Build for production (npm run build)"
echo "   3. Preview production build (npm run preview)"
echo "   4. Install dependencies (npm install)"
echo "   5. View project structure"
echo "   6. Show admin credentials"
echo "   0. Exit"
echo ""

read -p "Enter your choice (0-6): " choice

case $choice in
    1)
        echo ""
        echo "Starting development server..."
        echo "Access: http://localhost:5173"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "Building for production..."
        npm run build
        echo ""
        echo "✓ Build complete! Output in: dist/"
        ;;
    3)
        echo ""
        echo "Previewing production build..."
        echo "Access: http://localhost:4173"
        echo ""
        npm run preview
        ;;
    4)
        echo ""
        echo "Installing dependencies..."
        npm install
        ;;
    5)
        echo ""
        echo "Project Structure:"
        echo ""
        tree -L 3 src/
        ;;
    6)
        echo ""
        echo "Admin Credentials:"
        echo "==============="
        echo "Username: admin"
        echo "Password: novaha2025"
        echo "Token: NOVAHASECRETKEY123"
        echo ""
        ;;
    0)
        echo "Goodbye!"
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac

echo ""
