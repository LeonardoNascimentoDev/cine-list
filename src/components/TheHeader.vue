<template>
  <header class="header-container">
    <router-link class="logo" to="/">
      <img
        width="100px"
        src="../assets/logo_cine.jpg"
        alt="CineList"
      />
    </router-link>

    <div class="input-container">
      <input
        v-model="searched_movie"
        type="text"
        placeholder="Pesquisar filmes"
      />
      <SearchSugestions />
    </div>

    <router-link class="favorite" to="/favorites">
      <img src="../assets/icons/favorite.svg" />
      <span>Favoritos</span>
    </router-link>
  </header>
</template>

<script>
import SearchSugestions from "@/components/SearchSugestions.vue";

export default {
  name: "TheHeader",

  components: {
    SearchSugestions,
  },

  data() {
    return {
      searched_movie: "",
    };
  },

  watch: {
    searched_movie(value) {
      this.$store.dispatch("fetchSearchedMovies", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  align-items: center;
  gap: 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #1d1d22;
  opacity: 0.99;
  width: 100vw;
  border-bottom: 0.5px solid #3a3a3a;
  padding: 20px 30px;

  .logo {
    grid-row: 1;
  }

  @media (max-width: 600px) {
    grid-template-columns: 2fr auto;
    align-items: center;
    gap: 20px 15px;
    position: relative;
    min-width: 100vw;
    padding: 20px 20px 0 20px;
    .logo {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
}

.input-container {
  position: relative;
  input {
    width: 100%;
    background: #27272e;
    letter-spacing: -0.5px;
    color: #9696a1;
    font-size: 1rem;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-radius: 25px;
    padding: 8px 16px;
    outline: none;
    caret-color: #84e;
    &:focus {
      border: 2px solid #84e;
    }
  }
  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    input {
      width: 100%;
      font-size: 18px;
    }
  }
}

.favorite {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #27272e;
  letter-spacing: -0.5px;
  color: #9696a1;
  font-size: 1rem;
  border-radius: 25px;
  padding: 8px 16px;
  margin-left: -15px;

  @media (max-width: 600px) {
    grid-column: 2;
    grid-row: 2;
    margin-left: 0;
  }
}
</style>
