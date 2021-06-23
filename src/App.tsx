import {useState,useEffect,useContext} from 'react';
import {Route,Link,BrowserRouter} from 'react-router-dom';
import Home from './components/home'
import BookList from './components/Booklist'
import {AddBook} from './components/Addbook'
import Details from './components/Details'
import Register from './components/register'
import Login from './components/login'
import AuthorList from "./components/authorlist";
// import NotFound from './components/notFound';

import './App.css';
// import FormDialog from './components/DropDown'


import BookContext from './components/BookContext'


function App(){
  // const [user,setUser]=useState(false)

    const initialState = useContext(BookContext)
    // console.log(initialState);
    

  // const history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      console.log(initialState.books.user);
      // setUser(true);
      initialState.books.user=true;
    // localStorage.clear();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const logout=async()=>{
    // setUser(false);
    initialState.dispatch({type:"LOGOUT"})

    // initialState.books.user=false;
    console.log(initialState.books.user);

    localStorage.clear();
  }

  
    return(
      <div>
      <BrowserRouter>
        <div>
        <h1>Book Management System</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/getAllBooks" onClick={()=>{initialState.dispatch({type:"NEW"})}}>Book List</Link></li>
          <li><Link to="/addbook">Add Books</Link></li>
          <li><Link to="/authorsList">Authors List</Link></li>

          <li id="register">{initialState.books.user?null:<Link to="/register">Register</Link>}</li>
          <li id="login">{initialState.books.user?null:<Link to="/login">Login</Link>}</li>
          <li id="logout">{initialState.books.user?<Link to="/getAllBooks" onClick={()=>logout()}>LogOut</Link>:null}</li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/getAllBooks" component={BookList}></Route>
        <Route exact path="/addbook" component={AddBook}></Route>
        <Route exact path="/details/:id?" component={Details}>
        </Route>
        {/* <Route exact path="/" component={AuthorList}></Route> */}
        <Route exact path="/authorsList" component={AuthorList}></Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/login">
        <Login ></Login>
        </Route>
        {/* <Route path="/notFound" component={NotFound} /> */}
        {/* <Route exact path="/otp" component={FormDialog}></Route> */}
        {/* {initialState.books.otp?<div><FormDialog ></FormDialog></div>:null} */}
        </div>
      </BrowserRouter>
      </div>
    )
}
export default App;
