import styled from "styled-components";
import left from "../../../assets/images/button/arrow_left.png";
import right from "../../../assets/images/button/arrow_right.png";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid #dadcdf;
  background-color: var(--White);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s ease;
`;

export function LeftArrowButton({ className }) {
  return (
    <ArrowButton className={className}>
      <Icon src={left} alt="left button" />
    </ArrowButton>
  );
}

export function RightArrowButton({ className }) {
  return (
    <ArrowButton className={className}>
      <Icon src={right} alt="right button" />
    </ArrowButton>
  );
}
