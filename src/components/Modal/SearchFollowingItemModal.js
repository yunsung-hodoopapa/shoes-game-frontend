import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import SearchResult from './SearchResult';
import FollowingItemSelect from './FollowingItemSelect';
import { AiOutlineClose } from 'react-icons/ai';
import Following from '../views/Menus/FollowingPage/Following';

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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
`;

export default function SearchFollowingItemModal({
  isModalShown,
  onClickOpenModal,
  onClickCloseModal,
  inputValue,
  setInputValue,
  onCreate,
  getShoePriceHandler,
  getShoesInfo,
  selecteOpt
}) {
  const [keyword, setKeyword] = useState(inputValue.shoeName);
  const [selectedOpt, setSelectedOpt] = useState('');

  const handleSelectOpt = (e) => {
    setSelectedOpt(e.target.value);
  };
  console.log(selectedOpt);

  return (
    <>
      <Modal onClickCloseModal={onClickCloseModal}>
        <CloseBtnWrap>
          <AiOutlineClose onClick={onClickCloseModal} />
        </CloseBtnWrap>
        <SearchResult
          placeholder={'findout your item'}
          keyword={keyword}
          setKeyword={setKeyword}
          getShoesInfo={getShoesInfo}
        />
        <FollowingItemSelect
          keyword={keyword}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSelectOpt={handleSelectOpt}
          selectedOpt={selectedOpt}
        />
        <br />
        <ButtonWrap>
          <SubmitButton onClick={(e) => onCreate(e)}>등록하기</SubmitButton>
        </ButtonWrap>
      </Modal>
    </>
  );
}
