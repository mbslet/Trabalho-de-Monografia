<template>
<div>
  <div class="top-bar">
      <v-toolbar  elevation="4">
        
      </v-toolbar>
  </div>
  <div class="menu-icon">
      <img :src="require(`@/assets/menu_24px.svg`)"/>
  </div>
  <div class="search-icon">
      <img :src="require(`@/assets/search_24px.svg`)"/>
  </div>
</div>
</template>
<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped>
.top-bar{
    background-color: #292929;
    padding: 27px;
    width: 110%;
    height: 30%;
}
.menu-icon{
  position: absolute;
  margin-left: 15px;
  margin-top: -7.5vh;
}
.search-icon{
  position: absolute;
  float: right;
  right: 5vh;
  margin-top: -7vh;
}
</style>