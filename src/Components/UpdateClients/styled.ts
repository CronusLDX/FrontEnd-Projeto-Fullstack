import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  form {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    section {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      gap: 15px;
    }
    div {
      width: 100%;
      height: 100%;

      input {
        outline: none;
        margin: 5px 5px 5px 5px;
      }
    }
  }

  textarea {
    height: 30vh;
    outline: none;
  }

  button {
    font-size: 1.2rem;
    border: none;
    padding: 10px 15px 10px 15px;
    background-color: red;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;
