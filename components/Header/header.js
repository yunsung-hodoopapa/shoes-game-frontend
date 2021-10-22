import React from 'react';
import styled from 'styled-components';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';

const Header = styled.header`
  position: ;
  background-color: #f0f0f0;
  width: 100%:
  top: 0;

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    paddingh: 2em 0;
    cursor: grab;
  }
`;
const AppHeader = () => {
  function handleSubmit(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  const reloadPage = () => {
    window.location = 'http://localhost:3000/';
  };

  return (
    <Header>
      <Container>
        <section>
          <h1 className="appTitle" onClick={reloadPage}>
            Shoes Game!
            <Heading></Heading>
          </h1>
        </section>
      </Container>
    </Header>
  );
};

export default AppHeader;
