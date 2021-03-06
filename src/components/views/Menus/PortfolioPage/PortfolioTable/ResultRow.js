import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  width: 20vw;
  text-align: center;
`;
const Trow = styled.tr`
  display: table;
  width: 100%;
  border-bottom: 1px solid grey;
  word-break : break-all;
  height : auto;
  font-size: 1em;
  @media screen and (max-width: 500px) {
    font-size: 0.9em;
  }
`;
const TableData = styled.td`
  display: flex;
  align-items: center;
  width: 25vw;
  padding: 1em 1em;
  @media screen and (max-width: 500px) {
    width: 27em;
    padding: 1em 1em;
  }
`;

const ShoesTumbnail = styled.div`
  img {
    width: 5rem;
    height: 4rem;
  }
  object-fit: contain;
`;

const ShoeNameInTd = styled.div`
  width: 60%;
  margin-left: 1em;
  font-size: 0.7rem;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 0.9em;
    border: 1px solid pink;
    width: 15em;
  }
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
            alt="shoes thumbnail"
          />
        </ShoesTumbnail>
        <ShoeNameInTd>
          {shoesInfo.shoeName}
          <br />
          {shoesInfo.shoeSize}
        </ShoeNameInTd>
      </TableData>
      <Td>{new Date(shoesInfo.buyingDate).toLocaleDateString()}</Td>
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
