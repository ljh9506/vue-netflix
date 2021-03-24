<template>
  <div id="header">
    <img :src="image" alt="logoImage" class="logoImage" @click="NavigateMain"/>
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
      <v-icon name="user-circle" scale="1.7" color="#e5e5e5" />
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
  bottom: 15px;
}

#icons {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 0;
}


@media only screen and (max-width: 900px) {
  li :hover {
    color: #ccc;
  }
  #navigate {
    color: white;
    opacity: 10;
    height: auto;
    margin-left: -10px;
  }
 
  .items {
  }

  li a {
    cursor: pointer;
  }
  
  #textForm {
    width: 30%;
  }
  #icons {
    display: none;
  }
  input[type="text"] {
    display: none;
  }
}
@media only screen and (max-width: 626px) {
  #selections {
    padding-top: 30px;
  }
  .items {
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 541px) {
  #selections {
    padding-top: 50px;
  }
  .items {
    font-size: 0.7rem;
  }
}
@media only screen and (max-width: 500px) {
  .logoImage {
    width: 80px;
  }
  .items {
    font-size: 0.4rem;
    padding: 12px;
  }
  #selections {
    padding-top: 30px;
  }
  .items p {
    width: 18px;
    height: 18px;
  }
}
@media only screen and (max-width: 360px) {
  .logoHeader {
    margin-left: 0px;
  }
  #selections {
    padding-top: 60px;
  }
  .items p {
    width: 14px;
    height: 14px;
  }
  .items {
    font-size: 0.4rem;
  }
  nav {
    margin: 0;
  }
}
</style>
