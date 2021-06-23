import book from './bookModel'
import Review from './reviewSchema'
// import {authenticate} from './loginHandler'


export const getAllBooks=async(req:any,res:any) => {
    try{
           const books = await book.find()
           res.json(books)
    }catch(err){
        res.status(404).send('Error ' + err)
    }
}

export const getBooksById=async(req:any,res:any) => {
    try{
           const books = await book.findById(req.params.id)
           if(books){
           res.json(books)
           }else{
               res.json("Book not found")
           }
    }catch(err){
        res.status(404).send('Error ' + err)
    }
}

export const getBooksByAuthor=async(req:any,res:any) => {
    try{
           const books = await book.find({author:req.params.author})
        //    res.json(books)
        res.send(JSON.stringify(books))
    }catch(err){
        res.send('Error ' + err)
    }
}

export const getBooksByTitle=async(req:any,res:any) => {
    try {
        const title=new RegExp(req.params.title,'i')
           const books = await book.find({title})
        //    res.json(books)
        res.send(books)
    }catch(err){
        res.send('Error ' + err)
    }
}

export const getBooksByRating=async (req:any,res:any)=>{
    try{
         let books= await book.find({rating:{$gte:req.params.rating}})
        // console.log(JSON.stringify(books))
        res.send(books)
    }
    catch(err){
        res.send('Error ' + err)
    }
}

export const getBooksByPrice=async (req:any,res:any)=>{
    try{
console.log(req.params.min)
        let books= await book.find({$and:[
            
            {price:{$gte:req.params.min}},
            
            {price:{$lte:req.params.max}}
        ]})
        // console.log(JSON.stringify(books))
        res.send(books)
    }
     catch(err){
        res.send('Error ' + err)
    }
}

export const addBooks=async(req:any,res:any) => {
    const books = new book({
        // console.log("hii");
        title: req.body.title,
        author: req.body.author,
        rating: req.body.rating,
        price: req.body.price,
        description:req.body.description,
        cover:req.body.cover,
    })

    try{
        // console.log("hii");
        const a1 =  await books.save()
        // console.log("hello");
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
}

export const modifyBooks=async(req:any,res:any)=> {
    try{
        const books:any|null = await book.findById(req.params.id)
        if(req.body.title)
        books.title = req.body.title
        if(req.body.author)
        {
            console.log("hii");
            books.author=req.body.author
        }
        if(req.body.rating)
        books.rating=req.body.rating
        if(req.body.price)
        books.price=req.body.price
        const a1 = await books.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

}

export const deleteBooks=async(req:any,res:any)=> {
    try{
        const books:any|null = await book.findById(req.params.id) 
        // books.sub = req.body.sub
        const a1 = await books.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

}

export const addReview=async(req:any,res:any)=>{
    try{
        const {book_id,username,review,rating}=req.body;
        let reviews:any = new Review({
            book_id,username,review,rating
        })
        await reviews.save();
        res.send("review added");
        }catch(err){
            res.send(err.message+"not reviewed");
        }
}

export const getReview=async(req:any,res:any)=>{
    try{
        const book_id=req.params.id;
        let reviews = await Review.find({book_id});
        res.send(reviews);
    }catch(err){
        res.send(err.message)
    }
}