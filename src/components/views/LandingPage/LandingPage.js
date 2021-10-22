import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // alignitems: center;
  width: 100%;
  // height: 100vh;
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
