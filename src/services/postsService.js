import Post from '@/data/Post';
import axios from 'axios';

const ENDPOINTS = {
  POSTS: '/api/posts',
  post: (id) => `/api/posts/${id}`,
};

// Returns all posts
export const getPosts = async (query) => {
  const { data } = await axios.get(ENDPOINTS.POSTS, { params: query });
  return data.map(Post.ParseStrapi);
};
// Returns single post
export const getPost = async (id) => {
  const { data } = await axios.get(ENDPOINTS.post(id));
  return Post.ParseStrapi(data);
};
