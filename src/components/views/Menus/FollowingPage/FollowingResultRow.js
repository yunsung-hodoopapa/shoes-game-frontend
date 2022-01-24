import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const Td = styled.td`
  width: 20vw;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 100%;
  border-bottom: 1px solid grey;
  height: 3.125em;
  word-break : break-all;
  height : auto;
  font-size: 1.5em;
`;
const TableData = styled.td`
  display: flex;
  width: 25vw;
  padding: 1em 1em;
`;
const ShoeNameInTd = styled.div`
  display: flex;
  width: 60%
  margin-left: 1em;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ShoesTumbnail = styled.div`
  margin: 1em 1em;
  img {
    width: 9.3em;
    height: 5.6em;
  }
  object-fit: contain;
`;

const FollowingResultRow = ({ shoesInfo, key, onRemove }) => {
  return (
    <>
      {shoesInfo ? (
        <Trow key={shoesInfo._id}>
          <TableData>
            <ShoesTumbnail>
              <img
                src={shoesInfo.thumbnail}
                display={'inline-block'}
                alt="shoes thumnail"
              />
            </ShoesTumbnail>
            <ShoeNameInTd>
              {shoesInfo.shoeName}
              <br />
              {shoesInfo.shoeSize}
            </ShoeNameInTd>
          </TableData>
          <Td>{shoesInfo.resellPrice}</Td>
          <Td>{shoesInfo.lowestResellPrice} </Td>
          <Td>
            <FaTrash id={shoesInfo._id} onClick={onRemove} />
          </Td>
        </Trow>
      ) : null}
    </>
  );
};

export default FollowingResultRow;
