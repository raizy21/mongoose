# Personal Library API

A RESTful API built with Node.js, Express, and MongoDB for managing a personal library, allowing users to track books they have read or are currently reading.

### Features

- User Management (Create, Read, Update, Delete Users)
- Book Management (Create, Read, Update, Delete Books)
- User Reading List (Add, Update, Delete Books in a User's List)
- MongoDB Database
- RESTful API with JSON Responses

### Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- ODM: Mongoose
- Environment Variables: Dotenv
- Development: Nodemon

### Installation & Setup

- Clone the Repository
  `git clone git@github.com:raizy21/mongoose.git cd mongoose cd personal-library-api`
- Install Dependencies
  `npm install`
- Setup Environment Variables
  `MONGO_URI=your-neon-mongodb-connection-string PORT=8080`

### Run the API

`npm run dev`

# API Endpoints

### User Endpoints

- Get All Users `GET /users`
- Create a New User `POST /users` Request Body: `{"firstName": "Razvan","lastName": "Andrei"}`
- Get a Single User by ID `GET /users/:id`
- Update a User `PUT /users/:id`
- Delete a User `DELETE /users/:id`

### Book Endpoints

= Get All Books `GET /books`

- Create a New Book `POST /books` Request Body: `{"title": "The Hobbit","author": "J.R.R. Tolkien","isbn": "978-0261103344","category": "Fantasy"}`
- Get a Single Book by ID `GET /books/:id`
- Update a Book `PUT /books/:id`
- Delete a Book `DELETE /users/:id`

# User Reading List Endpoints

- Add a Book to a User's Reading List `POST /users/:id/books` Request Body: `{"bookRefId": "bookId","status": "in-progress"}`
- Update a Book Status in User's Reading List `PUT /users/:id/books/:bookId` Request Body: `{"status": "read"}`
- Remove a Book from User's Reading List `DELETE /users/:id/books/:bookId`

# Database Schema

### User Schema

`{"_id": "ObjectId","firstName": "String","lastName": "String","readingList": [{"_id": "ObjectId","bookRefId": "ObjectId","status": "String"}]}`

### Book Schema

`{"_id": "ObjectId","title": "String","author": "String","isbn": "String","category": "String"}`
