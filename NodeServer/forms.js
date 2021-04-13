"use strict";
exports.__esModule = true;
exports.forms = void 0;
var forms = /** @class */ (function () {
    function forms() {
        this.changeDetails = function (req, res) {
            res.end("<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n        <meta charset=\"UTF-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document</title>\n        </head>\n        <body>\n        <center>\n        <form action=\"/\" method=\"PUT\">\n        <label for=\"\">Enter id</label>\n        <input type=\"text\" name=\"id\" id=\"id\" placeholder=\"Enter id\"><br>\n        <label for=\"\">Enter Title</label>\n        <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Enter Title\"><br>\n        <label for=\"\">Enter author</label>\n        <input type=\"text\" name=\"author\" id=\"author\" placeholder=\"Enter author\"><br>\n        <label for=\"\">Enter rating</label>\n        <input type=\"text\" name=\"rating\" id=\"rating\" placeholder=\"Enter rating\"><br>\n        <label for=\"\">Enter price</label>\n        <input type=\"text\" name=\"price\" id=\"price\" placeholder=\"Enter price\"><br>\n        <button type=\"submit\">Modify Book</button>\n        </form>\n        </center>\n        </body>\n        </html>");
        };
        this.addForm = function (req, res) {
            res.end("<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    </head>\n    <body>\n    <center>\n    <form action=\"/\" method=\"POST\">\n    <label for=\"\">Enter Id</label>\n    <input type=\"text\" name=\"id\" id=\"id\" placeholder=\"Enter id\"><br>\n    <label for=\"\">Enter Title</label>\n    <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Enter Title\"><br>\n    <label for=\"\">Enter author</label>\n    <input type=\"text\" name=\"author\" id=\"author\" placeholder=\"Enter author\"><br>\n    <label for=\"\">Enter rating</label>\n    <input type=\"text\" name=\"rating\" id=\"rating\" placeholder=\"Enter rating\"><br>\n    <label for=\"\">Enter price</label>\n    <input type=\"text\" name=\"price\" id=\"price\" placeholder=\"Enter price\"><br>\n    <button type=\"submit\">Add Book</button>\n    </form>\n    </center>\n    </body>\n    </html>");
        };
    }
    return forms;
}());
exports.forms = forms;
// // module.exports={
//     addForm,
//     changeDetails
// }
