# Study Buddy Matching App

The Study Buddy Matching App is a web application designed to help college students find compatible study partners and create study groups for collaborative learning. It provides a platform for students to connect, collaborate, and succeed together in their academic endeavors.

# Idea behind the App

During the exam period, many students face challenges when trying to comprehend complex subjects. Often, the solution is to reach out to friends or classmates for help. However, this can be time-consuming, especially when coordinating with multiple people. The Study Buddy Matching App aims to solve this problem by providing an efficient and organized way to connect students who are seeking study partners or looking to join study groups. By doing so, the app simplifies the process of seeking academic support and fosters a collaborative learning environment.

## Features

- **User Registration and Login**: Users can create an account or log in using their credentials to access the study buddy matching platform.

- **Profile Creation**: Users can create their profiles by providing information such as their study preferences, subjects of interest, and availability for study sessions.

- **Study Buddy Matching**: The app employs an algorithm to match users with compatible study partners based on their study preferences, subjects, and other relevant factors.

- **Study Group Creation**: Users have the option to create or join study groups based on their study goals, subjects, and availability. They can collaborate with group members, schedule study sessions, and share resources within the group.

- **Real-Time Chat**: The app includes a real-time chat feature that allows users to communicate with their study buddies or study group members. They can exchange messages, share files, and discuss study-related topics.

## Tech Stack

The Study Buddy Matching App is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Here are the key technologies and libraries used:

- Client (Frontend):

  - React.js: JavaScript library for building user interfaces.
  - React Router: Library for client-side routing within the React app.
  - Socket.IO: Real-time communication library for chat functionality.

- Server (Backend):

  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for building APIs and handling HTTP requests.
  - MongoDB: NoSQL database for storing user profiles, study groups, and other relevant data.
  - Mongoose: ODM (Object Data Modeling) library for MongoDB, providing schema-based modeling and validation.

- Additional Tools and Libraries:
  - Axios: HTTP client for making API requests from the client to the server.
  - Tailwind: CSS frameworks for styling and enhancing the user interface.
  - JWT (JSON Web Tokens): Token-based authentication for securing user sessions.

## Getting Started

To run the Study Buddy Matching App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Sranjan0208/Study-Buddy.git`
2. Navigate to the project directory: `cd study-buddy`
3. Install the dependencies:
   - Server: `cd server` then `npm install`
   - Client: `cd client` then `npm install`
4. Set up environment variables:
   - Create a `.env` file in the `server` directory and add necessary environment variables (database connection string, JWT secret, etc.).
5. Start the development servers:
   - Server: In the `server` directory, run `npm start server.js` to start the Express.js server.
   - Client: In the `client` directory, run `npm run dev` to start the React development server.
6. Open your web browser and access the app at `http://localhost:5173`.

## Contributing

Contributions to the Study Buddy Matching App are welcome! If you have any suggestions, bug reports, or feature requests, please submit an issue or create a pull request. For major changes, please open a discussion to discuss your ideas before proceeding.

## License

The Study Buddy Matching App is open-source software released under the [MIT License](LICENSE). You are free to use, modify, and distribute the codebase as per the terms of the license.

## Contact

For any inquiries or additional information, please contact the project team at [sranjan0208@gmail.com].
