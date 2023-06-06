import classes from "./ResumeToExport.module.css";
import React, { useContext } from "react";
import ResumeContext from "../store/resume-context";

const ResumeToExport = React.forwardRef((props, ref) => {
  const ctx = useContext(ResumeContext);

  return (
    <div ref={ref} className={classes["page"]}>
      <h1>Resume</h1>

      <ul className={classes["section"]}>
        <h2 className={classes["title-section"]}>Experience</h2>
        <hr />
        {ctx.experience.map((exp) => {
          return (
            <li key={exp.title} className={classes["subsection"]}>
              <div className={classes["top-box"]}>
                <h3 className={classes["title-subsection"]}>{exp.title}</h3>
                <div className={classes["dates-box"]}>
                  <p className={classes["date"]}>
                    {exp.start_date} &nbsp; - &nbsp; {exp.end_date}
                  </p>
                </div>
              </div>
              <div className={classes["mid-box"]}>
                <p className={classes["company"]}>{exp.company}</p>
              </div>
              <div className={classes["bottom-box"]}>
                <p className={classes["description"]}>{exp.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className={classes["section"]}>
        <h2 className={classes["title-section"]}>Education</h2>
        <hr />
        {ctx.education.map((edu) => {
          return (
            <li key={edu.title} className={classes["subsection"]}>
              <div className={classes["top-box"]}>
                <h3 className={classes["title-subsection"]}>{edu.school}</h3>
                <div className={classes["dates-box"]}>
                  <p className={classes["date"]}>
                    {edu.start_date} &nbsp; - &nbsp; {edu.end_date}
                  </p>
                </div>
              </div>
              <div className={classes["mid-box"]}>
                <p className={classes["company"]}>
                  {edu.course}; &nbsp; Grade: {edu.grade}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className={classes["section"]}>
        <h2 className={classes["title-section"]}>Skills</h2>
        <hr />
        {ctx.skills.map((ski) => {
          return (
            <li
              key={ski.name}
              className={`${classes["subsection"]} ${classes["skill"]}`}
            >
              {ski.name}: &nbsp; {ski.proficiency}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default ResumeToExport;
