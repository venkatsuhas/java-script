import React, { useState,useContext } from "react";
import {useHistory} from 'react-router-dom';
// import BookList from "./Booklist";
import Input from './input'
import BookContext from './BookContext'
import {serviceManager} from './services'
// import { url } from "inspector";




  function AddBook(props:any){
  
    // const [id,setId] = useState("");
    const initialState=useContext(BookContext) 

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [price,setPrice] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");
    const [cover,setCover] = useState("");
    const history = useHistory();

const services = new serviceManager()


    // function handleIdChange(input:any) {
    //   setId(input);
      
    // }
    function handleTitleChange(input:any) {
      setTitle(input);
    }
    function handleAuthorChange(input:any) {
      setAuthor(input);
    }
    function handlePriceChange(input:any) {
      setPrice(input);
      
    }
    function handleRatingChange(input:any) {
      setRating(input);
      
    }
    function handleDesChange(input:any) {
      setDescription(input);
      
    }
    function handleCoverChange(input:any) {
      setCover(input);
      
    }
    const handleSubmit=()=>{
      if(localStorage.getItem("token")==null){
        initialState.books.otp=false;
        console.log(initialState.books.otp);
        const book={
          // id:id,
          title:title,
          author:author,
          price:price,
          rating:rating,
          description:description,
          cover:cover
          }
        initialState.dispatch({type:"DATA",storedata:book})
        history.push("/login?message=please login to add book");
      }
      else{
        console.log("why");
        
        history.push("/getAllBooks");
      }
      const book={
      // id:id,
      title:title,
      author:author,
      price:price,
      rating:rating,
      description:description,
      cover:cover
      }
      let token = "Bearer "+localStorage.getItem("token");

      services.addingBooks(initialState.dispatch,book,token)
    }

    return (
      <div className="book-form">
        
  <form className="form-area">
    <h2>ADD NEW BOOK</h2>
        <hr/>
    <div>
        {/* <Input label="Id:" Change={(input:any)=>handleIdChange(input)} required/> */}
        {}
        <Input value={initialState.books.storeBook.title} label="Title:" Change={(input:any)=>handleTitleChange(input)} required/>
        <Input value={initialState.books.storeBook.author} label="Author:" Change={(input:any)=>handleAuthorChange(input)} required/>
        <Input value={initialState.books.storeBook.price} label="Price:" Change={(input:any)=>handlePriceChange(input)} required/>
        <Input value={initialState.books.storeBook.rating} label="Rating:" Change={(input:any)=>handleRatingChange(input)} required/>
        <Input value={initialState.books.storeBook.description} label="Description:" Change={(input:any)=>handleDesChange(input)} required/>
        <Input value={initialState.books.storeBook.cover} label="Cover:" Change={(input:any)=>handleCoverChange(input)} required/>
        
    </div>

    <div>
    <button id="add-button" type="submit" onClick={()=>{handleSubmit();}}>ADD</button>

    </div><br/>
  </form>
      </div>
    );
  }
 
export {AddBook};