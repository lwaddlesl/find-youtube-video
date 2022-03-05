<template>
  <HeaderComponent />
  <SearchVideo />
  <div class="videos__line">
    <div class="videos__count">
      Видео по запросу <b>«{{ $store.state.query }}»</b>
      <span>{{ $store.state.resultsCount }}</span>
    </div>
    <div class="filter">
      <img src="@/assets/search-result/list.svg" />
      <img src="@/assets/search-result/grid.svg" />
    </div>
  </div>

  <div class="videos__row" v-if="!$store.state.isVideosLoading">
    <div v-for="(video, id) in $store.state.videos" :key="id">
      <div class="video">
        <div>
          <img :src="video.snippet.thumbnails.medium.url" alt="" />
        </div>
        <div class="video-title">
          {{ video.snippet.title }}
        </div>
        <div class="video-chanel-title">
          {{ video.snippet.channelTitle }}
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
#app {
  .search {
    margin-top: 0px;
    align-items: start;
  }
  .search-video {
    margin-bottom: 12px;
  }
  input {
    width: 890px;
  }
}
.videos__line {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.videos__count {
  font-size: 16px;
  line-height: 24px;
  b {
    font-weight: 500;
  }
  span {
    color: rgba(23, 23, 25, 0.3);
    margin-left: 15px;
  }
}
.video-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #272727;
}
.video-chanel-title {
  font-size: 14px;
  line-height: 16px;
  color: rgba(23, 23, 25, 0.3);
}
.videos__row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 20px;
}
.video {
  width: 245px;
  height: 226px;

  @media screen and (max-width: 1100px) {
    width: 216px;
  }
  @media screen and (max-width: 425px) {
    width: 303px;
  }
  img {
    width: 245px;
    background: #c4c4c4;
    border-radius: 10px;
    @media screen and (max-width: 1100px) {
      width: 216px;
    }
    @media screen and (max-width: 425px) {
      width: 303px;
    }
  }
}
</style>