import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SampleInformation from "../../constants/sample";

const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
wrap: no-wrap;
`
const SearchResult = () => {
  const [searchItem, setSearchItem] = useState('');
  const [results, setResults] = useState([]);

  //필드를 업데이트 한다.
  const updateField = (field, value, update = true) => {
    if (update) {
      onSearch(value);
    }
    if (field === 'searchItem') {
      setSearchItem(value);
    }
  }

  // 입력된 텍스트로  data 배열에서 찾아 매칭되는 결과 저장하기
  const onSearch = (text) => {
    let results = SampleInformation.filter(item => true === matchName(item.shoeName, text));
      setResults({results});
  };

  // 검색해야할 문자열을 키워드와 비교해 미칭이 되는지 체크한다.

  const matchName = (shoeName, searchItem) => {
    let searchItemLen = searchItem.length;
    shoeName = shoeName.toLowerCase().substring(0, searchItemLen);

    if (searchItem ==='') {
      return false;
    } else {
      return shoeName === searchItem.toString().toLowerCase();
    }
  }

  return (
    <InputWrap>
        <SearchBar
          searchItem={searchItem}
          results={results}
          updateField={updateField}
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
}

export default SearchResult