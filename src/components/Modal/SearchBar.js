import React from 'react';
import SearchView from './SearchView';
import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  width: 18.125em;
  height: 2.4em;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  @media screen and (max-width: 500px) {
    width: 10rem;
    font-size: 0.5rem;
    height: 2rem;
    border: 0.2em solid #017865;
  }
`;
const SearchInput = styled.input`
  text-align: center;
  outline: none;
  width: 14.55em;
  height: 1.9em;
  background-color: #fffff;
  border: none;
  font-size: 1em;
  z-index: 1;
`;
const Searchbox = styled.div`
  width: 18.125em;
  height: 6.25em;
  margin-top: 3px;
  background-color: #ffffff;
  overflow-y: scroll;
`;
const CancelBtn = styled.button`
  height: 1em;
  width: 1em;
  border: none;
  font-size: 1em;
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
