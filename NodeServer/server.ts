import * as http from 'http';
// var fs = require("fs");
import * as fs from 'fs';
import {Handler} from "./bookHandler";
import {forms} from "./forms";
// var {parse}=require("querystring");
let books;
var rs = fs.createReadStream(__dirname+"/db.json","utf8");
rs.on("data",chunk=>{
    let data=JSON.parse(chunk.toString());
    books=data.books;
});

let h=new Handler() ;
let f = new forms();

let server = http.createServer((req,res)=>{
    if(req.url=="/books"){
        console.log(req.method);
        res.writeHead(200,{"content-Type":"text/json"});
        res.end(JSON.stringify(books))
    }
    if(req.url.indexOf("/books/")==0){
        h.bookDetailHandler(req,res);
    }
    if(req.url==="/books/add"){
        console.log(req.method);
        if(req.method==='POST'){
            h.addBookHandler(req,res);
        }else{
            f.addForm(req,res);
        }  
    }
    if(req.url==="/books/modify"){
        if(req.method==='PUT'){
            h.changeDetailsHandler(req,res);
        }else{
        f.changeDetails(req,res);
        }
    }
    if(req.url.indexOf("/books?")==0&& req.method==='DELETE'){
            console.log(req.method);
            h.deleteBook(req,res);
    }
    else{
        res.writeHead(404,{"content-Type":"text/plain"});
        res.end();
    }
});
let port=8000;
server.listen(port,()=>{
    console.log(`running on port:${port}`);
})
server.on("Error",err=>console.log("error",err.message));