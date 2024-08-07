
# Blog Platform

This project consists of a frontend and a backend for a blog platform. Follow the steps below to set up and run the application.

## Prerequisites

- Node.js and npm should be installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).
- A local MongoDB server should be running on `localhost:27017`. You can download and install MongoDB from [MongoDB official website](https://www.mongodb.com/try/download/community).

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/thealchemist1307/attack-capital-task.git
   cd attack-capital-task
   ```

2. **Install dependencies for the frontend**:

   ```sh
   cd blog-platform-frontend
   npm install
   cd ..
   ```

   or run `install_frontend.bat` to install dependencies automatically.

3. **Install dependencies for the backend**:

   ```sh
   cd blog-platform-backend
   npm install
   cd ..
   ```

   or run `install_backend.bat` to install dependencies automatically.

## Running the Application

1. **Run the start script**:

   ```sh
   start.bat
   ```

   This script will:

   - Start the backend server in a new command prompt window.
   - Start the frontend server in a new command prompt window.

2. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to access the frontend application.
   - The backend server will be running at `http://localhost:5000`.

## Alert

- **Ensure MongoDB is running**: Before running the application, make sure you have a local MongoDB server running on `localhost:27017`. If MongoDB is not running, the backend server will not be able to connect to the database.

## Troubleshooting

- Ensure you have the correct versions of Node.js, npm, and MongoDB installed.
- Make sure all required environment variables are set up correctly.
- Check the console output for any errors during installation or server startup.

## License

This project is licensed under the MIT License.

```

### Changes Made:
- Added a **"Alert"** section to ensure that users are aware of the need to have a local MongoDB server running on `localhost:27017`.
- Updated the installation instructions to mention the use of batch scripts for dependency installation.

This should help users set up and run the application correctly by ensuring all prerequisites are met.
```
