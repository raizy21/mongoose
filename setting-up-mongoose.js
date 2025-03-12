// db/index.js

// import mongoose
import mongoose from "mongoose";

try {
  // connect
  await mongoose.connect(process.env.MONGO_URI); // connect to MongoDB
  console.log("MongoDB connected"); // log success message
} catch (error) {
  // log error and end Node process if it fails
  console.error("MongoDB connection error:", error); // log error message
  process.exit(1);  // end Node process
}
