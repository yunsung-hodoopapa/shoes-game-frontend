import axios from 'axios';
import { SERVER_URL } from '../constants';

const DOMAIN = `${SERVER_URL}`;

axios.defaults.withCredentials = true; // 쿠키 데이터를 주고받는다.
export const request = (method, url, data) => {
  console.log(DOMAIN);

  return (
    axios({
      method,
      url: DOMAIN + url,
      data,
    })
      .then((res) => res.data)
      //   const { access_token} = res.data;
      //   axios.defaults.headers.common['Authorization'] = `Bearer${access_token}`;
      // })
      .catch((err) => console.log(err))
  );
};
