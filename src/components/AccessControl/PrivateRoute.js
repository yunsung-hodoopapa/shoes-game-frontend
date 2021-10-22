import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "../../utils/isLogin";

const PrivateRoute = ({ componet: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect tp='/auth/register' />
    )} />
  );
};

export default PrivateRoute;