import React from "react";
import "./Footertop.css";
import Navbarlogo from './Navbarlogo.PNG';
const Footertop = () => {
  return (
    <div>
      <div className="Footertop">
        <div className="Footertopone">
          <h2>About Us</h2>
          <p>support center</p>
          <p>customer support</p>
          <p>about us</p>
          <p>copyright</p>

          <img src={Navbarlogo} alt="" />
        </div>
        <div className="Footertopone">
          <h2>Our information</h2>
          <p>return policy</p>
          <p>Privacy policy</p>
          <p>terms & condition</p>
          <p>site map</p>
          <img src={Navbarlogo} alt="" />
        </div>
        <div className="Footertopone">
          <h2>My Account</h2>
          <p>Press inquiries</p>
          <p>Social media</p>
          <p>Directories</p>
          <p>Images & B-roll</p>
          <img src={Navbarlogo} alt="" />
        </div>
        <div className="Footertopone">
          <h2>Contact</h2>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footertop;
