import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../../actions/userAction';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 25em;
  width: 28rem;
  height: 100%;
  padding: 16px;
  background-color: #19553b;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
`;

export default function Modal({ children }) {
  const PreventModalOff = (e) => {
    e.stopPropagation();
  };
  const dispatch = useDispatch();

  return (
    <Background onClick={() => dispatch(closeModal())}>
      <ContentsWrap onClick={PreventModalOff}>{children}</ContentsWrap>
    </Background>
  );
}
