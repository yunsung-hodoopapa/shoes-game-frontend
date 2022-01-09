import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = () => {
  return (
    <FlexBox>
      <ScaleLoader
        size={100}
        height="40px"
        width="12px"
        color="#ccd9d3"
        radius="8px"
      />
    </FlexBox>
  );
};

export default Spinner;
