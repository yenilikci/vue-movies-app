<template>
  <div class="container">
    <div class="img-card mx-5">
      <img
        :src="movieDetail.data.Poster"
        class="card-img-top img border shadow"
        alt="..."
      />
    </div>
    <div class="card shadow">
      <div class="card-body">
        <h1 class="card-title text-danger">{{ movieDetail.data.Title }}</h1>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Released:</span>
          {{ movieDetail.data.Released }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Director:</span>
          {{ movieDetail.data.Director }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Writer:</span>
          {{ movieDetail.data.Writer }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Actors:</span>
          {{ movieDetail.data.Actors }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Plot:</span>
          {{ movieDetail.data.Plot }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Country:</span>
          {{ movieDetail.data.Country }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">Awards:</span>
          {{ movieDetail.data.Awards }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">imdbRating:</span>
          {{ movieDetail.data.imdbRating }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">imdbVotes:</span>
          {{ movieDetail.data.imdbVotes }}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold text-info">DVD:</span>
          {{ movieDetail.data.DVD }}
        </li>
      </ul>
      <div class="card-body">
        <router-link to="/search" class="card-link btn btn-success p-2"
          >Back Search</router-link
        >
        <router-link to="/favourite" class="card-link btn btn-danger p-2"
          >Back Favourites</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MovieDetail",
    data() {
      return {
        movieDetail: null,
      };
    },
    created: function() {
      this.$http
        .get(
          `http://www.omdbapi.com/?i=${this.$store.state.imdbID}&apikey=4c679157`
        )
        .then((res) => {
          //console.log(res);
          this.movieDetail = res;
        });
    },
  };
</script>

<style scoped>
  .img-card {
    width: 40%;
  }
  .img {
    max-width: 800px;
    max-height: auto;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .card {
    max-width: 60%;
  }
</style>
