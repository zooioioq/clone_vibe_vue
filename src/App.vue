<template>
  <headerComponent></headerComponent>
  <router-view/>
  <footerComponent></footerComponent>
</template>

<script>
  import headerComponent from '@/components/header-component'
  import footerComponent from '@/components/footer-component'
    export default {
      components: {
        headerComponent,
        footerComponent
      }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
