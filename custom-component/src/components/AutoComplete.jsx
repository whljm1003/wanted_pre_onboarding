import React from "react";
import { Title, Wrapper } from "./layout/layout";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";

const Search = styled.input`
  width: 60vw;
  height: 50px;
  border-radius: 12px;
  border: 1px solid black;
  font-size: 25px;
  padding-left: 20px;
  box-shadow: 1px 1px 1px #718093;
  &.clicked {
    box-shadow: 3px 10px 10px grey;
  }
  &::placeholder {
    text-align: center;
  }
`;

const CancelBtn = styled.span`
  width: 30px;
  position: absolute;
  top: 10px;
  right: 20px;
  line-height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
`;

const SuggestBg = styled.li`
  position: absolute;
  top: 55px;
  list-style: none;
  padding-left: 20px;
`;
const SuggestItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  padding-top: 2px;
  cursor: pointer;
`;

const data = [
  "javascript",
  "typescript",
  "python",
  "java",
  "react",
  "vue",
  "anguler",
  "nodejs",
  "nextjs",
];

function AutoComplete() {
  const [search, setSearch] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = data
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearch(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearch(value);
    setSuggest([]);
  };

  const resetBtn = () => {
    setSearch("");
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && search !== "" && !resfound) {
      return (
        <p
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
          }}
        >
          Search Content Not Found
        </p>
      );
    }
    return (
      <SuggestBg>
        {suggest.map((item, index) => {
          return (
            <>
              <SuggestItem key={index} onClick={() => suggestedText(item)}>
                {item}
              </SuggestItem>
            </>
          );
        })}
      </SuggestBg>
    );
  };

  return (
    <Wrapper>
      <Title>AutoComplete</Title>
      <div style={{ position: "relative" }}>
        <Search
          type="text"
          placeholder="search bar"
          value={search}
          onChange={handleChange}
          className="search"
        />
        {getSuggestions()}
        <CancelBtn onClick={resetBtn}>X</CancelBtn>
      </div>
    </Wrapper>
  );
}

export default AutoComplete;
