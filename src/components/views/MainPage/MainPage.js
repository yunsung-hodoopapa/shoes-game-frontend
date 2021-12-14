import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../Page/Footer/footer';
import Header from '../../Page/Header/header';
import Sidebar from '../../Page/Sidebar/Sidebar';
import LandingPage from '../LandingPage/LandingPage';
import MyPage from '../Menus/Mypage';
import Following from '../Menus/FollowingPage/Following';

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
            <Route exact path="/" component={LandingPage} />
            <Route path="/menu/my_page" component={MyPage} />
            <Route path="/menu/following" component={Following} />
          </Switch>
        </Center>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default withRouter(MainPage);
