<template>
    <div class="register-container">
        <form novalidate class="login-form" @submit.stop.prevent="submit">
            <md-input-container :md-theme="theme" :class="{'md-input-invalid': !formData.username.validation.value}">
                <md-icon>person</md-icon>
                <label>用户名</label>
                <md-input required v-model="formData.username.value"></md-input>
            </md-input-container>
            <md-input-container :md-theme="theme" md-has-password
                                :class="{'md-input-invalid': !formData.password.validation.value}">
                <md-icon>https</md-icon>
                <label>密码</label>
                <md-input required v-model="formData.password.value"></md-input>
            </md-input-container>
            <md-input-container :md-theme="theme" md-has-password
                                :class="{'md-input-invalid': !formData.rePassword.validation.value}">
                <md-icon>https</md-icon>
                <label>确认密码</label>
                <md-input required v-model="formData.rePassword.value"></md-input>
            </md-input-container>
            <div class="btns">
                <div class="btn-item" @click="doRegister">
                    <md-button :md-theme="theme" class="md-raised md-primary">注册</md-button>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped lang="scss">
    .register-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .login-form {
            width: 320px;
            height: 160px;
            .btns {
                width: 100%;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        }
    }
</style>
<script>
  export default {
    name: 'register',
    data () {
      return {
        theme: this.$root.theme,
        formData: {
          username: {
            value: '',
            validation: {
              value: true,
              regExp: ['^[A-Za-z0-9_]{1,8}$']
            }
          },
          password: {
            value: '',
            validation: {
              value: true,
              regExp: ['^[A-Za-z0-9_]{1,}$']
            }
          },
          rePassword: {
            value: '',
            validation: {
              value: true,
              regExp: ['^[A-Za-z0-9_]{1,}$']
            }
          }
        },
        requestUrl: this.$root.$data.requestUrl
      }
    },
    methods: {
      doRegister: function () {

      }
    },
    watch: {
      'formData.username.value': function (value) {
        var _usernameRegExp = this.formData.username.validation.regExp
        var _result = true
        _usernameRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(value)) {
            _result = false
          }
        })
        this.formData.username.validation.value = _result
      },
      'formData.password.value': function (value) {
        var _passwordRegExp = this.formData.password.validation.regExp
        var _result = true
        _passwordRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(value)) {
            _result = false
          }
        })
        this.formData.password.validation.value = _result
      },
      'formData.rePassword.value': function (value) {
        var _rePasswordRegExp = this.formData.rePassword.validation.regExp
        var _result = true
        _rePasswordRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(value)) {
            _result = false
          }
        })
        this.formData.rePassword.validation.value = _result
      }
    }
  }
</script>
