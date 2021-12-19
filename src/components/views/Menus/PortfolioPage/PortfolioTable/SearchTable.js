import React, { useState, useCallback } from 'react';
import ResultTable from './ResultTable';

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
      <SearchBar keyword={keyword} onUserInput={handleUserInput} />
      <div style={{ height: '10px' }}></div>
      <ResultTable
        storedShoesInfo={storedShoesInfo}
        keyword={keyword}
        checkItems={checkItems}
        setCheckItems={setCheckItems}
      />
    </>
  );
}

function SearchBar(props) {
  const onChange = (e) => {
    props.onUserInput(e.target.value);
  };
  return (
    <div>
      <input
        type={'text'}
        placeholder={'Search'}
        onChange={onChange}
        value={props.keyword}
      />
    </div>
  );
}

export default SearchTable;
