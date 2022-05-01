<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
            <div class="tit"><h6>Aplicação do Design Funcional</h6></div>
            <Card class="cardap">
           
                <br>
                <br>
                <template #content>
                    Sites bem organizados, fáceis de navegar e claros em suas propostas de valor para usuários e grupos de 
                    negócios exemplificam a abordagem do Desgin Funcional.
                    <br><br>
                    <div class="exemp">
                        Um exemplo desse design é o site da empresa Amazon, reconhecida no mercado e no meio dos desenvoledores.
                        <br>
                        O objetivo do site da Amazon é comprar o melhor produto por um bom preço, pois o usuário não quer buscar por milhares de produtos, portanto os desenvolvedores
                         se esforçam muito para remover quaisquer obstáculos para essa tarefa, para que o usuário não se frustre ou canse na navegação.”
                    </div>
                </template>
        </Card>
        </div>
        <div>
            <button class="nexthere" @click="goToPage()">Feedback</button>
          </div>
    </div>
    
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Design Funcional</i>
          <br>
            <br>
            <router-link class="topic" to="/fundamentos"> Fundamentos </router-link>
          <br><br>
           <router-link class="topic" to="/aplicacao"> Aplicação </router-link>
      </div>
  </div>
</template>


<script>
export default {
    data() {
          return {
		selectedCity: null,
		cities: [
			{name: '◉ Cor Principal'},
			{name: '◉ Cor Secundária'},
			{name: '◉ Cor de Destaque'},
		]
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

.nexthere{
    background-color: #3c6d60;
  width: 20vh;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  margin-left: 55%;
  margin-top: 8%;

}
.tit{
    color: #292929;
    margin-top: -8%;
    margin-left: 18%;
}

.cardap{
    color: #575555;
    padding: 2%;
    height: 80%;
    width: 50%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.218);
    font-size: 20px;
    margin-top: -1%;
    margin-left: 15%;

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

.list{
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
    font-size: 25px;
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