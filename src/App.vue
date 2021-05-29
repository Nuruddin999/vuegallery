<template>
  <div id="app">
    <v-row>
      <v-col
        v-for="(bar, i) in bars"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        class="my-4"
      >
        <v-card color="grey lighten-4" flat height="200px">
          <v-toolbar :color="bar.class" :dark="bar.dark">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <!-- <header>
      <nav>
        <div>
          <router-link :to="{ name: 'about' }">About me</router-link>
          <router-link :to="{ path: '/' }">Home</router-link>
        </div>
      </nav>
    </header> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bars: [
        { class: "" },
        { class: "", dark: true },
        { class: "primary", dark: true },
        { class: "elevation-0" },
      ],
    };
  },
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
}
header {
  width: 100%;
  background: #39f;
  padding: 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
header a {
  text-decoration: none;
  color: wheat;
}
</style>
