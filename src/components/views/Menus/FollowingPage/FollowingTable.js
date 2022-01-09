import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FollowingResultRow from './FollowingResultRow';
import { removeItem } from '../../../../actions/userAction';

const Table = styled.table`
  width: 90.125em;
  height: 12.25em;
  background-color: #e6ece9;
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
  float: left;
  width: 90.125em;
  height: 28.125em;
`;

const Th1 = styled.th`
  width: 25em;
`;
const Th2 = styled.th`
  width: 9.375em;
  text-align: center;
`;

const Trow = styled.tr`
  display: table;
  width: 90.125em;
  height: 3.125em;
  border-bottom: 1px solod grey;
`;

const FollowingTable = ({ items, removeHandler }) => {
  const dataForRow = [];
  items.forEach((shoesInfo) => {
    dataForRow.push(shoesInfo);
  });

  const dispatch = useDispatch();

  const onRemove = (param) => {
    dispatch(removeItem(param));
    removeHandler(param);
  };

  return (
    <>
      <Table>
        <Thead>
          <Trow>
            <Th1>이름</Th1>
            <Th2>시장가치</Th2>
            <Th2>시장저가</Th2>
            <Th2>삭제하기</Th2>
          </Trow>
        </Thead>
        <Tbody>
          {dataForRow.map((shoesInfo) => {
            return (
              <FollowingResultRow
                shoesInfo={shoesInfo}
                key={shoesInfo._id}
                onRemove={() => onRemove(shoesInfo._id)}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default FollowingTable;
