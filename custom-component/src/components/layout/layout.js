import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 35vh;
  width: 70vw;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 0.5px grey;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 2%;
  font-size: 25px;
  font-weight: 600;
`;
