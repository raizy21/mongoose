# Postman test

# Users

##### Users Data Models/Schema

- userSchema

  - firstName: { type: String, required: [true, "First name is required"] }, // required first name
  - lastName: { type: String, required: [true, "Last name is required"] }, // required last name
  - email: { type: String, required: [true, "Email is required"], unique: true }, // required email
  - createdAt: { type: Date, default: Date.now }, // default date

  ### CRUD Users

- GET - all users

  - Postman
    - GET Url: http://localhost:8080/users
    - Response: []

- POST - a users

  - Postman - POST Url: http://localhost:8080/users
    - body:
      `{"firstName": "andrei","lastName": "razvan","email": "andrei@gmail.com"}`
    - Response :
      `{"firstName": "andrei","lastName": "razvan","email": "andrei@gmail.com","_id":"67d2699ef02196576454ca55","createdAt": "2025-03-13T05:14:06.472Z","__v": 0}`

- GET - users by id

  - Postman
    - GET Url: http://localhost:8080/users/67d268dcb83055b1c8600115
    - Response: `[{"_id": "67d268dcb83055b1c8600115","firstName": "andrei","lastName": "razvan","email": "andreirazvan@gmail.com","createdAt": "2025-03-13T05:10:52.903Z","__v": 0}]`

- PUT - users by id

  - Postman
    - PUT Url: http://localhost:8080/users/67d268dcb83055b1c8600115
      - body: `{"firstName": "chiper","lastName": "chiper","email": "email@gmail.com"}`
    - Response: `{"_id": "67d268dcb83055b1c8600115","firstName": "chiper","lastName": "chiper","email": "email@gmail.com","createdAt": "2025-03-13T05:10:52.903Z","__v": 0}`

- DELETE - an user by id
  - Postman
    - DELETE Url: http://localhost:8080/users/67d268dcb83055b1c8600115
    - Response: `{"message": "User deleted"}`

# Posts

##### Posts Data Models/Schema

- postSchema

  - title: { type: String, required: [true, "Title is required"] }, // required title
  - content: { type: String, required: [true, "Content is required"] }, // required content
  - author: { type: Schema.Types.ObjectId, ref: "User" }, // reference to User
  - createdAt: { type: Date, default: Date.now }, // default date

### CRUD Posts

- POST - a posts

  - Postman - POST Url: http://localhost:8080/posts
    - body:
      `{"title":"banana title","content": "banana content","author": "67d268fcd665589a918768c6" }`
    - Response :
      `{"title": "banana title","content": "banana content","author": {"_id": "67d268fcd665589a918768c6","firstName": "andrei","lastName": "chiper"},"_id": "67d27d42221d48edb73bc1fd","createdAt": "2025-03-13T06:37:54.326Z","__v": 0}`

- GET - all posts

  - Postman
    - GET Url: http://localhost:8080/posts
    - Response: `[ {"_id":"67d27ff0674099011a32930f""title": "title","content": "content","author": {"_id": "67d2699ef02196576454ca55","firstName": "andrei","lastName": "razvan"},"createdAt":"2025-03-13T06:49:20236Z","__v": 0}]`
