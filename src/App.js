import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './static/GlobalStyle'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from './components/views/LoginPage/LoginPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';
import Loading from './components/LoadingSpinner/LoadingPage';
import LandingPage from './components/views/Menus/LandingPage';
import MyPage from './components/views/Menus/MyPage/MyPage'
import Portfolio from './components/views/Menus/PortfolioPage/Portfolio';
import FollowingPage from './components/views/Menus/FollowingPage/FollowingPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <PrivateRoute restricted={true} component={LandingPage} exact path="/" />
        <PrivateRoute restricted={true} component={MyPage} path="/menu/mypage" />
        <PrivateRoute restricted={true} component={Portfolio} path="/menu/portfolio" />
        <PrivateRoute restricted={true} component={FollowingPage} path="/menu/following" />
        <PublicRoute restricted={false} path="/login" component={LoginPage} />
        <PrivateRoute component={Loading} path="/loading" />
      </Switch>
    </Router>
  );
};

export default App;
