import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Post from "../models/Post.js"; // import the Post model from models/Post.js

// GET /posts 
export const getPosts = asyncHandler(async (req, res) => {
  // find the post by id and populate the author with firstName and lastName
  const posts = await Post.find().populate("author", "firstName lastName");
  // send the posts as JSON 200
  res.status(200).json(posts);
});

// POST /posts
export const createPost = asyncHandler(async (req, res) => {
  // get the title, content, and author from the request body
  const {
    body: { title, content, author },
  } = req;
  // check if title, content, and author are provided and throw an error if not 400
  if (!title || !content || !author)
    throw new ErrorResponse("Please provide all required fields", 400);
  // create a new post with create title, content, and author
  const post = await Post.create({ title, content, author });
  // populate the author with firstName and lastName
  const postWithAuthor = await post.populate("author", "firstName lastName");
  // send the post with author as JSON
  res.status(201).json(postWithAuthor);
});

export const getPostById = asyncHandler(async (req, res) => {});

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
