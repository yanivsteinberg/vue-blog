<template>
  <b-carousel class="Banner-Wrapper">
    <b-carousel-item>
      <section :class="`hero is-medium is-success`">
        <div class="hero-body has-text-centered">
          <h1 class="title">HELLO BANNER</h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.Banner-Wrapper {
}
</style>
