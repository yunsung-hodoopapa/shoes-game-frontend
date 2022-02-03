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
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
const TableData = styled.td`
  display: flex;
  width: 27vw;
  padding: 1em 1em;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
    width: 8rem;
    height: 6rem;
  }
  object-fit: contain;
  @media screen and (max-width: 500px) {
    img {
      width: 4rem;
      height: 3rem;
    }
  }
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
