import React from "react";
import styled from "styled-components";

const AddSkill = () => {
  return (
    <AddSkillContainer>
      <h1>Add Skills</h1>
      <form className="form-control">
        <div className="form-input">
          <label for="name">Skill</label>
          <input type="text" name="name" placeholder="Enter skill name" />
        </div>

        <div className="form-input">
          <label for="name">Select proficiency</label>
          <select defaultValue="0-1 Years">
            <option value="0-1 years"> 0-1 Years</option>
            <option value="1-2 years"> 1-2 Years</option>
            <option value="2-3 years"> 2-3 Years</option>
            <option value="4+ years"> 4+ Years</option>
          </select>
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
  height: 100vh;
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
    gap: 2rem;
    width: 100%;

    .form-input {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      label {
        font-size: 1.2rem;
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
