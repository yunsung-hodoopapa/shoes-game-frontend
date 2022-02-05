import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import ShoesCloset from './ShoesCloset';
import Layout from '../../../Layout/Layout';
import Wrap from '../../../Layout/Shared/Wrap';

const MyPage = (props) => {
  return (
    <Layout>
      <Wrap>
        <UserInfo />
        {/* <ShoesCloset>{props.children}</ShoesCloset> */}
      </Wrap>
    </Layout>
  );
};

export default MyPage;
