import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SampleInformation from '../../constants/sample';
import axios from 'axios';
import { request } from '../../utils/axios';

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  wrap: no-wrap;
`;
const SearchResult = ({
  keyword,
  setKeyword,
  onChange,
  getShoesInfo,
}) => {
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
        const res = await axios.get('http://localhost:3002/shoes/search', {
          params: { keyword },
        });
        console.log(res);
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
    // let searchData, data;
    // try{
    //   searchData = await fetch('http://localhost:3002/shoes/:search', {
    //     mehtod: 'GET',
    //   });
    //   data = await searchData.json();
    //   console.log(data);
    // } catch (err) {
    //   console.log(err.message);
    // }
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

  // const items = SampleInformation.filter((data) => {
  //   if (searchItem === '') {
  //     return data
  //   } else if (data.shoeName.toLowerCase().includes(searchItem.toLowerCase())) {
  //     return data
  //   }
  // }).map((data, key) => {
  //   <div key={key}>
  //     <p> {data.shoeName} </p>
  //     <p> {data.brand} </p>
  //     <img src={data.thumbnail} />
  //   </div>
  // })

  // return (
  //   <InputWrap>
  //     <Title
  //       defaultValue={searchItem}
  //       type='text'
  //       placeholder={'Enter Item to be searched'}
  //       onChange={onSubmitSearch}
  //     />
  //     {searchItem ?
  //       <Searchbox>
  //         {items}
  //       </Searchbox>
  //     : null }
  //   </InputWrap>
  // );
};

export default SearchResult;
