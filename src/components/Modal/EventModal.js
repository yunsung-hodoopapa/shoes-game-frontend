import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import SearchResult from './SearchResult';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { AiOutlineClose } from 'react-icons/ai';
import { SELECTSIZE } from '../../constants';
import NumberFormat from 'react-number-format';
import { ko } from 'date-fns/esm/locale';

const Size = styled.input`
  margin-top: 40px;
  width: 250px;
  height: 30px;
  text-align: center;
  outline: none;
  border: nonoe;
  border-bottom: 2px solid #d3959b;
  font-size: 20px;
`;

const SizeLabel = styled.div`
  margin: 10px;
  color: white;
`;

const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  right: -40px;
  top: 0px;
  background-color: #dcdcdc;
  border: none;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 30px;
`;

const SizeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 250px;
  background-color: white;
`;

const SelectOpt = styled.button`
  width: 30px;
  height: 20px;
  font-size: 11px;
  margin: 0.5px;
  border: none;
  background-color: mint;
  &:hover {
    background: #339af0;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
`;

const sizeList = SELECTSIZE;

export default function AddShoesModal({
  isModalShown,
  onClickOpenModal,
  onClickCloseModal,
  inputValue,
  setInputValue,
  onChange,
  onCreate,
  onUpdate,
  onRemove,
  getShoePriceHandler,
}) {
  const [isSizeOptionShowing, setIsSizeOptionShowing] = useState(false);
  const [keyword, setKeyword] = useState(inputValue.shoeName);
  // const [shoePrice, setShoePrice] = useState('');
  const [date, setDate] = useState('');

  const onHandleSelect = (e) => {
    setIsSizeOptionShowing(true);
  };

  const getShoesInfo = (params) => {
    setInputValue({
      ...inputValue,
      shoeName: params.shoeName,
      brand: params.brand,
      thumbnail: params.thumbnail,
      styleID: params.styleID,
      retailPrice: params.retailPrice,
      resellPrice: params.resellPrice,
      lowestResellPrice: params.lowestResellPrice,
    });
  };

  const onSizeOptionClick = (e) => {
    setInputValue({
      ...inputValue,
      shoeSize: e.currentTarget.value,
    });
    setIsSizeOptionShowing(false);
  };

  const onPriceChange = (e) => {
    setInputValue({
      ...inputValue,
      shoePrice: e.target.value,
    });
  };

  const onDateChange = (date) => {
    setDate(date);
    setInputValue({
      ...inputValue,
      buyingDate: date,
    });
  };

  return (
    <>
      <Modal
        onClickCloseModal={onClickCloseModal}
        // onSubmitHandler={onSubmitHandler}
      >
        <CloseBtnWrap>
          <AiOutlineClose onClick={onClickCloseModal} />
        </CloseBtnWrap>
        <SearchResult
          placeholder={'findout your item'}
          keyword={keyword}
          setKeyword={setKeyword}
          onChage={onChange}
          getShoesInfo={getShoesInfo}
        />
        <Size
          type="text"
          placeholder={'Select Your US Size'}
          onClick={onHandleSelect}
          onChange={onChange}
          value={inputValue.shoeSize}
        />
        {isSizeOptionShowing ? (
          <>
            <SizeLabel> US Size </SizeLabel>
            <SizeWrap>
              {sizeList.map((size, id) => (
                <SelectOpt value={size} key={id} onClick={onSizeOptionClick}>
                  {size}
                </SelectOpt>
              ))}
            </SizeWrap>
          </>
        ) : null}
        <br />
        <NumberFormat
          thousandSeparator={true}
          type={'text'}
          prefix={'$'}
          onChange={onPriceChange}
          placeholder="구입가격을 입력하세요!"
          defaultValue={inputValue.shoePrice}
        />
        <br />
        <DatePicker
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={date}
          onChange={onDateChange}
          placeholderText="구입날짜를 입력하세요!"
          defaultValue={inputValue.buyingDate}
        />
        <br />
        <ButtonWrap>
          {inputValue._id !== '' ? (
            <>
              <SubmitButton onClick={(e) => onUpdate(e)}>수정하기</SubmitButton>
              <SubmitButton onClick={(e) => onRemove(e)}>삭제하기</SubmitButton>
            </>
          ) : (
            <SubmitButton onClick={(e) => onCreate(e)}>등록하기</SubmitButton>
          )}
        </ButtonWrap>
      </Modal>
    </>
  );
}