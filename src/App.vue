<template>
  <v-app>
    <v-app-bar color="purple" fixed>
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Галерeя</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link to="/" class="text-decoration-none"
                >Галерея</router-link
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/about" class="text-decoration-none"
                >Обо мне</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
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
