<template>
  <div id="app">
    <img src="./assets/logo.png" @click="getData">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      requestUrl: this.$root.$data.requestUrl
    }
  },
  methods: {
    getData: function () {
      Vue.$http.post({
        url: this.requestUrl.login,
        data: {
          username: 'ls',
          password: '123'
        }
      }).then((res) => {
        console.log('.........', res)
      })
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
