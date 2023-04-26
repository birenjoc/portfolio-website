import "./FormStyle.css";
import emailjs from 'emailjs-com';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const diffToast = () => {
  
  toast.success("Message Sent!" , {
    position: "top-center"
  });
}
const Form = () => {
  function sendEmail(e){
    e.preventDefault();
   
   emailjs.sendForm('service_4wmov5g', 'template_t082h8m', e.target, "gsJS2xTWJJ42Cp8my").then(res=>{
    console.log(res);
   }).catch(err=> console.log(err));
  }
  return (
    <>
    <div className="frm">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Your Email</label>
        <input type="email" name="user-email" required></input>
        <label>Subject</label>
        <input type="text" name="sub"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Write your message here..." name="message"/>
        <input type="submit" value="SEND" className="btn " onClick={diffToast}></input>
      </form>
    </div>
    <ToastContainer />
    </>
  )
}

export default Form
