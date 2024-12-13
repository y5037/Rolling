import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  width: 244px;
  height: 40px;
  background-color: var(--Gray100);
  overflow: hidden;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  margin: 20px;
  padding: 0;

  @media (max-width: 767px) {
    width: 236px;
  }
`;

const ToggleButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 7px 16px;
  font-size: 16px;
  font-weight: ${(props) => (props.active ? "bold" : "regular")};
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "var(--White)" : "var(--Gray100)"};
  color: ${(props) => (props.active ? "var(--Purple600)" : "var(--Black)")};
  border: ${(props) => (props.active ? "2px solid var(--Primary)" : "none")};
  border-radius: ${(props) => (props.active ? "6px" : "0")};
  transition: all 0.1s ease;
`;

const Toggle = () => {
  const [active, setActive] = useState("color");

  return (
    <ToggleContainer>
      <ToggleButton
        active={active === "color"}
        onClick={() => setActive("color")}
      >
        컬러
      </ToggleButton>
      <ToggleButton
        active={active === "image"}
        onClick={() => setActive("image")}
      >
        이미지
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
