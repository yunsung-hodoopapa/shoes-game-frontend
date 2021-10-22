import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/userAction';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: Column;
`;

function RegisterPage(props) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      let body = {
        email: Email,
        name: Name,
        password: Password,
      };
      dispatch(registerUser(body)).then((res) => {
        alert('회원가입이 정상적으로 완료되었습니다!');
        props.history.push('/');
      });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="name" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>ConfirmPassword</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">회원가입</button>
      </Form>
    </Container>
  );
}

export default withRouter(RegisterPage);
