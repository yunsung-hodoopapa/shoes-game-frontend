import React from "react";
import styled from "styled-components";
import { FaTrash } from 'react-icons/fa'

const Td = styled.td`
  width: 130px;
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
  width: 300px;
  height: 60px;
  margin-left: 15px;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const subtraction = (a, b) => {
  if (a > b) {
    return a - b
  } else {
    return b - a
  }
}

function Benefit(props) {
  return (
    <Td>
      {props.benefitResult}
    </Td>
  );
}

const ResultRow = ({
  shoesInfo,
  index,
  handleSingleCheck,
  checkItems,
  setCheckItems,
}) => {
  const conversionShoePrice = Number(shoesInfo.shoePrice.substring(1));
  const conversionResellPrice = Number(shoesInfo.resellPrice);
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
      <Td width={'200px'}> {new Date(shoesInfo.buyingDate).toLocaleDateString()}</Td>
      <Td>{shoesInfo.shoePrice}</Td>
      <Td>{shoesInfo.resellPrice} </Td>
      <Benefit
        benefitResult={subtraction(conversionShoePrice, conversionResellPrice)}
      />
      <Td>
        <div>
          {/* <span> */}
            <input
              type={'checkbox'}
              onChange={(e) => handleSingleCheck(e.target.checked, shoesInfo._id)}
              checked={checkItems.includes(shoesInfo._id) ? true : false}
            />
          {/* </span> */}
        </div>
      </Td>
    </Trow>
  );
}

export default ResultRow;