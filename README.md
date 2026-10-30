# RBAC Assessment – Role-Based Access Control System

A full-stack Role-Based Access Control (RBAC) application developed using Next.js, TypeScript, Node.js, Express.js and MongoDB.

The application demonstrates user authentication, JWT-based authorization, role management, protected routes and user management through an interactive dashboard.

## Project Overview

The RBAC application is designed to manage users based on their roles and permissions.

It supports three primary roles:

* **Admin** – Administrative access and user management.
* **Manager** – Access to member management features.
* **Member** – Access to personal dashboard and profile information.

The project follows a separated frontend and backend architecture.

## Live Demo

**Frontend:** http://localhost:3000

> The frontend currently runs locally. A public deployment link will be added after deployment.

## Technologies Used

### Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* Axios
* React Hooks

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* CORS
* dotenv

### Development Tools

* Visual Studio Code
* Postman
* MongoDB Atlas
* Git and GitHub

## Features

### Authentication

* User registration
* User login
* Password hashing using bcrypt
* JWT access token generation
* JWT refresh token generation
* Token verification
* Protected API endpoints
* User profile retrieval
* Logout functionality

### Role-Based Access Control

* Admin role
* Manager role
* Member role
* Role-based authorization middleware
* Protected routes based on user permissions

### User Management

* Retrieve registered users
* View user details
* Update user roles
* Delete users

### Member Management

* Create members
* View members
* Update member details
* Delete members
* Search and pagination support in the member listing API

### Dashboard

* User profile information
* Role information
* User management overview
* Dashboard statistics interface

## Project Structure

```text
RBAC-Assessment/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   ├── memberController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   ├── memberModel.js
│   │   ├── refreshTokenModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── memberRoutes.js
│   │
│   ├── utils/
│   │   ├── generateAccessToken.js
│   │   └── generateRefreshToken.js
│   │
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── app/
    │   ├── dashboard/
    │   ├── login/
    │   ├── members/
    │   ├── profile/
    │   ├── register/
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── components/
    ├── services/
    └── package.json
```

## Installation and Setup

### Prerequisites

Install the following:

* Node.js
* npm
* MongoDB Atlas account
* Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/shruthi06071995/RBAC-Assessment.git
```

Navigate into the project:

```bash
cd RBAC-Assessment
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_access_token_secret

JWT_REFRESH_SECRET=your_refresh_token_secret
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

## API Endpoints

### Authentication APIs

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| POST   | `/auth/register` | Register a user                 |
| POST   | `/auth/login`    | Login                           |
| POST   | `/auth/refresh`  | Generate a new access token     |
| POST   | `/auth/logout`   | Logout                          |
| GET    | `/auth/profile`  | Retrieve logged-in user profile |

### User Management APIs

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/users`           | Retrieve all users     |
| GET    | `/admin/users`     | Retrieve users (Admin) |
| GET    | `/admin/users/:id` | Retrieve user details  |
| PUT    | `/admin/users/:id` | Update user role       |
| DELETE | `/admin/users/:id` | Delete user            |

### Member APIs

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| GET    | `/members`     | Retrieve members        |
| GET    | `/members/:id` | Retrieve member details |
| POST   | `/members`     | Create a member         |
| PUT    | `/members/:id` | Update member           |
| DELETE | `/members/:id` | Delete member           |

## Security

The application uses:

* bcrypt for password hashing.
* JWT for authentication.
* Separate access and refresh token secrets.
* Protected backend routes.
* Role-based authorization middleware.
* Environment variables for sensitive configuration.

**Security Note:** Never upload your `.env` file, MongoDB credentials or JWT secrets to GitHub.

## Testing

Backend APIs can be tested using Postman.

The main authentication workflows include:

1. Register a new user.
2. Login using registered credentials.
3. Receive access and refresh tokens.
4. Access protected endpoints using a Bearer token.
5. Test role-based authorization.
6. Verify logout and token invalidation.

## Learning Outcomes

Through this project, I practised:

* Building REST APIs using Express.js.
* Connecting MongoDB using Mongoose.
* Implementing JWT authentication.
* Password hashing using bcrypt.
* Creating authentication and authorization middleware.
* Implementing role-based access control.
* Connecting a Next.js frontend with backend APIs.
* Managing application state using React Hooks.
* Testing APIs with Postman.

## Future Improvements

* Complete role-specific dashboard functionality.
* Improve member management interface.
* Add comprehensive input validation.
* Implement automated unit and integration tests.
* Add Swagger API documentation.
* Improve responsive UI and animations.
* Deploy the frontend and backend.

## Author

**Shruthi**

GitHub: [@shruthi06071995](https://github.com/shruthi06071995)

---

Developed as a Full Stack Developer Assessment Project.
