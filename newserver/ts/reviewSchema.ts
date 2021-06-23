// const mon = require('mongoose')

import mon from 'mongoose';


const reviewSchema = new mon.Schema({
    book_id: {
        type: String,
    },
    username: {
        type: String,
    },
    review:{
        type:String,
    },
    rating:{
        type:Number,
    },
})
export = mon.model('review',reviewSchema)
