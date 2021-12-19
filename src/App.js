import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';
import MyPage from './components/views/Menus/Mypage';
import Loading from './components/LoadingSpinner/LoadingPage';
import Portfolio from './components/views/Menus/PortfolioPage/Portfolio';
import Following from './components/views/Menus/FollowingPage/Following';

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
        <PrivateRoute restricted={true} componet={MyPage} path="/mypage" />
        <PrivateRoute restricted={true} component={Portfolio} path="/menu/portfolio" />
        <PrivateRoute restricted={true} component={Following} ptath="/menu/following" />
        <PrivateRoute component={Loading} path="/loading" />
      </Switch>
    </Router>
  );
};

export default App;
