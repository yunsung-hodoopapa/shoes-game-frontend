import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ResultTable from './ResultTable';

const InputWrap = styled.div`
  display: flex;
  width: 79vw;
  justify-content: flex-end;
`;

function SearchTable({ storedShoesInfo, checkItems, setCheckItems }) {
  const [keyword, setKeyword] = useState('');

  const handleUserInput = useCallback(
    (keyword) => {
      setKeyword(keyword);
    },
    [keyword]
  );

  return (
    <>
      <ItemSearchBar keyword={keyword} onUserInput={handleUserInput} />
      <div style={{ height: '1rem' }}></div>
      <ResultTable
        storedShoesInfo={storedShoesInfo}
        keyword={keyword}
        checkItems={checkItems}
        setCheckItems={setCheckItems}
      />
    </>
  );
}

function ItemSearchBar(props) {
  const onChange = (e) => {
    props.onUserInput(e.target.value);
  };
  return (
    <InputWrap>
      <input
        type={'text'}
        placeholder={'Search'}
        onChange={onChange}
        value={props.keyword}
      />
    </InputWrap>
  );
}

export default SearchTable;
