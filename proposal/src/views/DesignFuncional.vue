<template>
    <div class="topbar"></div>

    <div class="context">
        Design Funcional
        <div class="bar">
        </div>
        <div class="text">
            Design Funcional descreve o que o aplicativo deve ser capaz de fazer e está menos preocupado em como isso é feito.
            O foco é  colocar todo o conhecimento disponível a serviço do desenvolvimento da interface, seguindo algumas dicas, fica
            mais fácil criar um projeto funcional.
    

        </div>
        <div class="btdf">
            <button class="next" @click="goToPage()">Próxima</button>
          </div>
       
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Design Funcional</i>
          <br>
          <br>
          <br>
            <router-link class="topic" to="/fundamentos"> Fundamentos </router-link>
            <br>
      </div>
  </div>
</template>


<script>
export default {
    data() {
           return {
               data: {
                    items: [
                        { message: 'Foo' },
                        { message: 'Bar' }
                    ]
                }
        }
    },
  components: { },
  name: "StyleGuidePage",
  methods:{
    goToPage(){
          this.$router.push({ path: '/fundamentos'})
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
.btdf{
  margin-top: 30vh;
  margin-left: 10vh;
}
.layout-topbar {
    position: fixed;
    height: 100%;
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
    margin-top: 5%;
    margin-left: 55vh;
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