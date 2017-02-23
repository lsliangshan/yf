<template>
  <div class="home-container">
    <h1>这是首页</h1>
    <router-link to="/login" v-if="!userInfo.username">去登录</router-link>
    <p v-else>登录为: <span v-text="userInfo.username"></span></p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      theme: this.$root.theme
    }
  },
  computed: {
    userInfo: function () {
      return (JSON.parse(localStorage.getItem(location.href + 'loginuserInfo')) || {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    a {
      color: #555!important;
      line-height: 2;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      line-height: 2;
      font-weight: bold;
      span {
        color: #ee3333;
      }
    }
  }
</style>
