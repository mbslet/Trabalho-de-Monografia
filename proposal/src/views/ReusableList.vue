<template>
  <div>
    <Topbar/>
    <div>
      <Button class="bt">Guia de Estilo</Button>
    </div>
    <div class="cards">
      <div class="sgcard">
        <StyleGuideCard/>
      </div>
      <div class="ccard">
        <ComponentsCard/>
      </div>
    </div>
  </div>
</template>

<script>

import StyleGuideCard from "../components/StyleGuideCard.vue";
import ComponentsCard from "../components/Components.vue";
import Topbar from "../components/Topbar.vue";


export default {
  components: { StyleGuideCard, ComponentsCard, Topbar },
  name: "ReusableList",
};
</script>
<style lang="scss">
.body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(243, 237, 252, 0.87) 92.19%, #B86E3D 100%);  
  overflow: hidden;
  } 

.cards{
	justify-content: center;

}
.sgcard{
  display: flex;
  align-items: center;
  margin-left: 15vh;
  margin-top: 25vh;

}
.ccard{
  display: flex;
  align-items: center;
  margin-left: 70vh;
  margin-top: -45vh;

}
.top-bar{
    margin-top: -2vh;
}
.bt{
  background-color: #D16002;
  color: white;
  height: 5vh;
  width: 25vh;
  border-radius: 25px;
  margin-top: 10%;
}
</style>