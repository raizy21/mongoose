import express from "express"; // import express
import {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js"; // import controller functions

const router = express.Router(); // create a router

// create a router
// router.get("/book", (req, res) => {
// res.send("book route");
// });

router.route("/").get(getBooks).post(createBook); // create a route for get and post requests
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook); // create a route for get, put and delete requests

// export a router
export default router;
