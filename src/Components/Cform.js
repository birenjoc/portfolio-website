import "./FormStyle.css";
import emailjs from 'emailjs-com';
import React from 'react'

const Form = () => {
  function sendEmail(e){
    e.preventDefault();
   
   emailjs.sendForm('service_4wmov5g', 'template_t082h8m', e.target, "gsJS2xTWJJ42Cp8my").then(res=>{
    console.log(res);
   }).catch(err=> console.log(err));
  }
  return (
    <div className="frm">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Your Email</label>
        <input type="email" name="user-email"></input>
        <label>Subject</label>
        <input type="text" name="sub"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here..." name="message"/>
        <input type="submit" value="SEND" className="btn "></input>
      </form>
    </div>
  )
}

export default Form
