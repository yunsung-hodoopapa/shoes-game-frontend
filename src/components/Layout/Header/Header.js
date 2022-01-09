import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';

const HeaderWrap = styled.header`
  position: absolute;
  background-color: #004225;
  width: 100%;
  height: 9em;
  top: 0;
  left: 0;
  section {
    display: flex;
    background-color: #004225;
    color: #fee6ca;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    paddingh: 2em 0;
    cursor: grab;
  }
`;

const Title = styled.div`
  margin-top: 1.3em;
  font-size: 2em;
  font-weight: 700;
`;
const Header = () => {
  const history =  useHistory();

  const reloadPageHandler = () => {
    history.push('/');
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
