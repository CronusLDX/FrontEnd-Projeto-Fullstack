import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  table {
    width: 100%;
    height: 100%;
  }

  button {
    text-decoration: none;
    padding: 10px 12px 10px 12px;
    margin: 5px 5px 5px 5px;
    background-color: white;
    border-radius: 5px;
    font-size: 16.5px;
    color: black;
    border: none;
    cursor: pointer;
    background-color: #dc143c;

    &:hover {
      background-color: red;
    }
  }
`;

export const StyledLnkVer = styled(Link)`
  text-decoration: none;
  padding: 10px 12px 10px 12px;
  margin: 5px 5px 5px 5px;
  background-color: cyan;
  border-radius: 5px;
  font-size: 17px;
  color: black;
  &:hover {
    background-color: #7fffd4;
  }
`;
export const StyledLinkAtualizar = styled(Link)`
  text-decoration: none;
  padding: 10px 12px 10px 12px;
  margin: 5px 5px 5px 5px;
  background-color: rgb(228, 228, 224);
  border-radius: 5px;
  font-size: 16.5px;
  color: black;
  &:hover {
    background-color: white;
  }
`;
