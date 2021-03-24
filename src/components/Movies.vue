<template>
  <div id="newMovies">
    <div id="slide">
      <h1>{{ typeDescription }}</h1>
      <div v-show="showLoading" id="loadingMovie">
        <Spinner />
      </div>

      <carousel
        :per-page="5"
        :navigate-to="0"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigationEnabled="false"
        :navigationClickTargetSize="12"
      >
        <slide :key="movie.imdbID" v-for="movie in movies" id="movieDiv">
          <div  @mousedown="down($event)" @mouseup="up($event, movie.imdbID)">
            <img :src="movie.Poster" id="imagemPosterSlide" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Spinner from "../components/Spinner";
import { Movies } from "../services/api";

export default {
  name: "Movies",

  data() {
    return {
      movies: [],
      showLoading: true,
      paginationButtons: false,
      scrollX: "",
    };
  },
  props: ["typeMovie", "typeDescription"],
  components: {
    Carousel,
    Slide,
    Spinner
  },
  async mounted() {
    this.showLoading = true;
    try {
      const response = await Movies(this.typeMovie).get();
      console.log(response);
      this.movies = response.data.Search;
    } catch (error) {
      console.error(error);
    } finally {
      this.showLoading = false;
    }
  },
  methods: {
    showDetail(_id) {
        this.$router.push({ name: "Detail", params: { id: _id } });
    },
    removeIdDuplicate() {
      return String(Math.random());
    },
    checkX(id) {
      if (Math.abs(this.scrollX) < 20) {
        this.showDetail(id);
        return;
      }
    },
    down(e) {
      this.scrollX = e.screenX;
    },
    up(e, id) {
      this.scrollX -= e.screenX;
      this.checkX(id);
    },
  }
};
</script>
<style>
#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies h1 {
  color: #cacaca;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;
  padding-left: 25px;
  justify-content: flex-start;
  align-items: center;
}
#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#movieDiv {
  margin-top: 15px;
  padding-left: 20px;
  flex: 1;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.VueCarousel-navigation-button {
  color: #e9e9e9 !important;
  outline: none !important;
}
</style>
