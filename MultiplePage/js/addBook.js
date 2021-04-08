import { Book } from "./Book.js";
var Books = [];
var addBook = (e) => {
    e.preventDefault();
    let id = document.getElementById("Id").value;
    let title = document.getElementById("Title").value;
    let author = document.getElementById("Author").value;
    let rating = document.getElementById("Rating").value;
    let price = document.getElementById("Price").value;
    Books.push(new Book(id, title, author, rating, price));
    localStorage.setItem("MyBooks", JSON.stringify(Books));
};
var add = document.getElementById("form");
add.addEventListener("submit", addBook);
// localStorage.setItem("MyBooks", JSON.stringify(Books));
