const Book = require('../models/Book');

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message: " No books found!" });
    }
    return res.status(200).json({ books });
}

const addBook = async (req,res,next) => {
    const {name, author, description, price, available} = req.body; // Destructuring request body
    let book;

    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available
        });
        await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(500).json({ message: " Unable to add the book!!" });
    }
    return res.status(201).json({ book });


}


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;