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
      <v-avatar size="75">
        <img :src="getProfile.photo" alt="John" />
      </v-avatar>
      <div class="d-flex flex-column">
        <span>{{ getProfile.name }}</span>
        <span>{{ getProfile.email }}</span>
      </div>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/" class="text-decoration-none">
            <v-list-item>
              <v-list-item-title>Галерея </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about" class="text-decoration-none">
            <v-list-item>
              <v-list-item-title>Обо мне </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getProfile"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #eee;
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
