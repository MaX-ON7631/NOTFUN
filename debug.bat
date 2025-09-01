@echo off
echo ==========================================
echo DEBUG - Checking NOTFUN folder...
echo ==========================================

echo Current folder: %cd%
echo.

echo === Files in current folder ===
dir /b
echo.

echo === Checking Node.js ===
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js NOT found! Please install Node.js first.
) else (
    echo ✅ Node.js found
)

echo.
echo === Checking npm ===
npm --version
if %errorlevel% neq 0 (
    echo ❌ npm NOT found!
) else (
    echo ✅ npm found
)

echo.
echo === Checking package.json ===
if exist package.json (
    echo ✅ package.json found
    echo.
    echo Contents of package.json (first 10 lines):
    type package.json | head -10
) else (
    echo ❌ package.json NOT found!
)

echo.
echo === Checking src folder ===
if exist src (
    echo ✅ src folder found
    echo Contents of src folder:
    dir src /b
) else (
    echo ❌ src folder NOT found!
)

echo.
echo ==========================================
echo Debug complete. Press any key to exit...
pause
