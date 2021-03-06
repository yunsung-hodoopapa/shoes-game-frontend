import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';

const Pcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #19553b;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  font-weight: 700;
  font-size: 2em;
  color: #e6ece9;
`;

const LandingPage = () => {
  return (
    <Layout>
      <Pcontainer>
        <P>π λ§μ΄νμ΄μ§ ν­μμ μ λ°μ μΆκ°ν΄λ³΄μΈμ!</P>
        <br />
        <P> βοΈ ν¬νΈν΄λ¦¬μ€ ν­μμ λ³΄μ  μ λ°λ€μ κ°μΉλ₯Ό νμΈν΄λ³΄μΈμ!</P>
        <br />
        <P>π€ νλ‘μ ν­μμ μνλ μ λ°μ μΆκ°ν μ μμ΅λλ€!</P>
      </Pcontainer>
    </Layout>
  );
};

export default LandingPage;
