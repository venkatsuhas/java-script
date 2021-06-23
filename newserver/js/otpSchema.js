"use strict";
var mongoosee = require('mongoose');
var otpSchema = new mongoosee.Schema({
    otp: {
        type: String,
        required: false
    },
    time: {
        type: String,
        requires: false
    }
}, { collection: "otp" });
module.exports = mongoosee.model('Otp', otpSchema);
