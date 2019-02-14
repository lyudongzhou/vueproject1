<template>
  <div id="app" style="height: 100%;width: 100%">
    <!--<img src="./assets/logo.png">-->
    <el-container>
      <el-header>
        <div style="height: 10vh">
          <Head></Head>
        </div>
      </el-header>
      <el-main>
        <div style="height: 80vh">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        <div style="height: 10vh">
        <Head></Head>
      </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from "./components/Head"
export default {
  name: 'app',
  components: {
      Head
  },
    methods:{

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
}
</style>
