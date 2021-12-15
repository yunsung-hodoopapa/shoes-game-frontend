import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFollowItems } from '../../../../actions/userAction';
import FollowingHeader from './FollowingHeader';
import FollowingTable from './FollowingTable';

const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: grey;
  width: 1280px;
  height: 680px;
  left: 330px;
  top: 30px;
`;

const Following = (props) => {

  const dispatch = useDispatch();

  const { isModalShown, items } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
    items: state.items.items,
  }));

  const [storedShoesInfo, setStoredShoesInfo] = useState([]);

  const loadFollowingShoesData = () => {
    try {
      const request = axios
        .get('http://localhost:3002/shoes/managed-shoesInfo/following')
        .then( (res) => {
          console.log(res);
          getFollowItemHandler(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFollowingShoesData();
  }, []);

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

  const getFollowItemHandler = async (items) => {
    await dispatch(addFollowItems(items));
  };

  return (
    <>
      <ContentsWrap>
        <FollowingHeader
          isModalShown={isModalShown}
          getFollowItemHandler={getFollowItemHandler}
          storeHandler={storeHandler}/>
        <div style={{height: '20px'}}></div>
        <FollowingTable
          items={items}
          storedShoesInfo={storedShoesInfo}
          setStoredShoesInfo={setStoredShoesInfo}
        >{props.child}</FollowingTable>
      </ContentsWrap>
    </>
  )
};

export default Following;
