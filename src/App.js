import React from "react";
import "./index.css";
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
function App() {
  return (

    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home/' element={<Home/>}/>
        <Route path='Project/' element={<Project/>}/>
        <Route path='About/' element={<About/>}/>
        <Route path='Contact/' element={<Contact/>}/>
        <Route  element={<Error/>}/>
      </Routes>
      
    </>
  );
}

export default App;
