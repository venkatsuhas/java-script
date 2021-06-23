type State = {
  books: [],
  selectedBook: any,
  searchedBook: any[],
  toggle: any,
  storeBook: any,
  notFound:any
}
type Action = | { type: "ADDBOOK", addBook: [] }
  | { type: "DELETE", deleteBook: String }
  | { type: "SelectedBook", selectedBook: any }
  | { type: "LOGIN", username: any }
  | { type: "LOGOUT" }
  | { type: "GET_REVIEW", payload: any }
  | { type: "SearchById", searchBookById: any }
  | { type: "SearchByAuthor", searchBookByAuthor: any }
  | { type: "SearchByTitle", searchBookByTitle: any }
  | { type: "SearchByRating", searchBookByRating: any }
  | { type: "SearchByPrice", searchBookByPrice: any }
  | { type: "List", BookList: any }
  | { type: "NEW" }
  | { type: "DATA", storedata: any }
  |{ type: "AUTHOR_LIST", authorList:any}
  |{ type: "AUTHORS_BOOKS", authorBooks:any}





export const bookReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case "AUTHOR_LIST":
      // console.log(action.BookList);
      return {
        ...state,
        authors: action.authorList,
      };
    case "AUTHORS_BOOKS":
      return {
        ...state,
        clicked: true,
        authorsBooks: action.authorBooks,
      };
    case "GET_REVIEW":
      return {
        ...state, reviews: action.payload
      }
    case 'NEW':
      return {
        ...state,
        toggle: false
      }
    case 'LOGIN':
      console.log(action.username);

      return {
        ...state,
        user: true,
        username: action.username
      }
    case 'LOGOUT':
      return {
        ...state,
        user: false
      }
    case 'DATA':
      return {
        ...state,
        storeBook: action.storedata
      }
    case 'List':
      // console.log(action.BookList);
      // state.toggle=false
      // console.log("toogleBookList");

      return {
        ...state,
        toggle: false,
        books: action.BookList
      }
    case 'ADDBOOK':
      // console.log(action.addBook);
      // return state.books.concat(action.addBook);
      return {
        ...state,
        books: [...state.books, action.addBook]
      }
    case 'SelectedBook':
      return {
        ...state,
        selectedBook: action.selectedBook
      }
    case "SearchById":
      // console.log(action.searchBookById);

      return {
        ...state,
        toggle: true,
        searchedBook: [action.searchBookById]
      }
    case "SearchByAuthor":
      // console.log(action.searchBookByAuthor);

      return {
        ...state,
        toggle: true,
        searchedBook: [action.searchBookByAuthor]
      }
    case "SearchByTitle":
      // console.log(action.searchBookByTitle);

      return {
        ...state,
        toggle: true,
        searchedBook: [action.searchBookByTitle]
      }
    case "SearchByRating":
      // console.log(action.searchBookByRating);

      return {
        ...state,
        searchedBook: [action.searchBookByRating]
      }
    case "SearchByPrice":
      // console.log(action.searchBookByPrice);

      return {
        ...state,
        searchedBook: [action.searchBookByPrice]
      }
    case 'DELETE':
      // console.log(action.deleteBook);
      return {
        ...state,
        books: state.books.filter((book: any) => book._id !== action.deleteBook)
      };
    default:
      return state;
  }
};