import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { AiOutlineClose } from 'react-icons/ai';
import { selectSize } from '../../constants';
import { size } from 'lodash';

const Title = styled.input`
  text-align: center;
  outline: none;
  width: 250px;
  height: 30px;
  background-color: #ded7d7;
  // border-radius: 20px;
  position: relative;
  font-size: 20px;
  z-index: 1;
`;

const Size = styled.input`
  margin: 40px;
  width: 250px;
  height: 30px;
  text-align: center;
  outline: none;
  border: nonoe;
  border-bottom: 2px solid #d3959b;
  font-size: 20px;
`;

const Label = styled.label`
  marging: 10px;
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
  width: 250px;
  background-color: white;
`

const SelectOpt = styled.button`
  width: 30px;
  height: 20px;
  font-size: 8px;
`


const sizeList = selectSize;

export default function AddShoesModal({
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

  const onSubmit = (e) => {
    setSize(e.target.value)
  }

  return (
    <>
      <Modal
        onClickCloseModal={onClickCloseModal}>
        <CloseBtnWrap>
          <AiOutlineClose onClick={onClickCloseModal} />
        </CloseBtnWrap>
        <Title
          placeholder={'shoes name'}
          name="shoesName"
          // onChange={onChange}
          value={shoesName}
        />
        < Size
          placeholder={'Select Your US Size'}
          type='text'
          onClick={onHandleSelect}
          value={selectSize}
        >
          { selectSize ?
            <SizeWrap>
              { sizeList.map((size, idx) => (
                <SelectOpt
                  value={size}
                  key={size.id}
                  onclick={onSubmit}
                />
                ))
              }
            </SizeWrap>
          : null }
        </Size>
        <SubmitButton onClick={onCreate}>등록하기</SubmitButton>
        <SubmitButton onClick={onUpdate}>업데이트</SubmitButton>
        <SubmitButton onClick={onRemove}>삭제이트</SubmitButton>
        {/* <SubmitButton onClick={onModify}>수정하기</SubmitButton> */}
      </Modal>
    </>
  );
}
