import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Cform from '../Components/Cform';





const contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2  text="Lets have a chat.."/>
      <Cform/>
      
      <Footer/>
    </div>
  );
}

export default contact;
