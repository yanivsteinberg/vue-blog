<template>
  <div class="Author__Wrapper">
    <template v-if="author">
      <view-banner :titlePictureUrl="author.authorPageBannerPictureUrl"/>
      <div class="author-image">
        <b-image
          :src="author.pictureUrl"
          alt="Placeholder image"
          ratio="96by96"
          rounded
          responsive
        />
      </div>
      <div class="author-information">
        <h4 class="title is-4">{{ author.firstName }} {{ author.lastName }}</h4>
        <sub class="subtitle is-6"><b>{{ author.title }}</b> | {{author.location}}</sub>
        <div class="social-container">
          <b-icon
            v-for="socialLink in author.socialMediaLinks"
            :key="socialLink"
            :icon="socialLink"
          />
        </div>
      </div>
      <div class="container is-max-widescreen">
        <div v-html="aboutHtml" class="about"></div>
      </div>
      <div>
        <div class="has-text-centered mb-3">
          <h4 class="title is-4">More from {{ author.firstName }} {{ author.lastName }}</h4>
        </div>
        <div class="author-posts container">
          <post-preview-item
            v-for="post in author.posts"
            :key="post.id"
            v-bind="post"
            :author="author"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <span>Loading Author {{ authorId }}</span>
    </template>
  </div>
</template>

<script>
import ViewBanner from '@/components/ViewBanner.vue';
import PostPreviewItem from '@/components/PostPreviewItem.vue';
import { getAuthor } from '@/services/authorsService';
import marked from 'marked';

export default {
  name: 'Author',
  components: { ViewBanner, PostPreviewItem },
  props: {
    authorId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      author: null,
    };
  },
  computed: {
    aboutHtml() {
      return this.author && marked(this.author.about);
    },
  },
  async mounted() {
    this.author = await getAuthor(this.authorId);
  },
};
</script>

<style lang="scss" scoped>
.Author__Wrapper {
  > :not(:first-child):not(:last-child) {
    margin-bottom: 2em;
  }
  .author-image {
    $image-size: 250px;
    margin: auto;
    width: $image-size;
    height: $image-size;
    margin-top: $image-size / -2;
  }
  .author-information {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .social-container {
    margin-top: $subtitle-negative-margin;
    > :not(:last-child) {
      margin-right: 0.5em;
    }
  }
  .about {
    > :not(:last-child) {
      margin-bottom: 0.5em;
    }
  }
  .author-posts {
    // Similar to Home component view
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    $element-spacing: 16px;

    > * {
      margin-bottom: $element-spacing;
      flex: 0 32%;

      &:not(:nth-child(3n)):not(:last-child) {
        margin-right: $element-spacing;
      }
    }
  }
}
</style>
