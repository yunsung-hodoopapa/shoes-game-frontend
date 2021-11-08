import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import SearchResult from './SearchResult';

import { AiOutlineClose } from 'react-icons/ai';
import { selectSize } from '../../constants';

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

const Label = styled.label`
  margin: 10px;
`;

const SizeLabel = styled.div`
  margin: 10px;
  color: white;
`

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
  width: 80%;
`;

const sizeList = selectSize;

export default function AddShoesModal({
  props,
  isModalShown,
  onClickOpenModal,
  onClickCloseModal,
  // onChange,
  onCreate,
  onUpdate,
  onRemove,
  // onModify,
  shoesName,
  shoesSize,
}) {
  const [selectSize, setSelectSize] = useState(false);
  const [size, setSize] = useState('');

  const onHandleSelect = (e) => {
    setSelectSize(true);
  };

  const onClickOpt = (e) => {
    setSize(e.target.value);
    setSelectSize((size) => !size);
  };

  return (
    <>
      <Modal onClickCloseModal={onClickCloseModal}>
        <CloseBtnWrap>
          <AiOutlineClose onClick={onClickCloseModal} />
        </CloseBtnWrap>
        <SearchResult />
        <Size
          placeholder={'Select Your US Size'}
          type="text"
          onClick={onHandleSelect}
          defaultValue={size}
        />
        {selectSize ? (
          <>
            <SizeLabel> US Size </SizeLabel>
            <SizeWrap>
              {sizeList.map((size, idx) => (
                <SelectOpt value={size} key={idx} onClick={onClickOpt}>
                  {' '}
                  {size}
                </SelectOpt>
              ))}
            </SizeWrap>
          </>
        ) : null}
        <br />
        <ButtonWrap>
          <SubmitButton onClick={onCreate}>등록하기</SubmitButton>
          <SubmitButton onClick={onUpdate}>업데이트</SubmitButton>
          <SubmitButton onClick={onRemove}>삭제이트</SubmitButton>
        </ButtonWrap>
        {/* <SubmitButton onClick={onModify}>수정하기</SubmitButton> */}
      </Modal>
    </>
  );
}
