<template>
  <div>
    <TheHeader />

    <main v-once>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    TheHeader,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/abstracts/_mixins.scss";

main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 120px;
  @include responsive("medium") {
    gap: 100px;
  }
  @include responsive("small") {
    margin-top: 20px;
  }
}
</style>
