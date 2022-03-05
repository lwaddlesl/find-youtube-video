<template>
  <div class="home">
    <HeaderComponent />
    <FavoriteComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FavoriteComponent from "@/components/FavoriteComponent.vue";

export default {
  name: "Header",
  components: {
    HeaderComponent,
    FavoriteComponent,
  },
};
</script>
