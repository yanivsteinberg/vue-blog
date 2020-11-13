<template>
  <div class="Home__Wrapper container">
    <post-preview-item v-for="post in posts" :key="post.id" v-bind="post"/>
  </div>
</template>

<script>
import PostPreviewItem from '@/components/PostPreviewItem.vue';
import { getPosts } from '@/services/postsService';

export default {
  name: 'Home',
  components: { PostPreviewItem },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    this.posts = await getPosts();
  },
};
</script>

<style lang="scss" scoped>
.Home__Wrapper {
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
</style>
