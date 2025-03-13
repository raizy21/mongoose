import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Post from "../models/Post.js"; // import the Post model from models/Post.js

export const getPosts = asyncHandler(async (req, res) => {});

export const createPost = asyncHandler(async (req, res) => {
  const {
    body: { title, content, userId },
  } = req;
});

export const getPostById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
});

export const updatePost = asyncHandler(async (req, res) => {
  const {
    body: { title, content, userId },
    params: { id },
  } = req;
});

export const deletePost = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
});
