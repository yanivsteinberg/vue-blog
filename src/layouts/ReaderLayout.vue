<template>
  <div class="container">
    <banner />
    <br />
    <router-view />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
  name: 'MainLayout',
  components: { Banner },
};
</script>
