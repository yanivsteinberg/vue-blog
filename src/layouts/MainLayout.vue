<template>
  <div class="container">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'MainLayout',
  components: { TheHeader },
};
</script>
