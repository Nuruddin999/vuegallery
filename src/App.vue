<template>
  <div id="app">
    <header>
      <nav>
        <div>
          <router-link :to="{ name: 'about' }">About me</router-link>
          <router-link :to="{ path: '/' }">Home</router-link>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route: "initService",
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
