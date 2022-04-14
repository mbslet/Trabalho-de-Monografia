<template>
  <div>
      <div class="topbar"></div>
      <div class="elements">
          <div class="bts">
            <button class="bt" @click="goToSgPage()">Guia de Estilo</button>
            <button class="bt-c">Componentes</button>
            <button class="bt-d">Design</button>
          </div>
        <div class="sgcard">
          <StyleGuideCard @click="goToSgPage()"/>
        </div>
        
        <div class="ccard">
          <ComponentsCard/>
        </div>
        
        <div class="dcard">
          <DesignCard/>
        </div>
      </div>
  </div>
</template>

<script>

import StyleGuideCard from "../components/StyleGuideCard.vue";
import ComponentsCard from "../components/Components.vue";
import DesignCard from "../components/DesignCard.vue"


export default {
  components: { StyleGuideCard, ComponentsCard, DesignCard },
  name: "ReusableList",
  methods:{
    goToSgPage(){
   this.$router.push('/sgpage'); 
      }
  }
};
</script>
<style lang="scss">
.body, html, app {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(243, 237, 252, 0.87) 92.19%, #B86E3D 100%);  
  overflow: hidden;
  } 


.sgcard{
  display: flex;
  align-items: center;
  margin-left: 20vh;
  margin-top: 1vh;

}
.ccard{
  display: flex;
  align-items: center;
  margin-left: 85vh;
  margin-top: -45vh;

}
.dcard{
  display: flex;
  align-items: center;
  margin-left: 148vh;
  margin-top: -45vh;

}
.top-bar{
    margin-top: -2vh;
}
.bts{
  display: grid;
  margin-top: 40vh;
  margin-left: 45vh;
}
.bt{  
  background-color: #4EBC86;
  color: white;
  font-size: 20px;
  height: 7vh;
  width: 35vh;
  border-radius: 25px;
  margin-left: -25vh;
  margin-top: -10vh;

}
.bt-c{  
  background-color: #4EBC86;
  color: white;
  font-size: 20px;
  height: 7vh;
  width: 35vh;
  border-radius: 25px;
  margin-left: 40vh;
  margin-top: -10vh;
}
.bt-d{
  background-color: #4EBC86;
  color: white;
  font-size: 20px;
  height: 7vh;
  width: 35vh;
  border-radius: 25px;
  margin-left: 103vh;
  margin-top: -10vh;

}
.elements{
  margin-top: -10vh;
}
.div-test{
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
</style>