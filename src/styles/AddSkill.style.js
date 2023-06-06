import styled from "styled-components";

export const AddSkillContainer = styled.section`
  width: 100%;
  max-width: 545px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #fff;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;

    .form-input {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      label {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
      }

      .skill-err {
        margin-top: 1rem;
      }

      .err {
        color: #cc0000;
        font-size: 1.2rem;
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
