import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFollowItems, isLoaded } from '../../../../actions/userAction';
import FollowingHeader from './FollowingHeader';
import FollowingTable from './FollowingTable';
import Loading from '../../../LoadingSpinner/LoadingPage';
import { SERVER_URL } from '../../../../constants/index';

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

  const { isModalShown, items, isDataLoaded } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
    items: state.items.items,
    isDataLoaded: state.items.isDataLoaded,
  }));

  const [storedShoesInfo, setStoredShoesInfo] = useState([]);

  const getFollowItemHandler = async (items) => {
    await dispatch(addFollowItems(items));
  };

  const loadFollowingShoesData = () => {
    try {
      dispatch(isLoaded(false));
      axios
        .get(`${SERVER_URL}/shoes/managed-shoesInfo/following`)
        .then((res) => {
          getFollowItemHandler(res.data);
          // dispatch(isLoaded(true));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const removeHandler = (data) => {
    try {
      axios
        .delete(
          `${SERVER_URL}/shoes/following/delete`,
          { data: { data } },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          console.log('delete success');
          getFollowItemHandler(res.data);
        })
        .catch((err) => {
          console.log('error occured');
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const storeHandler = (data) => {
    // 전역에서 관리되는 inputvalue 값을 서버로 전달한다.
    try {
      axios
        .post(`${SERVER_URL}/shoes/regist/following`, data)
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

  useEffect(() => {
    loadFollowingShoesData();
  }, []);

  return (
    <>
      <ContentsWrap>
        <FollowingHeader
          isModalShown={isModalShown}
          getFollowItemHandler={getFollowItemHandler}
          storeHandler={storeHandler}
          isDataLoaded={isDataLoaded}
        />
        <div style={{ height: '20px' }}></div>
        {isDataLoaded ? (
          <FollowingTable
            items={items}
            removeHandler={removeHandler}
            storedShoesInfo={storedShoesInfo}
            setStoredShoesInfo={setStoredShoesInfo}
          >
            {props.child}
          </FollowingTable>
        ) : (
          <Loading />
        )}
      </ContentsWrap>
    </>
  );
};

export default Following;
