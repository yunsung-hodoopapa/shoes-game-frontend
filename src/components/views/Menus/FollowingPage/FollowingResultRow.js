import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const Td = styled.td`
  width: 9.375em;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 90.125em;
  height: 3.125em;
  border-bottom: 1px solod grey;
`;
const TableData = styled.td`
  width: 25em;
  height: 3.125em;
`;

const ShoeNameInTd = styled.div`
  width: 17.5em;
  height: 3.75em;
  margin-left: 1em;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShoesTumbnail = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  width: 9.3em;
  height: 5.6em;
  img {
    width: 9.3em;
    height: 5.6em;
    display: inline-block;
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
                width={'100'}
                height={'60'}
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
