import axios from 'axios'
// import {useHistory} from 'react-router-dom';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const history = useHistory();

export class serviceManager {
    getAllBooks = async (dispatch: any) => {
        await axios.get("http://localhost:8000/books")
            .then((res) => {
                // console.log(res.data);

                dispatch({ type: "List", BookList: res.data })
            }).catch((err) => {
                console.log(err.message);

            })
    }

    addingBooks = async (dispatch: any, book: any, token: any) => {

        let check = await axios.post("http://localhost:8000/books", book, {
            headers: { "Content-Type": "application/json", "Authorization": token },
        })
        if (check.status === 200) {
            // history.push("/getAllBooks");
            dispatch({ type: "ADDBOOK", addBook: book })
        }
    }

    bookDelete = async (dispatch: any, id: any) => {
        let token = "Bearer " + localStorage.getItem("token");
        let check = await axios.delete("http://localhost:8000/books/" + id, {
            headers: { "Content-Type": "application/json", "Authorization": token },
        })
        if (check.status === 200) {
            dispatch({ type: "DELETE", deleteBook: id })

        }
    }

    bookDetails = async (id: any) => {
        let response = await axios.get("http://localhost:8000/books/" + id)
        return response;
    }

    handleSearchSubmit(searchInput: any, selected: any, dispatch: any) {

        if (selected === "author") {
            // console.log("vj");
            axios.get("http://localhost:8000/books/by/" + searchInput)
                .then((res) => {
                    dispatch({ type: "SearchByAuthor", searchBookByAuthor: res.data })
                }).catch((err) => {
                    console.log(err.message);

                })
        } else if (selected === "id") {
            // console.log("vj");
            let response=axios.get("http://localhost:8000/books/" + searchInput)
                .then((res) => {
                    dispatch({ type: "SearchById", searchBookById: res.data })
                }).catch((err) => {
                    console.log(err.message);
                })
                return response; 
        }
        else if (selected === "title") {
            // console.log("vj");
            axios.get("http://localhost:8000/books/by/title/" + searchInput)
                .then((res) => {
                    dispatch({ type: "SearchByTitle", searchBookByTitle: res.data })
                }).catch((err) => {
                    console.log(err.message);

                })
        } else if (selected === "rating") {
            // console.log("vj");
            axios.get("http://localhost:8000/books/by/rating/" + searchInput)
                .then((res) => {
                    dispatch({ type: "SearchByRating", searchBookByRating: res.data })
                }).catch((err) => {
                    console.log(err.message);

                })
        } else if (selected === "price") {
            // console.log("vj");
            axios.get("http://localhost:8000/books/priced/0/" + searchInput)
                .then((res) => {
                    dispatch({ type: "SearchByPrice", searchBookByPrice: res.data })
                }).catch((err) => {
                    console.log(err.message);

                })
        }
    }

    addReview = async (dispatch: any, ans: any) => {
        try {
            let token = "Bearer " + localStorage.getItem("token");
            let response = await axios.post(`http://localhost:8000/books/review`, ans, {
                headers: { "Content-Type": "application/json", "Authorization": token },
            });
        } catch (err: any) {
            if (err) {
                alert("review not added!")
            }
        }
    }

    getReview = async (dispatch: any, id: any) => {

        try {
            let response = await axios.get(`http://localhost:8000/books/review/` + id);
            //   console.log("addAnswer-->",response.data);

            dispatch({ type: "GET_REVIEW", payload: response.data })
        } catch (err: any) {
            if (err) {
                alert("review not added!")
            }
        }
    }

    getAllAuthors = async (dispatch: any) => {
        await axios
            .get("http://localhost:8000/authors")
            .then(response => {
                dispatch({ type: "AUTHOR_LIST", authorList: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    getBooksByAuthorName = async (dispatch: any, author: any) => {
        await axios
            .get("http://localhost:8000/books/by/" + author)
            .then(response => {
                dispatch({ type: "AUTHORS_BOOKS", authorBooks: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

}

