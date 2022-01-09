import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  width: 8.1em;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 90.125em;
  height: 3.1em;
  border-bottom: 1px solod grey;
`;
const TableData = styled.td`
  width: 25em;
  height: 3.1em;
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
`

const ShoeNameInTd = styled.div`
  width: 18.75em;
  height: 3.75em;
  margin-left: 1em;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.thumbnail});
`;

const subtraction = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

function Benefit(props) {
  return <Td>{props.benefitResult}</Td>;
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
        <ShoesTumbnail>
          <img
            src={shoesInfo.thumbnail}
            display={'inline-block'}
            alt='shoes thumbnail'
          />
        </ShoesTumbnail>
        <ShoeNameInTd>
          {shoesInfo.shoeName}
          <br />
          {shoesInfo.shoeSize}
        </ShoeNameInTd>
      </TableData>
      <Td width={'200px'}>
        {' '}
        {new Date(shoesInfo.buyingDate).toLocaleDateString()}
      </Td>
      <Td>{shoesInfo.shoePrice}</Td>
      <Td>{shoesInfo.resellPrice} </Td>
      <Benefit
        benefitResult={subtraction(conversionShoePrice, conversionResellPrice)}
      />
      <Td>
        <div>
          <input
            type={'checkbox'}
            onChange={(e) => handleSingleCheck(e.target.checked, shoesInfo._id)}
            checked={checkItems.includes(shoesInfo._id) ? true : false}
          />
        </div>
      </Td>
    </Trow>
  );
};

export default ResultRow;
