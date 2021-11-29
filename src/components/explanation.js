import React from "react";

import styled from "styled-components";
const ExpStyle = styled.div`
  display: flex;
  color: #e8eddf;
  padding: 10px;
  border-radius: 5px;
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
  justify-content: center;
  display: inline-block;
  width: 80%;
`;
const Exp = styled.div`
 
`;
export default function Explnation({ explanation }) {
  return (
    <ExpStyle>
      <Exp>{explanation}</Exp>
    </ExpStyle>
  );
}

