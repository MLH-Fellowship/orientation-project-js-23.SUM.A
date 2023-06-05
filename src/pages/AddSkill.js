import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { skillImage } from "../service";
import axios from "axios";
import { toast } from "react-toastify";
import { AddSkillContainer } from "../styles/AddSkill.style";

const AddSkill = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    proficiency: "0-1 Years",
  });
  const [errorData, setErrorData] = useState({
    name: false,
    logo: false,
    proficiency: false,
  });

  const handleFormData = (event) => {
    let name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const handleAddSkill = async (event) => {
    event.preventDefault();

    if (formData?.logo && formData?.name && formData?.proficiency) {
      axios
        .post("http://127.0.0.1:5000/resume/skill", { ...formData })
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => toast.error(err?.message));
    } else {
      if (formData?.logo === "")
        setErrorData((prev) => ({ ...prev, logo: true }));
      if (formData?.name === "")
        setErrorData((prev) => ({ ...prev, name: true }));
      if (formData?.proficiency === "")
        setErrorData((prev) => ({ ...prev, proficiency: true }));
    }
  };
  return (
    <AddSkillContainer>
      <h1>Add Skills</h1>
      <form className="form-control" onSubmit={(e) => handleAddSkill(e)}>
        <div className="form-input">
          <label htmlFor="name">Skill</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={(e) => {
              handleFormData(e);
              setErrorData((prev) => ({ ...prev, name: false }));
            }}
            placeholder="Enter skill name"
          />
          {errorData?.name && (
            <span className="err">Field can not be empty</span>
          )}
        </div>

        <div className="form-input">
          <label htmlFor="name">Select proficiency</label>
          <select
            defaultValue="0-1 Years"
            name="proficiency"
            onChange={(e) => {
              handleFormData(e);
              setErrorData((prev) => ({ ...prev, proficiency: false }));
            }}
          >
            <option value="0-1 years"> 0-1 Years</option>
            <option value="1-2 years"> 1-2 Years</option>
            <option value="2-3 years"> 2-3 Years</option>
            <option value="4+ years"> 4+ Years</option>
          </select>
          {errorData?.proficiency && (
            <span className="err">Field can not be empty</span>
          )}
        </div>

        <div className="form-input">
          <label>Select Logo</label>
          <div className="skill-container">
            {skillImage.map(({ name, image, id }) => (
              <div
                className={
                  selectedSkill === id ? "selected-skill skill" : "skill"
                }
                key={id}
                onClick={() => {
                  setSelectedSkill(id);
                  setFormData((prevState) => ({
                    ...prevState,
                    logo: name,
                  }));
                  setErrorData((prev) => ({ ...prev, logo: false }));
                }}
              >
                {" "}
                <span
                  style={{ display: selectedSkill === id ? "none" : "block" }}
                >
                  {name}
                </span>
                <img src={image} alt={name} />
              </div>
            ))}
          </div>
          {errorData?.logo && (
            <span className="err skill-err">Select a skill Logo</span>
          )}
        </div>

        <button type="submit" className="btn-skill">
          Submit
        </button>
      </form>
    </AddSkillContainer>
  );
};

export default AddSkill;
