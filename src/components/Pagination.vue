<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      @click="$emit('paginate', page)"
      :class="{ 'active-page': page === currentPage }"
      :key="page"
    >
      {{ page }}
    </li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
  },

  data() {
    return {
      range: 5,
    };
  },

  computed: {
    pages() {
      const displayedPages = [];
      for (let i = 1; i < this.totalPages; i++) {
        displayedPages.push(i);
      }

      displayedPages.splice(0, this.currentPage - Math.ceil(this.range / 2));
      displayedPages.splice(this.range, this.totalPages);
      return displayedPages;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/abstracts/mixins";
.pagination {
  display: flex;
  gap: 8px;
  padding-right: 30px;

  > li {
    min-width: 18px;
    text-align: center;
    color: #fff;
    border: 1px solid #84e;
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;

    &.active-page {
      background: linear-gradient(to top right, #84e, #5f369d);
    }
  }

  @include responsive("medium") {
    position: absolute;
    bottom: -340px;
    padding-bottom: 20px;
  }
}
</style>
