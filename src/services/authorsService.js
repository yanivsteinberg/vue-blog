import axios from 'axios';
import Author from '../data/Author';

const ENDPOINTS = {
  USERS: '/api/users',
  user: (id) => `/api/users/${id}`,
};

export const api = {
  users: (query) => axios.get(ENDPOINTS.USERS, { params: query }).then(({ data }) => data),
  user: (id) => axios.get(ENDPOINTS.user(id)).then(({ data }) => data),
};

export const getAuthors = async (query) => {
  const { data } = await axios.get(ENDPOINTS.USERS, { params: query });
  return data.map(Author.ParseStrapi);
};

export const getAuthor = async (id) => {
  const { data } = await axios.get(ENDPOINTS.user(id));
  return Author.ParseStrapi(data);
};
