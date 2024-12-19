import styled from "styled-components";

const buttonStyles = {
  "56px": {
    minWidth: "192px",
    fontWeight: 600,
  },
  "40px": {
    minWidth: "122px",
  },
  "36px": {
    minWidth: "122px",
  },
  "28px": {
    minWidth: "122px",
    fontSize: "14px",
  },
};

const OutlinedButton = styled.button`
  margin: 15px 0;
  padding: 0 10px;
  min-width: ${(props) => buttonStyles[props.height]?.minWidth || "192px"};
  height: ${(props) => props.height || "56px"};
  font-size: ${(props) => buttonStyles[props.height]?.fontSize || "16px"};
  border-radius: 6px;
  border: 1px solid var(--Gray300);
  background-color: var(--White);
  font-weight: ${(props) => buttonStyles[props.height]?.fontWeight || "400"};
  color: var(--Gray900);
  font-size: 16px;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--Gray100);
  }

  &:disabled {
    border: 0;
    background-color: var(--Gray300);
    color: var(--White);
    cursor: auto;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--Gray500);
  }
`;

export default OutlinedButton;
