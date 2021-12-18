import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal';
import SearchResult from './SearchResult';
import FollowingItemSelect from './FollowingItemSelect';
import { AiOutlineClose } from 'react-icons/ai';
import Following from '../views/Menus/FollowingPage/Following';
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
  const { isModalShown, items, isDataLoaded } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
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

  // 1. 인풋벨류 네임이 갱신되면 setResellPrice 함수를 실행시킨다.

  // const setResellPrice = async () => {
  //   console.log('loading');
  //   setInputValue({
  //     ...inputValue,
  //     resellPrice: await getShoePriceHandler(),
  //   });
  // };

  // 2. 이 함수는 인풋벨류의 shoeName이 갱신되지 않으면 실행되지 않는다.
  // 인풋벨류에 업데이트된 styleID를 기반으로 리셀 가격 객체를 받아온다.
  const getShoePriceHandler = async (params) => {
    if (inputValue.shoeName === '') {
      console.log('empty');
      return {};
    }
    dispatch(isLoaded(false));
    try {
      const styleID = inputValue.styleID;
      // const shoeSize = inputValue.shoeSize;
      const res = await axios
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

  // 3.  이 함수는 selectedOption의 값을 받아와서 리셀프라이스와 사이즈를 갱신시킨다.

  const handleSelectOpt = (e) => {
    setSelectedOpt({
      ...selectedOpt,
      resellPrice: inputValue.resellPrice[e.target.value],
      shoeSize: e.target.value,
    });
  };

  // 4. 온 크레이트 함수는 인풋 벨류를 최종 갈무리 하고 업데이트하는 역할을 한다.

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

  console.log(items);
  console.log(inputValue.resellPrice);

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
