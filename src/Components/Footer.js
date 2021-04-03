
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Footer.css'

export default function Footer() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="main">
            <div className="social-media " >
                <h2><a href="https://www.facebook.com/Avinash.kumar.luhana/" target="_blank"><i class="fab fa-facebook-square"></i></a></h2>
                <h2><a href="https://wa.link/xoepwv" target="_blank"><i class="fab fa-whatsapp"></i></a></h2>
                <h2><a href="https://www.linkedin.com/in/avinash-kumar-8329921bb/" target="_blank"><i class="fab fa-linkedin-in"></i></a></h2>
            </div>

            <p className="copy-right"><i class="far fa-copyright"></i> 2021 Copyright: Sheikh Sindhi Guys - All Rights Reserved.</p>
        </div>
    )
}
