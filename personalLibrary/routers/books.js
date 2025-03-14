import { Router } from "express";
import {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/books.js";

const router = Router();

router.route("/").get(getBooks).post(createBook);
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

export default router;
