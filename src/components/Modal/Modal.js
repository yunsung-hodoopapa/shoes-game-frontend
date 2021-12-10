import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.50);
  z-index: 100;
`
const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 400px;
  width: 25rem;
  height: 100%;
  padding: 16px;
  background-color: #191F2C;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
`;


export default function Modal({ children, onClickCloseModal }) {
  const PreventModalOff = (e) => {
    e.stopPropagation();
  }
  return (
    <Background onClick={onClickCloseModal}>
      <ContentsWrap onClick={PreventModalOff}>
        {children}
      </ContentsWrap>
    </Background>
  );
}