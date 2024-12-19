import styled from "styled-components";

const SecondaryButton = styled.button`
  margin: 20px;
  padding: 7px 16px;
  color: var(--Primary);
  font-size: 16px;
  font-weight: regular;
  line-height: 26px;
  border-radius: 12px;
  border: 2px solid var(--Primary);
  box-sizing: border-box;
  background-color: var(--White);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--Purple100);
    color: var(--Purple600);
    border-color: var(--Purple700);
  }

  &:disabled {
    background-color: var(--Gray300);
    color: var(--Primary)
    border: 2px solid transparent;
  }

  &:active {
    background-color: var(--Purple100);
    color: var(--Purple600);
    border-color: var(--Purple800);
  }

  &:focus {
    background-color: var(--White);
    border: 2px solid var(--Purple800);
  }
`;

export default SecondaryButton;
