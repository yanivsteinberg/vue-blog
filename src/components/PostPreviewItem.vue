<template>
  <section class="card" @click.prevent="handleClick()">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ author.firstName }} {{ author.lastName }}</p>
        </div>
      </div>

      <div class="content">{{ title }}</div>
    </div>
  </section>
</template>

<script>
import Author from '@/data/Author';

export default {
  name: 'PostPreviewItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Author,
      required: true,
    },
    cardImage: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'Post',
        params: { postId: this.title },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
</style>
