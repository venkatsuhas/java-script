const mongoosee = require('mongoose')
const otpSchema = new mongoosee.Schema({

    otp: {
        type: String,
        required: false
    },
    time:{
        type:String,
        requires:false
    }

},

    { collection: "otp" }
)
export = mongoosee.model('Otp', otpSchema)