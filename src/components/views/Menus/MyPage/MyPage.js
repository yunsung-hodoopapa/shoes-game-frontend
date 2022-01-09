import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import ShoesCloset from './ShoesCloset';
import Layout from '../../../Layout/Layout';

const MyPage = (props) => {
  return (
    <Layout>
      <UserInfo />
      <ShoesCloset>{props.children}</ShoesCloset>
    </Layout>
  );
};

export default MyPage;
