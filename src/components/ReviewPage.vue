<template>
  <div class="container">
    <h2 class="text-align my-2 jumbotron shadow">Review Page</h2>
    <router-link to="/favourite" class="d-block btn btn-secondary p-2 shadow"
      ><b>Go Favourite</b></router-link
    >
    <div class="row d-flex justify-content-center">
      <div
        v-for="(i, index) in this.$store.state.myReviewsAndVotes"
        :key="index"
        class="card col-4 m-4 shadow"
      >
        <div class="card-header bg-white">
          <h3>{{ i.title }}</h3>
          <img
            :src="i.poster"
            class="card-img-top img border shadow"
            alt="..."
          />
        </div>
        <div class="card-body">
          <span><b>My vote:</b> {{ i.myVote }}</span>
        </div>
        <div class="card-footer">
          <span><b>Review:</b> {{ i.review }}</span>
          <button
            @click="deleteReview(index)"
            class="mt-3 btn btn-danger btn-block"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReviewPage",
    methods: {
      deleteReview(index) {
        this.$store.commit("deleteMyReviewAndVotes", index);
      },
    },
  };
</script>

<style scoped>
  .img {
    max-height: 500px;
    max-width: auto;
  }
</style>
