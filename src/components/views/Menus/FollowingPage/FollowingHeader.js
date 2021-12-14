import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFollowingItemModal from '../../../Modal/SearchFollowingItemModal';
import {
  openModal,
  closeModal,
  addItems,
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

const FollowingHeader = () => {
  const [storedShoeInfo, setStoredShoeInfo] = useState([]);
  const { isModalShown, items } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
  }));

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
  };

  const getShoePriceHandler = async () => {
    if (inputValue.shoeName === '') {
      return {}
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

  const getFollowItemHandler = (items) => {
    dispatch(addItems(items));
  };

  const onCreate = async (e) => {
    e.preventDefault();
    console.log('function operating');
    // const resellPrice = await getShoePriceHandler();
    // storeHandler({ ...inputValue, resellPrice });
    setInputValue({
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      buyingDate: '',
      thumbnail: '',
      brand: '',
      styleID: '',
      retailPrice: '',
      resellPrice: {},
      lowestResellPrice: '',
      _id: '',
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

  const storeHandler = (data) => {
    // 전역에서 관리되는 inputvalue 값을 서버로 전달한다.
    try {
      const request = axios
        .post('http://localhost:3002/shoes/regist/following', data)
        .then((res) => {
          console.log('store success');
          // 서버에 저장된 정보를 res로 불러온 후 로컬스토리지에서 관리한다.
          console.log(res);
          getFollowItemHandler(res.data);
          console.log(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
        />
      ) : null}
    </HeaderWrap>
  );
};

export default FollowingHeader;
