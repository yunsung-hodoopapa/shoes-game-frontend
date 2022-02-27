import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, openModal } from '../../../actions/userAction';
import SocialLogin from './SocialLogin/SocialLogin';
import styled from 'styled-components';
import RegisterModal from '../../Modal/RegistModal';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #19553b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: Column;
  color: white;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 17.5em
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.button`
  width: 7em;
  height: 1.6em;
  margin: 0;
  padding: 0.2rem;
  border: none;
  background: none;
  background-color: #4caf50;
  font-size: 1em;
  color: white;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { user, isModalShown } = useSelector((state) => ({
    user: state.user,
    isModalShown: state.modal.isModalShown,
  }));

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
          // localStorage.setItem('userInfo', JSON.stringify(res));
          props.history.push('/');
        } else {
          alert(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickOpenModal = (e) => {
    e.preventDefault();
    dispatch(openModal());
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <ButtonWrap>
          <SubmitButton type="submit">Login</SubmitButton>
          <SubmitButton onClick={onClickOpenModal}> 회원가입 </SubmitButton>
          {isModalShown ? <RegisterModal /> : null}
        </ButtonWrap>
        <br />
      </Form>
      <SocialLogin />
    </Container>
  );
}

export default withRouter(LoginPage);
