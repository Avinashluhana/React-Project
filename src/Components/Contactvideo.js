import React from 'react'
import './Contactvideo.css'
import video from '../Components/videos/contact.mp4'
export const Contactvideo = () => {
    return (
        <div>
            <div className="video">
            <video src={video} type="video/mp4" autoPlay loop muted />
            </div>
        </div>
    )
}
