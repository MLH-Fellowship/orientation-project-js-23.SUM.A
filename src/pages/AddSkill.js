import React, { useState } from "react";
import styled from "styled-components";
import { skillImage } from "../service";
import axios from "axios";

const AddSkill = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    proficiency: "",
  });

  const handleFormData = (event) => {
    let name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  console.log(formData);

  const handleAddSkill = async (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:5000/resume/skill", { ...formData })
      .then((res) => {
        console.log(res.data, "Data");
      })
      .catch((err) => console.log(err?.message));
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
            onChange={handleFormData}
            placeholder="Enter skill name"
          />
        </div>

        <div className="form-input">
          <label htmlFor="name">Select proficiency</label>
          <select
            defaultValue="0-1 Years"
            name="proficiency"
            onChange={handleFormData}
          >
            <option value="0-1 years"> 0-1 Years</option>
            <option value="1-2 years"> 1-2 Years</option>
            <option value="2-3 years"> 2-3 Years</option>
            <option value="4+ years"> 4+ Years</option>
          </select>
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
                    proficiency: name,
                  }));
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
        </div>

        <button type="submit" className="btn-skill">
          Submit
        </button>
      </form>
    </AddSkillContainer>
  );
};

export default AddSkill;

const AddSkillContainer = styled.section`
  width: 100%;
  max-width: 545px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: #fff;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;

    .form-input {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      label {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
      }

      input[type="text"],
      select {
        height: 45px;
        padding-left: 20px;

        border-radius: 10px;
        border: none;
        font-size: 1.3rem;

        &:focus,
        &:active {
          outline: none;
          border: none;
        }
      }

      .skill-container {
        display: flex;
        gap: 2rem;

        .selected-skill {
          border: 2px solid #fff;
          padding: 5px;
          border-radius: 8px;
          box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
            rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
            rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
        }

        .skill {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.4rem;
          align-items: center;
          width: 55px;
          height: 55px;
          margin-top: 1rem;

          span {
            color: #fff;
            font-weight: 500;
          }

          img {
            width: 100%;
          }
        }
      }
    }

    .skill-container {
    }
    .btn-skill {
      border: none;
      border-radius: 8px;
      height: 30px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
  }
`;
