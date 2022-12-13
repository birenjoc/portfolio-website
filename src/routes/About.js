import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Aboutcontent from '../Components/Aboutcontent';


const about = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2  text="I'm a friendly web developer."/>
      <Aboutcontent/>
      <Footer/>
    </div>
  );
}

export default about;
