import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 1038px;
  height: 455px;
  background-color: #9E9696;

`;

function LandingPage(props) {
  const onClickHandler = () => {};

  return (
    <Container>
      <h2>시작 페이지</h2>
      <button
        style={{
          width: '100px',
          height: '40px',
        }}
        onClick={onClickHandler}
      >
        로그인
      </button>
    </Container>
  );
}

export default LandingPage;
