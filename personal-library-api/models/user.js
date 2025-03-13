import mongoose from "mongoose"; // import mongoose

// create a schema
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, // firstName field
  lastName: { type: String, required: true }, //  lastName field
  readingList: [
    {
      bookRefId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      status: {
        type: String,
        enum: ["read", "pending", "in-progress"],
        default: "pending",
      },
    },
  ], // readingList field
});

// export a User model
export default mongoose.model("User", UserSchema);
