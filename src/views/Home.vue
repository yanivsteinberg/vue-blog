<template>
  <div class="postview container">
    <post-preview-item
      v-for="post in posts"
      :key="post.id"
      v-bind="post"
      class="postview-post"
    />
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
.postview {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.postview-post {
  width: 100%;
  margin-bottom: 10px;
}

.postview > .postview-post {
  flex: 0 33%;
  box-sizing: border-box;
}
</style>
