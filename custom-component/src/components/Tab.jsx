import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Title, Wrapper } from "./layout/layout";
import Tab1 from "./Tab/Tab1";
import Tab2 from "./Tab/Tab2";
import Tab3 from "./Tab/Tab3";

const TabBar = styled.ul`
  width: 92%;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style: none;
  padding-left: 0px;
  background-color: #dad6d6;
`;
const TabBtn = styled.li`
  width: 33%;
  height: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.white.veryDark};
  line-height: 50px;
  text-align: center;
  padding-left: 10px;
  z-index: 1;

  &.isActive {
    color: ${(props) => props.theme.white.lighter};
    background-color: ${(props) => props.theme.blue};
    transition: all 0.2s ease;
  }
`;
const Contents = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 75px;
`;

const arr = ["Tab One", "Tab Two", "Tab Three"];

function Tab() {
  const [tabNum, setTabNum] = useState(0);

  const CompoObj = {
    0: <Tab1 />,
    1: <Tab2 />,
    2: <Tab3 />,
  };
  const onClickedTab = (index) => {
    setTabNum(index);
  };
  return (
    <Wrapper>
      <Title>Tab</Title>
      <TabBar>
        {arr.map((e, index) => (
          <TabBtn
            key={e}
            className={tabNum === index && "isActive"}
            onClick={(e) => onClickedTab(index)}
          >
            {e}
          </TabBtn>
        ))}
      </TabBar>
      <Contents>{CompoObj[tabNum]}</Contents>
    </Wrapper>
  );
}

export default Tab;
