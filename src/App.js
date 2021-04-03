import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar1 from './Components/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Services from './Components/Services';
import Home from './Components/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Components/Footer';




function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={Aboutus} exact />
        <Route path="/contactus" component={Contactus} exact />
        <Route path="/services" component={Services} exact />
        <Redirect path="/" />
        <hr />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
