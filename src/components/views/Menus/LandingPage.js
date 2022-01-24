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
        <P>👆 마이페이지 탭에서 신발을 추가해보세요!</P>
        <br />
        <P> ✌️ 포트폴리오 탭에서 보유 신발들의 가치를 확인해보세요!</P>
        <br />
        <P>🤟 팔로잉 탭에서 원하는 신발을 추가할수 있습니다!</P>
      </Pcontainer>
    </Layout>
  );
};

export default LandingPage;
