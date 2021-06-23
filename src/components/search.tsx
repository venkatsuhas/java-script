import { useState,useContext } from "react";
import BookContext from './BookContext';
import {serviceManager} from './services'



const SearchBar=(props: any)=> {
  const [searchInput, setSearchInput] = useState("");
  const [selected,setSelected] = useState("");
  const initialState =useContext(BookContext)

  // const searchDisplay=()=>{
    // console.log(initialState.books.searchedBook);

const services = new serviceManager()

    
    // let searchBook=initialState.books.searchedBook.map((book:any)=>{
    //   console.log(book);
    //   return(
    //             <div>
    //             <img style={{width:"100px"}} id="img" src={book.cover} alt={book.title} />
    //             <h4>{book.title}</h4>
    //             {/* <p>Rating:{book.rating}</p> */}
    //             <Star value={book.rating} />
    //             <p className="price">
    //               <strong>₹{book.price}</strong>
    //             </p>
    //             </div>
    //   )
    // })
  // }



  function handleSearch(event: any) {
    setSearchInput(event.target.value);
  }
  function handleChange(event: any) {
    setSelected(event.target.value);
  }
  return (
    <div className="searchDiv">
      <select className="select" onChange={handleChange}>
        <option value="text">Select</option>
        <option value="id">Id</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
        <option value="price">price</option>
        <option value="text">Text</option>
      </select>
      <input
      className="search"
        type="text"
        name="id"
        required
        placeholder="Enter here to search"
        onChange={handleSearch}
      />
      <button
        id="search-button"
        type="submit"
        onClick={() =>{services.handleSearchSubmit(searchInput,selected,initialState.dispatch)}}
      >
        Search
      </button>
      {/* {
        searchBook
      } */}
    </div>
  );
}

export default SearchBar;