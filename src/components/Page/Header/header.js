import React from 'react';
import styled from 'styled-components';
import Container from '../../views/Shared/Container';
import Heading from '../../views/Shared/Heading';

const HeaderWrap = styled.header`
  position: absolute;
  background-color: #e95959;
  width: 100%;
  height: 143px;
  top: 0;
  left: 0;
  section {
    display: flex;
    background-color: #e95959;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    paddingh: 2em 0;
    cursor: grab;
  }
`;

const Title = styled.div`
  margin-top: 30px;
  font-size: 40px;
  font-weight: 700;
`;
const Header = () => {

  const reloadPageHandler = () => {
    window.location = 'http://localhost:3000/';
  };

  return (
    <>
      <HeaderWrap>
        <Container>
          <section>
            <Title onClick={reloadPageHandler}>
              Shoes Game!
              <Heading> 당신의 신발을 추가해보세요!</Heading>
            </Title>
          </section>
        </Container>
      </HeaderWrap>
    </>
  );
};

export default Header;
