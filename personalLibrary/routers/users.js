import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addBookToReadingList,
  updateBookStatusInReadingList,
  removeBookFromReadingList,
} from "../controllers/users.js";

const router = Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/books").post(addBookToReadingList);

router
  .route("/:id/books/:bookId")
  .put(updateBookStatusInReadingList)
  .delete(removeBookFromReadingList);

export default router;
