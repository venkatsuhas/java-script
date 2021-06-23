// import { Route, NavLink } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { serviceManager } from "./services";
import BookContext  from "./BookContext";
import AuthorBooks from "./AuthorBooks";

function AuthorList(props: any) {
  const initialState = useContext(BookContext);
  const [clicked,SetClicked]=useState("");


  const service = new serviceManager();

  const color=(selected:any) =>{
      return {
          color:selected?"blue":"black"
      };
  }
  useEffect(() => {
    // service.getAllBooks(initialState.dispatch);
    service.getAllAuthors(initialState.dispatch);
    // eslint-disable-next-line
  }, []);
  const authors = initialState.books.authors;
  
  return (
    <div>
      <h2>Authors...</h2>
      {/* eslint-disable-next-line */}
      <div className="authorContainer">
        <div className="authors">
          {authors.map((author: any, index: any) => {
            return (
              <div>
                <br />
                <h5
                  id="author-list"
                  onClick={() => {
                      SetClicked(author)
                    service.getBooksByAuthorName(initialState.dispatch, author);
                  }}
                >
                  <p style={color(clicked===author)}>{author}</p>
                </h5>
              </div>
            );
          })}
        </div>
        <div className="authorBooks">
          <AuthorBooks />
        </div>
      </div>
    </div>
  );
}

export default AuthorList;
