import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';
import MyPage from './components/views/Menus/Mypage';
import ModalWrapper from './components/Modal/ModalContainer';
import Loading from './components/LoadingSpinner/LoadingPage';

import Portfolio from './components/views/Menus/PortfolioPage/Portfolio';

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute restricted={true} exact path="/" component={MainPage} />
        <PublicRoute
          restricted={false}
          path="/register"
          component={RegisterPage}
        />
        <PublicRoute restricted={false} path="/login" component={LoginPage} />
        <PrivateRoute componet={MyPage} path="/mypage" />
        <PrivateRoute component={Loading} path="/loading" />
      </Switch>
    </Router>
  );
};

export default App;
