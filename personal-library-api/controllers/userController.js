import User from "../models/user.js"; // import User model
import Book from "../models/book.js"; // import Book model

// get all users
export async function getUsers(req, res) {
  try {
    // find all users and populate the readingList field with bookRefId
    const users = await User.find().populate("readingList.bookRefId");
    // send users as a response
    res.json(users);
  } catch (err) {
    // send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}

// create a user
export async function createUser(req, res) {
  try {
    // create a new user
    const user = new User(req.body);
    // save the user
    await user.save();
    // send the user as a response
    res.status(201).json(user);
  } catch (err) {
    // send an error message if there is an error 400
    res.status(400).json({ message: err.message });
  }
}

// get a user by id
export async function getUserById(req, res) {
  try {
    //  find a user by id and populate the readingList field with bookRefId
    const user = await User.findById(req.params.id).populate(
      "readingList.bookRefId"
    );
    // send a message if the user is not found 404
    if (!user) return res.status(404).json({ message: "User not found" });
    //  send the user as a response
    res.json(user);
  } catch (err) {
    // send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}

// update a user
export async function updateUser(req, res) {
  try {
    // find a user by id and update it
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // send the user as a response
    res.json(user);
  } catch (err) {
    // send an error message if there is an error 400
    res.status(400).json({ message: err.message });
  }
}

// delete a user
export async function deleteUser(req, res) {
  try {
    // find a user by id and delete it
    await User.findByIdAndDelete(req.params.id);
    // send a message if the user is deleted
    res.json({ message: "User deleted" });
  } catch (err) {
    // send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}

// add a book to a user
export async function addBookToUser(req, res) {
  try {
    // find a user by id
    const user = await User.findById(req.params.id);
    // send a message if the user is not found 404
    if (!user) return res.status(404).json({ message: "User not found" });

    // find a book by id
    const book = await Book.findById(req.body.bookRefId);
    // send a message if the book is not found 404
    if (!book) return res.status(404).json({ message: "Book not found" });

    // add a book to the user's readingList
    user.readingList.push({
      bookRefId: book._id,
      status: req.body.status || "pending",
    });
    // save the user
    await user.save();
    // send the user as a response
    res.json(user);
  } catch (err) {
    // send an error message if there is an error 400
    res.status(400).json({ message: err.message });
  }
}
