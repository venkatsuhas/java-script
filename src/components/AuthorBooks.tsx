import { useContext, useEffect } from "react";
import { serviceManager } from "./services";
import  BookContext  from "./BookContext";
import Star from './star-component'


function AuthorsBooks(props: any) {
  const initialState = useContext(BookContext);
  // const { dispatch } = useContext(BookContext);

  let authorBooks = initialState.books.authorsBooks;

  const service = new serviceManager();

  useEffect(() => {
    service.getAllBooks(initialState.dispatch);
    // eslint-disable-next-line
  }, [initialState]);

  return (
    <div>
      {/* eslint-disable-next-line */}
      <div>
        {authorBooks.length !== 0
          ? authorBooks.map((book: any, index: any) => {
              return (
                <div>
                    <div
                      className="book-card"
                      id={book._id}
                    >
                      <br />
                      <img id="img" src={book.cover} alt={book.title} />
                      <h3>{book.title}</h3>
                      <p className="price">
                        <strong>₹{book.price}</strong>
                      <Star value={book.rating}></Star>

                      </p>
                    </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default AuthorsBooks;
