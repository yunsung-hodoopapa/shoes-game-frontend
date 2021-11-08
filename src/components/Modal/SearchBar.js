import React from 'react';
import SearchView from './SearchView';
import styled from 'styled-components';


const SearchWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ded7d7;
`
const SearchInput = styled.input`
  text-align: center;
  outline: none;
  width: 250px;
  height: 30px;
  background-color: #ded7d7;
  position: relative;
  font-size: 20px;
  z-index: 1;
`;

const Searchbox = styled.div`
  width: 290px;
  height: 100px;
  margin-top: 3px;
  background-color: #F4F0EF;
  overflow-y: scroll;
`;

const CancelBtn = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  font-size: 15px;
  background: none;
  animation: ${
      props => props.length > 0 ? 'active' : 'inactive'
  };
  z-index: 1;
`;

const SearchBar = ({ searchItem, results, updateField }) => {

  const updateText = (text) => {
    updateField('searchItem', text, false);
    updateField('results', []);
  };

  const cancelSearch = () => {
    updateField('searchItem', '');
  };

  let renderResults;
  const arr = results['results'];

  if (arr) {
    // arr에 검색어에 대한 결과가 담기면, SearchView 호출
    renderResults= arr.map((item) => {
      return (
        <SearchView
          updateText={updateText}
          shoeName={item.shoeName}
          brand={item.brand}
          key={item.urlKey}
        />
      );
    });
  }
  // onChang를 사용해 글자를 입력할때마다 updataField호출하고 renderResults를 그린다. 
  return (
    <div>
      <SearchWrap>
        <SearchInput
            placeholder={'Enter Item to be searched'}
            value={ searchItem || ''}
            onChange={(e)=> updateField('searchItem', e.target.value)}
        />
        { searchItem &&
          <CancelBtn
          onClick={() => cancelSearch}
          > x </CancelBtn>
        }
        
      </SearchWrap>
      { searchItem ?
        <Searchbox>
          {renderResults}
        </Searchbox>
      : null }
    </div>
  );
}

// 검색된 아이템의 'shoename'과 'brand'를 출력
// 결과값을 클릭하면 updateText를 호출해 input에 name을 표시 

export default SearchBar;