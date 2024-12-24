import styled from "styled-components";

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: ${({ size }) => (size === "small" ? "12px 16px" : "14px 24px")};
  width: 100%;
  color: var(--White);
  font-size: ${({ size }) => (size === "small" ? "16px" : "18px")};
  font-weight: ${({ size }) => (size === "small" ? "regular" : "bold")};
  line-height: ${({ size }) => (size === "small" ? "26px" : "28px")};
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  background-color: var(--Primary);
  cursor: pointer;

  &:hover {
    background-color: var(--Purple600);
  }

  &:disabled {
    background-color: var(--Gray300);
    color: var(--White);
  }

  &:active {
    background-color: var(--Purple800);
    color: var(--White);
  }

  &:focus {
    background-color: var(--Purple700);
    border: 2px solid var(--Purple800);
  }
`;

export default PrimaryButton;
