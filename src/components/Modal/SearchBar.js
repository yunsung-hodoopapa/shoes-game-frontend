import React from 'react';
import SearchView from './SearchView';
import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ded7d7;
`;
const SearchInput = styled.input`
  text-align: center;
  outline: none;
  width: 21rem;
  height: 30px;
  background-color: #ded7d7;
  position: relative;
  font-size: 20px;
  z-index: 1;
`;
const Searchbox = styled.div`
  width: 23.5rem;
  height: 100px;
  margin-top: 3px;
  background-color: white;
  overflow-y: scroll;
`;
const CancelBtn = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  font-size: 15px;
  background: none;
  animation: ${(props) => (props.length > 0 ? 'active' : 'inactive')};
  z-index: 1;
`;

const SearchBar = ({
  keyword,
  results,
  setResults,
  updateField,
  getShoesInfo,
  getFollowShoesInfo,
}) => {
  const updateText = (text) => {
    updateField('keyword', text, false);
    setResults([]);
  };

  const cancelSearch = () => {
    updateField('keyword', '');
  };

  const limitEnglish = (e) => {
    e.target.value = e.target.value.replace(/[^\!-z\s]/gi, '');
  };

  const renderResults = results.map((item, index) => {
    return (
      <SearchView
        updateText={updateText}
        item={item}
        key={index}
        getShoesInfo={getShoesInfo}
      />
    );
  });

  return (
    <div>
      <SearchWrap>
        <SearchInput
          type={'text'}
          onKeyDown={limitEnglish}
          placeholder={'Enter Item to be searched'}
          value={keyword || ''}
          onChange={(e) => updateField('keyword', e.target.value)}
        />
        {keyword && <CancelBtn onClick={() => cancelSearch()}> x </CancelBtn>}
      </SearchWrap>
      {results.length > 0 ? <Searchbox> {renderResults} </Searchbox> : null}
    </div>
  );
};

export default SearchBar;
