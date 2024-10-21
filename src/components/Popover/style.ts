import { keyframes, styled } from "styled-components";

interface StyledButtonProps {
  buttonWidth: number;
}

// Animação para o preenchimento dos quadrados
const fillAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  position: relative;
  height: 60px;
  width: ${({ buttonWidth }) => `${buttonWidth}px`}; /* Usar a prop buttonWidth */
  padding: 10px 20px;
  border: 2.5px dotted #101314;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

  span {
    text-transform: uppercase;
    letter-spacing: .18125rem;
    margin-top: 2px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1rem;
    transition: color 0.4s;
  }

  &:hover {
    color: white;
    border-color: transparent;
  }

  span {
    position: relative;
    z-index: 2;
  }

  .square {
    position: absolute;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .square {
    animation: ${fillAnimation} 0.3s forwards;
  }
`;

export { StyledButton, fillAnimation };
