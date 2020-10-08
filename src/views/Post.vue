<template>
  <div class="Post__Wrapper">
    <template v-if="post">
      <post-banner
        :title="post.title"
        :titlePictureUrl="post.titlePictureUrl"
      />
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter has-text-right">
            <figure class="image is-96X96">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
            <div>{{ post.author.firstName }} {{ post.author.lastName }}</div>
          </div>
          <div class="column">
            <p>{{ post.content }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

// Data post
// mounted fetch post(...)
<script>
import { getPost } from '@/services/postsService';
import PostBanner from '@/components/Post/PostBanner.vue';

export default {
  name: 'Post',
  components: { PostBanner },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: null,
    };
  },
  async mounted() {
    this.post = await getPost(this.postId);
  },
};

/**
 * Component {
 *   postId: ...,
 *   post: ...,
 *   prettyTitle: ...,
 *   mounted() {
 *    this.post = await postService.getPost(this.postId);
 *  },
 * }
 */
</script>

<style lang="scss" scoped>
.Post__Wrapper {
  > :not(:last-child) {
    margin-bottom: 1em;
  }
}
</style>
