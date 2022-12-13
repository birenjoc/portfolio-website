import "./footerStyle.css";

import React from 'react'
import { FaCopyright, FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,  } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Bhimdatt-o9,kanchanpur</p>
                        <p>Nepal</p>
                    </div>
                </div>
                <div className="phone">
               <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +9779810656600,  +9779866105883 </h4>
                </div>
                <div className="email">
               <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                bimaljoshi85@gmail.com</h4>
                </div>
               
            </div>
            <div className="right">
                <h4>More about me</h4>
                <p>I'm a self taught web developer based in Mahendranagar,Nepal and I m currently pursuing BCA from TU.</p>
                <h5>Wanna say something?</h5>
                <p>Head over to the <b>contact</b> section and send me a query. I would love to hear from you.</p>
                <div className="social">
               <a href="https://www.facebook.com/bimal.joc" ><FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
                <a href="https://twitter.com/birendrajoc"><FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
                <a href="https://www.instagram.com/bimaljoc/"><FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
               <a href="https://www.linkedin.com/in/birendra-joshi/"> <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
               <a href="https://github.com/birenjoc"> <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
                </div>
                <div className="copyright">
                    <p>Made with react.js by Birendra Joshi.</p>
              <h5>copyright <FaCopyright size={14} style={{color:"#fff", marginRight:"0.3rem", marginLeft:"0.3rem"}}/> 2022 | All Rights Reserved</h5> 
                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default footer
