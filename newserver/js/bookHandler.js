"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
// const express = require('express')
var express_1 = __importDefault(require("express"));
// import book from './bookModel'
var loginHandler_1 = __importDefault(require("./loginHandler"));
exports.bookRouter = express_1.default.Router();
// const book = require('./bookModel')
var bookController_1 = require("./bookController");
exports.bookRouter.get('/', bookController_1.getAllBooks);
exports.bookRouter.get('/:id', bookController_1.getBooksById);
exports.bookRouter.get('/by/:author', bookController_1.getBooksByAuthor);
exports.bookRouter.get('/by/title/:title', bookController_1.getBooksByTitle);
exports.bookRouter.get('/by/rating/:rating', bookController_1.getBooksByRating);
exports.bookRouter.get('/priced/:min/:max', bookController_1.getBooksByPrice);
exports.bookRouter.post('/', loginHandler_1.default, bookController_1.addBooks);
exports.bookRouter.patch('/:id', loginHandler_1.default, bookController_1.modifyBooks);
exports.bookRouter.delete('/:id', loginHandler_1.default, bookController_1.deleteBooks);
exports.bookRouter.get('/review/:id', bookController_1.getReview);
exports.bookRouter.post('/review', loginHandler_1.default, bookController_1.addReview);
// module.exports = router
