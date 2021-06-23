"use strict";
var mongoosee = require('mongoose');
var userSchema = new mongoosee.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    phonenumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    otp: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    roles: {
        type: Array
    }
}, { collection: "Authentication" });
module.exports = mongoosee.model('User', userSchema);
