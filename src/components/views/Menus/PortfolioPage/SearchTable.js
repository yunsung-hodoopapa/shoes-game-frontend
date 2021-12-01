import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

function SearchTable() {
  // 변수 설정
  const [storedShoesInfo, setStoredShoesInfo] = useState([]);
  const [keyword, setKeyword] = useState('');
  // 변수 초기값
  useEffect(() => {
    axios.get('http://localhost:3002/shoes/managed-shoesInfo').then((res) => {
      setStoredShoesInfo(res.data);
    });
  }, []); // Mount 할 때만 실행된다
  //이벤트 등록
  const handleUserInput = useCallback((keyword) => {
    setKeyword(keyword);
  }, [keyword]);
  return (
    <>
      <H />
      <SearchBar keyword={keyword} onUserInput={handleUserInput} />
      <div style={{ height: '30px' }}></div>
      <ResultTable storedShoesInfo={storedShoesInfo} keyword={keyword} />
    </>
  );
}

function ResultTable(props) {
  let row = [];
  props.storedShoesInfo.forEach((shoesInfo) => {
    console.log(shoesInfo);
    if (shoesInfo.shoeName.indexOf(props.keyword) === -1) {
      return;
    }
    row.push(<ResultRow shoesInfo={shoesInfo} />);
  });
  return (
    <table>
      <thead>
        <tr>
          <th>썸네일</th>
          <th>신발이름</th>
          <th>사이즈</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
}

function ResultRow(props) {
  console.log(props);
  return (
    <tr>
      <td>
        <img src={props.shoesInfo.thumbnail} width={'100'} height={'60'} />
      </td>
      <td>{props.shoesInfo.shoeName}</td>
      <td>{props.shoesInfo.shoeSize}</td>
    </tr>
  );
}

function SearchBar(props) {
  const onChange = (e) => {
    props.onUserInput(e.target.value);
  };
  return (
    <table>
      <tr>
        <td>
          <input
            type={'text'}
            placeholder={'Search'}
            onChange={onChange}
            value={props.keyword}
          />
        </td>
      </tr>
    </table>
  );
}

const H = () => {
  return <h1>내 신발장 목록</h1>;
};

const H2 = () => {};

export default SearchTable;
