import React, {useEffect} from 'react'
import Card from './Card'
import Video from './Video'
import image from '../images/html.png'
import css from '../images/css.png'
import rt from '../images/react.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    
    return (
        <div>
            <Video />
            {/* <div className="container-fluid " className="d-flex justify-content-center">
                <div className="row">
                    <div data-aos="fade-left" className="col-lg-4 col-md-4 ">
                        <Card imgsrc={image} title="HTML5" text="I can code in HTML5" />
                    </div>
                    <div data-aos="fade-down" className="col-lg-4 col-md-4">
                        <Card imgsrc={css} title="CSS3" text="I can code in CSS3" />
                    </div>
                    <div data-aos="fade-right" className="col-4">
                        <Card imgsrc={rt} title="React" text="I can code in React" />
                    </div>
                </div>

            </div>
            <div className="container-fluid " className="d-flex justify-content-center p-5">
            <div className="row">
                    <div data-aos="slide-left" className="col-lg-4 col-md-4">
                        <Card imgsrc={image} title="HTML5" text="I can code in HTML5" />
                    </div>
                    <div data-aos="slide-right" className="col-lg-4 col-md-4">
                        <Card imgsrc={css} title="CSS3" text="I can code in CSS3" />
                    </div>
                    <div data-aos="slide-left" className="col-4">
                        <Card imgsrc={rt} title="React" text="I can code in React" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home
