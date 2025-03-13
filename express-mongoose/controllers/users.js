import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

import User from "../models/User.js"; // import the User model

// GET /users
export const getUsers = asyncHandler(async (req, res) => {
  // get all users with find
  const users = await User.find();
  // send the users as JSON response 200
  res.status(200).json(users);
});

// POST /users
export const createUser = asyncHandler(async (req, res) => {
  // get the firstName, lastName, and email from the request body
  const {
    body: { firstName, lastName, email },
  } = req;
  // check if firstName, lastName, and email are provided
  if (!firstName || !lastName || !email)
    throw new ErrorResponse(
      "First name, last name, and email are required",
      400
    ); // if not, throw an error
  // check if the email already exist with findOne
  const found = await User.findOne({ email });
  // if found, throw an error
  if (found) throw new ErrorResponse("Email already exists", 400);
  // create a new user with create
  const user = await User.create({ firstName, lastName, email });
  // send the user as JSON response 201
  res.status(201).json(user);
});

// GET /users/:id
export const getUserById = asyncHandler(async (req, res) => {
  // get the id from the request params
  const {
    params: { id },
  } = req;
  // find the user by id
  const user = await User.findById(id);
  // if not found, throw an error
  if (!user) throw new ErrorResponse("User not found", 404);
  // send the user as JSON response 200
  res.status(200).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id },
  } = req;
});

export const deleteUser = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
});
