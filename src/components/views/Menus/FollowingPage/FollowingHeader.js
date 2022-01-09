import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFollowingItemModal from '../../../Modal/SearchFollowingItemModal';
import { openModal } from '../../../../actions/userAction';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90.125em;
  height: 100px;
  background-color: #ccd9d3;
`;

const HeaderTag = styled.h2`
  margin-left: 20px;
`;

const EditButton = styled.button`
  background-color=#fff;
  padding: 6px 6px;
  margin-right: 20px;
  border: solid 1px #bababa;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px
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
