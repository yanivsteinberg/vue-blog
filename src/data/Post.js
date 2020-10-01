import Author from './Author';

export default class Post {
  constructor(id, title, content, titlePictureUrl, author) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.titlePictureUrl = titlePictureUrl;
    this.author = Author.Parse(author);
  }

  static Parse(postCandidate) {
    return postCandidate instanceof Post
      ? postCandidate
      : new Post(
        postCandidate.id,
        postCandidate.title,
        postCandidate.content,
        postCandidate.titlePictureUrl,
        postCandidate.author,
      );
  }
}
