import React from 'react'
import './Contact.css'
import { Contactvideo } from './Contactvideo'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Contactus = () => {
    return (
        <div>
            <div className="heading">
                <h1 data-aos="flip-right">We Would  like to serve you <i class="far fa-heart"></i></h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12" >
                        <div className="form" className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" data-aos="fade-left" className="form-control bg-dark" id="exampleFormControlInput1" placeholder="name@example.com" />
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" data-aos="fade-right" className="form-control bg-dark" id="name" placeholder="Your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                            <textarea className="form-control bg-dark" data-aos="fade-up" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <button className="bg-dark text-align-center mb-5 p-1" data-aos="fade-down">Send</button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="fonts" data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                            <h3 > <i class="fas fa-map-marker-alt"></i>   Sheikh abdul majeed sindhi hostel </h3>
                            <h3> <i class="fas fa-mobile"></i>    +923103152377 </h3>
                            <h3> <i class="fas fa-envelope"></i>    aviluhana@gmail.com</h3>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-12" data-aos="fade-left">
                    <iframe src="https://www.google.com/maps?q=Mehran%20University%20of%20Engineering%20and%20Technology%2C%20Mehran%20University%20of%20Engineering%20and%20Technology%2C%20Indus%20Highway%2C%20Jamshoro%2C%20Pakistan&z=14&t=&ie=UTF8&output=embed" width="600" height="450"></iframe><noscript> Full functionality of this site requires JavaScript to be enabled. Learn how to <a href="https://javascriptdownload.org/">Download JavaScript</a> in your browser.</noscript>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Contactus
