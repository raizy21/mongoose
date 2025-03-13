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
export const createUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
  } = req;
});

export const getUserById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
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
