"use strict";
// const mon = require('mongoose')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var reviewSchema = new mongoose_1.default.Schema({
    book_id: {
        type: String,
    },
    username: {
        type: String,
    },
    review: {
        type: String,
    },
    rating: {
        type: Number,
    },
});
module.exports = mongoose_1.default.model('review', reviewSchema);
