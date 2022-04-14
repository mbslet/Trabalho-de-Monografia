<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Fundamentos do Design Funcional" >
            <div class="bar"></div>
            <br>
            <h3>Usabilidade</h3>
            O principal objetivo do design funcional é que o design seja facilmente utilizado pelo usuário.<br>
            É necessário focar na praticidade e objetividade, para que o usuário não gaste muito tempo tentando entender a aplicação.
            <br>
            <h3>Informação</h3> 
            Organizar a informação com clareza e objetividade, para facilitar o acesso a informação.
            <br>
            <h3>Acessibilidade</h3>
            Para qualquer desenvolvimento, é importante pensar na acessibilidade.
            Essa dica é muito importante para um projeto de design funcional.
            Quando desenvolvemos um novo produto é necessário analisar bem o público-alvo. 
            Um produto bem feito é o que pode ser acessado por qualquer pessoa que tenha interesse.
            É muito importante usar técnicas adequadas para garantir que qualquer usuário, independente de necessidades especiais, acesse o conteúdo
            <br>
            <h3>Design Gráfico</h3>
            Melhora a experiência do usuário, e auxilia na realização das tarefas. O design gráfico deve ser envolvente, ou seja, chamar a atenção
            do usuário. 
            <br>
            Os usuários são naturalmente atraídos por designs bonitos, mas também podem se sentir atraídos pela funcionalidade e facilidade de uso
            <br>
            <h3>Design Responsivo</h3>
            O design responsivo é praticamente uma necessidade hoje em dia. Mais pessoas estão acessando e consumindo conteúdos 
            através dos mais diversos dispositivos, seja tablets, smartphones ou computadores.
            <br>
            Por isso é de extrema importância garantir que ele estará pronto para ser aberto e funcionar corretamente em qualquer um desses aparelhos e navegadores.
            <br>
            <h2>Concluimos que:</h2>
            Trabalhar com design funciona é priorizar a navegação e a experiência do usuário no lugar da arte e da estética, 
            que muitas vezes podem ir contra o que o cliente realmente espera. 
            <br>
            O design funcional traz a visão da experiência do usuário, e com isso podemos traçar um meio de reutilização do design de interface de usuário.
            <br>
            <br>
            Mantendo a UX consistente podemos manter a consistência do UI também, o que pode acelerar o desenvolvimento, e gerando um retorno positivo como desenvolvedor e usuário.
          </Panel>
          <div class="btco">
            <button class="next" @click="goToPage()">FeedBack</button>
          </div>
        </div>
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Design Funcional</i>
          <br>
          <br>
          <br>
            <router-link class="topic" to="/fundamentos"> Fundamentos </router-link>

      </div>
  </div>
</template>


<script>
export default {
    data() {
          return {
		selectedCity: null,
		h1: [
			{name: '◉ Heading Tag - H1'}
		],
        h2: [
			{name: '◉ Heading Tag - H2'}
		],
        h3: [
			{name: '◉ Heading Tag - H3'}
		],
        h4: [
			{name: '◉ Heading Tag - H4'}
		],
    peso: [
			{name: '◉ Light: O valor numérico para a intensidade light é a partir de 300'},
      {name: '◉ Regular: O valor numérico para a intensidade regular é a partir de 400'},
      {name: '◉ Medium: O valor numérico para a intensidade medium é a partir de 500'},
      {name: '◉ Bold: O valor numérico para a intensidade bold é a partir de 700'},
		],
	}
    },
  components: { },
  name: "StyleGuidePage",
  methods:{
    goToPage(){
          this.$router.push({ path: '/feedback'})
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
    margin-left: 55vh;
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