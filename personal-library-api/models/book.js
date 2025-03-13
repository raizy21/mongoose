import mongoose from "mongoose"; // import mongoose

// create a schema
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // title field
  author: { type: String, required: true }, // author field
  isbn: { type: String, required: true, unique: true }, // isbn field
  category: { type: String }, // category field
});

// create a model Book
const Book = mongoose.model("Book", BookSchema);
// export the model book  
export default Book;
