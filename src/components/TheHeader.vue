<template>
  <div class="TheHeader__Wrapper">
    <b-navbar
      shadow
      fixed-top
      transparent
      class="navbar"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }"
          >Home</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'About' }"
          >About</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ name: 'Contact' }"
          >Subscribe</b-navbar-item
        >
      </template>
    </b-navbar>
  </div>
</template>

<script>
const OFFSET = 60;
export default {
  name: 'TheHeader',
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<style lang="scss" scoped>
.TheHeader__Wrapper {
}

.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.navbar.navbar--hidden {
  transform: translate3d(0, -100%, 0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
