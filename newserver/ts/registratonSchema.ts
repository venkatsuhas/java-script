const mongoosee = require('mongoose')
const userSchema = new mongoosee.Schema({

    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:false

    },
    phonenumber: {
        type: String,
        required:false
    },
    address: {
        type: String,
        required:false
    },
    otp: {
        type: String,
        required: false
    },
    time:{
        type:String,
        required:false
    },
    roles:{
        type:Array
    }
    

},

    { collection: "Authentication" }
)
export = mongoosee.model('User', userSchema)