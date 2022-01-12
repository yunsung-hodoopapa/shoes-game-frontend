import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { closeModal, registerUser } from '../../actions/userAction';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100vh;
`;

const Form = styled.div`
  display: flex;
  flex-direction: Column;
`;

const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  right: -40px;
  top: 0px;
  background-color: #dcdcdc;
  border: none;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
`;

function RegisterModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const onClickCloseModal = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const body = {
        email: email,
        name: name,
        password: password,
      };
      dispatch(registerUser(body)).then((res) => {
        console.log(res);
        alert('회원가입이 정상적으로 완료되었습니다!');
        dispatch(closeModal());
      });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <Modal>
      <CloseBtnWrap>
        <AiOutlineClose onClick={onClickCloseModal} />
      </CloseBtnWrap>
      <Form>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="name" value={name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <label>ConfirmPassword</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button onClick={onSubmitHandler}>회원가입</button>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
