import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get('/auth/users');
  return response.data;
<<<<<<< HEAD:src/api/posts.js
};
=======
};
>>>>>>> feature-mainPage:api/posts.js
