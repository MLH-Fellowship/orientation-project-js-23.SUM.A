import styled from "styled-components";

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
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
}`;
