import { Schema, model } from "mongoose"; // schema and model from mongoose

// User schema
const userSchema = new Schema({
  firstName: { type: String, required: [true, "First name is required"] }, // required first name
  lastName: { type: String, required: [true, "Last name is required"] },    // required last name
  email: { type: String, required: [true, "Email is required"], unique: true },   // required email
  createdAt: { type: Date, default: Date.now }, // default date
});

// export the model
export default model("User", userSchema);
