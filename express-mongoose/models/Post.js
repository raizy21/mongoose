import { Schema, model, ObjectId } from "mongoose"; // import schema, model, and ObjectId from mongoose

// Post schema
const postSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] }, // required title
  content: { type: String, required: [true, "Content is required"] }, // required content
  author: { type: Schema.Types.ObjectId, ref: "User" }, // reference to User
  createdAt: { type: Date, default: Date.now }, // default date
});

// export the model Post
export default model("Post", postSchema);
