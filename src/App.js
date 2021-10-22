import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={true} exact path='/' component={LoginPage} />
        <PublicRoute restricted={true} exact path='/register' component={RegisterPage} />
        <PublicRoute restricted={false} exact path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
