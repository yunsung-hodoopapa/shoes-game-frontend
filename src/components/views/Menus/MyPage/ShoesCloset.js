import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EventModal from '../../../Modal/EventModal';
import {
  openModal,
  closeModal,
  addItems,
  isLoaded,
} from '../../../../actions/userAction';
import { fillingShoeObject } from '../../../../utils';
import Loading from '../../../LoadingSpinner/LoadingPage';
import { SERVER_URL } from '../../../../constants/index';

const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #99b3a8;
  width: 100%;
  align-items: center;
  overflow-y: scroll;
  float: left;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 0.5em;
    height: 75%;
    padding: 0.5rem 0.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 32rem;
  height: 26rem;
  background: no-repeat center;
  background-image: url(${(props) => props.thumbnail});
  background-size: 32em;
  margin: 0.5em 1em;
  object-fit: contain;
  @media screen and (max-width: 500px) {
    width: 150px;
    background-size: 150px;
    font-size: 0.5em;
    height: 25%;
    object-fit: contain;
  }
`;
const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 23rem;
  background: no-repeat center;
  background-color: white;
  margin: 0.5em 1em;
  @media screen and (max-width: 500px) {
    width: 150px;
    font-size: 0.5em;
    height: 25%;
  }
`;
const BoxInformation = styled.b`
  font-size: 1.5em;
  color: white;
  text-shadow: 4px 2px 2px black;
`;
const ShoesCloset = () => {
  const { isModalShown, items, isDataLoaded } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
    items: state.items.items,
    isDataLoaded: state.items.isDataLoaded,
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
    resellPrice: '',
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

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const getShoePriceHandler = async () => {
    console.log('function ready..');
    try {
      const styleID = inputValue.styleID;
      const shoeSize = inputValue.shoeSize;
      const res = await axios.get(`${SERVER_URL}/shoes/search/price:styleID`, {
        params: { styleID },
      });
      const resellPriceObj = res.data;
      return resellPriceObj[shoeSize];
    } catch (err) {
      console.log(err);
    }
  };

  // 3. onCreate 함수가 실행되었을 때, 빈 배열에 'shoeName', 'shoeSize'를 키값으로 갖는 객체값이 추가된다.
  const onCreate = async (e) => {
    e.preventDefault();
    console.log('function operating');
    const resellPrice = await getShoePriceHandler();
    storeHandler({ ...inputValue, resellPrice });
    setInputValue({
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
    onClickCloseModal();
  };

  const onUpdate = (e) => {
    e.preventDefault();
    patchHandler(inputValue);
    setInputValue({
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
    onClickCloseModal();
  };

  const onRemove = (e) => {
    e.preventDefault();
    removeHandler(inputValue);
    setInputValue({
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
    onClickCloseModal();
  };

  const getItemsHandler = (items) => {
    dispatch(addItems(items));
    dispatch(isLoaded(true));
  };

  const loadShoesData = () => {
    dispatch(isLoaded(false));
    try {
      axios
        .get(`${SERVER_URL}/shoes/managed-shoesInfo`)
        .then((res) => {
          console.log('load Success');
          getItemsHandler(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadShoesData();
  }, []);

  const storeHandler = (data) => {
    try {
      axios
        .post(`${SERVER_URL}/shoes/regist`, data)
        .then((res) => {
          console.log('store success');
          getItemsHandler(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const patchHandler = (data) => {
    try {
      axios
        .patch(`${SERVER_URL}/shoes/shoesInfo`, data)
        .then((res) => {
          console.log('update success');
          getItemsHandler(res.data);
        })
        .catch((err) => {
          console.log('error occured');
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const removeHandler = (data) => {
    try {
      axios
        .delete(`${SERVER_URL}/shoes/shoesInfo/delete_by_id`, data, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          console.log('delete success');
          getItemsHandler(res.data);
        })
        .catch((err) => {
          console.log('error occured');
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ContentsWrap>
        {!isDataLoaded ? (
          <Loading />
        ) : (
          fillingShoeObject(items).map((shoesInfo, index) =>
            shoesInfo.shoeName ? (
              <Box
                shoesInfo={shoesInfo}
                key={index}
                onClick={() => onClickOpenModal(index)}
                thumbnail={shoesInfo.thumbnail}
              >
                <BoxInformation>
                  {shoesInfo.shoeName}
                  <br />
                  {`Size: ${shoesInfo.shoeSize}`}
                </BoxInformation>
              </Box>
            ) : (
              <EmptyBox onClick={onClickOpenModal} key={index} />
            )
          )
        )}
        {isModalShown ? (
          <EventModal
            isModalShown={isModalShown}
            onClickCloseModal={onClickCloseModal}
            getShoePriceHandler={getShoePriceHandler}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={onChange}
            onCreate={onCreate}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ) : null}
      </ContentsWrap>
    </>
  );
};

export default ShoesCloset;
