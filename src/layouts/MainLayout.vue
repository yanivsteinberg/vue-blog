<template>
  <div>
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'MainLayout',
  components: { TheHeader, TheFooter },
};
</script>
