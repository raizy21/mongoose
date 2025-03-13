import mongoose from "mongoose"; // import mongoose

// create a schema
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // title field
  author: { type: String, required: true }, // author field
  isbn: { type: String, required: true, unique: true }, // isbn field
  category: { type: String }, // category field
});

// export a Book model
export default mongoose.model("Book", BookSchema);
