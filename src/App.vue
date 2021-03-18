<template>
  <div id="app">
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">Vue Material Demo Project</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="showNavigation" md-persistent="full">
          <md-toolbar :md-elevation="4">
              <span class="md-title">
                <router-link to="/">首頁</router-link>
              </span>
            </md-toolbar>
          <md-list>
            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">
                <router-link to="/date-picker-list">Material Custom Calendar</router-link>
              </span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content id="main-content"><router-view></router-view></md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    showNavigation: false,
  }),
  setup() {},
  methods: {
    toggleMenu() {
      this.showNavigation = !this.showNavigation;
    },
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

#main-content {
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
