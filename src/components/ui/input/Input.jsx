import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--Gray300);
  border-radius: 8px;
  color: var(--Gray500);
  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    color: var(--Gray500);
  }

  &:focus {
    border: 2px solid var(--Gray500);
  }

  &:focus::placeholder {
    color: var(--Gray900);
  }

  &:disabled {
    background-color: var(--Gray100);
  }

  &:disabled::placeholder {
    color: var(--Gray400);
  }
`;

export default Input;
