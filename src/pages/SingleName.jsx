import React, { useState } from 'react'
import { useParams } from 'react-router'
import studentsData from "../Data/studentData";
const SingleName = () => {
  const params = useParams()
  console.log(params)
  const s = studentsData.students.find(e => {
    return e.id == (params.id) 
  })
  console.log(s)
  return (
    <div className="cont">
    
      <>
        <div className="all">
          
          <div className="a">{s.first_name}</div>
          
          <div className="a">{s.last_name}</div>
          <div className="a">{s.email}</div>
          <div className="a">{s.class}</div>
        </div>
      </>
   
  </div>
  )
}

export default SingleName