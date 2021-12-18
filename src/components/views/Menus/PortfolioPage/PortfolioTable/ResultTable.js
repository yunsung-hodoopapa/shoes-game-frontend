import React, { useState } from 'react';
import styled from 'styled-components';
import ResultRow from './ResultRow';

const Table = styled.table`
  width: 100%;
  height: 200px;
  background-color: white;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  float: left;
  width: 1280px;
  border-bottom: 1px solid black;
`;

const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  width: 1280px;
  height: 150px;
`;

const Th1 = styled.th`
  width: 400px;
`;
const Th2 = styled.th`
  width: 130px;
  text-align: center;
`;

const Trow = styled.tr`
  display: table;
  width: 1280px;
  height: 50px;
  border-bottom: 1px solod grey;
`;

const ResultTable = ({
  storedShoesInfo,
  keyword,
  deleteRow,
  getShoePriceHandler,
  checkItems,
  setCheckItems,
}) => {
  const dataFoRrow = [];
  storedShoesInfo.forEach((shoesInfo) => {
    if (shoesInfo.shoeName.indexOf(keyword) === -1) {
      return;
    }
    dataFoRrow.push(shoesInfo);
  });

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      dataFoRrow.forEach((el) => idArray.push(el._id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleChange = (e) => {
    setCheckItems([]);
  };
  console.log(checkItems);
  console.log(dataFoRrow.length);

  console.log(checkItems);

  return (
    <>
      <Table>
        <Thead>
          <Trow>
            <Th1>이름</Th1>
            <Th2>구매일</Th2>
            <Th2>구매가격</Th2>
            <Th2>시장가치</Th2>
            <Th2>이익/손실</Th2>
            <Th2>
              <div>
                <span>
                  <input
                    type={'checkBox'}
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    // checkItems의 객수와 불러오는 데이터가 같을 때, 전체 선택을 활성화
                    // 하나라도 빼면 체크박스를 해제한다.
                    checked={
                      checkItems.length === dataFoRrow.length ? true : false
                    }
                  />
                </span>
              </div>
            </Th2>
          </Trow>
        </Thead>
        <Tbody>
          {dataFoRrow.map((shoesInfo, index) => {
            return (
              <ResultRow
                dataFoRrow={dataFoRrow}
                shoesInfo={shoesInfo}
                index={index}
                getShoePriceHandler={getShoePriceHandler}
                checkItems={checkItems}
                setCheckItems={setCheckItems}
                handleSingleCheck={handleSingleCheck}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default ResultTable;
