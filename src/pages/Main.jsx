// In this task you have to build the routes of the website
// the routes include:
// - '/' which render the <Home /> component
// - '/about' which render the <About /> component
// - '/about/history' which render the <History /> component
// - '/about/contact' which render the <Contact /> component
// - '/classlist' which render the <ClassList /> component

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import History from "./History";
import Contact from "./Contact";
import ClassList from "./ClassList";
import About from "./About";
import SingleName from "./SingleName";
const Main = () => {
  return (
<>
      <div>
        <nav className="nav">
          <h3>Arab American University</h3>
          <Link to="/home">
          <div className="link-wrap" >Home</div>
          </Link>
          <Link to="/about">
          <div className="link-wrap" >about</div>
          </Link>
          <Link to="/contact">
          <div className="link-wrap" >contact</div>
          </Link>
        </nav>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/classList" element={<ClassList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/classList/:id" element={<SingleName/>}/>
       </Routes>
      </div>

</>

  );
};

export default Main;
