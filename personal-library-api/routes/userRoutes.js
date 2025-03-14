import express from "express"; // import express
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addBookToUser,
  updateUserBook,
  deleteUserBook,
} from "../controllers/userController.js"; // import controller functions
const router = express.Router(); // create a router

// create a router
// router.get("/user", (req, res) => {
//   res.send("user route");
// });

router.route("/").get(getUsers).post(createUser); // create a route for get and post requests
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser); //  create a route for get, put and delete requests
router.route("/:id/books").post(addBookToUser); // route to add a book to a user's reading list
router.route("/:id/books/:bookId").put(updateUserBook); // route to update a user's book status
router.route("/:id/books/:bookId").delete(deleteUserBook); // route to delete a user's book

// export a router
export default router;
