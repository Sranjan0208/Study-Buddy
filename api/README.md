# Study-Buddy Server-side

The Study Buddy App Server-side is the backend component of the Study Buddy App, a platform designed to help college students find compatible study partners and create study groups for collaborative learning.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database-Setup](#database-setup)
  - [Starting-the-Server](#starting-the-server)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Getting Started

- To get the Study Buddy App Server-side up and running on your local machine, follow these steps:

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (with npm)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Sranjan0208/Study-Buddy.git
   ```
2. Navigate to the project directory:
   ```sh
   cd server
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Set up environment variables:
   Create a .env file in the root directory and add the necessary environment variables: mongodb database connection URLs, Token Secret.

### Database Setup

1. Start MongoDB: Make sure your local MongoDB server is up and running.

### Starting the Server

1. Start the server: Run the following command to start the server:
   ```sh
   npm start server.js
   ```
   This will start the server on a specified port (usually 8000) and you should see a message indicating that the server is running.
2. Testing the API: You can now test the API endpoints using tools like Postman or by sending HTTP requests from your frontend application.

That's it! You now have the Study Buddy App server-side running on your local machine. You can access the API endpoints and integrate them into your MERN project's frontend application for a complete experience.

## Folder Structure

The project's folder structure is organized as follows:

- controllers/: Contains the route controllers for authentication and tasks.
- middlewares/: Contains middleware functions for authentication and tasks.
- routes/: Defines the API routes for authentication and tasks.
- utils/: Utility functions or modules for tasks.
- UserModel.js: User data model.
- TaskModel.js: Task data model.
- server.js: Main entry point for the application.

## Contributing

Contributions to the Study Buddy App Server-side are welcome! If you have any suggestions, bug reports, or feature requests, please submit an issue or create a pull request. For major changes, please open a discussion to discuss your ideas before proceeding.

## Contact

For any inquiries or additional information, please contact me at [sranjan0208@gmail.com].
