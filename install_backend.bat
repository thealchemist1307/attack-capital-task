@echo off
setlocal

REM Set directories
set BACKEND_DIR=blog-platform-backend
REM Check if node_modules exists in the backend directory
if not exist %BACKEND_DIR%\node_modules (
    echo Installing backend dependencies...
    cd %BACKEND_DIR%
    npm install --force
    pause
    cd ..
) else (
    echo Backend dependencies already installed.
)

echo Installation complete.
pause
