import styled from "styled-components";
import { BREAKPOINT } from "../../constants/breakpoints";

const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 24px 32px;
  box-shadow: 0px 3px 6px #0000000a;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${BREAKPOINT.MD}) {
    width: 300px;
    border-radius: 12px;
    height: 160px;
    padding: 24px;
  }
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
