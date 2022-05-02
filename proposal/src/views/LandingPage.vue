<template>
<div>
    <div class="topbar">

      </div>
    <div class="display-flex text">
        <h1 class="title">iReuse:</h1>
        <h2 class="subtitle">Guia de Orientação à Reutilização
de Interface de Usuário</h2>
    </div>
   <div class="center-con">
    
    <div>
        <animated-button class="btlp" @click="getCards()" href="#anchor"/>
    </div>



    
</div>
</div>
</template>

<script>
import AnimatedButton from '../components/animatedButton.vue'

export default {
  components: { AnimatedButton },
  name: 'LandingPage',
  methods: {
      getCards(){
          this.$router.push({ path: '/reusablelist'})
      }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(180deg, #F1853C, #B86E3D);
  overflow: hidden;
  } 
.title{
    padding: 80px;
    padding-left: 1px;
    margin-left: 10vh;
    width: 130vh;
    margin-top: 5vh;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    color: #4EBC86;
}
.btlp{
  margin-left: 85vh;
}
.subtitle{
    font-family: 'Roboto', sans-serif;
    color: #626c66;
    font-size: 40px;
    margin-left: 10vh;
    margin-top: -15vh;

}
.text{
    margin-top: 10vh;
    width: 90vh;
}


.center-con {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: -76vh;
    margin-left: 120vh;
}

.topbar{
  padding: 20px;
  width: 250vh;
  height: 10px;
  margin-top: 5vh;
  margin-left: -2vh;
  background-color: #FFFFFF;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.218);
}

</style>