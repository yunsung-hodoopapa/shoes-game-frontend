import Spinner from './LoadingSpinner';
import Background from './Background';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 8px;
  margin-bottom: 96px;
  text-align: center;
  color: white;
`;

const Loading = (children) => {
  return (
    <>
      <Background>
        <Title> processing.. </Title>
        <Spinner></Spinner>
      </Background>
    </>
  );
};

export default Loading;
