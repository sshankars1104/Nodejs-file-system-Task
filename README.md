# (Nodejs file system Task) Creation and Listing API

This project demonstrates a simple Node.js application that creates a `.txt` file with the current timestamp as content and lists all files in a specific folder. The application uses Express.js for the API endpoints and the built-in `fs` module for file operations.

## GitHub Link

[GitHub Repository](https://github.com/sshankars1104/Nodejs-file-system-Task)

## Render.com Link

[Render.com Deployment](https://nodejs-file-system-task-4cbe.onrender.com)
## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies using npm:

   ```sh
   npm install express
   ```

## Usage

1. Start the server:

   ```sh
   node app.js
   ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Create File

- **URL:** `/create-file`
- **Method:** `GET`
- **Description:** Creates a `.txt` file in the `files` directory with the current timestamp as content. The file name is the current date and time.

### List Files

- **URL:** `/read-files`
- **Method:** `GET`
- **Description:** Lists all files in the `files` directory.

### Testing on local:

To create a file, access http://localhost:3000/create-file

To read files, access http://localhost:3000/read-files

### Testing on Render.com:

To create a file, access

  
    https://nodejs-file-system-task-4cbe.onrender.com/create-file
  

To read files, access


   https://nodejs-file-system-task-4cbe.onrender.com/read-files
  

