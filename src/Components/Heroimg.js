import "./HeroimgStyle.css";
import React from 'react'
import IntroImg from "../assets/mypic.jpg";
import Gifimg from "../assets/hi-there.gif";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <div className="gif">
                <img className="gif-img" src ={Gifimg} alt="Gifimg"/>
            </div>
            <p>Hi there !, I'm </p>
            <h2>BIRENDRA JOSHI</h2>
            <h1>React developer</h1>
       
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg
