import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EventModal from '../../Modal/EventModal';
import { testlist } from '../../../constants';
import { openModal, closeModal, addShoes } from '../../../actions/userAction';

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
  background-color: #c4c4c4;
  margin: 8px 8px;
`;

const shoesList = testlist;

const ShoesCloset = ({
  key,
  // shoesInfo,
  // setShoeInfo,
}) => {
  const { isModalShown } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
    // shoesName: state.shoesInfo.shoesName,
    // shoesSize: state.shoesInfo.shoesSize,
  }));

  const dispatch = useDispatch();

  const onClickOpenModal = () => {
    dispatch(openModal());
  };
  const onClickCloseModal = () => {
    dispatch(closeModal());
  };

  // const handleShoesInfo = () => {
  //   setShoesInfo(shoesInfo);
  // };

  const [inputValue, setInputValue] = useState({
    shoesName: '',
    shoesSize: '',
    id: '',
  });

  const { shoesName, shoesSize, id } = inputValue;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const [items, setItems] = useState([
    testlist
  ]);

  console.log(items);

  const nextId = useRef(2);

  const onCreate = () => {
    const newItem = {
      id: nextId.current,
      shoesName: shoesName,
      shoesSize: shoesSize,
    };
    setItems(items.concat(newItem));
    setInputValue({
      shoesName: '',
      shoesSize: '',
    });
    nextId.current += 1;
    console.log(items);
    onClickCloseModal();
  };

  const onUpdate = () => {
    console.log(1);
    setItems(
      items.map(item => item.id === id ? { ... item, id: id, shoesName: shoesName, shoesSize: shoesSize} : item)
    )
    console.log(items);
    setInputValue({
      shoesSize: '',
      shoesName: '',
      id: '',
    })
    console.log(shoesSize);
    console.log(shoesName);
    console.log(id);
    onClickCloseModal();
  }

  const onRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  // const onModify = (item) => {
  //   setInputValue({
  //     shoesName: item.shoesName,
  //     shoesSize: item.shoesSize,
  //     id: item.id
  //   })
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   onCreate(inputValue);
  //   setInputValue('');
  // };

  return (
    <>
      <ContentsWrap>
        {testlist.map((shoes, idx) => (
          <Box
            shoes={shoes}
            key={shoes.id}
            onClick={onClickOpenModal}
            // shoesInfo={inputValue}
          >
            <b>
              {shoes.shoesName}
              <br />
              {shoes.shoesSize}
            </b>
          </Box>
        ))}
        {isModalShown ? (
          <EventModal
            isModalShown={isModalShown}
            onClickCloseModal={onClickCloseModal}
            shoesName={shoesName}
            shoesSize={shoesSize}
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
