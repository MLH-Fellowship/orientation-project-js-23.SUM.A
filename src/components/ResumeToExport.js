import classes from "./ResumeToExport.module.css";
import React, { useContext } from "react";
import ResumeContext from "../store/resume-context";

const ResumeToExport = React.forwardRef((props, ref) => {
  const ctx = useContext(ResumeContext);

  return (
    <div ref={ref} className={classes["page"]}>
      <h1>Resume</h1>
      <h2>Experience</h2>
      <ul>
        {ctx.experience.map((exp) => {
          return <li>{exp}</li>;
        })}
      </ul>

      <h2>Education</h2>
      <ul>
        {ctx.education.map((edu) => {
          return <li>{edu}</li>;
        })}
      </ul>

      <h2>Skills</h2>
      <ul>
        {ctx.skills.map((ski) => {
          return <li>{ski}</li>;
        })}
      </ul>
    </div>
  );
});

export default ResumeToExport;
