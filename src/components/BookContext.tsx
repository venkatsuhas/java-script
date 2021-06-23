import React, {useReducer} from 'react';
import { bookReducer } from './bookReducer';
// import {serviceManager} from './services'

interface Iusercontext{
    books:{
    books:[],
    selectedBook:any,
    searchedBook:[],
    storeBook:any,
    toggle:any,
    otp:any,
    username:any,
    reviews:[],
    authorsBooks: [],
    authors: [],
    user:any,
    }
    dispatch:React.Dispatch<any>,

    // users:[]
}
const initialState={
    books:[],
    searchedBook:[],
    selectedBook:"",
    storeBook:"",
    toggle:false,
    otp:true,
    username:"",
    reviews:[],
    authorsBooks: [],
    authors: [],
    user:false,

}

// const services = new serviceManager
const BookContext = React.createContext<Iusercontext>({} as Iusercontext);

export const BookContextProvider = (props:any) => {
  const [books, dispatch] = useReducer(bookReducer,initialState,()=>{
      return initialState;
  })
// console.log(books);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

// export {BookContextProvider}
export default BookContext;