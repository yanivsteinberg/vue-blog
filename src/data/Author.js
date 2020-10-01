export default class Author {
  constructor(firstName, lastName, pictureUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pictureUrl = pictureUrl;
  }

  static Parse(authorCandidate) {
    return authorCandidate instanceof Author
      ? authorCandidate
      : new Author(authorCandidate.firstName, authorCandidate.lastName, authorCandidate.pictureUrl);
  }
}
