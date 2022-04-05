import styled, { keyframes } from "styled-components";

export const StyledLoading = styled.div`
  position: fixed;
  display: flex;
  background-color: #00000020;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const StyledSpinner = styled.div`
  animation: 1s ${spin} infinite linear;
  transform-origin: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: #000;
`;
