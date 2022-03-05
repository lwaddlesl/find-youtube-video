import { createStore } from 'vuex'
import axios from 'axios'
import { AuthModule } from './modules/AuthModule'

export default createStore({
  state() {
    return {
      URL: "https://www.googleapis.com/youtube/v3/search?",
      APIKEY: "AIzaSyBk8rO6E6fxLKxhII1JzFqa8ifuOneG9co",
      videos: [],
      isVideosLoading: true,
      query: "",
      resultsCount: 0,
    }
  },
  getters: {
  },
  mutations: {
    setSearchedVideos(state, videos) {
      state.videos = videos;
    },
    setLoading(state, bool) {
      state.isVideosLoading = bool
    },
    setQuery(state, query) {
      state.query = query
    },
    setResultsCount(state, resultsCount) {
      state.resultsCount = resultsCount
    }
  },
  actions: {
    async searchVideos({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          `${state.URL}part=snippet&key=${state.APIKEY}&type=video&q=${state.query}&maxResults=20`
        )
        commit('setSearchedVideos', response.data.items)
        commit('setResultsCount', response.data.pageInfo.totalResults)

      }
      catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false);
      }
    },

  },
  modules: {
    AuthModule
  }
})
