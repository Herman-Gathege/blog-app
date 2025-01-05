Blog App - Full Stack Blog Application
A full-stack blog application that allows users to register, log in, create, view, and delete blog posts. Built with React, Node.js, Express, MongoDB, and JWT authentication.

This project provides a simple yet comprehensive example of a full-stack CRUD (Create, Read, Update, Delete) application with protected routes and user authentication. The frontend is built using React with React Router and Bootstrap for styling, while the backend is powered by Node.js, Express, and MongoDB.

Features
Authentication:
User Registration: Users can create a new account by providing their username, email, and password.
Login: Registered users can log in to the application using their email and password.
Logout: Logged-in users can log out, which will clear their session.
JWT Authentication: Secure login using JSON Web Token (JWT) to authenticate users and manage sessions.
Posts:
Create New Post: Authenticated users can create new blog posts by providing a title and content.
View Posts: All users can view the list of blog posts.
Delete Post: Authenticated users can delete their own posts.
Responsive Layout: The app is fully responsive and works on all devices.
Technologies Used
Frontend:

React.js
React Router DOM (for client-side routing)
Axios (for making HTTP requests)
Bootstrap (for responsive design and UI components)
Backend:

Node.js
Express.js
MongoDB (NoSQL database for storing user data and posts)
JWT (for secure authentication)
bcrypt.js (for hashing passwords)
Deployment:

Frontend: Netlify
Backend: Heroku
Installation and Setup
Prerequisites
Node.js and npm installed on your local machine
MongoDB instance running (either locally or use a cloud service like MongoDB Atlas)
A code editor like Visual Studio Code
Step 1: Clone the repository
bash
Copy code
git clone https://github.com/your-username/blog-app.git
cd blog-app
Step 2: Install Backend Dependencies
Navigate to the server folder.
bash
Copy code
cd server
Install the required dependencies:
bash
Copy code
npm install
Create a .env file in the root of the server folder with the following environment variables:
.env File (Backend)
env
Copy code
PORT=5000
MONGO_URI=your-mongo-uri-here
JWT_SECRET=your-jwt-secret-here
MONGO_URI: Your MongoDB connection string. You can get this from MongoDB Atlas or your local MongoDB instance.
JWT_SECRET: A secret key used for signing JWT tokens (you can generate a random string).
Step 3: Install Frontend Dependencies
Navigate to the client folder.
bash
Copy code
cd client
Install the required dependencies:
bash
Copy code
npm install
Create a .env file in the root of the client folder with the following environment variables:
.env File (Frontend)
env
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Step 4: Run the Application
Run Backend Server:
Start the backend server:
bash
Copy code
cd server
npm start
This will start the backend API on http://localhost:5000.

Run Frontend Client:
In another terminal window, start the frontend development server:
bash
Copy code
cd client
npm start
This will start the React frontend on http://localhost:3000.

Step 5: Open the Application
Open your browser and go to http://localhost:3000 to see the app running locally.
You can interact with the app, creating posts, registering users, and managing posts as an authenticated user.
API Endpoints
Authentication
POST /api/register:

Registers a new user with a username, email, and password.
Returns a confirmation message upon successful registration.
POST /api/login:

Logs in a user using their email and password.
Returns a JWT token which should be used for further authenticated requests.
Blog Posts
GET /api/posts:

Fetches a list of all blog posts.
Public route that does not require authentication.
POST /api/posts:

Creates a new post with title and content.
Requires a valid JWT token in the request header (Authorization: Bearer <token>).
DELETE /api/posts/:id:

Deletes a post by id.
Requires a valid JWT token in the request header.
Only the author of the post can delete it.
Project Structure
Frontend (client folder)
public/ - Contains the public assets, including index.html.
src/ - Contains the React components, routes, and app logic.
components/ - Contains all React components (Navbar, Posts, Login, Register, etc.).
App.js - Main app component, defines routes for different pages.
services/ - Contains Axios setup and API requests.
Backend (server folder)
controllers/ - Contains the logic for handling API requests (e.g., creating posts, user registration).
models/ - Contains the MongoDB schema definitions (User, Post).
routes/ - Defines the API routes and associates them with controller methods.
config/ - Contains the database connection setup and other configuration files.
server.js - The entry point for the Express server.
Features and Routes
Home Page:
Displays a list of all blog posts.
Login Page:
Users can log in by entering their email and password.
Upon successful login, a JWT token is stored in localStorage.
Register Page:
Allows new users to register with their username, email, and password.
After registration, the user is redirected to the login page.
Dashboard (User's Post List):
Displays a list of posts created by the logged-in user.
Only authenticated users can see this page.
New Post Page:
Authenticated users can create new blog posts by providing a title and content.
After creating a post, the user is redirected to the dashboard.
Logout:
Clears the JWT token from localStorage and redirects the user to the login page.
Contributing
We welcome contributions to this project! Please follow the steps below to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to your fork (git push origin feature-name).
Open a pull request to the main repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React for building the frontend
Express for the backend API
MongoDB for database management
JWT for user authentication
Bootstrap for responsive design
