import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFollowingItemModal from '../../../Modal/SearchFollowingItemModal';
import { openModal } from '../../../../actions/userAction';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 79vw;
  height: 10%;
  background-color: #ccd9d3;
  font-size: 1.5rem;
`;

const HeaderTag = styled.h2`
  margin-left: 20px;
`;

const EditButton = styled.button`
  width: 10rem;
  background-color=#fff;
  padding: 0.5em 0.5em;
  margin-right: 1em;
  border: solid 1px #bababa;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.5rem;
  &:hover {
    background-color: #efefef;
  }
`;

const FollowingHeader = ({ storeHandler }) => {
  const { isModalShown } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
  }));

  const dispatch = useDispatch();

  const onClickOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <HeaderWrap>
      <HeaderTag> 팔로잉 </HeaderTag>
      <EditButton onClick={() => onClickOpenModal()}> 추가하기 </EditButton>
      {isModalShown ? (
        <SearchFollowingItemModal storeHandler={storeHandler} />
      ) : null}
    </HeaderWrap>
  );
};

export default FollowingHeader;
