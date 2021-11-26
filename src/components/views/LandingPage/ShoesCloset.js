import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EventModal from '../../Modal/EventModal';
import { openModal, closeModal, addItems } from '../../../actions/userAction';
import { fillingShoeObject } from '../../../utils';

const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // position: absolute;
  background-color: #9e9696;
  width: 1134px;
  height: 495px;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 195px;
  height: 105px;
  background: no-repeat center;
  background-image: url(${(props) => props.thumbnail});
  background-size: 195px;
  margin: 8px 8px;
  object-fit: contain;
`;
const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 195px;
  height: 105px;
  background: no-repeat center;
  background-color: white;
  background-size: 195px;
  margin: 8px 8px;
`;
const BoxInformation = styled.b`
  font-size: 13px;
  color: white;
  text-shadow: 4px 2px 2px black;
`;
const ShoesCloset = ({ key }) => {
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
    id: '',
  });

  const { shoeName, shoeSize, shoePrice, buyingDate, thumbnail, brand, id } =
    inputValue; // 비구조화 할당을 통해 값을 추출한다.
  // 깊은 복사를 통해  name이라는 key값을 가진 value 값을 복사해서 넘긴다.
  // 1. 아이템이 추가될 빈 배열을 초기값으로 설정한다.

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
      id: '',
    });
  };

  const getItemsHandler = (items) => {
    dispatch(addItems(items));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // 3. onCreate 함수가 실행되었을 때, 빈 배열에 'shoeName', 'shoeSize'를 키값으로 갖는 객체값이 추가된다.
  const onCreate = (e) => {
    e.preventDefault();
    console.log('function operating');
    storeHandler(inputValue);
    setInputValue({
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      buyingDate: '',
      brand: '',
      thumbnail: '',
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
      brand: '',
      thumbnail: '',
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
      brand: '',
      thumbnail: '',
    });
    onClickCloseModal();
  };

  const onModify = (item) => {
    setInputValue({
      shoesName: item.shoesName,
      shoesSize: item.shoesSize,
      id: item.id,
    });
  };

  const loadShoesData = () => {
    try {
      console.log('processing');
      const request = axios
        .get('http://localhost:3002/shoes/managed-shoesInfo')
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
    // 전역에서 관리되는 inputvalue 값을 서버로 전달한다.
    try {
      const request = axios
        .post('http://localhost:3002/shoes/regist', data)
        .then((res) => {
          console.log('store success');
          // 서버에 저장된 정보를 res로 불러온 후 로컬스토리지에서 관리한다.
          console.log(res);
          getItemsHandler(res.data);
          console.log(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const patchHandler = (data) => {
    const requestBody = data;
    console.log(data);
    console.log(data._id);
    try {
      const request = axios
        .patch('http://localhost:3002/shoes/shoesInfo', data)
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
    const requestBody = data;
    console.log(data);
    console.log(data._id);
    try {
      const request = axios
        .delete('http://localhost:3002/shoes/shoesInfo/delete_by_id', data, {withCredentials: true})
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

  console.log(items);

  return (
    <>
      <ContentsWrap>
        {fillingShoeObject(items).map((shoesInfo, index) =>
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
        )}
        {isModalShown ? (
          <EventModal
            isModalShown={isModalShown}
            onClickCloseModal={onClickCloseModal}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={onChange}
            onCreate={onCreate}
            onUpdate={onUpdate}
            onRemove={onRemove}
            // onModify={onModify}
          />
        ) : null}
      </ContentsWrap>
    </>
  );
};

export default ShoesCloset;
