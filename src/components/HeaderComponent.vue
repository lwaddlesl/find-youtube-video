<template>
  <header class="header">
    <div class="flex">
      <div class="header__item">
        <img src="@/assets/sibdev-logo.svg" alt="logo" />
      </div>
      <div
        class="header__item nav"
        :class="
          $route.fullPath == '/'
            ? 'active'
            : $route.fullPath == '/searchResult'
            ? 'active'
            : ''
        "
      >
        <router-link to="/">Поиск</router-link>
      </div>
      <div
        :class="$route.fullPath == '/favorite' ? 'active' : ''"
        class="header__item nav"
      >
        <router-link to="/favorite"> Избранное </router-link>
      </div>
    </div>

    <div class="header__item sign-out">
      <router-link to="/login"> Выйти </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
.header {
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__item {
    margin-right: 20px;
    font-size: 18px;
    color: rgba(39, 39, 39, 0.3);
  }
  .active {
    color: #1390e5;
    border-bottom: 2px solid #1390e5;
  }
  .nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign-out {
    color: #1390e5;
  }
  img {
    margin-right: 20px;
    width: 48px;
    height: 48px;
  }
}
@media screen and (max-width: 424px) {
  .header {
    &__item {
      font-size: 14px;
      margin-right: 10px;
    }
  }
}
</style>
