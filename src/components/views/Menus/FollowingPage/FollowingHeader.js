import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFollowingItemModal from '../../../Modal/SearchFollowingItemModal';
import {
  openModal,
  closeModal,
  addItems,
  addFollowItems,
} from '../../../../actions/userAction';
import { fillingShoeObject } from '../../../../utils';
import styled from 'styled-components';
import axios from 'axios';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 100px;
  border: 1px solid tomato;
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

const FollowingHeader = ({ getFollowItemHandler, storeHandler, isModalShown }) => {
  const [inputValue, setInputValue] = useState({
    shoeName: '',
    shoeSize: '',
    shoePrice: '',
    thumbnail: '',
    brand: '',
    styleID: '',
    retailPrice: '',
    resellPrice: {},
    lowestResellPrice: '',
    _id: '',
  });

  const [selectedOpt, setSelectedOpt] = useState({
    resellPrice: '',
    shoeSize: '',
  });

  const dispatch = useDispatch();

  const onClickOpenModal = () => {
    dispatch(openModal());
  };

  const onClickCloseModal = () => {
    dispatch(closeModal());
    setInputValue({
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      thumbnail: '',
      brand: '',
      styleID: '',
      retailPrice: '',
      resellPrice: {},
      lowestResellPrice: '',
      _id: '',
    });
    setSelectedOpt({
      resellPrice: '',
      shoeSize: '',
    });
  };

  const getShoePriceHandler = async () => {
    if (inputValue.shoeName === '') {
      return {};
    }
    console.log('function ready..');
    try {
      const styleID = inputValue.styleID;
      // const shoeSize = inputValue.shoeSize;
      const res = await axios.get(
        'http://localhost:3002/shoes/search/price:styleID',
        {
          params: { styleID },
        }
      );
      const resellPriceObj = res.data;
      console.log(resellPriceObj);
      console.log('resellData get success!');
      // return resellPriceObj[shoeSize];
      return resellPriceObj;
    } catch (err) {
      console.log(err);
    }
  };


  const onCreate = async (e) => {
    e.preventDefault();
    console.log('function operating');
    // const resellPrice = await getShoePriceHandler();
    storeHandler({
      ...inputValue,
      resellPrice: selectedOpt.resellPrice,
      shoeSize: selectedOpt.shoeSize,
    });
    setInputValue({
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      thumbnail: '',
      brand: '',
      styleID: '',
      retailPrice: '',
      resellPrice: {},
      lowestResellPrice: '',
      _id: '',
    });
    setSelectedOpt({
      resellPrice: '',
      shoeSize: '',
    });
    onClickCloseModal();
  };

  // const loadShoesData = () => {
  //   try {
  //     const request = axios
  //       .get('http://localhost:3002/shoes/managed-shoesInfo')
  //       .then((res) => {
  //         console.log('load Success');
  //         // getItemsHandler(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const setResellPrice = async () => {
    console.log('loading');
    setInputValue({
      ...inputValue,
      resellPrice: await getShoePriceHandler(),
    });
    console.log('success');
  };

  useEffect(() => {
    setResellPrice();
  }, [inputValue.shoeName]);


  const getShoesInfo = (params) => {
    setInputValue({
      ...inputValue,
      shoeName: params.shoeName,
      brand: params.brand,
      thumbnail: params.thumbnail,
      styleID: params.styleID,
      retailPrice: params.retailPrice,
      lowestResellPrice: params.lowestResellPrice,
    });
  };

  console.log(inputValue);

  return (
    <HeaderWrap>
      <HeaderTag> 팔로잉 </HeaderTag>
      <EditButton onClick={() => onClickOpenModal()}> 추가하기 </EditButton>
      {isModalShown ? (
        <SearchFollowingItemModal
          isModalShown={isModalShown}
          onClickCloseModal={onClickCloseModal}
          getShoePriceHandler={getShoePriceHandler}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onCreate={onCreate}
          getShoesInfo={getShoesInfo}
          selectedOpt={selectedOpt}
          setSelectedOpt={setSelectedOpt}
        />
      ) : null}
    </HeaderWrap>
  );
};

export default FollowingHeader;
