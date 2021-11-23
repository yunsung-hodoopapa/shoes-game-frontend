import React from 'react';
import styled from 'styled-components';

const ResultsWrap = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultsName = styled.td`
  width: 200px;
  font-size: 13px;
  border-bottom: 1px solid black;
  cursor: hand;
`;

const ResultsBrand = styled.td`
  width: 70px;
  font-size: 13px;
  border-bottom: 1px solid black;
`;

const ResultsThumbnail = styled.td`
  width: 100px;
  height: 60px;
  border-bottom: 1px solid black;
  // background-color: tomato;
`;

const SearchView = ({ index, updateText, item, getShoesInfo }) => {
  const { shoeName, brand, thumbnail } = item;
  const updateShoesInfo = (e) => {
    e.preventDefault();
    updateText(shoeName);
    getShoesInfo(item);
  };
  return (
    <ResultsWrap
      shoeName={shoeName}
      brand={brand}
      key={index}
      thumbnail={thumbnail}
      onClick={(e) => updateShoesInfo(e)}
    >
      <tbody>
        <tr key={index}>
          <ResultsThumbnail>
            <img src={thumbnail} width="100" height="60" alt='shoes thumbnail' />
          </ResultsThumbnail>
          <ResultsName>{shoeName}</ResultsName>
          <ResultsBrand>{brand}</ResultsBrand>
        </tr>
      </tbody>
    </ResultsWrap>
  );
};

export default SearchView;
