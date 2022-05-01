<template>
    <div class="topbar"></div>

   <div class="every">
      <div class="context">
        Guia de Estilo
        <div class="bar">
        </div>
        <div class="text">
            Um guia de estilo serve como base 
            para o desenvolvimento  <br>e é uma coleção de princípios, 
            diretrizes e convenções reunidas <br> em um 
            meio único para definir uma aparência e comportamento<br> unificados para 
            produtos e serviços, muitos guias de estilo da web<br> tendem
            não fazer referência aos guias de estilo tradicional,<br> provavelmente devido
            para a grande diversidade de desenvolvedores da web. <br> Para um guia de estilo ser bem elaborado, deve conter informações sobre <br>
            as cores escolhidas, tipografia definida, regras de escritas e elementos visuais como ícones e logo.
        
          <h4 class>Onde utilizar o seu Guia de Estilo?</h4>
        O guia de estilo é uma base para o desenvolvimento em empresas ou organizações. <br>Imagina que você precisa desenvolver um projeto
        novo a cada dois meses na sua empresa, <br> e os padrões serão sempre os mesmos. Se a empresa tiver um guia de estilo, <br> todas a informações
        visuais necessárias estarão lá, não é preciso definir nada novo <br> pois a paleta de cores principal, tipografia, espaçamentos e definição de grid <br>
        estarão salvos no documento de Guia de Estilo, facilitando as vezes em que vai utilizar os<br> mesmos esquelos para os projetos. 
       <div>

       </div>
          <button class="next" @click="goToPage()">Próxima</button>
      </div>
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt" @click="getSg()">Guia de Estilo</i>
          <br>
          <br>
          <br>
            <router-link class="topic" to="/colors-pallet"> Paleta de Cores </router-link>
            <br>
            <br>
            <router-link class="topic" to="/tipography"> Tipografia </router-link>
            <br>
            <br>
            <router-link class="topic" to="/regras"> Grids </router-link>
      </div>
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
  components: {  },
  name: "StyleGuidePage",
  methods:{
    goToPage(){
          this.$router.push({ path: '/colors-pallet'})
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
.howto{
  font-size: 20px;
}
.btsg{
  margin-top: 5vh;
  margin-left: 40vh;
}
.next{
  background-color: #3c6d60;
  width: 20vh;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  margin-left: 105vh;

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
    margin-top: -3vh;
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
    padding: 20px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
    margin-top: 5vh;
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