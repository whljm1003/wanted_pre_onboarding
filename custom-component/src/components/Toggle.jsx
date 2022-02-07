import React, { useState } from "react";
import styled from "styled-components";
import { Title, Wrapper } from "./layout/layout";

const ToggleBtn = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "none" : "rgb(51,30,190)")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translate(80px, 0);
    transition: all 0.5s ease-in-out;
  }
`;

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Wrapper>
      <Title>Toggle</Title>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle className={toggle && "active"} />
      </ToggleBtn>
      <h3>Toggle Switch {!toggle ? "OFF" : "ON"}</h3>
    </Wrapper>
  );
}

export default Toggle;
