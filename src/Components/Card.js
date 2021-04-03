import React, {useEffect} from 'react'
import './Card.css'
import {useSpring} from  'react-spring'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Card = props => {

  useEffect(() => {
      Aos.init({duration: 1000});
  }, []);
  
    return (
    <div className="container mt-5 ">
      <div className="" style={{width: '18rem'}}>
        <img src={props.imgsrc} className="img" className="card-img-top " className="w-100 p-1" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="button">
          <a href={props.hrf} target="_blank" className="btn btn-primary" >Check in</a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Card
