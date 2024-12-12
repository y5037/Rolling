import styled from "styled-components";

const SecondaryButton = styled.button`
  margin: 20px;
  padding: 7px 16px;
  color: #9935ff;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  border-radius: 12px;
  border: 2px solid #9935ff;
  box-sizing: border-box;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: var(--Purple100);
    color: var(--Purple600);
    border-color: var(--Purple700);
  }

  &:disabled {
    background-color: var(--Gray300);
    color: #ffffff;
  }

  &:pressed {
    background-color: var(--Purple100);
    color: var(--Purple600);
    border-color: var(--Purple800);
  }

  &:focus {
    background-color: #ffffff;
    border: 2px solid var(--Purple800);
  }
`;

export default SecondaryButton;
