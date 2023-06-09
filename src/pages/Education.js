import React from "react";
import {useNavigate } from "react-router-dom";

const Education = () => {
const navigate = useNavigate();
  return (
    //Try to grab from backend next
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button >Add Education</button>
        <br></br>
      </div>
      <button>Submit</button>
      <button onClick={() => navigate('/')}>Home</button>
      
      
    </div>
  );
};

export default Education;