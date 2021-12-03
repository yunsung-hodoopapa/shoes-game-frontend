import React from "react";
import styled from "styled-components";
import { FaTrash } from 'react-icons/fa'

const Td = styled.td`
  width: 150px;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 1134px;
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

const ResultRow = ({
  shoesInfo,
  index,
  deleteRow,
  getShoePriceHandler,
}) => {
  return (
    <Trow key={index}>
      <TableData>
        <img src={shoesInfo.thumbnail} width={'100'} height={'60'} display={'inline-block'} />
        <ShoeNameInTd>
          {shoesInfo.shoeName}
          <br />
          {shoesInfo.shoeSize}
        </ShoeNameInTd>
      </TableData>
      <Td width={'200px'}> {new Date(shoesInfo.buyingDate).toLocaleDateString()}</Td>
      <Td>{shoesInfo.shoePrice}</Td>
      <Td
        index={index}
        onClick={(e) => getShoePriceHandler(e.target.index)}> 준비중 </Td>
      <Td>준비중</Td>
      <Td>
        <FaTrash
          index={index}
          id={shoesInfo._id}
          onClick={(e) => deleteRow(e, e.target.index)}
        />
      </Td>
    </Trow>
  );
}

export default ResultRow;