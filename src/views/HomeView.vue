<template>
  <div class="home">
    <HeaderComponent />
    <SearchVideo />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchVideo from "@/components/SearchVideo.vue";

export default {
  name: "Header",
  components: {
    HeaderComponent,
    SearchVideo,
  },
};
</script>
