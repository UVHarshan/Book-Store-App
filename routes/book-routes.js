const express = require('express');
const router = express.Router();
const Book = require("../models/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);

router.post("/", booksController.addBook);

module.exports = router;