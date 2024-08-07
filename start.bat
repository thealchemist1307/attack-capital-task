@echo off
setlocal

REM Set directories
set FRONTEND_DIR=blog-platform-frontend
set BACKEND_DIR=blog-platform-backend
set BUILD_DIR=build
set SRC_DIR=%BACKEND_DIR%\src

REM Check if node_modules exists in the frontend directory
if not exist %FRONTEND_DIR%\node_modules (
    echo Installing frontend dependencies...
    cd %FRONTEND_DIR%
    npm install --force
    cd ..
)

REM Build the frontend project
echo Building frontend project...
cd %FRONTEND_DIR%
npm run build
cd ..

REM Copy build folder to backend src directory
echo Copying build folder to backend src directory...
if exist %SRC_DIR%\%BUILD_DIR% rmdir /s /q %SRC_DIR%\%BUILD_DIR%
xcopy /s /e /y %FRONTEND_DIR%\%BUILD_DIR% %SRC_DIR%\%BUILD_DIR%

REM Check if node_modules exists in the backend directory
if not exist %BACKEND_DIR%\node_modules (
    echo Installing backend dependencies...
    cd %BACKEND_DIR%
    npm install
    cd ..
)

REM Start the backend server
echo Starting backend server...
cd %BACKEND_DIR%
npm start
cd ..

endlocal
pause
