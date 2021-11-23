import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EventModal from '../../Modal/EventModal';
import { openModal, closeModal, addShoes } from '../../../actions/userAction';
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
  background-image: url(${props => props.thumbnail});
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
`

const BoxInformation = styled.b`
  font-size: 13px;
  color: white;
  text-shadow: 4px 2px 2px black;
`
const ShoesCloset = ({ key }) => {
  const { isModalShown } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
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

  const { shoeName, shoeSize, shoePrice, buyingDate, thumbnail, brand, id } = inputValue; // 비구조화 할당을 통해 값을 추출한다.
  // 깊은 복사를 통해  name이라는 key값을 가진 value 값을 복사해서 넘긴다.
  // 1. 아이템이 추가될 빈 배열을 초기값으로 설정한다.
  const [items, setItems] = useState([]);
  const [isSummited, setIsSummited] = useState(false);

  // 2. useRef로 할당될 id 값을 지정해준다.
  const nextId = useRef(1);

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
      buyingDate: '',
      thumbnail: '',
      brand: '',
      id: '',
    });
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
    const item = {
      id: nextId.current,
      shoeName,
      shoeSize,
      shoePrice,
      buyingDate,
      brand,
      thumbnail,
    };
    setItems([...items, item]);
    storeHandler(item)
    // inputValue 값을 다시 초기화시킨다.
    setInputValue({
      shoeName: '',
      shoeSize: '',
      shoePrice: '',
      buyingDate: '',
      brand: '',
      thumbnail: '',
    });
    nextId.current += 1;
    onClickCloseModal();
  };

  console.log(items);

  const storeHandler = (param) => {
    // 전역에서 관리되는 item 값을 서버로 전달한다.
    const requestBody = param;
    console.log(param);
    try {
      const request = axios
        .post('http://localhost:3002/shoes/regist', requestBody)
        .then((res) => {
          console.log('store success');
          // 서버에 저장된 정보를 res로 불러온 후 로컬스토리지에서 관리한다.
          localStorage.setItem('shoesInfo', JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // const storedShoesInfo = JSON.parse(localStorage.getItem('shoesInfo')).data;
  
  const storedShoesInfo = JSON.parse(localStorage.getItem('shoesInfo'));

  return (
    <>
      <ContentsWrap>
        {fillingShoeObject(storedShoesInfo).map((shoesInfo, index) => (
          shoesInfo.shoeName ? <Box
            shoesInfo={shoesInfo}
            key={index}
            onClick={onClickOpenModal}
            thumbnail={shoesInfo.thumbnail}
          >
            <BoxInformation>
              {shoesInfo.shoeName}
              <br />
              {`Size: ${shoesInfo.shoeSize}`}
            </BoxInformation>
          </Box> : <EmptyBox />
        ))}
        {isModalShown ? (
          <EventModal
            isModalShown={isModalShown}
            onClickCloseModal={onClickCloseModal}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={onChange}
            onCreate={onCreate}
            // onUpdate={onUpdate}
            // onRemove={onRemove}
            // onModify={onModify}
          />
        ) : null}
      </ContentsWrap>
    </>
  );
};

export default ShoesCloset;


  // const onUpdate = () => {
  //   console.log(1);
  //   setItems(
  //     items.map((item) =>
  //       item.id === id
  //         ? { ...item, id: id, shoeName: shoeName, shoeSize: shoeSize }
  //         : item
  //     )
  //   );
  //   console.log(items);
  //   setInputValue({
  //     shoeSize: '',
  //     shoeName: '',
  //     id: '',
  //   });
  //   onClickCloseModal();
  // };

  // const onRemove = (id) => {
  //   setItems(items.filter((item) => item.id !== id));
  // };

  // const onModify = (item) => {
  //   setInputValue({
  //     shoesName: item.shoesName,
  //     shoesSize: item.shoesSize,
  //     id: item.id
  //   })
  // }