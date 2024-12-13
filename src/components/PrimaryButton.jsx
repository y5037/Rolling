import styled from "styled-components";

const PrimaryButton = styled.button`
  margin: 20px;
  padding: ${({ size }) => (size === "small" ? "7px 16px" : "14px 24px")};
  color: #ffffff;
  font-size: ${({ size }) => (size === "small" ? "16px" : "18px")};
  font-weight: ${({ size }) => (size === "small" ? "300" : "600")};
  line-height: ${({ size }) => (size === "small" ? "26px" : "28px")};
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  background-color: #9935ff;
  cursor: pointer;

  &:hover {
    background-color: var(--Purple600);
  }

  &:disabled {
    background-color: var(--Gray300);
    color: #ffffff;
  }

  &:pressed {
    background-color: var(--Purple800);
    color: #ffffff;
  }

  &:focus {
    background-color: var(--Purple700);
    border: 2px solid var(--Purple800);
  }
`;

export default PrimaryButton;
