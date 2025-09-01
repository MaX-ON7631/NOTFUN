@echo off
echo ==========================================
echo NOTFUN React Migration - Starting...
echo ==========================================

echo Current directory: %cd%
echo.

echo Checking if package.json exists...
if exist package.json (
    echo ✅ package.json found
) else (
    echo ❌ package.json NOT found!
    echo.
    echo Files in current directory:
    dir /b
    echo.
    echo Please run this from the correct folder!
    pause
    exit
)

echo.
echo Installing dependencies...
npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ❌ Installation failed!
    pause
    exit
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo Starting React development server...
echo Server will start on: http://localhost:5173
echo.
npm run dev

if %errorlevel% neq 0 (
    echo ❌ Failed to start development server!
    echo.
    echo Trying alternative start method...
    npx vite
)

pause