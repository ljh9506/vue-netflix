<template>
  <div>
    <div class="logoImg">
      <img class="logo" :src="image" />
      <div class="spinner">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/small-logo.png";
import Spinner from "../components/Spinner";
export default {
  components: {
    Logo,
    Spinner
  },
  data() {
    return {
      image: Logo
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/Main");
    }, 3000);
  }
};
</script>

<style scoped>
.logoImg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.logo {
  width: 500px;
}
</style>