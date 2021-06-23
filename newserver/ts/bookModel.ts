// const mon = require('mongoose')

import mon from 'mongoose';


const bookSchema = new mon.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }

})
export = mon.model('book',bookSchema)
