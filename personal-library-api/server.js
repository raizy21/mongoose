import express from "express"; //  import express
import mongoose from "mongoose"; //  import mongoose
import dotenv from "dotenv"; // import dotenv
import userRoutes from "./routes/userRoutes.js"; // import userRoutes
import bookRoutes from "./routes/bookRoutes.js"; // import bookRoutes

dotenv.config(); // configure dotenv
const app = express(); // create an express app

// middleware
app.use(express.json());

// create a route
app.get("/", (req, res) => {
  res.send("hello world from nodejs!");
});

// routes
app.use("/user", userRoutes);
app.use("/book", bookRoutes);

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`)
);
