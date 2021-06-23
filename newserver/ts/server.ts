import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import env from 'dotenv';
import {bookRouter} from './bookHandler';
import {userRouter} from './loginHandler'; 
import {authorRouter} from './authorRoute'; 


const suhas = __dirname+"/suhas"
console.log(__dirname);

env.config();
const url  = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@${process.env.db_server}/BookManagement?retryWrites=true&w=majority`;

const app = express()
app.use(express.static(suhas));
app.use(cors());
app.use(express.json());


mongoose.connect(url, {useNewUrlParser:true}).then(()=>{
app.use('/books',bookRouter)
app.use('/users',userRouter)
app.use('/authors',authorRouter)
app.get('/*',(req:any,res:any)=>{
    res.sendFile(suhas+"/index.html")
})



app.listen(8000, () => {
    console.log('Server started')
})
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


