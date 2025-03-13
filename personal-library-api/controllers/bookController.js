import Book from "../models/book.js"; // import Book model

// get all books
export async function getBooks(req, res) {
  try {
    // find all books
    const books = await Book.find(req.query);
    // send books as a response
    res.json(books);
  } catch (err) {
    // send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}

// create a book
export async function createBook(req, res) {
  try {
    // create a new book
    const book = new Book(req.body);
    // save the book
    await book.save();
    // send the book as a response
    res.status(201).json(book);
  } catch (err) {
    // send an error message if there is an error 400
    res.status(400).json({ message: err.message });
  }
}

// get a book by id
export async function getBookById(req, res) {
  try {
    // find a book by id
    const book = await Book.findById(req.params.id);
    // send a message if the book is not found 404
    if (!book) return res.status(404).json({ message: "Book not found" });
    // send the book as a response
    res.json(book);
  } catch (err) {
    // send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}

// update a book
export async function updateBook(req, res) {
  try {
    // find a book by id and update it
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // send the book as a response
    res.json(book);
  } catch (err) {
    // send an error message if there is an error 400
    res.status(400).json({ message: err.message });
  }
}

// delete a book
export async function deleteBook(req, res) {
  try {
    // find a book by id and delete it
    await Book.findByIdAndDelete(req.params.id);
    // send a message if the book is deleted
    res.json({ message: "Book deleted" });
  } catch (err) {
    //  send an error message if there is an error 500
    res.status(500).json({ message: err.message });
  }
}
