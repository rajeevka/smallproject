import React from 'react'
import './Navbar.css'
import Navbarlogo from './Navbarlogo.PNG';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logoleft"><img src={Navbarlogo} alt="" /></div>
      <div className="Navbarmidle">
        <p>Home</p>
        <p>About</p>
        <p>Project</p>
        <p>Services</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="Navbarright">
        <button>Enquiry Now</button> &nbsp;&nbsp;&nbsp;
      </div>
      
    </div>
  );
}

export default Navbar