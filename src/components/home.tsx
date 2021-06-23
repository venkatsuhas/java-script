import React from 'react';
import { Carousel } from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-div">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://quotefancy.com/media/wallpaper/3840x2160/4119-Thomas-Jefferson-Quote-I-cannot-live-without-books.jpg"
                            alt="First slide"
                        />
                        </div>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-div">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://quotefancy.com/media/wallpaper/3840x2160/20732-Suzy-Kassem-Quote-Doubt-kills-more-dreams-than-failure-ever-will.jpg"
                            alt="Second slide"
                        />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-div">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://quotefancy.com/media/wallpaper/3840x2160/1896675-Dante-Alighieri-Quote-Follow-your-own-star.jpg"
                            alt="Third slide"
                        />
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

export default Home;