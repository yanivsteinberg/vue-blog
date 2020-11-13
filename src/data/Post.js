/* eslint-disable max-classes-per-file */
import AuthorBase from './AuthorBase';
import PostBase from './PostBase';
import TagBase from './TagBase';

export class PostTag extends TagBase {
  static ParseStrapi(tagCandidate) {
    const {
      _id: id, name,
    } = tagCandidate;
    return new PostTag(id, name);
  }
}

export class PostAuthor extends AuthorBase {
  static ParseStrapi(authorCandidate) {
    const {
      _id: id, firstName, lastName, picture,
    } = authorCandidate;
    const pictureUrl = picture && picture.formats.small.url;
    return new PostAuthor(id, firstName, lastName, pictureUrl);
  }
}

export default class Post extends PostBase {
  constructor(id, title, content, titlePictureUrl, tags, author) {
    super(id, title, content, titlePictureUrl);
    this.author = author;
    this.tags = tags;
  }

  static ParseStrapi(postCandidate) {
    const {
      _id: id, title, content, titlePicture,
    } = postCandidate;
    const titlePictureUrl = titlePicture && titlePicture.url;
    const author = PostAuthor.ParseStrapi(postCandidate.author);
    const tags = postCandidate.tags.map(PostTag.ParseStrapi);
    return new Post(id, title, content, titlePictureUrl, tags, author);
  }
}
