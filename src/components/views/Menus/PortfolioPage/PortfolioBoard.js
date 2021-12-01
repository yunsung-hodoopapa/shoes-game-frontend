import React, { useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const ContentsWrap = styled.div`
  display: flex;
  background-color: #C4C4C4;
  width: 1134px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const PortfolioBoard = () => {

  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get('http:localhost:3002//managed-shoesInfo').then((res) => {
      setResult(res.data);
      console.log(res.data);
    }) 
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <ContentsWrap>
      <div>
        <table>
          <tr>
            <td>
              <input
                type={'text'}
                size={'25'}
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>
      </div>
    </ContentsWrap>
  )
};

export default PortfolioBoard;
