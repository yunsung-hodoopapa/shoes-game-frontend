import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import ResultTable from './ResultTable';

function SearchTable({ storedShoesInfo, setStoredShoesInfo}) {
  // 변수 설정
  const [keyword, setKeyword] = useState('');
  // 변수 초기값
  function deleteRow (e, index) {
    e.preventDefault();
    const rowData = [...storedShoesInfo];
    rowData.splice(index, 1);
    setStoredShoesInfo(rowData);
    // removeHandler(id);
  }

  //이벤트 등록
  const handleUserInput = useCallback((keyword) => {
    setKeyword(keyword);
  }, [keyword]);

  return (
    <>
      {/* <H /> */}
      <SearchBar keyword={keyword} onUserInput={handleUserInput} />
      <div style={{ height: '10px' }}></div>
      <ResultTable
        storedShoesInfo={storedShoesInfo}
        keyword={keyword}
        deleteRow={deleteRow}
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

// const removeHandler= (data) => {
//   const requestBody = data;
//   try {
//     const request = axios
//       .delete('http://localhost:3002/shoes/shoesInfo/delete_by_id', data, {withCredentials: true})
//       .then((res) => {
//         console.log(res);
//         console.log('delete success');
//       })
//       .catch((err) => {
//         console.log('error occured');
//       })
//   } catch (err) {
//     console.log(err);
//   }
// };

const H = () => {
  return <h1>내 신발장 목록</h1>;
};

const H2 = () => {};

export default SearchTable;
