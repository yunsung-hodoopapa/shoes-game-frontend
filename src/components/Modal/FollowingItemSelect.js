import React from 'react';
import styled from 'styled-components';

const SelectBoxWrapper = styled.div`
  display: flex;
`;
const SelectBox = styled.select`
  width: 18.125em;
  height: 1.9em;

  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  color: #444;
  background-color: #fff;
  text-align: center;

  border: 1px; solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgab(0, 0, 0, 0.04);
  -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
  :hover {
    border-color: #888;
  }
  :focus {
    border-color: #aaa;
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;

const FollowingItemSelect = ({
  inputValue,
  setInputValue,
  keyword,
  selectedOpt,
  handleSelectOpt,
}) => {
  console.log(inputValue.resellPrice);
  const transformedResellObj = Object.entries(inputValue.resellPrice).map(
    (pricePerSize) => {
      return { size: pricePerSize[0], resellPrice: pricePerSize[1] };
    }
  );

  const Select = ({ handleSelectOpt }) => {
    return (
      <SelectBoxWrapper>
        <SelectBox onChange={handleSelectOpt} value={selectedOpt.shoeSize}>
          {transformedResellObj.map((item, index) => (
            <option
              value={item.size}
              key={index}
              label={`size ${item.size} / ${item.resellPrice}$`}
            ></option>
          ))}
        </SelectBox>
        <IconSVG
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmls="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 14L16 6H4L10 14Z"
            fill="#1A1A1A"
          />
        </IconSVG>
      </SelectBoxWrapper>
    );
  };

  return (
    <div>
      {inputValue.styleID && inputValue.resellPrice ? (
        <>
          <br />
          <Select handleSelectOpt={handleSelectOpt} />
        </>
      ) : null}
    </div>
  );
};

export default FollowingItemSelect;
