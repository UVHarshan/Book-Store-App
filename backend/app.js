const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json()); // Solves the Request Sending error ( Destructuring part )
app.use("/books", router);  // http://localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:RUgvdhkzVvnRbk49@cluster0.wj00wl6.mongodb.net/bookstore?retryWrites=true&w=majority"
).then(() => console.log("Connected to the Database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));




//  RUgvdhkzVvnRbk49