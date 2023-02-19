import React from 'react'
import "./Card.css";

import pro1 from "./Images/pro1.PNG";
import pro2 from "./Images/pro2.PNG";
import pro3 from "./Images/pro3.PNG";
import pro4 from "./Images/pro4.PNG";
import pro5 from "./Images/pro5.PNG";
import pro6 from "./Images/pro6.PNG";
import pro7 from "./Images/pro7.PNG";
import pro8 from "./Images/pro8.PNG";
import pro9 from "./Images/pro9.PNG";
import pro10 from "./Images/pro10.PNG";
import pro11 from "./Images/pro11.PNG";
import pro12 from "./Images/pro12.PNG";
const Card = () => {
  return (
    <div className="Card">
      <div className="cardelement">
        <img src={pro1} alt="" />
        <h4>DWTC</h4>
      </div>
      <div className="cardelement">
        <img src={pro2} alt="" />
        <h4>Dxb Airport Concorde D</h4>
      </div>
      <div className="cardelement">
        <img src={pro3} alt="" />
        <h4>Maui-Restaurant</h4>
      </div>
      <div className="cardelement">
        <img src={pro4} alt="" />
        <h4>Nail-paint bar</h4>
      </div>
      <div className="cardelement">
        <img src={pro5} alt="" />
        <h4>Office in Business Bay</h4>
      </div>
      <div className="cardelement">
        <img src={pro6} alt="" />
        <h4>Atlantis, The Palm</h4>
      </div>
      <div className="cardelement">
        <img src={pro7} alt="" />
        <h4>Office</h4>
      </div>
      <div className="cardelement">
        <img src={pro8} alt="" />
        <h4>Residential Tower</h4>
      </div>
      <div className="cardelement">
        <img src={pro9} alt="" />
        <h4>Sofitel</h4>
      </div>
      <div className="cardelement">
        <img src={pro10} alt="" />
        <h4>The Gym Dubai</h4>
      </div>
      <div className="cardelement">
        <img src={pro11} alt="" />
        <h4>Villa</h4>
      </div>
      <div className="cardelement">
        <img src={pro12} alt="" />
        <h4>Warehouse</h4>
      </div>
    </div>
  );
}

export default Card