import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';

const HeaderWrap = styled.header`
  background-color: #004225;
  width: 100%;
  height: 9rem;
  section {
    display: flex;
    background-color: #004225;
    color: #fee6ca;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    cursor: grab;
    @media screen and (max-width: 500px) {
      padding: 0 0;
    }
  }
  @media screen and (max-width: 500px) {
    height: 5rem;
    padding: 1em;
  }
`;

const Title = styled.div`
  margin: 0.5em 1rem;
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    disply: flex;
    width: 100%;
    font-size: 1rem;
    padding: 0.3em;
    margin: 0 0;
  }
`;
const Header = () => {
  const history =  useHistory();

  const reloadPageHandler = () => {
    history.push('/');
  };

  return (
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
  );
};

export default Header;
