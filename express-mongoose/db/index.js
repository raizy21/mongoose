import mongoose from "mongoose"; // import mongoose

try {
  await mongoose.connect(process.env.MONGO_URI);  // connect to MongoDB
  console.log("MongoDB connected"); // log success message
} catch (error) {
  console.error("MongoDB connection error:", error);  // log error message
  process.exit(1);  // end Node process
}
