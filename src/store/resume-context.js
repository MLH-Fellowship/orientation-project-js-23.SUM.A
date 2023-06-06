import React from "react";

const ResumeContext = React.createContext({
  experience: ["Experience 1", "Experience 2", "Experience 3"],
  education: ["Education 1", "Education 2", "Education 3"],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  dummy: "Angel",
});

export const ResumeContextProvider = (props) => {
  return (
    <ResumeContext.Provider
      value={{
        experience: ["Experience 1", "Experience 2", "Experience 3"],
        education: ["Education 1", "Education 2", "Education 3"],
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        dummy: "Angel",
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
