<template>
  <div>
    <Header />
    <NextReleases />
    <Movies typeMovie="s=harry" typeDescription="Harry Potter" />
    <Movies typeMovie="s=avengers" typeDescription="Avengers" />
    <Movies typeMovie="s=rings" typeDescription="Lord of ring" />
    <Movies typeMovie="s=parasite" typeDescription="Parasite" />
    <Movies typeMovie="s=super" typeDescription="Super" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import NextReleases from "../components/NextReleases.vue";
import Movies from "../components/Movies.vue";
export default {
  components: {
    Header,
    Footer,
    NextReleases,
    Movies,
  }
};
</script>

<style>
div {
  color: white;
}
</style>
