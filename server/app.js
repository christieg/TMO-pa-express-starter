const express = require("express");
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

let book_list = [];

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});

app.post("/api/books", (req, res) => {
  response = {
    id: book_list.length + 1,
    author: req.body.author,
    title: req.body.title,
    datePublished: req.body.datePublished
    };
  book_list.push(response)
  res.status(200).send(book_list[response.id-1])

});

app.get("/api/books", (req, res) => {
book_list.sort((first, second) => {
    if (first.title > second.title)
    {
      return 1;
    }
    if (first.title < second.title)
    {
      return -1;
    }
    return 0;
  });

  res.status(201).send(book_list)

});

app.delete("/api/books", (req, res) => {
    book_list = []
  
    res.status(204).send(book_list)
  
  });



module.exports = app;
