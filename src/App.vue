<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-button v-on:click="routeA(true)">Foo</el-button>
      <el-button v-on:click="routeA(false)">Bar</el-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
    methods:{
      routeA:function(isfoo){
          if(isfoo){
              this.$router.push('/foo')
          }else{
              this.$router.push('/bar')
          }

      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
