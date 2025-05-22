import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 24px;
  box-shadow: 0px 3px 6px #0000000a;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 300px;
    border-radius: 12px;
    height: 160px;
  }
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
