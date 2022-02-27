import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import axios from 'axios';
import { SERVER_URL } from '../../constants/index';

const InputWrap = styled.div`
  display: flex;
  width: 12.55em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  wrap: no-wrap;
`;
const SearchResult = ({ keyword, setKeyword, getShoesInfo }) => {
  const [results, setResults] = useState([]);

  //필드를 업데이트 한다.
  const updateField = (field, value, update = true) => {
    // debugger;
    if (update === true) {
      onSearch(value);
    }
    if (field === 'keyword') {
      setKeyword(value);
      setResults([]);
    }
  };

  // 입력된 텍스트로  data 배열에서 찾아 매칭되는 결과 저장하기
  const onSearch = async (keyword) => {
    // http://localhost:3002/shoes?keyword=text
    // restful 한 api 인가 고민하기
    try {
      if (keyword.length > 3) {
        const res = await axios.get(`${SERVER_URL}/shoes/search`, {
          params: { keyword },
        });
        if (res?.status === 200) {
          const { data } = res;
          let results = data.filter((item) =>
            matchName(item.shoeName, keyword)
          );
          // results = [{}, {}, {}]...
          setResults(results);
        } else {
          console.log('----');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 검색해야할 문자열을 키워드와 비교해 미칭이 되는지 체크한다.

  const matchName = (shoeName, keyword) => {
    let keywordLen = keyword.length;
    shoeName = shoeName.toLowerCase().substring(0, keywordLen);

    if (keyword === '') {
      return false;
    } else {
      return shoeName === keyword.toString().toLowerCase();
    }
  };

  return (
    <InputWrap>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        results={results}
        setResults={setResults}
        updateField={updateField}
        getShoesInfo={getShoesInfo}
      />
    </InputWrap>
  );
};

export default SearchResult;
