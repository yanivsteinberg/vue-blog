<template>
  <section class="PostBanner__Wrapper hero is-large has-background">
    <img :src="titlePictureUrl" class="is-background" />
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostBanner',
  props: {
    title: {
      type: String,
      required: true,
    },
    titlePictureUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.PostBanner__Wrapper {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  .is-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;

    &.is-transparent {
      opacity: 0.3;
    }
  }

  .title {
    color: white;
    text-shadow: 0.05em 0 black, 0 0.05em black, -0.05em 0 black,
      0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black,
      0.05em -0.05em black, 0.05em 0.05em black;
  }
}
</style>
