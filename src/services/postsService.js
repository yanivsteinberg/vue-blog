import Post from '@/data/Post';
import { v4 as uuidv4 } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';
import loremPicsum from 'lorem-picsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 },
});

const mockPosts = [
  {
    // id: uuidv4(),
    title: 'No rainforest???',
    author: { firstName: 'Meera', lastName: 'Dattani' },
  },
  {
    title: 'Is the Yukon the perfect escape?',
    author: { firstName: 'Oliver', lastName: 'Pelling' },
  },
  {
    title: 'How can the travel industry make the world more incluse and accessible?',
    author: { firstName: 'Lola Akinmade', lastName: 'Akerstrom' },
  },
  {
    title: 'No rainforest???',
    author: { firstName: 'Meera', lastName: 'Dattani' },
  },
  {
    title: 'Is the Yukon the perfect escape?',
    author: { firstName: 'Oliver', lastName: 'Pelling' },
  },
  {
    title: 'How can the travel industry make the world more incluse and accessible?',
    author: { firstName: 'Lola Akinmade', lastName: 'Akerstrom' },
  },
  {
    title: 'No rainforest???',
    author: { firstName: 'Meera', lastName: 'Dattani' },
  },
]
  .map((post) => ({
    id: uuidv4(),
    content: lorem.generateParagraphs(5),
    titlePictureUrl: `${loremPicsum({ width: 1920, height: 1080, random: true })}?${new Date().getTime()}`,
    ...post,
  }))
  .map(Post.Parse);

// Returns all posts
export const getPosts = () => mockPosts;
// Returns single post
export const getPost = (id) => mockPosts.find((post) => post.id === id);
