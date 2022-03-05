<template>
  <div class="search">
    <div class="search-video">Поиск видео</div>
    <div class="search-form">
      <input v-model="query" type="text" />
      <button @click="searchHandler">Найти</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchVideos"]),

    searchHandler() {
      if (this.query) {
        this.$store.commit("setQuery", this.query);
        this.searchVideos();
        this.$router.push("/searchResult");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  margin-top: 220px;
  align-items: center;
  &-form {
    display: flex;
    input {
      width: 536px;
      height: 52px;
      font-size: 20px;
      line-height: 24px;
      border-radius: 10px 0 0 10px;
    }
    button {
      font-size: 20px;
      line-height: 24px;
      color: white;
      background: #1390e5;
      border-radius: 0px 10px 10px 0px;
      border: none;
      width: 150px;
      height: 52px;
    }
  }
  .search-video {
    font-size: 36px;
    line-height: 52px;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 787px) {
  .search {
    &-form {
      input {
        width: 66.25vw;
      }
      button {
        width: 28.43vw;
      }
    }
  }
}
</style>