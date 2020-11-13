/* eslint-disable max-classes-per-file */

import TagBase from './TagBase';
import PostBase from './PostBase';
import AuthorBase from './AuthorBase';

export class TagPostAuthor extends AuthorBase {
  static ParseStrapi(authorCandidate) {
    const {
      _id: id, firstName, lastName, picture,
    } = authorCandidate;
    const pictureUrl = picture && picture.formats.small.url;
    return new TagPostAuthor(id, firstName, lastName, pictureUrl);
  }
}

export class TagPost extends PostBase {
  constructor(id, title, content, titlePictureUrl, author) {
    super(id, title, content, titlePictureUrl);
    this.author = author;
  }

  static ParseStrapi(postCandidate) {
    const {
      _id: id, content, title, titlePicture, author,
    } = postCandidate;
    const titlePictureUrl = titlePicture
      && titlePicture.formats.medium.url;
    return new TagPost(
      id,
      title,
      content,
      titlePictureUrl,
      TagPostAuthor.ParseStrapi(author)
    );
  }
}

export class Tag extends TagBase {
  constructor(id, name, posts) {
    super(id, name);
    this.posts = posts;
  }

  static ParseStrapi(tagCandidate) {
    const {
      _id: id, name, posts,
    } = tagCandidate;
    return new Tag(id, name, posts.map(TagPost.ParseStrapi));
  }
}
