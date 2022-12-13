import "./NavbarStyle.css";

import React, { useState } from 'react'
import{ Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [click, setclick]= useState(false);
    const handleclick= () => setclick(!click);

    const[color, setcolor]= useState(false);
    const changecolor= () => {
        if (window.scrollY >=100) {
            setcolor(true);
        } else{
            setcolor(false);
        }
    };

    window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/Home">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "Nav-menu active" : "Nav-menu"}>
        <li>
            <Link to="/Home">Home</Link>
        </li>
        <li>
            <Link to="/Project">Projects</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
        {click ? ( <FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
        
       
      </div>
    </div>
  )
}

export default Navbar;
