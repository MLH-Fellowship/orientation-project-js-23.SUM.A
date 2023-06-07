import styled from "styled-components";

export const AddSectionContainer = styled.section`
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

      fieldset {
        display: flex;
        border: 0;
      }

      textarea {
        border-radius: 10px;
        height: 5rem;
        resize: vertical;
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
    }

    button.btn-add {
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
