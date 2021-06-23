import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useFormik } from "formik";


// import {Route,Link,HashRouter} from 'react-router-dom';
// import Home from './home'
import {Button, Form, Col } from 'react-bootstrap';
// interface Iprops {
//   handleregistration: (newUser: any) => void
// }
const Register = () => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  // const [address, setAddress] = useState("");
  const history = useHistory();

  // function inputusername(e: any) {
  //   setUserName(e.target.value)
  // }
  // function inputpassword(e: any) {
  //   setPassword(e.target.value)
  // }
  // function inputphonenumber(e: any) {
  //   setPhonenumber(e.target.value)
  // }
  // function inputaddress(e: any) {
  //   setAddress(e.target.value)
  // }

  const handleNewUser=async(newUser:any)=>{
    console.log("reg")
    await fetch("http://localhost:8000/users/registration",{
    method:"POST",
    body:JSON.stringify(newUser),
    headers:{"Content-Type":"application/json"}
    
    })
  }

  const validate = (values:any) => {
    const errors:any = {};

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 6) {
      errors.username = "Must be 7 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    } else if (values.password === "12345") {
      errors.password = "Must not be 12345 !!!";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length < 10) {
      errors.password = "Must be 10 digit";
    }

    if (!values.Address) {
      errors.Address = "Required";
    } else if (values.Address.length < 6) {
      errors.Address = "Must be 6 characters or more";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      phone: "",
      Address: "",

    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });


  return (<>

    {/* <Form>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={inputusername}/>
      </Form.Group>
      <Form.Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={inputpassword} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="email" placeholder="Phone number" onChange={inputphonenumber}/>
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Address" onChange={inputaddress} />
      </Form.Group>
      
    </Form> */}

<div>
      <h1>Register </h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Username</label>

        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
         <label htmlFor="email">Phone</label>

<input
  id="phone"
  name="phone"
  type="text"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.phone}
/>
{formik.touched.phone && formik.errors.phone ? (
  <div className="error">{formik.errors.phone}</div>
) : null}
 <label htmlFor="email">Address</label>

<input
  id="Address"
  name="Address"
  type="text"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.Address}
/>
{formik.touched.Address && formik.errors.Address ? (
  <div className="error">{formik.errors.Address}</div>
) : null}

      </form>
    </div>
      <Button className="style" variant="success" type="button" onClick={() => {handleNewUser({username:formik.values.username,password:formik.values.password,phonenumber:formik.values.phone,address:formik.values.Address});history.push("/login")}}>
            Register
          </Button>

      {/* </div> */}

  </>

  )
}
export default Register
