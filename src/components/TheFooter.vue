<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by
        <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
        licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a
        >.
      </p>
      <div class="footerImg container.is-widescreen">
        <img src="../assets/img/img-footer.jpg" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.footer {
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100% !important;
  border: black 3px !important;
}

.footerImg {
  height: 100px;
  width: 100% !important;
  margin: 0;
}
</style>
