import { useState, useEffect } from 'react'
import "./Articles.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Articles = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const interval = setInterval(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            handleResize();
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    const settings = {
        dots: windowDimensions.width <= 375 ? true : false,
        dotsStyle: "slick-active",
        infinite: true,
        speed: 1200,
        slidesToShow: windowDimensions.width <= 375 ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
    }

    return (
        <div className='article__wrapper'>
            <h1 className='article__heading'>What they've said</h1>
            <Slider className='slider__name' {...settings}>
                <div className='slide'>
                    <div className='slide__image__container'>
                        <img className='slide__image' src="./images/avatar-anisha.png" />
                    </div>
                    <div className='slide__content'>
                        <h3 className='slide__heading'>Anisha Li</h3>
                        <p className='slide__para'>
                            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated"
                        </p>
                    </div>

                </div>
                <div className='slide'>
                    <div className='slide__image__container'>
                        <img className='slide__image' src="./images/avatar-ali.png" />
                    </div>
                    <div className='slide__content'>
                        <h3 className='slide__heading'>Ali Bravo</h3>
                        <p className='slide__para'>
                            "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
                        </p>
                    </div>
                </div>
                <div className='slide'>
                    <div className='slide__image__container'>
                        <img className='slide__image' src="./images/avatar-richard.png" />
                    </div>
                    <div className='slide__content'>
                        <h3 className='slide__heading'>Richard Watts</h3>
                        <p className='slide__para'>
                            "Manage allows us to provide structure and process.It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"
                        </p>
                    </div>
                </div>
                <div className='slide'>
                    <div className='slide__image__container'>
                        <img className='slide__image' src="./images/avatar-shanai.png" />
                    </div>
                    <div className='slide__content'>
                        <h3 className='slide__heading'>Shanai Gough</h3>
                        <p className='slide__para'>
                            "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
                        </p>
                    </div>
                </div>
            </Slider>

            <div className='article__button'>
                Get Started
            </div>
        </div>
    )
}

export default Articles