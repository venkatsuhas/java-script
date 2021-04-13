"use strict";
exports.__esModule = true;
var http = require("http");
// var fs = require("fs");
var fs = require("fs");
var bookHandler_1 = require("./bookHandler");
var forms_1 = require("./forms");
// var {parse}=require("querystring");
var books;
var rs = fs.createReadStream(__dirname + "/db.json", "utf8");
rs.on("data", function (chunk) {
    var data = JSON.parse(chunk.toString());
    books = data.books;
});
var h = new bookHandler_1.Handler();
var f = new forms_1.forms();
var server = http.createServer(function (req, res) {
    if (req.url == "/books") {
        console.log(req.method);
        res.writeHead(200, { "content-Type": "text/json" });
        res.end(JSON.stringify(books));
    }
    if (req.url.indexOf("/books/") == 0) {
        h.bookDetailHandler(req, res);
    }
    if (req.url === "/books/add") {
        console.log(req.method);
        if (req.method === 'POST') {
            h.addBookHandler(req, res);
        }
        else {
            f.addForm(req, res);
        }
    }
    if (req.url === "/books/modify") {
        if (req.method === 'PUT') {
            h.changeDetailsHandler(req, res);
        }
        else {
            f.changeDetails(req, res);
        }
    }
    if (req.url.indexOf("/books?") == 0 && req.method === 'DELETE') {
        console.log(req.method);
        h.deleteBook(req, res);
    }
    else {
        res.writeHead(404, { "content-Type": "text/plain" });
        res.end();
    }
});
var port = 8000;
server.listen(port, function () {
    console.log("running on port:" + port);
});
server.on("Error", function (err) { return console.log("error", err.message); });
