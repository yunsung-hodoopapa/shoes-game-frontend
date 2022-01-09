import React from 'react';
import styled from 'styled-components';
import ResultRow from './ResultRow';

const Table = styled.table`
  width: 90.125em;
  height: 12.25em;
  border-collapse: collapse;
`;
const Thead = styled.thead`
  float: left;
  width: 90.125em;
  background-color: #ccd9d3;
  border-bottom: 1px solid #336851;
`;
const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #e6ece9;
  float: left;
  width: 90.125em;
  height: 9.3em;
`;
const Th1 = styled.th`
  width: 25em;
`;
const Th2 = styled.th`
  width: 8.1em;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 90.125em;
  height: 3em;
  border-bottom: 1px solod grey;
`;

const ResultTable = ({
  storedShoesInfo,
  keyword,
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
                key={shoesInfo._id}
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
