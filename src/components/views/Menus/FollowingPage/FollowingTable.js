import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { shoeListLength } from '../../../../constants';
import FollowingResultRow from './FollowingResultRow';
import { removeItem } from '../../../../actions/userAction';

const Table = styled.table`
  width: 100%;
  height: 600px;
  background-color: #9e9696;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  float: left;
  width: 1280px;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid black;
`;

const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  width: 1280px;
  height: 450px;
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
  width: 1280px;
  height: 50px;
  border-bottom: 1px solod grey;
`;

const FollowingTable = ({ items, removeHandler, storedShoesInfo, setStoredShoesInfo }) => {
  console.log(items);
  let dataForRow = [];
  items.forEach((shoesInfo) => {
    dataForRow.push(shoesInfo);
  });
  const dispatch = useDispatch();

  const onRemove = (param) => {
    console.log(param);
    dispatch(removeItem(param));
    removeHandler(param);
    // console.log('here');
    // console.log(params);
    // setStoredShoesInfo(
    //   items.filter((shoesInfo) => shoesInfo._id !== params)
    // );
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
          {dataForRow.map((shoesInfo, index) => {
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
