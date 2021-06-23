import { Route, NavLink } from "react-router-dom";
import Details from "./Details";
import SearchBar from "./search";
import {useEffect ,useContext} from "react";
import Star from "./star-component";
import BookContext from './BookContext'
import {serviceManager} from './services'


function BookList(props: any) {
  const initialState =useContext(BookContext)
// console.log(initialState.books.books,"hii");
console.log(initialState,"hello");


const services = new serviceManager()


  const handleSelect=(book:any)=>{
    initialState.dispatch({type:"SelectedBook",selectedBook:book})
  }
useEffect(()=>{
  services.getAllBooks(initialState.dispatch)
  // eslint-disable-next-line 
},[])

// console.log(initialState.books.toggle,"toggle");




  return (
    <div >
      <SearchBar></SearchBar>
      {/* eslint-disable-next-line */}
    {initialState.books.toggle?initialState.books.searchedBook.map((book:any)=>{
      console.log(book);
      return(
                <div style={{display:"flex"}}>
                <div>
                <img style={{width:"100px"}} id="img" src={book.cover} alt={book.title} />
                <h4>{book.title}</h4>
                {/* <p>Rating:{book.rating}</p> */}
                <Star value={book.rating} />
                <p className="price">
                  <strong>₹{book.price}</strong>
                </p>
                </div>
                </div>
      )
    }):initialState.books.books.map( (book: any, index: any) =>{
        return (
          <div>
            <NavLink key={book.id} to={"/details/" + book._id}>
              <div onClick={()=>handleSelect(book)} className="book-card" id={book.id}>
                <br />
                <img id="img" src={book.cover} alt={book.title} />
                <h3>{book.title}</h3>
                {/* <p>Rating:{book.rating}</p> */}
                <Star value={book.rating} />
                <p className="price">
                  <strong>₹{book.price}</strong>
                </p>
              </div>
            </NavLink>
            <Route path={"/details/" + book._id} component={Details} />
          </div>
        );
      })}
            
    </div>

  );
}

export default BookList;