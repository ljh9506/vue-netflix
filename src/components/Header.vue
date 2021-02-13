<template>
  <div id="header">
    <img :src="image" alt="logoImage" class="logoImage" v-on:click="NavigateMain"/>
    <nav>
      <ul>
        <li class="items">Home</li>
        <li class="items">Series</li>
        <li class="items">Film</li>
        <li class="items" @click="NavigateCart">Cart
          <p>
            {{this.$store.state.list.length}}
          </p>
        </li>
      </ul>
    </nav>
    <div id="text-form">
      <form>
        <input type="text" placeholder="검색어를 입력하세요." />
      </form>
    </div>
    <div id="icons">
      <v-icon name="bell" scale="1.3" color="#e5e5e5" />
      <v-icon name="user-circle" scale="2" color="#e5e5e5" />
    </div>
  </div>
</template>

<script>
import image from '../assets/small-logo.png';
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {
    'v-icon': Icon,
  },
  data() {
    return {
      image: image,
    };
  },
  methods: {
    NavigateMain() {
      this.$router.push({name: 'Main'})
    },
    NavigateCart() {
      this.$router.push({ name: "Cart" });
    },
  }
};
</script>

<style>
#header {
  width: 100%;
  height: 30%;
  background: #141414;
  display: flex;
  align-items: center;
  position: relative;
}

nav {
  width: 30%;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 0;
  margin-left: 50px;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
}
li {
  color: #fff;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20.5px;
  cursor: pointer;
}
.logoImage {
  margin-left: 20px;
  width: 120px;
}
.logoImage:hover {
  cursor: pointer;
}
.items:hover {
  color: #E50914;
}
.items:hover p {
  color: #fff;
}
.items {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items p {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  width: 25px;
  height: 25px;
  background-color: #E50914;
  border-radius: 50%;
}
input[type="text"] {
  width: 200px;
  border: none;
  color: #e5e5e5;
  border-bottom: 2px solid #ccc;
  font-size: 13px;
  background-color: #141414;
  background-image: url("../assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 7px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  position: absolute;
  right: 140px;
  bottom: 10px;

}

input[type="text"]:focus {
}

#icons {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 0;
}
</style>
