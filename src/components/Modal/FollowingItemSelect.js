import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
// import Select from 'react-select';

const SelectBox = styled.select`
  text-align: center;
  width : 200px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #444;
  background-color: #fff;

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
`

const Option = styled.option`

`

const FollowingItemSelect = ({
  inputValue,
  setInputValue,
  keyword,
  selectedOpt,
  handleSelectOpt,
}) => {
  const trasformedResellObj = Object.entries(inputValue.resellPrice).map((pricePerSize) => {
    return {size: +pricePerSize[0], resellPrice: pricePerSize[1]}
  });

  const Select = () => {
    return (
      <div>
        <SelectBox
          onChange={handleSelectOpt}
          value={selectedOpt}
        >
          {trasformedResellObj.map((item, index) => (
            <option
              value={item.resellPrice}
              key={index}
              label={`size ${item.size} / ${item.resellPrice}$`}>
              {/* {item} */}
            </option>
          ))}
        </SelectBox>
      </div>
    )
  }

  return (
    <div>
      { keyword && inputValue.shoeName && trasformedResellObj.length > 0 ? (
        <>
          <div> Default Select </div>
          <Select/>
        </>
      ) : null }
    </div>
  );
}

export default FollowingItemSelect;
