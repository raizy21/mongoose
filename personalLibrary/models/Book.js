import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
    },
    pages: {
      type: Number,
      required: [true, "Pages is required"],
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Book", bookSchema);
