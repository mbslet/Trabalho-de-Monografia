<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Prime Vue" >
            <div class="bar"></div>
            <br>
            Prime Vue é um rico conjunto de componentes nativos de código aberto para a framework Vue. Esse site guia é baseado em componentes reutilizáveis pelo
            Prime vue. 
            <br>
            <br>
            O Prime Vue é uma biblioteca de interface do usuário abrangente para Vue com um rico conjunto de mais de 90 componentes, 
            uma coleção de modelos e blocos de construção de interface do usuário, bem como um designer de temas para criar seus próprios designs.
            O PrimeVue é desenvolvido pela PrimeTek Informatics, um fornecedor com anos de experiência no desenvolvimento de soluções de interface do usuário de código aberto, 
            incluindo PrimeFaces, PrimeNG e PrimeReact.
            <br>
            Abaixo podemos ver um poucos sobre os componentes que compõe o Prime Vue.
            <br>

            <h2>Componentes</h2>
            A lista de componentes abaixo apresenta alguns dos diversos componentes que o Prime Vue dispõe. 
            Cada componente faz parte de um grupo maior de dados, facilitando a aplicação e o resultado esperado.
            O <a href="https://www.primefaces.org/primevue/setup">Prime Vue</a> é o site oficial dos componentes do Prime Vue e nele vocÊ pode conferir 
            todos os componentes, como usar no seu código e apresenta prévias
            <h3>Form</h3>
            <div class="formsf">
                <h4>Calendário</h4>
            </div>    
            O calendário é um componente de entrada para selecionar uma data.
            <br><br>
                <img class="calends" src="../assets/calendar.png" alt="">
            <div class="formsf">    
                <h4>Dropdown</h4>
            </div>
            O componente Dropdown é usado para selecionar um item de uma lista de opções.
            <br><br>
                <img class="dropdownx" src="../assets/dropdown.png" alt="">
            <div class="formsf">    
                <h4>Input Text</h4>
            </div>
            InputText renderiza um campo de texto para inserir dados.
            <br><br>
                <img class="inptextx" src="../assets/inputtext.png" alt="">
                <br>
           

            <h3>Button</h3>
            Button é uma extensão do elemento de botão padrão com ícones e temas.
            <br><br>
            <img class="btpv" src="../assets/bt.png" alt="">
            <br>

            <br>

            <h3>Data</h3>
            <div class="formsf">
              <h4>Data Table</h4>
            </div>
            DataTable exibe dados em formato de tabela.
            <br><br>
            <img class="datat" src="../assets/datatab.png" alt="">
            <br>
            <br>
            <div class="formsf">
              <h4>Paginator</h4>
            </div>
            Paginator é um componente genérico para exibir conteúdo em formato paginado.
            <img class="paginator" src="../assets/paginator.png" alt="">
            <br>
            <h3>Panel</h3>
            <div class="formsf">
              <h4>Card</h4>
            </div>
              O cartão é um componente de conteiner flexível.
              <br>
              <br>
              <img class="cardadv" src="../assets/cardadv.png" alt="">
              <img class="cardpv" src="../assets/cardpv.png" alt="">
              <br>
              
            <div class="formsf">  
              <h4>Panel</h4>
            </div>  
            Panel é um conteiner com o recurso de alternância de conteúdo opcional.
            <br><br>
              <img class="panelpv" src="../assets/panel.png" alt="">
              <br>
            <div class="formsf">  
              <h4>Tab View</h4>
            </div>
            TabView é um componente de contêiner para agrupar conteúdo com guias.
            <br><br>
              <img class="tabviewpv" src="../assets/tabview.png" alt="">
              <br>
             
            <h3>Overlay</h3>
            <div class="formsf">
              <h4>Dialog</h4>
            </div>  
            O Diálogo é um contêiner para exibir conteúdo em uma janela de sobreposição.
            <br>
            <br>
              <img class="dialogpv" src="../assets/dialog.png" alt="">
              <br>
            <div class="formsf">  
              <h4>Barra Lateral</h4>
            </div>  
              A barra lateral é um componente do painel exibido como uma sobreposição nas bordas da tela.
              <br><br>
              <img class="sidebarpv" src="../assets/sidebar.png" alt="">
              <br>
             
            <h3>File</h3>
            <div class="formsf">
              <h4>Upload</h4>
            </div>  
              FileUpload é um uploader avançado com suporte a dragdrop, uploads de vários arquivos, 
              upload automático, rastreamento de progresso e validações.
              <br>
              <br>
              <img class="uploadpv" src="../assets/upload.png" alt="">
              <br>
            <h3>Menu</h3>
            Menu é um componente de navegação que suporta posicionamento dinâmico e estático.
            <br>
            <img class="menubar" src="../assets/menubar.png" alt="">
            <br>
            <div class="formsf">
              <h4>Tab Menu</h4>
            </div>
              TabMenu é um componente de navegação que exibe itens como cabeçalhos de guias. O exemplo abaixo usa rotas aninhadas com TabMenu.
              <br>
              <br>
              <img class="tabmenu" src="../assets/tabmenu.png" alt="">
            
            <br>
            <h3>Chart</h3>
              <div class="formsf">
                <h4>Gráfico de Pizza</h4>
              </div>
              Um gráfico de pizza é um gráfico estatístico circular, que é dividido em fatias para ilustrar a proporção numérica.
              <img class="chartpie" src="../assets/chartpie.png" alt="">
              <br>
              <div class="formsf">
                <h4>Gráfico de Barra</h4>
              </div> 
              O Gráfico de Barra é um gráfico que apresenta dados agrupados com barras retangulares com comprimentos proporcionais aos valores que representam
              <img class="chartbar" src="../assets/chartbar.png" alt="">
              <br>
             
            <h3>Mensagens</h3>
            O componente Mensagens é usado para exibir mensagens embutidas com várias gravidades.
            <img class="message" src="../assets/message.png" alt="">
            <br>

          </Panel>
          <div class="btco">
            <button class="next" @click="goToPage()">Design Funcional</button>
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
  methods:{
    goToPage(){
          this.$router.push({ path: '/funcional'})
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

.calends{
    width: 400px;
    height: 385px;
}
.dropdownx{
    width: 400px;
    height: 385px; 
}
.inptextx{
    width: 350px;
    height: 385px; 
}
.formsf{
    text-decoration: underline;
    text-decoration-color: #3498db;
}
a:link {
  text-decoration: none;
}

.btpv{
    margin-left: -5vh;
    width: 650px;
    height: 485px; 
}
.datat{
    width: 550px;
    height: 285px; 
}
.paginator{
    width: 520px;
    height: 130px; 
}
.cardpv{
    width: 360px;
    height: 230px; 
}
.cardadv{
    width: 400px;
    height: 460px; 
}
.panelpv{
    width: 900px;
    height: 320px; 
}
.tabviewpv{
    width: 900px;
    height: 220px; 
}
.menubar{
    width: 910px;
    height: 100px; 
}
.tabmenu{
    width: 730px;
    height: 145px; 
}
.uploadpv{
    width: 400px;
    height: 130px; 
}
.sidebarpv{
    width: 400px;
    height: 130px; 
}
.dialogpv{
    width: 400px;
    height: 200px; 
}
.chartpie{
    width: 300px;
    height: 300px; 
}

.chartbar{
    width: 500px;
    height: 300px; 
}
.message{
    width: 640px;
    height: 210px; 
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
    height: 80vh;
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