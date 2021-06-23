"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var bookHandler_1 = require("./bookHandler");
var loginHandler_1 = require("./loginHandler");
var authorRoute_1 = require("./authorRoute");
var suhas = __dirname + "/suhas";
console.log(__dirname);
dotenv_1.default.config();
var url = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_pass + "@" + process.env.db_server + "/BookManagement?retryWrites=true&w=majority";
var app = express_1.default();
app.use(express_1.default.static(suhas));
app.use(cors_1.default());
app.use(express_1.default.json());
mongoose_1.default.connect(url, { useNewUrlParser: true }).then(function () {
    app.use('/books', bookHandler_1.bookRouter);
    app.use('/users', loginHandler_1.userRouter);
    app.use('/authors', authorRoute_1.authorRouter);
    app.get('/*', function (req, res) {
        res.sendFile(suhas + "/index.html");
    });
    app.listen(8000, function () {
        console.log('Server started');
    });
});
var con = mongoose_1.default.connection;
con.on('open', function () {
    console.log('connected...');
});
