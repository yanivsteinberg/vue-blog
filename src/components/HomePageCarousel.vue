import loremPicsum from 'lorem-picsum';

<template>
  <b-carousel class="Banner-Wrapper">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-large is-${carousel.color}`">
        <img :src="getImgUrl(i)" class="is-background" />
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{ carousel.text }}</h1>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' },
      ],
    };
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
  },
};
</script>

<style lang="scss" scoped>
.Banner-Wrapper {
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
  text-align: center;
  text-shadow: 0.02em -0.02em white;
}
</style>
