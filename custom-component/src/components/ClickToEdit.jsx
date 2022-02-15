import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Title, Wrapper } from "./layout/layout";

const FormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;
const Name = styled.span`
  margin-right: 15px;
`;
const InputBox = styled.input`
  height: 30px;
  border-radius: 8px;
  padding-left: 5px;
  border: 1px solid #2f3640;
`;
const Result = styled.div`
  font-weight: 600;
  margin-top: 25px;
`;
function ClickToEdit() {
  const [user, setUser] = useState({
    name: "이코딩",
    age: 26,
  });
  const userHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <Title>ClickToEdit</Title>
      <FormBox>
        <Name>이름</Name>
        <InputBox
          type="text"
          name="name"
          defaultValue={user.name}
          onBlur={userHandler}
        />
      </FormBox>
      <FormBox>
        <Name>나이</Name>
        <InputBox
          type="text"
          name="age"
          defaultValue={user.age}
          onBlur={userHandler}
        />
      </FormBox>
      <Result>{`이름: ${user.name}, 나이: ${user.age}`}</Result>
    </Wrapper>
  );
}

export default ClickToEdit;
