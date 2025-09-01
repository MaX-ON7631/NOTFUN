Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "NOTFUN React Migration - Starting..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""

Write-Host "Checking if package.json exists..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "✅ package.json found" -ForegroundColor Green
} else {
    Write-Host "❌ package.json NOT found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Files in current directory:" -ForegroundColor Yellow
    Get-ChildItem | ForEach-Object { Write-Host $_.Name -ForegroundColor Gray }
    Write-Host ""
    Write-Host "Please run this from the correct folder!" -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Installation failed!" -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit
}

Write-Host ""
Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "Starting React development server..." -ForegroundColor Yellow
Write-Host "Server will start on: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
npm run dev

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to start development server!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Trying alternative start method..." -ForegroundColor Yellow
    npx vite
}

Read-Host "Press Enter to continue"
