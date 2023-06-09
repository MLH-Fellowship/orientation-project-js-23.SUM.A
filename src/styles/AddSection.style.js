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
    gap: 2rem;
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
        padding: 0;

        select:not(:last-child) {
          margin-right: 0.5rem;
        }
      }

      .skill-err {
        margin-top: 1rem;
      }

      .err {
        color: #cc0000;
        font-size: 1.2rem;
      }

      input[type="text"],
      select,
      textarea {
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

      input[type="checkbox"] {
        margin-right: 0.5rem;
      }

      textarea {
        font-family: inherit;
        height: 6rem;
        resize: vertical;
        padding-top: 0.6rem;
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
