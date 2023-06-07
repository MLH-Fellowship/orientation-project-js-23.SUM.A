import React, { useState } from "react";

const ResumeContext = React.createContext({
  experience: [],
  setExperience: () => {},
  education: [],
  setEducation: () => {},
  skills: [],
  setSkills: () => {},
});

export const ResumeContextProvider = (props) => {
  const [experience, setExperience] = useState([
    {
      title: "Software Developer",
      company: "A Cooler Company",
      start_date: "October 2022",
      end_date: "Present",
      description:
        "Results-driven software developer with a strong passion for coding and problem-solving. Highly skilled in designing, developing, and maintaining robust and scalable software applications. ",
      logo: "example-logo.png",
    },
    {
      title: "Software Developer 2",
      company: "A Cooler Company",
      start_date: "October 2022",
      end_date: "Present",
      description:
        "Results-driven software developer with a strong passion for coding and problem-solving. Highly skilled in designing, developing, and maintaining robust and scalable software applications. ",
      logo: "example-logo.png",
    },
    {
      title: "Software Developer 3",
      company: "A Cooler Company",
      start_date: "October 2022",
      end_date: "Present",
      description:
        "Results-driven software developer with a strong passion for coding and problem-solving. Highly skilled in designing, developing, and maintaining robust and scalable software applications. ",
      logo: "example-logo.png",
    },
  ]);

  const [education, setEducation] = useState([
    {
      course: "B.S. in Computer Science",
      school: "Monsters University",
      start_date: "October 2022",
      end_date: "August 2024",
      grade: "86%",
      logo: "example-logo.png",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      name: "JavaScript",
      proficiency: "2-4 years",
      logo: "example-logo.png",
    },
    {
      name: "Python",
      proficiency: "2-4 years",
      logo: "example-logo.png",
    },
    {
      name: "C++",
      proficiency: "2-4 years",
      logo: "example-logo.png",
    },
  ]);

  return (
    <ResumeContext.Provider
      value={{
        experience: experience,
        setExperience: setExperience,
        education: education,
        setEducation: setEducation,
        skills: skills,
        setSkills: setSkills,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
