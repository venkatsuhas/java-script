
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import {books} from "./Addbook"
import Star from './star-component'
import BookContext from './BookContext'
import { serviceManager } from './services'


function Details(props: any) {

    const initialState = useContext(BookContext)
    // let selected=state.selectedBook
    const [question, setQuestion] = useState<any>({});
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [notFound,SetNotFound]=useState("");
    const history = useHistory();
    const { id } = useParams<any>();

    const services = new serviceManager()

    const handleAnswer = (event: any) => {
        setReview(event.target.value);
    };
    const handleRating = (event: any) => {
        setRating(event.target.value)
    }
    const handleSubmit = () => {
        let rev = {
            book_id: id,
            username: initialState.books.username,
            review: review,
            rating: rating,

        };
        console.log(rev);
        services.addReview(initialState.dispatch, rev,)

        // history.push("/details/"+state.SelectedBook._id)
    }

    useEffect(() => {
        services.getReview(initialState.dispatch, id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialState.books.reviews])

    useEffect(() => {

        services.bookDetails(id).then(res => {
            console.log(res);
            if(res.data==="Book not found"){
                SetNotFound(`Book with ${id} Not Found`)
            }else{
            setQuestion(res.data);
            SetNotFound("");
            }
        })

    })
console.log(initialState);

    const name = initialState.books.username;
    // console.log(name);

    return (
        <div>
            {notFound?<h4 style={{textAlign:"center"}}>{notFound}</h4>:
            <div className="card">
                <img style={{ width: "200px" }} id="imgDetails" src={question.cover} alt={question.title} />
                <p><strong>Author:{question.author}</strong></p>
                {/* <p><strong>Rating:{book.rating}</strong></p> */}
                <Star value={question.rating}></Star>
                <p><strong>Price :₹{question.price}</strong></p>
                <h2>{question.title}</h2>
                <p><strong>{question.description}</strong></p>
                {/* {props.valid==="success"?<button id='del-button' onClick={handleClick}>Delete</button>:null} */}
                {localStorage.getItem("token") ? <button id='del-button' onClick={() => { services.bookDelete(initialState.dispatch, initialState.books.selectedBook._id); history.push("/getAllBooks"); }}>Delete</button> : null}

                <div>
                    <div>
                        <textarea
                            placeholder="Leave a comment here"
                            id="Textarea"
                            onChange={handleAnswer}
                        ></textarea>
                        {/* <br /> */}
                        {/* Rating:<input type="text" id="rating" onChange={handleRating} /> */}
                        <select className="custom-select" onChange={handleRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                        <br />
                        <button id="review-submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>

                    <div>
                        {/* <p>comments</p> */}
                        {initialState.books.reviews.map(function (review: any) {

                            return (
                                <>
                                    {/* <p>{review.name}</p> */}
                                    <div className="field">
                                        <>{name}:</>
                                        <div className="stars"><span><Star value={review.rating} /></span></div>
                                        <div>
                                        <b className="review-size">{review.review}</b>
                                        </div>
                                    </div>
                                    </>
                            )
                        })}
                    </div>



                </div>

            </div>}
        </div >
    )
}
export default Details;