// src/pages/styled/LandingPage.styled.js
import styled from 'styled-components';

export const LandingContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const GetStartedButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;
