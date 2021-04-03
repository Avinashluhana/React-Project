import React, { useEffect } from 'react'
import "./video.css"
import Aos from 'aos';
import 'aos/dist/aos.css'

const Video = () => {
    useEffect(() => {
        Aos.init({ duration: 40000});
    }, []);
    return (
        <div className="video-container">
            <video src="/videos/loop.mkv" type="video/mp4" autoPlay loop muted />
            <div data-aos="flip-left" className="heading-container bg-gradient ">
                <h1 >Welcome to my portofolio</h1>
            </div>
        </div>
    )
}

export default Video
