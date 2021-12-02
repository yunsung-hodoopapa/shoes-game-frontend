import React from 'react';
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
  width: 1134px;
  border-bottom: 1px solid black;
`;

const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  width: 1134px;
  height: 100px;
`;

const Th1 = styled.th`
  width: 400px;
`;
const Th2 = styled.th`
  width: 150px;
  text-align: center;
`;

const Trow = styled.tr`
  display: table;
  width: 1134px;
  height: 50px;
  border-bottom: 1px solod grey;
`;

const ResultTable = ({
  storedShoesInfo,
  keyword,
  deleteRow,
}) => {
  let dataFoRrow = [];
  storedShoesInfo.forEach((shoesInfo) => {
    if (shoesInfo.shoeName.indexOf(keyword) === -1) {
      return;
    }
    // dataFoRrow.push(<ResultRow key={index} shoesInfo={shoesInfo} />);
    dataFoRrow.push(shoesInfo);
  });
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
            <Th2>삭제하기</Th2>
          </Trow>
        </Thead>
        <Tbody>
          {dataFoRrow.map((shoesInfo, index) => {
            return (
              <ResultRow
                shoesInfo={shoesInfo}
                key={index}
                index={index}
                deleteRow={deleteRow}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default ResultTable;
