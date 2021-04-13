"use strict";
exports.__esModule = true;
exports.Handler = void 0;
var querystring_1 = require("querystring");
var fs = require("fs");
var books;
var Handler = /** @class */ (function () {
    function Handler() {
        this.bookDetailHandler = function (req, res) {
            var _a = req.url.split('/'), str = _a[2];
            // const id=new URLSearchParams('?'+str).get('id');
            if (str) {
                books.forEach(function (b) {
                    if (b.id == str) {
                        res.writeHead(200, { 'content-Type': 'text/json' });
                        res.end(JSON.stringify(b));
                    }
                });
            }
        };
        this.addBookHandler = function (req, res) {
            var result = "";
            req.on('data', function (chunk) { return result += chunk.toString(); });
            req.on('end', function () {
                var adding = querystring_1.parse(result);
                var Book = /** @class */ (function () {
                    function Book(id, title, author, rating, price) {
                        // this.id:=books[books.length-1].id+1;
                        this.id = id;
                        this.title = title;
                        this.author = author;
                        this.rating = rating;
                        this.price = price;
                    }
                    return Book;
                }());
                var book = new Book(adding.id, adding.title, adding.author, adding.rating, adding.price);
                books.push(book);
                console.log(books);
                var dbJson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
                fs.writeFile('./db.json', dbJson, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
            res.writeHead(200, { 'content-Type': 'text/plain' });
            res.end("Books Added Successfully");
        };
        this.changeDetailsHandler = function (req, res) {
            var result = "";
            req.on('data', function (chunk) { return result += chunk.toString(); });
            req.on('end', function () {
                var adding = querystring_1.parse(result);
                // books.forEach(book=>{
                for (var i = 0; i < books.length; i++) {
                    if (books[i].id == adding.id) {
                        books[i] = adding;
                    }
                }
                // })
                // console.log(books);
                var dbJson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
                fs.writeFile('./db.json', dbJson, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
            res.writeHead(200, { 'content-Type': 'text/plain' });
            res.end("Modified Successfully");
        };
        this.deleteBook = function (req, res) {
            var _a = req.url.split('?'), str = _a[1];
            var id = new URLSearchParams('?' + str).get('id');
            books = books.filter(function (book) { return book.id != id; });
            var dbJson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
            fs.writeFile('./db.json', dbJson, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.writeHead(200, { 'content-Type': 'text/plain' });
                    res.end("Deleted Successfully");
                }
            });
        };
    }
    return Handler;
}());
exports.Handler = Handler;
// module.exports={
//     bookDetailHandler,
//     addBookHandler,
//     changeDetailsHandler,
//     deleteBook
// }
