<template>
  <div class="container">
    <div class="d-flex justify-content-around align-items-center">
      <h3 class="d-inline">My Favourite Movies</h3>
      <div>
        <router-link to="/search" class="btn btn-info mx-2"
          >Back Search</router-link
        >
        <router-link to="/review" class="btn btn-secondary mx-2"
          >Go Review</router-link
        >
      </div>
    </div>
    <table class="table table-bordered mt-2">
      <thead class="thead-dark">
        <tr>
          <th>Movie Title</th>
          <th>Movie Year</th>
          <th>Poster</th>
          <th>Delete</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tr v-for="(i, index) in this.$store.state.favouriteMovies" :key="index">
        <td>{{ i.Title }}</td>
        <td>{{ i.Year }}</td>
        <td><img :src="i.Poster" class="img-poster" /></td>
        <td>
          <button @click="deleteFav(index)" class="btn btn-danger">-</button>
        </td>
        <td>
          <button @click="detail(i.imdbID)" class="btn btn-dark">Detail</button>
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
      detail(id) {
        this.$store.commit("setImdbID", id);
        this.$router.push("/detail");
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
