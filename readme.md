````markdown
# endGame

endGame is a Node.js backend API for user management and video streaming functionality. The API provides user authentication, profile management, and video watch history tracking, among other features.

## Features

- User Registration and Login
- JWT-based Authentication
- User Profile Management (Avatar and Cover Image)
- Password Change
- Video Watch History Tracking
- Token Refresh Mechanism

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Multer for file uploads
- Bcrypt for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/p369m/endGame.git
   cd endGame
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRY=your_access_token_expiry_time
   REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry_time
   MONGO_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Public Routes

- **POST /register**: Register a new user (upload avatar and cover image)
- **POST /login**: Login with email and password

### Protected Routes (JWT Required)

- **POST /logout**: Logout user
- **POST /refresh-token**: Refresh access token
- **POST /change-password**: Change current user password
- **GET /current-user**: Get current user details
- **PATCH /update-account**: Update user account details
- **PATCH /avatar**: Update user avatar
- **PATCH /cover-image**: Update user cover image
- **GET /c/:username**: Get user channel profile
- **GET /history**: Get user watch history

## Middleware

- **verifyJWT**: Verifies the JWT token for protected routes.
- **upload**: Handles file uploads using Multer.

## Models

- **User**: User schema with methods for password hashing, token generation, and authentication.

```

```
