@echo off
setlocal

REM Set directories
set FRONTEND_DIR=blog-platform-frontend
REM Check if node_modules exists in the frontend directory
if not exist %FRONTEND_DIR%\node_modules (
    echo Installing frontend dependencies... 
    cd %FRONTEND_DIR%
    npm install --force 
) else (
    echo Frontend dependencies already installed.
)



echo Installation complete.
pause
