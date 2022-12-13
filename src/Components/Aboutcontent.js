import "./AbtcntStyle.css";

import React, {useRef} from 'react'
import { Link } from "react-router-dom";
import birendra from "../assets/birendra.jpg"
import CV_biren1 from "../assets/CV_biren1.pdf"



const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="right">
        <div className="img-container">
        <div className="img-stack top">
            <img src={birendra} className="img" alt="true"/>
        </div>
        </div>
        
      </div>
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I'm a self taught web developer. I create responsive secure websites for my clients.</p>
        <Link to="/Contact">
            <button className="btn">Contact Me</button>
        </Link>
        <a href="CV_biren1.pdf"  download="CV_biren1.pdf">
              <button class="btn btn-light">Download CV</button></a>
      </div>
      
    </div>
  )
}

export default Aboutcontent;
