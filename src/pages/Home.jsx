
// Layout hint: Add the class name 'btn' to the <button> element. 🚨❗

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="box">
    <Link to="/history">

    <div className="history">History</div>
    </Link>
    <Link to="/classList">

    <div className="contact">Class List</div>
    </Link>
  </div>;
};

export default Home;
