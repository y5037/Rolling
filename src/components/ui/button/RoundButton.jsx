import styled from "styled-components";
import plus from "../../../assets/images/button/plus.png";
import check from "../../../assets/images/button/check.png";
import home from "../../../assets/images/button/home.png";
import { useNavigate } from "react-router-dom";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const RoundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 16px;
  border-radius: 50%;
  border: 1px solid transparent;
  box-sizing: border-box;
  background-color: var(--Gray500);
  cursor: pointer;

  &:hover {
    background-color: var(--Gray600);
  }

  &:disabled {
    background-color: var(--Gray300);
    color: var(--White);
  }

  &:active {
    background-color: var(--Gray700);
    color: var(--White);
  }

  &:focus {
    background-color: var(--Gray700);
    border: 1px solid var(--Gray800);
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export function PlusButton({ className, handleMessageClick }) {
  return (
    <RoundButton className={className} onClick={handleMessageClick}>
      <Icon src={plus} alt="plus button" />
    </RoundButton>
  );
}

export function HomeButton({ className, handleHomeClick }) {

  return (
    <RoundButton className={className} onClick={handleHomeClick}>
      <Icon src={home} alt="home button" />
    </RoundButton>
  );
}

export function CheckButton({ className, }) {
  return (
    <RoundButton className={className}>
      <Icon src={check} alt="check button" />
    </RoundButton>
  );
}
