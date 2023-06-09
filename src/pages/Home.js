import React from "react";
import PrintButton from "../components/ResumeToExport/PrintButton";
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button onClick={() => navigate('/resume/education')}>Add Education</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button onClick={() => navigate("/add-skill")} data-testid="addSkill">
          Add Skill
        </button>
        <br></br>
      </div>
      <br></br>
      <button>Export</button>

      <PrintButton />
    </div>
  );
};

export default Home;
