import React from 'react'
import Card from './Card'
import hostelimage from '../images/aaaa.jpg'
import image2 from '../images/pro.jpg'
import image3 from '../images/2.jpg'
import './project.css';
const Services = () => {
    return (
        <div>
         <div className="heading">
                    <h1>Projects</h1>
                </div>

            <div className="container" className="d-flex justify-content-center">
            <div className="cards">
                <div className="row">
                    <div data-aos="fade-left" className="col-lg-4 col-md-4  col-sm-12">
                        <Card imgsrc={hostelimage} title="HTML5" text="Hostel Registration form" hrf="https://web-development-d7093.web.app/" />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 col-md-4 col-sm-12">
                        <Card imgsrc={image2} title="Project made on HTML CSS" text="Developers" hrf="https://developers-531d0.web.app/" />
                    </div>
                    <div data-aos="fade-right" className="col-lg-4 col-md-4-col-sm-12">
                        <Card imgsrc={image3} title="React" text="Form Validation" hrf="https://form-validation-71e27.web.app/" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services