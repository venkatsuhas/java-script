import {parse} from 'querystring';
import * as fs from 'fs';
var books;
export class Handler{

bookDetailHandler=function(req,res){
    let [,,str] = req.url.split('/');
    // const id=new URLSearchParams('?'+str).get('id');
    if(str){
        books.forEach((b)=>{
            if(b.id==str){
                res.writeHead(200,{'content-Type':'text/json'});
                res.end(JSON.stringify(b));
            }
        });
        
    }
}
addBookHandler=function(req,res){
        let result = "";
        req.on('data',chunk=>result+=chunk.toString());
        req.on('end',()=>{
            let adding:any = parse(result);
            class Book{
                id:string;
                title:string;
                author:string;
                rating:number;
                price:number;
                constructor(id:string,title:string,author:string,rating:number,price:number){
                    // this.id:=books[books.length-1].id+1;
                    this.id=id;
                    this.title=title;
                    this.author=author;
                    this.rating=rating;
                    this.price=price;
                }
            }
            let book = new Book(adding.id,adding.title,adding.author,adding.rating,adding.price);
            books.push(book);
            console.log(books);
            let dbJson=`{"books":${JSON.stringify(books,undefined,4)}}`;

            fs.writeFile('./db.json',dbJson,err=>{
                if(err){
                console.log(err);
                }
            });
 
        });
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end("Books Added Successfully");
}
changeDetailsHandler=function(req,res){
    let result = "";
        req.on('data',chunk=>result+=chunk.toString());
        req.on('end',()=>{
            let adding = parse(result);
            // books.forEach(book=>{
            for(let i=0;i<books.length;i++){
                if(books[i].id==adding.id){
                    books[i]=adding;
                }
            }
            // })
            // console.log(books);
            let dbJson=`{"books":${JSON.stringify(books,undefined,4)}}`;
            fs.writeFile('./db.json',dbJson,err=>{
                if(err){
                console.log(err);
                }
            });

        });
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end("Modified Successfully");
}
deleteBook=function(req,res){
    let [,str] = req.url.split('?');
    const id=new URLSearchParams('?'+str).get('id');
    books=books.filter(book=>book.id!=id);
    let dbJson=`{"books":${JSON.stringify(books,undefined,4)}}`;
    fs.writeFile('./db.json',dbJson,err=>{
    if(err){
        console.log(err);
    }
    else{
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end("Deleted Successfully");
    }
    });

}
}


// module.exports={
//     bookDetailHandler,
//     addBookHandler,
//     changeDetailsHandler,
//     deleteBook

// }
