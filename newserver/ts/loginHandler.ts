import express from 'express';
// import mongoose from 'mongoose';
import User from './registratonSchema';
// import Otp from './otpSchema'
// const Otp = require('./otpSchema')
import jwt from 'jsonwebtoken';
import { getAllUsers,setRoles } from './loginController';
export const userRouter = express.Router()

const accountSid = "AC07b9d1e3b64bf09a98dafac19369d5c6";
const authToken = "b4f93e93b70c463e164d4797a4ccfd94";
const client = require('twilio')(accountSid, authToken);



let authorize=(req: any, res: any, next: any)=> {
    console.log("inside");
    
    User.find({ roles: "admin" }).then((users:any)=>{
        console.log("users",typeof req.user.id);
        console.log(typeof users[0]._id);
        
        if (users.find((admin: any) => admin._id.toString() === req.user.id)) {
          next()
        } else {
          res.status(403).send("unauthorized user");
        }
    })
   
  }
userRouter.post('/login', async (req: any, res: any) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        try {
            const userData = await User.findOne({ username: username, password: password })
            if (userData) {
                // console.log("line:20");
                
                otpGenerator(req, res,userData._id);
                // const user={username:username,password:password}
                // const token=jwt.sign(user,"suhas007");
                // res.json(token);
                //send a jwt token to client containing encrypted otp and expiery date.call a ticket
                // res.status(200).json("logged In")
            } else {
                res.status(401).json("Invalid")
            }
        }
        catch (err) {
            res.send("Error" + err)
        }
    }
})

function otpGenerator(req: any, res: any,id:any) {

    // userRouter.post('/sendOTP', (req: any, res: any) => {
        // const phone = req.body.phone;
        const otp = Math.floor(100000 + Math.random() * 900000)
        const ttl = 2 * 60 * 60
        const expires = Date.now() + ttl;
        // console.log(expires);
        
        // const data = `${phone}.${otp}.${expires}`

        client.messages.create({
            body: `your OneTime Login Password is ${otp}`,
            from: +17046120688,
            to: +919490202969,
        }).then(async(msg: any) =>await User.updateOne({"otp":otp,"time":expires}) ).catch((err: any) => console.error(err))
        //send a ticket which is a jwt token containing otp and ticket
        const verified = {"otp":otp,"time":expires,id}
        const encry = jwt.sign(verified,"suhas");
        res.status(200).send({ msg: "otp sent",ticket:encry})
    // })
}

userRouter.post('/otpverification',ticketverify,async(req:any,res:any,next:any)=>{
    //req.body should contain otp and ticket
    const otp = req.body.otp;
    const ticket = req.body.ticket;
    
    if(otp&&ticket){
        try{
            //get auth from ticket
            // const auth = await User.findOne({otp:otp,ticket})
            // console.log(auth);
            // if(auth){
                // if(Date.now()>=User.time){
                //     res.status(401).json("otp expired")
                // }
                // else{
    console.log("ticketData",typeof req.ticket.otp);
    console.log(typeof otp);
                    
                    if(req.ticket.otp.toString()===otp){
                        console.log("inside");
                        
                    const authData = {id:req.ticket.id}
                    const token=jwt.sign(authData,"suhas007");
                    // console.log(token);
                    
                    res.status(200).json({token:token,username:User.username});
                    }
                // }
            // }
        }catch(err){
            console.log(err);
            
        }
    }else{
        res.status(403).json("Wrong Otp");
    }
})
export function ticketverify(req:any,res:any,next:any){
    const ticket = req.body.ticket;

    jwt.verify(ticket, "suhas", (err: any, ticketData: any) => {
        if (err) {
            return res.status(403).json("wrong ticket:" + err.message);
        }
        
        req.ticket = ticketData;
        next();
    })
}
let authenticate=(req:any,res:any,next:any)=>{
    next()
}
let MyClosure = (func: any) => {
    return (req: any, res: any,next:any) => {
      const header = req.header("Authorization");
      const token = header && header.split(" ")[1];
   
      if (token == null) {
        return res.sendStatus(401);
      }
      jwt.verify(token, "suhas007", (err: any, user: any) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json("Session Expired...Please Login Again!");
          }
          return res.status(403).json("SomeThing Went Wrong:" + err.message);
        }
        req.user=user
        console.log(req.user);
        
        func(req,res,next)
      });
    };
  };
   
authorize=MyClosure(authorize)
export default authenticate=MyClosure(authenticate)

userRouter.get('/',authorize,getAllUsers)
userRouter.patch('/:username',authorize,setRoles)

userRouter.post('/registration', async (req: any, res: any) => {
    const newUser = new User(req.body)
    try {
        const u1 = await newUser.save()
        res.json(u1)
    } catch (err) {
        res.status(500).send({message:err.messsage})
    }
})


