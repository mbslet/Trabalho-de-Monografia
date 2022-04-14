<template>
    <div class="topbar"></div>

    <div class="context">
        Componentes
        <div class="bar">
        </div>
        <div class="text">
           Um componente pode ser um pacote de código a ser desenvolvido de forma independente e entregue como uma unidade, pode ser
           parte de um código reutilizável na sua interface e desenvolvimento, e pode ter uma ou mais funções dentro do sistema.
           Os componentes trabalham em conjunto para criar padrões e experiências intuitivas.

           <br>
           Dentre as características dos componentes, podemos ver as seguintes:
           <br>
           <br>
           <div class="list">
            <Listbox v-model="selectedCity" :options="list" optionLabel="name" />
            </div>
            <br>
            Nessa seção, vamos aprender um pouco sobre categorização de componentes, como o Design Atômico, 
            e alguns componentes reutilizáveis já criados e muito utilizados na comunidade, como o Material Design e Prime Vue.
            <div class="btco">
          <button class="next" @click="goToPage()">Próxima</button>
      </div>
        </div>        
       
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Componentes</i>
          <br>
          <br>
          <br>
            <router-link class="topic" to="/designatomico"> Design Atômico </router-link>
            <br>
            <br>
            <router-link class="topic" to="/material"> Material Design </router-link>
            
            <br>
            <br>
            <router-link class="topic" to="/primevue"> Prime Vue </router-link>
            <br>
            <br>
    </div>
  </div>
</template>


<script>
export default {
    data() {
           return {
        
              list: [
              {name: '◉ Reutilização'},
              {name: '◉ Flexibilidade'},
              {name: '◉ Consistência'},
              {name: '◉ Modularidade'},
                  ],
        
        }
    },
  components: { },
  name: "StyleGuidePage",
  methods:{
    goToPage(){
          this.$router.push({ path: '/designatomico'})
      }
  }
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.body, html {
  position: relative;
  width: 1000px;
  height: 100%;
  
  } 
.btco{}
.layout-topbar {
    position: fixed;
    height: 50px;
    padding: 36em 3em 5em 2em;
    background-color: #4EBC86;
    color: #ffffff;
    z-index: 999;
    left: 0;
  }
  .p-link {
  font-size: 1rem;
  font-family: 'Titillium Web';
  border-radius: 3px;
}

.pi {
  font-size: 1rem;
}

.sg{
    margin-top: -165%;
}
.mt{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 35px;
    font-weight: 500;
}
.st{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
    margin-top: 5vh;
    margin-left: 1vh;
}
.st-b{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
    margin-top: 5vh;
    margin-left: 1vh;   
}
.context{
    position: fixed;
    height: 50px;
    padding: 1em 1em 1em 1em;
    color: #292929;
    z-index: 999;
    margin-top: 5vh;
    margin-left: 50vh;
    font-size: 45px;
    font-family: 'Roboto', sans-serif;

}
.bar{
    padding: 5px;
    width: 50vh;
    background-color: #455F58;
}
.text{
    padding: 10px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
}
.sub-text{
    width: 1000px;
    height: 1000px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;

}
.topbar{
  padding: 20px;
  width: 250vh;
  height: 10px;
  margin-top: -2vh;
  margin-left: -2vh;
  background-color: #FFFFFF;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.218);
}
.topic {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #FFFFFF;
  text-decoration: none;
}
.topic:hover{
  border-bottom: 2px solid #3498db;
}
</style>