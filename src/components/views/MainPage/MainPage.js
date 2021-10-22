import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
// import Center from '../../Page/Center/center';
import Footer from '../../Page/Footer/footer';
import Header from '../../Page/Header/header';
import Sidebar from '../../Page/Sidebar/Sidebar';
import Content_MyPage from '../../Page/Sidebar/Menus/Mypage';
import Content_Portfolio from '../../Page/Sidebar/Menus/Portfolio';
import Content_Following from '../../Page/Sidebar/Menus/Following';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 709px;
`;

const Center = styled.div`
  position: absolute;
  width: 100%;
  height: 709px;
  left: 0px;
  top: 142px;
  background-color: #c4c4c4;
  display: flex;
`;

function MainPage(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Center>
          <Sidebar />
          <Switch>
            <Route path="/main/my_page" component={Content_MyPage} />
            <Route path="/main/portfolio" component={Content_Portfolio} />
            <Route path="/main/following" component={Content_Following} />
          </Switch>
        </Center>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default withRouter(MainPage);
