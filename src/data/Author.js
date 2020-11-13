/* eslint-disable max-classes-per-file */
import PostBase from './PostBase';
import AuthorBase from './AuthorBase';

export class AuthorPost extends PostBase {
  static ParseStrapi(postCandidate) {
    const {
      _id: id, content, title, titlePicture,
    } = postCandidate;
    const titlePictureUrl = titlePicture
      && titlePicture.formats.medium.url;
    return new AuthorPost(id, title, content, titlePictureUrl);
  }
}

export default class Author extends AuthorBase {
  constructor(
    id,
    firstName,
    lastName,
    pictureUrl,
    authorPageBannerPictureUrl,
    title,
    location,
    about,
    posts,
  ) {
    super(id, firstName, lastName, pictureUrl);

    this.authorPageBannerPictureUrl = authorPageBannerPictureUrl;
    this.about = about;
    this.posts = posts;
    this.title = title;
    this.location = location;
  }

  static ParseStrapi(authorCandidate) {
    const {
      _id: id,
      firstName,
      lastName,
      picture,
      authorPageBannerPicture,
      title,
      location,
      about,
      posts,
    } = authorCandidate;
    const pictureUrl = picture
      && picture.url;
    const authorPageBannerPictureUrl = authorPageBannerPicture
      && authorPageBannerPicture.formats.large.url;
    return new Author(
      id,
      firstName,
      lastName,
      pictureUrl,
      authorPageBannerPictureUrl,
      title,
      location,
      about,
      posts.map(AuthorPost.ParseStrapi),
    );
  }
}
