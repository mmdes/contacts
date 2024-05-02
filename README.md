# JavaScript Project with Express, MongoDB, and EJS
---

This project is a web application built with JavaScript, utilizing the following technologies and concepts:

## Technologies Used

- **Node.js**: A runtime environment for executing JavaScript code on the server.
- **Express**: A framework for creating web applications in Node.js.
- **MongoDB**: A NoSQL database for data storage.
- **EJS**: A view engine for rendering HTML pages on the server.
- **jQuery**: A JavaScript library for DOM manipulation and frontend interactivity.

## Implemented Features

1. **Data Storage in MongoDB**:
   - We use MongoDB to persist application data.
   - We create models (schemas) to represent system entities (e.g., users, posts, etc.).
   - CRUD operations are implemented to interact with the database.

2. **Password Hashing in the Database**:
   - To ensure user password security, we use hash functions (e.g., bcrypt) to store encrypted passwords in the database.

3. **Working with Sessions**:
   - User authentication is implemented using sessions.
   - It was used express-session to manage user sessions.

4. **Express Routes**:
   - We define routes for different parts of the application (e.g., authentication, user profile, posts, etc.).
   - Middleware functions handle authentication, data validation, etc.

5. **Flash Messages**:
   - Feedback messages are displayed to users (e.g., successful login, error creating a post, etc.).

6. **Object-Oriented Programming with JavaScript Classes**:
   - Our code is organized into classes for better maintenance and reusability.
   - Concepts of inheritance, encapsulation, and polymorphism are applied.

7. **Frontend with EJS and jQuery**:
   - EJS is used to render HTML pages on the server.
   - jQuery is employed for DOM manipulation and frontend interactivity.

8. **MVC Pattern (Model-View-Controller)**:
   - We structure our code following the MVC pattern.
   - Responsibilities are separated for models, views, and controllers.

9. **Constructor Functions and Object-Oriented Approach**:
   - We create objects and instances using constructor functions.
   - Prototypes are used to add methods and properties to objects.
  
---

## How to Run this Application
Follow these steps to run the application in development mode:
1. **Install Dependencies**:
   - First, install all the necessary dependencies by running the following command:
     ```bash
     npm install
     ```
2. **MongoDB and Session Setup**:
   - Create a connection with MongoDB:
     - Set up your MongoDB connection string in a `.env` file. Your `.env` file should look like this:
       ```
       CONNECTIONSTRING=<YOUR_MONGO_DB_CONNECTION_STRING>
       SESSIONSECRET=<YOUR_CHOSEN_SESSION_SECRET>
       ```
     - Replace `<YOUR_MONGO_DB_CONNECTION_STRING>` with your actual MongoDB connection string.
     - Choose a secure value for `<YOUR_CHOSEN_SESSION_SECRET>` to use as your session secret.

3. **Run the Application**:
   - After setting up the environment variables, run the following commands:
     ```bash
     npm run dev
     npm run start
     ```
   - The application will start in development mode, and you can access it via your browser.
---
## Interface and Usability
<img src="https://github.com/mmdes/contacts/assets/57081161/eb758582-ee68-46df-beba-ade1a3df815b"></img>
