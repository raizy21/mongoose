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

- GET - users by id

  - Postman
    - GET Url: http://localhost:8080/users/67d268dcb83055b1c8600115
    - Response: `[{"_id": "67d268dcb83055b1c8600115","firstName": "andrei","lastName": "razvan","email": "andreirazvan@gmail.com","createdAt": "2025-03-13T05:10:52.903Z","__v": 0}]`

- Put - users by id

  - Postman
    - PUT Url: http://localhost:8080/users/67d268dcb83055b1c8600115
      - body: `{"firstName": "chiper","lastName": "chiper","email": "email@gmail.com"}`
    - Response: `{"_id": "67d268dcb83055b1c8600115","firstName": "chiper","lastName": "chiper","email": "email@gmail.com","createdAt": "2025-03-13T05:10:52.903Z","__v": 0}`
