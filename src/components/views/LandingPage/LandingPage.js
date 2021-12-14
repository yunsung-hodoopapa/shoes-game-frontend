import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import ShoesCloset from './ShoesCloset';
import EventModal from '../../Modal/EventModal';
import { openModal, closeModal, addItems } from '../../../actions/userAction';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  width: 1134px;
  height: 709px;
  left: 330px;
  top: 26px;
  // justify-content: center;
  // align-items: center;
`;

const LandingPage = (props) => {
  const { isModalShown, items } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
    items: state.items.items,
  }));
  const [inputValue, setInputValue] = useState({
    shoeName: '',
    shoeSize: '',
    shoePrice: '',
    buyingDate: '',
    thumbnail: '',
    brand: '',
    styleID: '',
    retailPrice: '',
    resellPrice: {},
    _id: '',
  });

  const dispatch = useDispatch();

  const onClickOpenModal = (index) => {
    dispatch(openModal());
    const item = items[index];

    if (item) {
      setInputValue({
        ...inputValue,
        shoeName: item.shoeName,
        shoeSize: item.shoeSize,
        thumbnail: item.thumbnail,
        shoePrice: item.shoePrice,
        buyingDate: new Date(item.buyingDate),
        styleID: item.StyleID,
        retailPrice: item.retailPrice,
        resellPrice: item.resellPrice,
        _id: item._id,
      });
    }
  };

  const onClickCloseModal = () => {
    dispatch(closeModal());
    setInputValue({
      ...inputValue,
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      buyingDate: '',
      thumbnail: '',
      brand: '',
      styleID: '',
      retailPrice: '',
      resellPrice: '',
      _id: '',
    });
  };

  const getItemsHandler = (items) => {
    dispatch(addItems(items));
  };

  return (
    <ContentsWrap>
      <UserInfo />
      <ShoesCloset>{props.children}</ShoesCloset>
    </ContentsWrap>
  );
};

export default LandingPage;
