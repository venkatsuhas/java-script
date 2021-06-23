import User from './registratonSchema'


export const getAllUsers=async(req:any,res:any)=>{
    try{
        let users = await User.find({roles:"admin"})
        res.send(users)
    }catch(err){
        res.send("error")
    }
}

export const setRoles=async(req:any,res:any)=>{
    try{
        const name=req.params.username;
        const users:any|null = await User.findOneAndUpdate({username:name},{roles:req.body.roles});
        console.log(users);
        
        // if(req.body.roles){
        //     users.roles=req.body.roles;
        // console.log(users.roles,"users");
        // }
        // const a1 = await users.save()
        res.json(users);


    }catch(err){
        res.status(500).send({message:err.message});
    }
}