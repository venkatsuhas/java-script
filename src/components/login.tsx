import React,{useState,useContext} from 'react';
// import {useHistory} from 'react-router-dom'
import {useHistory,useLocation} from 'react-router-dom';
import { Button,Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookContext from './BookContext';
// import FormDialog from './DropDown'
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export default function Login(){
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const initialState =useContext(BookContext)
  const history = useHistory();
  const url = useLocation();
  console.log(url.search);
  const res = url.search.split("=")[1];
  console.log(res);
  
  
  const [open, setOpen] = React.useState(false);
  const [anotherOtp,SetanotherOtp] = React.useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginFailed,setLoginFailed]=useState<string>("")
  const [nocredentials,setNocredentials]=useState<string>("")

  console.log(initialState);
  


   const handleSubmit = (e:any) => {
     SetanotherOtp(e.target.value);
   };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOtp=async(otp:any)=>{
    let auth=await fetch("http://localhost:8000/users/otpverification",{
      method:"POST",
      body:JSON.stringify({otp:otp}),
      headers:{"Content-Type":"application/json"}
    });
    let token=await auth.json(); 

    if(token){
      localStorage.setItem("token",token.token);
      // initialState.books.user=true;
      console.log(token.username+"useranme");
      
      initialState.dispatch({type:"LOGIN",username:token.username})
      initialState.books.otp=true;

    }
    
  }

  
    const authentication=async (username:string,password:string)=>{
      if(!username&&!password){
        setNocredentials("yes");
      }else{
        setNocredentials("no");
        handleClickOpen();
      }
    
      let auth=await fetch("http://localhost:8000/users/login",{
        method:"POST",
        body:JSON.stringify({username:username,password:password}),
        headers:{"Content-Type":"application/json"}
      });
      
      // let token=await auth.json(); 
      if(auth.status===200){
        // console.log("otp");
        
        // setUser(false);
        setLoginFailed("success");
        // initialState.dispatch({type:})
      }else{
        // localStorage.setItem("token",token);
        // setUser(true);
        setLoginFailed("failed");
      }
    }
  
  function inputlusername(e: any) {
    setUserName(e.target.value)
  }
  function inputlpassword(e: any) {
    setPassword(e.target.value)
  }
    return (<>

<Form>
  <Form.Group as={Col} controlId="formGridEmail">    
  <div style={{color:"red"}}>{res}</div>
  {/* <h1>{res}</h1> */}
    <Form.Label>User Name </Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={inputlusername}/>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={inputlpassword}/>
  </Form.Group>
</Form>
        <Button variant="success" type="button" onClick={()=>{authentication(username,password);}}> Login</Button>
        <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter OTP</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleSubmit}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{handleClose();handleOtp(anotherOtp);history.push("/addbook")}} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      
    {nocredentials==="yes"?<div style={{color:"red"}}>Please enter Username And Password</div>:null}

        {loginFailed==="failed"?<div style={{color:"red"}}>Invalid UserName or Password </div>:null}
    </>

    )
}
// export default Login