<template>
  <div class="TheHeader__Wrapper">
    <b-navbar shadow>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'About' }">About</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Contact' }">Contacts</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.TheHeader__Wrapper {
}
</style>