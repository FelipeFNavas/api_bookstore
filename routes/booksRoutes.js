import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BookController.getBooks)
  .get("/books/get", BookController.getBooksByPublisher)
  .get("/books/:id", BookController.getBookById)
  .post("/books", BookController.addBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;
