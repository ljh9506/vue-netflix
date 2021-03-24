<template>
   <div id="container">
    <div id="contacts">
      <div>
    <img :src="image" alt="logoImage" class="footer-logoImage" v-on:click="NavigateMain"/>
      </div>
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
    </div>
   </div>
</template>

<script>
import image from '../assets/small-logo.png';
export default {
 data(){
    return{
      mail : 'leejh95@nate.com',
      phone : '010-9422-1949',
      image: image
    }
  }
};

</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#container{
    border-top: 1px solid #fff;
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#020202;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top: 40px;
  padding-bottom: 40px;
}
#contacts{
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
}
.footer-logoImage {
    width: 250px;
}
</style>