<template>
  <div class="favorite-name">Избранное</div>

  <div class="favorite">
    <div
      v-for="(favorite, id) in favoriteItems"
      :key="id"
      class="favorite-items"
    >
      <div>
        {{ favorite }}
      </div>

      <hr color="#f1f1f1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteItems: ["vido", "what feed cat", "btc", "despasito", "etc"],
    };
  },
};
</script>

<style lang="scss" scoped>
.favorite-name {
  font-size: 28px;
  margin: 40px 0 40px 0;
}
.favorite {
  background: white;

  &-items {
    padding-top: 14px;
    margin-left: 20px;
  }
  hr {
    margin-top: 13px;
  }
}
</style>