// const express = require('express')
import express from 'express'
// import book from './bookModel'
import authenticate from './loginHandler'
export const bookRouter = express.Router()
// const book = require('./bookModel')

import {
    getAllBooks,
    getBooksById,
    getBooksByAuthor,
    getBooksByTitle,
    getBooksByRating,
    getBooksByPrice,
    addBooks,
    modifyBooks,
    deleteBooks,
    addReview,
    getReview,
}from "./bookController" 



bookRouter.get('/', getAllBooks)

bookRouter.get('/:id', getBooksById)

bookRouter.get('/by/:author', getBooksByAuthor)

bookRouter.get('/by/title/:title', getBooksByTitle)

bookRouter.get('/by/rating/:rating',getBooksByRating )

bookRouter.get('/priced/:min/:max', getBooksByPrice)

bookRouter.post('/',authenticate, addBooks)

bookRouter.patch('/:id',authenticate,modifyBooks)

bookRouter.delete('/:id',authenticate,deleteBooks)

bookRouter.get('/review/:id',getReview)

bookRouter.post('/review',authenticate,addReview)



// module.exports = router
