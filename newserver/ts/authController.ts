import book from './bookModel'


export const getAllAuthors=async(req:any,res:any)=>{
    try{
        let books = await book.distinct('author')
        res.send(books)
    }catch(err){
        res.send("error")
    }
}