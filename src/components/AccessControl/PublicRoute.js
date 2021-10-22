import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "../../utils/isLogin";

const PublicRoute = ({componet: Component, restricted, ...rest}) => {
  return (
    <Route {...rest} render={ props => (
      isLogin() && restricted ?
        <Redirect to="/auth/Login" />
        : <Component {...props} />
    )} />
  );
};

export default PublicRoute;