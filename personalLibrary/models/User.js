import { Schema, model } from "mongoose";

const readingListItemSchema = new Schema({
  bookRefId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  status: {
    type: String,
    enum: ["read", "in-progress", "pending"],
    required: true,
  },
});

const userSchema = new Schema(
  {
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    readingList: [readingListItemSchema],
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
