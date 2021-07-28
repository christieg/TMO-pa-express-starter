const express = require("express");
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

let book_json ={books:[]};

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});


app.get("/api/books", (req, res) => {
  res.type('json')
  book_json.books.sort((first, second) => {
    if (first.title > second.title)
    {
      return 1;
    }
    if (first.title < second.title)
    {
      return -1;
    }
    return 0;
  })

  res.status(200).send(book_json)
  
});

app.post("/api/books", (req, res) => {
  response = {
    id: book_json.books.length + 1,
    author: req.body.author,
    title: req.body.title,
    datePublished: req.body.datePublished
    };
    book_json.books.push(response)
  res.status(201).send(book_json.books[response.id-1])

});

app.delete("/api/books", (req, res) => {
  book_json.books = []
  
    res.status(204).send(book_json.books)
  
  });



module.exports = app;
