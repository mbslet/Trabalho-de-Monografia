<template>
  <div class="content">
      <router-link class="home" to="/"> Home </router-link>
      <router-link class="topic" to="/reusablelist"> Tópicos </router-link>
      <router-link class="sgpage" to="/sgpage"> Guia de Estilo </router-link>
      <router-link class="comp" to="/components-page"> Componentes </router-link>
      <router-link class="funci" to="/funcional"> Design Funcional </router-link>

      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

#app{
    background-image: linear-gradient(180deg, #F1853C, #B86E3D);
    font-family: 'Roboto', sans-serif;
    overflow: hidden;

}

.content{
  display: block;
  
  align-content: space-between;
  width: 40%;
  min-width: 500px;
  margin: 0;
  position: absolute;
  
}
.home{
  position: fixed;
  margin-left: 18vh;
}
a.topic{
    position: fixed;
    font-size: 16px;
    margin-left: 30vh;

}
.sgpage{
  position: fixed;
  margin-left: 43vh;
  margin-top: 0vh;
}
.comp{
    position: fixed;

  margin-left: 63vh;
  margin-top: 0vh;
}
.funci{
  position: fixed;
  margin-left: 83vh;
}

a {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  color: #4EBC86;
  text-decoration: none;
  backdrop-filter: blur(2px);
}
a:hover{
  border-bottom: 2px solid #3498db;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>



