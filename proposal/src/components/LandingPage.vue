<template>
<div>
    <Topbar/>
    <div class="display-flex text">
        <h1 class="title">Modelo de Reutilização
        de Interface de Usuário:</h1>
        <h2 class="subtitle">Um guia de aplicações</h2>
    </div>
</div>
</template>

<script>
import Topbar from './Topbar.vue'

export default {
  components: { Topbar },
  name: 'LandingPage',

  componets: {
      Topbar,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
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
    color: #F3EDFC;
}
.subtitle{
    font-family: 'Roboto', sans-serif;
    color: #292929;
    font-size: 40px;
    margin-left: 10vh;
    margin-top: -15vh;

}
.text{
    margin-top: 10vh;
}
</style>