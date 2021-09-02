<template>
  <div class="search-by-title">
    <div class="form-inline">
      <input
        class="form-control border border-dark"
        placeholder="movie title..."
        v-model="searchMovieTitle"
      />
      <button class="d-inline btn btn-dark mx-2" @click="getMovieByTitle">
        Search Movie By Title
      </button>
      <router-link to="/favourite" class="btn btn-info"
        >My Favourites</router-link
      >
      <table class="table table-bordered mt-2">
        <thead class="thead-dark">
          <tr>
            <th>Movie Title</th>
            <th>Movie Year</th>
            <th>Poster</th>
            <th>Add Favourite</th>
          </tr>
        </thead>
        <tr
          v-for="(i, index) in this.$store.state.searchRes.Search"
          :key="index"
        >
          <td>{{ i.Title }}</td>
          <td>{{ i.Year }}</td>
          <td><img :src="i.Poster" class="img-poster" /></td>
          <td>
            <button @click="setFavourite(i)" class="btn btn-success">+</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchByTitle",
    data() {
      return {
        searchMovieTitle: "",
      };
    },
    methods: {
      getMovieByTitle() {
        this.$http
          .get(
            `https://www.omdbapi.com/?s=${this.searchMovieTitle}&apikey=4c679157`
          )
          .then((res) => {
            console.log(res);
            this.$store.commit("setSearchRes", res.data);
          });
      },
      setFavourite(i) {
        //console.log(i);
        this.$store.commit("setFavouriteMovies", i);
      },
    },
  };
</script>

<style scoped>
  .search-by-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-poster {
    width: 75px;
    height: auto;
  }
</style>
