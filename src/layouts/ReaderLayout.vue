<template>
  <div>
    <home-page-carousel />
    <br />
    <router-view />
  </div>
</template>

<script>
import HomePageCarousel from '@/components/HomePageCarousel.vue';

export default {
  name: 'ReaderLayout',
  components: { HomePageCarousel },
};
</script>
