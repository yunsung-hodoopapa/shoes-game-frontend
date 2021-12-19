import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal';
import SearchResult from './SearchResult';
import FollowingItemSelect from './FollowingItemSelect';
import { AiOutlineClose } from 'react-icons/ai';
import Loading from '../LoadingSpinner/LoadingPage';
import { closeModal, isLoaded } from '../../actions/userAction';
import axios from 'axios';

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

export default function SearchFollowingItemModal({ storeHandler }) {
  const { items, isDataLoaded } = useSelector((state) => ({
    items: state.items.items,
    isDataLoaded: state.items.isDataLoaded,
  }));

  const dispatch = useDispatch();

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

  const [keyword, setKeyword] = useState(inputValue.shoeName);
  const [selectedOpt, setSelectedOpt] = useState({
    resellPrice: '',
    shoeSize: '',
  });

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

  const getShoePriceHandler = async (params) => {
    if (inputValue.shoeName === '') {
      console.log('empty');
      return {};
    }
    dispatch(isLoaded(false));
    try {
      const styleID = inputValue.styleID;
      // const shoeSize = inputValue.shoeSize;
      await axios
        .get('http://localhost:3002/shoes/search/price:styleID', {
          params: { styleID },
        })
        .then((res) => {
          const resellPriceObj = res.data;
          console.log('resellData get success!');
          dispatch(isLoaded(true));
          setInputValue({
            ...inputValue,
            resellPrice: resellPriceObj,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectOpt = (e) => {
    setSelectedOpt({
      ...selectedOpt,
      resellPrice: inputValue.resellPrice[e.target.value],
      shoeSize: e.target.value,
    });
  };

  const onCreate = async (e) => {
    e.preventDefault();
    console.log('function operating');
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
    dispatch(closeModal());
  };

  useEffect(() => {
    getShoePriceHandler();
  }, [inputValue.styleID]);

  return (
    <>
      <Modal>
        <CloseBtnWrap>
          <AiOutlineClose onClick={() => dispatch(closeModal())} />
        </CloseBtnWrap>
        <SearchResult
          placeholder={'findout your item'}
          inputValue={inputValue}
          setInputValue={setInputValue}
          keyword={keyword}
          setKeyword={setKeyword}
          getShoesInfo={getShoesInfo}
        />
        {!isDataLoaded ? <Loading /> : null}
        <FollowingItemSelect
          keyword={keyword}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSelectOpt={handleSelectOpt}
          selectedOpt={selectedOpt}
          isLoaded={isLoaded}
          resellPrice={inputValue.resellPrice}
        />
        <br />
        <ButtonWrap>
          <SubmitButton onClick={(e) => onCreate(e)}>등록하기</SubmitButton>
        </ButtonWrap>
      </Modal>
    </>
  );
}
