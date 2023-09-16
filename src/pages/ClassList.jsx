import React from "react";
import studentsData from "../Data/studentData";
import { Link } from "react-router-dom";
const ClassList = () => {
  console.log(studentsData);
  return (
    <>
      <div className="box">
        <h1>React Bootcamp</h1>
        <h2>ClassList:</h2>
      </div>
      <div className="cont">
        {studentsData.students.map((e) => (
          <>
            <div className="all">
              <Link to={`/classList/${e.id}`}>
              <div className="a">{e.first_name}</div>
              </Link>
              <div className="a">{e.last_name}</div>
              <div className="a">{e.email}</div>
              <div className="a">{e.class}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ClassList;
