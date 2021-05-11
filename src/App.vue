<template>
  <div id="swapi_app">
    <NavBar />
    <div class="app_inner">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./src/assets/clear/clear";
@font-face {
  font-family: 'HelveticaNeueCyr';
  src: local('HelveticaNeueCyr Thin'), local('HelveticaNeueCyr Thin'),
  url('~@/assets/fonts/HelveticaThin/HelveticaThin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HelveticaRegular';
  src: local('HelveticaNeueCyr Roman'), local('HelveticaNeueCyr Roman'),
  url('~@/assets/fonts/HelveticaRegular/HelveticaRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  #swapi_app{
    max-width: 1440px;
    .app_inner{
      padding: 0 104px;
    }
  }
</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>