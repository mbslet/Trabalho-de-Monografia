<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Material Design" >
            <div class="bar"></div>
            <br>
            Atualmente existem vários frameworks que provê de componentes prontos e reutilizáveis.
            Nessa seção vamos ver um pouco sobre o Material Design e o Prime Vue.
            <br>
            <h2>Material Design</h2>
            O Material Design é um sistema de design que foi desenvolvido pelo Google em 2014.
            A ideia do Material Design é dar aos designers e desenvolvedores uma ferramenta que lhes permitisse criar produtos intuitivos e bonitos.
            O Material Design é um sistema muito adaptável que pode ser usado para diversos produtos.
            <br>
            <br>
            <h3>Componentes</h3>
            Componentes do material são blocos de construção interativos para criar uma interface de usuário.
            As bibliotecas de componentes estão disponíveis para Android , iOS , Flutter e Web.
            Esses componentes atendem àlgumas necessidades da interface, sendo listadas em:
            <br>
            <br>

            <div class="list">
                <Listbox :options="list" optionLabel="name" />
            </div>
            <br>
            O Material Design dispõe dos componentes necessários para atender à esseas necessidades. 
            Como Cards, Listas e Planilhas para exibir informações.
            <br>
            <br>
            <img class="card" src="../assets/card.png" alt="">
            <img class="listmd" src="../assets/list.png" alt="">
            <br>
            <img class="sheet" src="../assets/sheet.png" alt="">
            <br>
            Para resolver a necessidade de navegação, ações e entrada, dispõe de componentes como Tab, Botões Flutuantes e Campos de Texto.
            <br>
            <br>
            <img class="tabs" src="../assets/tab.png" alt="">
            <img class="floatbt" src="../assets/floatbt.png" alt="">
            <img class="txtfield" src="../assets/txtfield.png" alt="">
            <br>
            <h2>Por Que Usar?</h2>
            O Material Design é mais do que apenas adicionar camadas ou sombras ao design. 
            É um recurso super abrangente que define as regras para uma nova linguagem de design.             
            <br>
            <br>    
            Possui ferramentas de personalização de design que permitem que eles sigam as
             práticas recomendadas de design, ao mesmo tempo em que colocam sua própria marca criativa na interface do usuário, como Cor, Forma e Tipografias 
            <br>
            <br>
            
            O <a href="https://material.io/">Material.io</a> é o site guia oficial do Material Design e tem tudo o que você precisa para começar, incluindo componentes pré-projetados, geradores 
            de imagens de marca e muito mais.

            
            
          </Panel>
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
		
            list: [
                {name: '◉ Exibição: Organiza o conteúdo por meio de cartões, listas e planilhas'},
                {name: '◉ Navegação: permite que os usuários se movam pelo produto usando componentes como gavetas e guias de navegação'},
                {name: '◉ Ações: Permitir que os usuários executem tarefas usando componentes'},
                {name: '◉ Entrada: Permitir que os usuários insiram informações ou façam seleções'},
                {name: '◉ Comunicação: Alertar os usuários sobre as principais informações e mensagens'},
                ],
	}
    },
  components: { },
  name: "MaterialDesign",

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
a:link {
  text-decoration: none;
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
.card{
    margin-left: 15vh;
    width: 300px;
    height: 200px;;
}
.listmd{
    width: 290px;
    height: 200px;
}
.sheet{
    margin-left: 25vh;
    width: 450px;
    height: 300px;
}
.tabs{
    width: 550px;
    height: 300px;
}
.floatbt{
    margin-top: -40vh;
}
.txtfield{
    margin-left: 85vh;
    width: 250px;
    height: 100px;
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
    margin-top: -65vh;
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
    margin-left: 65vh;
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
  margin-top: -9.5vh;
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