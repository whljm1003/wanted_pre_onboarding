import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Title, Wrapper } from "./layout/layout";

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  width: 80%;
  height: 60px;
`;
const Hash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.blue};
  border-radius: 12px;
  padding: 0 10px;
  margin: 10px;
  height: 40px;
`;
const HashName = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  margin-right: 10px;
`;
const HashBtn = styled.button`
  border: none;
  outline: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.white.lighter};
  cursor: pointer;
`;
const InputBox = styled.input`
  border: none;
  height: 30px;
  font-size: 32px;
  &:focus {
    outline: none;
  }
`;

function Tag() {
  const [hash, setHash] = useState(["codestates", "hash"]);
  const [item, setItem] = useState("");
  const removeHash = (i) => {
    const cloneHash = hash.slice();
    cloneHash.splice(i, 1);
    setHash(cloneHash);
  };
  const addHash = (e) => {
    setItem(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    setHash([...hash, item]);
    setItem("");
  };

  return (
    <Wrapper>
      <Title>Tag</Title>
      <TagContainer>
        {hash.map((e, i) => (
          <Hash key={i}>
            <HashName>{e}</HashName>
            <HashBtn onClick={() => removeHash(i)}>x</HashBtn>
          </Hash>
        ))}

        <InputBox
          placeholder="Press enter to add tags"
          onChange={(e) => addHash(e)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={item}
        />
      </TagContainer>
    </Wrapper>
  );
}

export default Tag;
