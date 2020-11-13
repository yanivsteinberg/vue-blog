<template>
  <router-link
    :to="{ name: 'Post', params: { postId: id } }"
    tag="div"
    class="card"
  >
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="titlePictureUrl"
          class="is-background"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <router-link
        :to="{ name: 'author', params: { authorId: author.id } }"
        class="media author-link"
        tag="div"
      >
        <div class="media-left">
          <div class="image-container">
            <b-image
              :src="author.pictureUrl"
              alt="Placeholder image"
              ratio="38by38"
              rounded
              responsive
            />
          </div>
        </div>
        <div class="media-content">
          <div class="content">
            <h6 class="subtitle is-6">
              {{ author.firstName }} {{ author.lastName }}
            </h6>
          </div>
        </div>
      </router-link>

      <div class="content">
        <h3 class="title">{{ title }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
import AuthorBase from '@/data/AuthorBase';

export default {
  name: 'PostPreviewItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: AuthorBase,
      required: true,
    },
    titlePictureUrl: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @include grow-shadow(1.025);

  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-flow: column-wrap;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .image-container {
    float: right;
    width: 60px;
    height: 60px;
  }

  .author-link {
    border-radius: 27px;
  }
  .author-link:hover {
    background: $primary;
  }
}
</style>
