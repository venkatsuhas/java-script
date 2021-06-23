"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
var express_1 = __importDefault(require("express"));
exports.authorRouter = express_1.default.Router();
var authController_1 = require("./authController");
exports.authorRouter.get('/', authController_1.getAllAuthors);
