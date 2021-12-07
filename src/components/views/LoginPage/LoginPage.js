import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../actions/userAction';
import SocialLogin from './SocialLogin/SocialLogin';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: Column;
`;

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const requestBody = {
      email: email,
      password: password,
    };
    dispatch(loginUser(requestBody))
      .then((res) => {
        if (res.payload.loginSuccess) {
          localStorage.setItem('userInfo', JSON.stringify(requestBody));
          props.history.push('/');
        } else {
          alert(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   axios.get('/auth/users')
  //   .then(res => console.log(res))
  //   .catch()
  // }, []);

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
        <br />
      </Form>
      <SocialLogin />
    </Container>
  );
}

export default withRouter(LoginPage);
