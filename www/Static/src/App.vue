<template>
  <div id="app">
    <!--<img src="./assets/logo.png" @click="getData">-->
    <router-view></router-view>

    <md-snackbar :md-position="snackbar.vertical + ' ' + snackbar.horizontal" ref="snackbar" :md-duration="snackbar.duration">
      <span v-text="snackbar.message"></span>
      <md-button class="md-accent" :md-theme="theme" @click.native="$refs.snackbar.close()" v-text="snackbar.cancel"></md-button>
    </md-snackbar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      theme: this.$root.theme,
      snackbar: {
        vertical: 'top',
        horizontal: 'right',
        duration: 4000,
        cancel: '取消'
      },
      snackbarList: [],
      requestUrl: this.$root.$data.requestUrl
    }
  },
  methods: {
    getData: function () {
      const $ = require('jquery')
      $.post({
        url: this.requestUrl.login,
        data: {
          username: 'ls',
          password: '123'
        },
        success: function (res) {
          console.log('RESPONSE DATA: ', res)
        }
      })
    },
    openMessageBox: function (args) {
      this.snackbar = Object.assign({}, this.snackbar, args)
      this.$refs.snackbar.open()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#global-snackbar-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  pointer-events: none;
}
</style>
