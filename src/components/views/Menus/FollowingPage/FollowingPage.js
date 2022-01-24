import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFollowItems, isLoaded } from '../../../../actions/userAction';
import Wrap from '../../../Layout/Shared/Wrap';
import FollowingHeader from './FollowingHeader';
import FollowingTable from './FollowingTable';
import Loading from '../../../LoadingSpinner/LoadingPage';
import { SERVER_URL } from '../../../../constants/index';
import Layout from '../../../Layout/Layout';

const FollowingPage = (props) => {
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
    try {
      axios
        .post(`${SERVER_URL}/shoes/regist/following`, data)
        .then((res) => {
          console.log('store success');
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

  return (
    <Layout>
      <Wrap>
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
      </Wrap>
    </Layout>
  );
};

export default FollowingPage;
