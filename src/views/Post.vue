<template>
  <div class="Post__Wrapper">
    <template v-if="post">
      <view-banner
        :title="post.title"
        :titlePictureUrl="post.titlePictureUrl"
      />
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="post-meta has-text-right">
              <router-link
                :to="{ name: 'author', params: { authorId: post.author.id } }"
                tag="div"
                class="author-data"
              >
                <div class="image">
                  <b-image
                    :src="post.author.pictureUrl"
                    alt="Placeholder image"
                    ratio="38by38"
                    rounded
                    responsive
                  />
                </div>
                <b class="author-name">{{ post.author.firstName }} {{ post.author.lastName }}</b>
              </router-link>
              <br />
              <div class="tags">
                <b-tag v-for="{ id, name } in post.tags" :key="id">
                  {{ name }}
                </b-tag>
              </div>
            </div>
          </div>
          <div class="column">
            <div v-html="contentHtml" class="content"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// Data post
// mounted fetch post(...)
import { getPost } from '@/services/postsService';
import ViewBanner from '@/components/ViewBanner.vue';
import marked from 'marked';

export default {
  name: 'Post',
  components: { ViewBanner },
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
  computed: {
    contentHtml() {
      return this.post && marked(this.post.content);
    },
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

  .post-meta {
    display: flex;
    flex-direction: column;
    float: right;
  }
  .author-data {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .author-name {
      font-weight: 500;
    }

    &:hover {
      cursor: pointer;
      .author-name {
        color: $link;
      }
    }
  }

  .image {
    float: right;
    width: 60px;
    height: 60px;
  }

  .tags {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    > :not(:last-child) {
      margin-bottom: 0.5em;
    }
  }
}
</style>
