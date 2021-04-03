import React from 'react';
import './Navbar1.css'
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';




const Navbar1 = () => {
  return (
  <div className="container-fluid " className="bg-gradient">
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to=""><i className="fas fa-laptop"></i></Link> 
          <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-item" to="/" ><i class="fas fa-home"></i> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item" to="/aboutus" activeClassName="selected"><i class="fad fa-user-secret"></i> About me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item" to="/contactus" activeClassName="selected"> <i class="fas fa-phone"></i> Contact me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item"  to="/services" activeClassName="selected"><i class="fas fa-laptop-code"></i> Projects</NavLink>
            </li>
          </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light w" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Navbar1;