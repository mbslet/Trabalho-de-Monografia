<template>
  <div class="app">
      <div class="lp">
        <LandingPage/>
      </div>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
LandingPage,  }
}
</script>

<style>
.body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(180deg, #F1853C, #B86E3D);
  } 
  .lp{
    margin-top: 8vh;
  }
</style>
