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
exports.ticketverify = exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
// import mongoose from 'mongoose';
var registratonSchema_1 = __importDefault(require("./registratonSchema"));
// import Otp from './otpSchema'
// const Otp = require('./otpSchema')
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var loginController_1 = require("./loginController");
exports.userRouter = express_1.default.Router();
var accountSid = "AC07b9d1e3b64bf09a98dafac19369d5c6";
var authToken = "b4f93e93b70c463e164d4797a4ccfd94";
var client = require('twilio')(accountSid, authToken);
var authorize = function (req, res, next) {
    console.log("inside");
    registratonSchema_1.default.find({ roles: "admin" }).then(function (users) {
        console.log("users", typeof req.user.id);
        console.log(typeof users[0]._id);
        if (users.find(function (admin) { return admin._id.toString() === req.user.id; })) {
            next();
        }
        else {
            res.status(403).send("unauthorized user");
        }
    });
};
exports.userRouter.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, userData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.body.username;
                password = req.body.password;
                if (!(username && password)) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, registratonSchema_1.default.findOne({ username: username, password: password })];
            case 2:
                userData = _a.sent();
                if (userData) {
                    // console.log("line:20");
                    otpGenerator(req, res, userData._id);
                    // const user={username:username,password:password}
                    // const token=jwt.sign(user,"suhas007");
                    // res.json(token);
                    //send a jwt token to client containing encrypted otp and expiery date.call a ticket
                    // res.status(200).json("logged In")
                }
                else {
                    res.status(401).json("Invalid");
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.send("Error" + err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
function otpGenerator(req, res, id) {
    var _this = this;
    // userRouter.post('/sendOTP', (req: any, res: any) => {
    // const phone = req.body.phone;
    var otp = Math.floor(100000 + Math.random() * 900000);
    var ttl = 2 * 60 * 60;
    var expires = Date.now() + ttl;
    // console.log(expires);
    // const data = `${phone}.${otp}.${expires}`
    client.messages.create({
        body: "your OneTime Login Password is " + otp,
        from: +17046120688,
        to: +919490202969,
    }).then(function (msg) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registratonSchema_1.default.updateOne({ "otp": otp, "time": expires })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); }).catch(function (err) { return console.error(err); });
    //send a ticket which is a jwt token containing otp and ticket
    var verified = { "otp": otp, "time": expires, id: id };
    var encry = jsonwebtoken_1.default.sign(verified, "suhas");
    res.status(200).send({ msg: "otp sent", ticket: encry });
    // })
}
exports.userRouter.post('/otpverification', ticketverify, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var otp, ticket, authData, token;
    return __generator(this, function (_a) {
        otp = req.body.otp;
        ticket = req.body.ticket;
        if (otp && ticket) {
            try {
                //get auth from ticket
                // const auth = await User.findOne({otp:otp,ticket})
                // console.log(auth);
                // if(auth){
                // if(Date.now()>=User.time){
                //     res.status(401).json("otp expired")
                // }
                // else{
                console.log("ticketData", typeof req.ticket.otp);
                console.log(typeof otp);
                if (req.ticket.otp.toString() === otp) {
                    console.log("inside");
                    authData = { id: req.ticket.id };
                    token = jsonwebtoken_1.default.sign(authData, "suhas007");
                    // console.log(token);
                    res.status(200).json({ token: token, username: registratonSchema_1.default.username });
                }
                // }
                // }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            res.status(403).json("Wrong Otp");
        }
        return [2 /*return*/];
    });
}); });
function ticketverify(req, res, next) {
    var ticket = req.body.ticket;
    jsonwebtoken_1.default.verify(ticket, "suhas", function (err, ticketData) {
        if (err) {
            return res.status(403).json("wrong ticket:" + err.message);
        }
        req.ticket = ticketData;
        next();
    });
}
exports.ticketverify = ticketverify;
var authenticate = function (req, res, next) {
    next();
};
var MyClosure = function (func) {
    return function (req, res, next) {
        var header = req.header("Authorization");
        var token = header && header.split(" ")[1];
        if (token == null) {
            return res.sendStatus(401);
        }
        jsonwebtoken_1.default.verify(token, "suhas007", function (err, user) {
            if (err) {
                if (err.name === "TokenExpiredError") {
                    return res.status(401).json("Session Expired...Please Login Again!");
                }
                return res.status(403).json("SomeThing Went Wrong:" + err.message);
            }
            req.user = user;
            console.log(req.user);
            func(req, res, next);
        });
    };
};
authorize = MyClosure(authorize);
exports.default = authenticate = MyClosure(authenticate);
exports.userRouter.get('/', authorize, loginController_1.getAllUsers);
exports.userRouter.patch('/:username', authorize, loginController_1.setRoles);
exports.userRouter.post('/registration', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, u1, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = new registratonSchema_1.default(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newUser.save()];
            case 2:
                u1 = _a.sent();
                res.json(u1);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(500).send({ message: err_2.messsage });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
