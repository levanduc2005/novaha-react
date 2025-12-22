@echo off
REM NovaHA React App - Quick Start Script

echo.
echo ===============================================
echo   NovaHA React App - Production Ready Setup
echo ===============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
) else (
    echo ✓ Dependencies already installed
    echo.
)

REM Show options
echo Select what you want to do:
echo.
echo   1. Start development server (npm run dev)
echo   2. Build for production (npm run build)
echo   3. Preview production build (npm run preview)
echo   4. Install dependencies (npm install)
echo   5. View project structure
echo   6. Show admin credentials
echo   0. Exit
echo.

set /p choice="Enter your choice (0-6): "

if "%choice%"=="1" (
    echo.
    echo Starting development server...
    echo Access: http://localhost:5173
    echo.
    call npm run dev
) else if "%choice%"=="2" (
    echo.
    echo Building for production...
    call npm run build
    echo.
    echo ✓ Build complete! Output in: dist/
) else if "%choice%"=="3" (
    echo.
    echo Previewing production build...
    echo Access: http://localhost:4173
    echo.
    call npm run preview
) else if "%choice%"=="4" (
    echo.
    echo Installing dependencies...
    call npm install
) else if "%choice%"=="5" (
    echo.
    echo Project Structure:
    echo.
    tree /F src
) else if "%choice%"=="6" (
    echo.
    echo Admin Credentials:
    echo ===============
    echo Username: admin
    echo Password: novaha2025
    echo Token: NOVAHASECRETKEY123
    echo.
) else (
    echo Goodbye!
)

echo.
pause
