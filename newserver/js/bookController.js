"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = exports.addReview = exports.deleteBooks = exports.modifyBooks = exports.addBooks = exports.getBooksByPrice = exports.getBooksByRating = exports.getBooksByTitle = exports.getBooksByAuthor = exports.getBooksById = exports.getAllBooks = void 0;
var bookModel_1 = __importDefault(require("./bookModel"));
var reviewSchema_1 = __importDefault(require("./reviewSchema"));
// import {authenticate} from './loginHandler'
var getAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1.default.find()];
            case 1:
                books = _a.sent();
                res.json(books);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(404).send('Error ' + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllBooks = getAllBooks;
var getBooksById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1.default.findById(req.params.id)];
            case 1:
                books = _a.sent();
                if (books) {
                    res.json(books);
                }
                else {
                    res.json("Book not found");
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(404).send('Error ' + err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBooksById = getBooksById;
var getBooksByAuthor = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1.default.find({ author: req.params.author })
                    //    res.json(books)
                ];
            case 1:
                books = _a.sent();
                //    res.json(books)
                res.send(JSON.stringify(books));
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.send('Error ' + err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBooksByAuthor = getBooksByAuthor;
var getBooksByTitle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, books, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                title = new RegExp(req.params.title, 'i');
                return [4 /*yield*/, bookModel_1.default.find({ title: title })
                    //    res.json(books)
                ];
            case 1:
                books = _a.sent();
                //    res.json(books)
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.send('Error ' + err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBooksByTitle = getBooksByTitle;
var getBooksByRating = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1.default.find({ rating: { $gte: req.params.rating } })
                    // console.log(JSON.stringify(books))
                ];
            case 1:
                books = _a.sent();
                // console.log(JSON.stringify(books))
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.send('Error ' + err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBooksByRating = getBooksByRating;
var getBooksByPrice = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.params.min);
                return [4 /*yield*/, bookModel_1.default.find({ $and: [
                            { price: { $gte: req.params.min } },
                            { price: { $lte: req.params.max } }
                        ] })
                    // console.log(JSON.stringify(books))
                ];
            case 1:
                books = _a.sent();
                // console.log(JSON.stringify(books))
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.send('Error ' + err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBooksByPrice = getBooksByPrice;
var addBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, a1, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                books = new bookModel_1.default({
                    // console.log("hii");
                    title: req.body.title,
                    author: req.body.author,
                    rating: req.body.rating,
                    price: req.body.price,
                    description: req.body.description,
                    cover: req.body.cover,
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, books.save()
                    // console.log("hello");
                ];
            case 2:
                a1 = _a.sent();
                // console.log("hello");
                res.json(a1);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                res.send('Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addBooks = addBooks;
var modifyBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, a1, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, bookModel_1.default.findById(req.params.id)];
            case 1:
                books = _a.sent();
                if (req.body.title)
                    books.title = req.body.title;
                if (req.body.author) {
                    console.log("hii");
                    books.author = req.body.author;
                }
                if (req.body.rating)
                    books.rating = req.body.rating;
                if (req.body.price)
                    books.price = req.body.price;
                return [4 /*yield*/, books.save()];
            case 2:
                a1 = _a.sent();
                res.json(a1);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                res.send('Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.modifyBooks = modifyBooks;
var deleteBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, a1, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, bookModel_1.default.findById(req.params.id)
                    // books.sub = req.body.sub
                ];
            case 1:
                books = _a.sent();
                return [4 /*yield*/, books.remove()];
            case 2:
                a1 = _a.sent();
                res.json(a1);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                res.send('Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteBooks = deleteBooks;
var addReview = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, book_id, username, review, rating, reviews, err_10;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, book_id = _a.book_id, username = _a.username, review = _a.review, rating = _a.rating;
                reviews = new reviewSchema_1.default({
                    book_id: book_id, username: username, review: review, rating: rating
                });
                return [4 /*yield*/, reviews.save()];
            case 1:
                _b.sent();
                res.send("review added");
                return [3 /*break*/, 3];
            case 2:
                err_10 = _b.sent();
                res.send(err_10.message + "not reviewed");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addReview = addReview;
var getReview = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var book_id, reviews, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                book_id = req.params.id;
                return [4 /*yield*/, reviewSchema_1.default.find({ book_id: book_id })];
            case 1:
                reviews = _a.sent();
                res.send(reviews);
                return [3 /*break*/, 3];
            case 2:
                err_11 = _a.sent();
                res.send(err_11.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getReview = getReview;
