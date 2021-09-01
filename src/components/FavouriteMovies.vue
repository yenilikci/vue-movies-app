<template>
  <div class="container">
    <div class="d-flex justify-content-around align-items-center">
      <h3 class="d-inline">My Favourite Movies</h3>
      <router-link to="/search" class="btn btn-info mx-2"
        >Back Search</router-link
      >
    </div>
    <table class="table table-bordered mt-2">
      <thead class="thead-dark">
        <tr>
          <th>Movie Title</th>
          <th>Movie Year</th>
          <th>Poster</th>
          <th>Fav</th>
        </tr>
      </thead>
      <tr v-for="(i, index) in this.$store.state.favouriteMovies" :key="index">
        <td>{{ i.Title }}</td>
        <td>{{ i.Year }}</td>
        <td><img :src="i.Poster" class="img-poster" /></td>
        <td>
          <button @click="deleteFav(index)" class="btn btn-danger">-</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteFav(index) {
        this.$store.commit("deleteFavouriteMovie", index);
      },
    },
  };
</script>

<style scoped>
  .img-poster {
    width: 75px;
    height: auto;
  }
</style>
