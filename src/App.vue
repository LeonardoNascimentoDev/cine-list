<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>

export default {};
</script>

<style lang="scss">
@import "./scss/base/reset.scss";

body {
  max-width: 100vw;
  max-height: 100vh;
  font-family: "Inter", sans-serif;
  background: #1d1d22;
  @media (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
}
</style>
