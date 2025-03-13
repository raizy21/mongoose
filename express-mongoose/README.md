# Postman test

- GET - all users

  - Postman
    - GET Url: http://localhost:8080/users
    - Response: []

- Post - a users
  - Postman - POST Url: http://localhost:8080/users
    - body:
      `{"firstName": "andrei","lastName": "razvan","email": "andrei@gmail.com"}`
    - Response :
      `{"firstName": "andrei","lastName": "razvan","email": "andrei@gmail.com","_id":"67d2699ef02196576454ca55","createdAt": "2025-03-13T05:14:06.472Z","__v": 0}`
