import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FollowingResultRow from './FollowingResultRow';
import { removeItem } from '../../../../actions/userAction';

const TableWrap = styled.div`
  width: 100%;
  height: 85%;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 0.5rem;
    height: 90%;
  }
`

const Table = styled.table`
  width: 100%;
  height: 100%;
  background-color: #e6ece9;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  display: table;
  float: left;
  width: 100%;
  height: 5vh;
  background-color: #ccd9d3;
  border-bottom: 1px solid #336851;
`;

const Tbody = styled.tbody`
  overflow-y: scroll;
  overflow-x: hidden;
  float: left;
  width: 100%;
`;

const Th1 = styled.th`
  width: 35vw;
  font-size: 1em;
  @media screen and (max-width: 500px) {
    width: 15rem;
  }
`;
const Th2 = styled.th`
  width: 23vw;
  text-align: center;
  font-size: 1em;
`;

const Trow = styled.tr`
  display:table-cell;
  vertical-align:middle;
  height: 3.125em;
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
    <TableWrap>
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
    </TableWrap>
  );
};

export default FollowingTable;
