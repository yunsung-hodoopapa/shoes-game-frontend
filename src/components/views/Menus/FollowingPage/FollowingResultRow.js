import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTrash } from 'react-icons/fa'

const Td = styled.td`
  width: 150px;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 1280px;
  height: 50px;
  border-bottom: 1px solod grey;
`;
const TableData = styled.td`
  width: 400px;
  height: 50px;
`;

const ShoeNameInTd = styled.div`
  width: 280px;
  height: 60px;
  margin-left: 15px;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FollowingResultRow = ({
  shoesInfo,
  key,
  onRemove,
}) => {
  console.log(shoesInfo);
  // console.log(shoesInfo.lowestResellPrice.stockX);
  return (
    <Trow key={shoesInfo._id}>
      <TableData>
        <img src={shoesInfo.thumbnail} width={'100'} height={'60'} display={'inline-block'} />
        <ShoeNameInTd>
          {shoesInfo.shoeName}
          <br />
          {shoesInfo.shoeSize}
        </ShoeNameInTd>
      </TableData>
      <Td>{shoesInfo.resellPrice}</Td>
      <Td>{shoesInfo.lowestResellPrice} </Td>
      <Td>
        <FaTrash
          id={shoesInfo._id}
          onClick={onRemove}
        />
      </Td>
    </Trow>
  )
}

export default FollowingResultRow;