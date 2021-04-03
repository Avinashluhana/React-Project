import React, { useEffect } from 'react'
import Card from './Card'
import img from '../images/pp.png'
import './About.css'
import Footer from '../Components/Footer'
import image from '../images/html.png'
import css from '../images/css.png'
import rt from '../images/react.png'
import Aos from 'aos';
import js1 from '../images/js1.png'
import java from '../images/java.png'
import mysql from '../images/mysql.png'
const Aboutus = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="image">
                            <img src={img} data-aos="fade-left" className="text-align-center" />
                            <div className="overlay">Avinash kumar</div>
                        </div>
                    </div>
                    <div className="col-lg-4 co-md-4 col-sm-12">
                        <div data-aos="fade-right" className="content">
                            <h1> Wanna know about me</h1>
                            <ul>
                                <li>Student of Mehran University</li>
                                <li>I am a Software Engineer</li>
                                <li>I have skills in Web development</li>
                                <li>I can make Responsive websites</li>
                                <li>Hope you like my services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-left" className="col-lg-4 col-md-12 col-sm-12">
                        <Card imgsrc={image} title="HTML5" text="I can code in HTML5" />
                    </div>
                    <div data-aos="fade-down" className="col-lg-4 col-md-12">
                        <Card imgsrc={css} title="CSS3" text="I can code in CSS3" />
                    </div>
                    <div data-aos="fade-right" className="col-lg-4 col-md-12 col-sm-12">
                        <Card imgsrc={rt} title="React" text="I can code in React" />
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div data-aos="slide-left" className="col-lg-4 col-md-12 col-sm-12">
                        <Card imgsrc={java} title="Java" text="I can code in Java" />
                    </div>
                    <div data-aos="slide-right" className="col-lg-4 col-md-12 col-sm-12">
                        <Card imgsrc={js1} title="JavaScript" text="I can code in javaSript" />
                    </div>
                    <div data-aos="slide-left" className="col-md-12 col-lg-4 col-sm-12">
                        <Card imgsrc={mysql} title="MysQl" text="I can handle database too" />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Aboutus