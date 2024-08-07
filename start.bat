@echo off
setlocal

REM Set directories
set FRONTEND_DIR=blog-platform-frontend
set BACKEND_DIR=blog-platform-backend

REM Start the backend server in a new command prompt window
start cmd /k "cd /d %BACKEND_DIR% && echo Starting backend server... && npm start"

REM Start the frontend server in a new command prompt window
start cmd /k "cd /d %FRONTEND_DIR% && echo Starting frontend server... && npm run build && npm start --open"

REM Close the original command prompt
exit
