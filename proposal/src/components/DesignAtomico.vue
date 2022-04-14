<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Design Atômico" >
            <div class="bar"></div>
            <br>
            O Design Atômico é uma metodologia para a criação de design de interfaces, auxiliando no desenvolvimento de sistemas de design 
            mais pensados e que possam ser escaláveis. 
            Utilizar o Design Atômico para criar um design é uma maneira estruturada e lógica de dar função e forma ao projeto. 
            <br>
            Essa metodologia é capaz de conceituar desde o menor elemento de um design.
            <br>
            <h2>Átomos</h2>
            Os átomos são os blocos de construção básicos, dando vida a um layout. Aplicados a interfaces web, os átomos são nossas tags HTML, 
            como um rótulo de formulário, uma entrada, um botão, ou até paleta de cores, fontes ou animações.
            <br>
            <br>
            <img class="atom" src="../assets/atomo.png" alt="">
            <br>
            <br>
            <h2>Moléculas</h2>
            As moléculas são grupos de átomos ligados entre si, formando um novo elemento, sendo combinações mais simples de átomos reutilizáveis.
            Moléculas dão um sentido à elementos isolados.
            <br>
            <br>
            <img class="molecula" src="../assets/molecula.png" alt="">
            <br>
            <br>
            <h2>Organismos</h2>
            Os organismos são grupos formados por moléculas, funcionando como uma unidade. Um organismo pode ser ser várias funções. 
            <br>
            <br>
            <img class="organismo" src="../assets/organismo.png" alt="">
            <br>
            <br>
            <h2>Modelos</h2>
            Os modelos são agrupamentos de dois ou mais organismos e pode facilitar a compreensão sobre a estética e o funcionamento do projeto.
            Nessa fase é possível ver o design como um todo.
            <br>
            <h2>Páginas</h2>
            As páginas são grupos de modelos, possuem características visuais, como os elementos das cores, tipografia, mídias e outros elementos.
            As páginas são o nível mais alto de fidelidade e normalmente é onde a maioria das pessoas passam a maior parte do tempo. É nas páginas
            que a maioria das avaliações são feitas. São nas páginas que podem ser tetada a eficáciado sistema de design.
            <br>
            <br>
           
            <h2>Benefícios do Atomic Design</h2>
            Se tivermos uma lista de átomos, moléculas e organismos apresentados antes do desenvolvimento, 
            é mais provável que eles usem o que já existe ao invés de criar novos componentes para pequenas variações, facilitando o princípios
            da reutilização de compoenentes.
            <br>
            <br>
            Como apenas um átomo, molécula ou organismo está sendo alterado a qualquer momento, é fácil garantir que as atualizações de um componente 
            sejam transmitidas para todas as outras instâncias do site. Da mesma forma, componentes indesejados podem ser facilmente removidos.
            

            
          </Panel>
          <div class="btco">
          <button class="next" @click="goToPage()">Próxima</button>
      </div>
        </div>
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Guia de Estilo</i>
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
	}
    },
  components: { },
  name: "DesignAtomico",
  methods:{
    goToPage(){
          this.$router.push({ path: '/material'})
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
  background: #FFFFFF;  
  
  } 
 
.atom{
  width: 320px;
  height: 65px;
} 
.molecula{
  width: 200px;
  height: 80px;
} 
.organismo{
  width: 650px;
  height: 80px;
} 
.c-example{
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: 35vh;
}  

.c1{
  position: relative;
  background-color: #292929;
  text-align: center;
}
.c1:hover {
  text-align: center;
  font-size: 0;
}

.c1:hover:before {
  text-align: center;
  font-size: 15px;
  content: attr(data-hover);
  color: #FFFFFF;
  margin-top: 20px
}
.c2{
  background-color: #626C66;
}
.c3{
  background-color: #F3EDFC;
  border-style: solid;
  border-color: #292929;
}

.circulo {
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
}

.list-h1{
  margin-left: 0vh;
  font-size: 32px;
  color: #434A42;
}
.list-h2{
  margin-left: 0vh;
  font-size: 26px;
  color: #434A42;
}
.list-h3{
  margin-left: 0vh;
  font-size: 22px;
  color: #434A42;
}
.list-h4{
  margin-left: 0vh;
  font-size: 20px;
  color: #434A42;
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
      display: grid;
        grid-template-columns: 100%;

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
.text{
    padding: 10px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
}
.sub-text{
    overflow-y: scroll;
    width: 100%;
    height: 70vh;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
    margin-left: -10vh;

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

.tipog{
  width: 500px;
  height: 20px;
  margin-left: 15vh;
}
</style>