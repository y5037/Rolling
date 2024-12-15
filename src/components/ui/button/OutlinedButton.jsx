import styled from "styled-components";

const buttonStyles = {
  "56px": {
    fontWeight: 600,
  },
  "28px": {
    fontSize: "14px",
  },
};

const OutlinedButton = styled.button`
  margin: 15px 0;
  padding: 0 16px;
  height: ${(props) => props.height || "56px"};
  font-size: ${(props) => buttonStyles[props.height]?.fontSize || "16px"};
  border-radius: 6px;
  border: 1px solid var(--Gray300);
  background-color: var(--White);
  font-weight: ${(props) => buttonStyles[props.height]?.fontWeight || "400"};
  color: var(--Gray900);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    display: flex;
    align-items: center;
  }

  & > span > img {
    width: ${(props) => (props.smallIcon ? "18px;" : "22px")};
    height: ${(props) => (props.smallIcon ? "17px" : "21px")};
    margin-right: 10px;
  }

  &:hover {
    background-color: var(--Gray100);
  }

  &:disabled {
    border: 0;
    background-color: var(--Gray300);
    color: var(--White);
    cursor: auto;
  }
`;

export default OutlinedButton;
