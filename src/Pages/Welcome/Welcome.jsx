import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assents/images/logo.png";
import both from "../../assents/images/both.png";
import { BsApple } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillWindows } from "react-icons/ai";

import {StyledWelcome} from './Welcome.style'
function Welcome() {
  return (
    <StyledWelcome className="main">
  
      <div className="middle__side">
        <div className="middle__side--img">
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </div>
        <p className="middle__side--title">Microsoft To Do</p>
        <div className="middle__side--img2">
          <img src={both} alt="both" />
        </div>
        
        <NavLink to="/sign-in">
          <button className="middle__side--button">Get started</button>
        </NavLink>
        <h4>Learn more</h4>
        <h3>Download</h3>
        <div className="middle__side--icons">
          <div className="android">
            <AiFillAndroid />
          </div>
          <div className="windows">
            <AiFillWindows />
          </div>
          <div className="apple">
            <BsApple />
          </div>
        </div>
      </div>
  
    </StyledWelcome>
  );
}

export default Welcome;
