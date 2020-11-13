import axios from 'axios';
import Tag from '../data/Tag';
import { api as authorApi } from './authorsService';

const ENDPOINTS = {
  TAGS: '/api/tags',
  tag: (id) => `/api/tags/${id}`,
};

const getUniqArr = (values) => Array.from(new Set(values).values());
const addAuthorsToPosts = async (posts) => {
  const authorIds = posts.map(({ author: authorId }) => authorId);
  const uniqueAuthorIds = getUniqArr(authorIds);
  const authorPromises = uniqueAuthorIds.map((id) => authorApi.user(id));
  const authors = await Promise.all(authorPromises);

  const postsWithAuthors = posts.map(({ author: authorId, ...rest }) => {
    const authorOfThePost = authors.find((author) => author._id === authorId);
    return {
      ...rest,
      author: authorOfThePost,
    };
  });
  return postsWithAuthors;
};
const addAuthorsToTagPosts = async (tags) => {
  const addAuthorsToTagsPromise = tags.map(async ({ posts, ...tag }) => {
    const postsWithTags = await addAuthorsToPosts(posts);
    return {
      ...tag,
      posts: postsWithTags,
    };
  });
  const tagsWithPostAuthors = await Promise.all(addAuthorsToTagsPromise);
  return tagsWithPostAuthors;
};

export const getTags = async (query) => {
  const { data: strapiTags } = await axios.get(ENDPOINTS.TAGS, { params: query });
  const data = await addAuthorsToTagPosts(strapiTags);
  return data.map(Tag.ParseStrapi);
};

export const getTag = async (id) => {
  const { data: strapiTag } = await axios.get(ENDPOINTS.tag(id));
  const [data] = await addAuthorsToTagPosts([strapiTag]);
  return Tag.ParseStrapi(data);
};
