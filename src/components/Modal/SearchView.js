import { trace } from "loglevel";
import React from "react";
import styled from "styled-components";

const ResultsWrap = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ResultsName = styled.td`
  width: 200px;
  font-size: 13px;
  border-bottom: 1px solid black;
  cursor: hand;
`

const ResultsBrand = styled.td`
  width: 70px;
  font-size: 13px;
  border-bottom: 1px solid black;
`

const SearchView = ({shoeName, brand, key, updateText }) => {
  return (
    <ResultsWrap
      onClick = {() => updateText(shoeName)}
    >
      <tr
        // shoeName={shoeName}
        // brand={brand}
        // key={urlKey}
      >
        <ResultsName>{shoeName}</ResultsName>
        <ResultsBrand>{brand}</ResultsBrand>
      </tr>
    </ResultsWrap>
  );
};

export default SearchView