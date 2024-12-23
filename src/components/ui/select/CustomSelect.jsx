import React, { useState } from "react";
import styled from "styled-components";
import selectArrowIcon from "../../../assets/images/select/arrow_down.png";
import selectArrowHoverIcon from "../../../assets/images/select/arrow_top.png";

const DropdownContainer = styled.div`
  position: relative;
  width: 320px;
`;

const SelectOption = styled.button`
  position: relative;
  width: 100%;
  display: block;
  padding: 12px 42px 12px 16px;
  border: 1px solid var(--Gray300);
  border-radius: 8px;
  color: var(--Gray500);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  background-color: var(--White);

  &.active {
    border: 2px solid var(--Gray500);
  }

  &.active + ul {
    opacity: 1;
    z-index: 99;
  }

  &.active::after {
    transform: translateY(-50%) rotate(180deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);
    width: 14px;
    height: 8px;

    background: url(${selectArrowIcon}) no-repeat;
  }

  &:disabled {
    background-color: var(--Gray100);
    color: va(--Gray400);
    cursor: auto;
  }

  &:disabled::after {
    background: url(${selectArrowHoverIcon}) no-repeat;
  }
`;

const SelectOptionList = styled.ul`
  opacity: 0;
  padding: 10px 0;
  position: absolute;
  top: 53px;
  left: 0;
  right: 0;
  border-radius: 8px;
  background-color: var(--White);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: -1;
  transition: all 0.3s;
`;

const OptionItem = styled.li`
  padding: 12px 16px;
  color: var(--Gray900);

  &:hover {
    background-color: var(--Gray100);
  }
`;

export default function CustomSelect({
  options = [],
  defaultValue = "Placeholder",
  disabled,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelectOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <DropdownContainer>
      <SelectOption
        onClick={toggleDropdown}
        className={isOpen ? "active" : ""}
        disabled={disabled}
      >
        {selectedOption}
      </SelectOption>
      {isOpen && (
        <SelectOptionList>
          {options.map((option, index) => (
            <OptionItem key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </OptionItem>
          ))}
        </SelectOptionList>
      )}
    </DropdownContainer>
  );
}
