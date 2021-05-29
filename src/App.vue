<template>
  <div>
    <v-app-bar color="purple"  fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gallery</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'about' }">About me</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <router-link :to="{ path: '/' }">Home</router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>
   <!-- <header>
      <nav>
        <div>
          <router-link :to="{ name: 'about' }">About me</router-link>
          <router-link :to="{ path: '/' }">Home</router-link>
        </div>
      </nav>
    </header> -->
<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      group: null,
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
