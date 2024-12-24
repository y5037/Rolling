import styled from "styled-components";
import PageBack from "../../../assets/images/button/page_back.png";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BackButton = styled.button`
  align-items: center;
  width: 62px;
  padding: 16px 19px;
  color: var(--White);
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
  border-radius: 12px;
  border: 1px solid var(--Gray300);
  box-sizing: border-box;
  background-color: var(--White);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--Gray400);
  }

  &:active {
    background-color: var(--White);
  }

  &:focus {
    background-color: var(--Gray400);
  }
`;

export function PageBackButton({ className, onClick }) {
  return (
    <BackButton className={className} onClick={onClick}>
      <Icon src={PageBack} alt="Page Back button" />
    </BackButton>
  );
}

export default PageBackButton;
