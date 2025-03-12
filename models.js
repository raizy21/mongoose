// models/User.js
import { Schema, model } from "mongoose"; // import Schema and model from mongoose

// create a new schema
const userSchema = new Schema({
  firstName: { type: String, required: [true, "First name is required"] }, // define firstName field
  lastName: { type: String, required: [true, "Last name is required"] }, // define lastName field
  email: { type: String, required: [true, "Email is required"], unique: true }, //  define email field
  createdAt: { type: Date, default: Date.now }, // define createdAt field
});

// export the model
export default model("User", userSchema);
