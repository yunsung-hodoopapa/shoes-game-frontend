import React from 'react';
import styled from 'styled-components';
import Container from '../../views/Shared/Container';
import Heading from '../../views/Shared/Heading';

const HeaderWrap = styled.header`
  position: absolute;
  background-color: #E95959;
  width: 100%;
  height: 143px;
  top: 0;
  left: 0;

  section {
    display: flex;
    background-color: #E95959;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    paddingh: 2em 0;
    cursor: grab;
  }
`;
const Header = () => {
  function handleSubmit(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  const reloadPage = () => {
    window.location = 'http://localhost:3000/main';
  };

  return (
    <HeaderWrap>
      <Container>
        <section>
          <h1 onClick={reloadPage}>
            Shoes Game!
            <Heading> 당신의 신발을 추가해보세요!</Heading>
          </h1>
        </section>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
