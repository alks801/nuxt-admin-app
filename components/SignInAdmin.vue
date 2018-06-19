<template>
    <div class="sign-container">
        <div class="sign-form">
            <div class="header">
                Please sign in for getting an access
            </div>
            <div class="input-container">
                <input type="text" v-model="login" id="ll"
                 placeholder="Login" @keyup="clearError">
                <input type="password" v-model="pass" id="pp"
                 placeholder="Password" @keyup="clearError">
            </div>
            <div class="error-container" v-if="haveErrors">
                There are fields empty or data is invalid.
            </div>
            <div class="button-container">
                <div class="button" @click="tryToSign">
                    Sign In
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      haveErrors: false,
      login: '',
      pass: ''
    }
  },
  methods: {
    async tryToSign() {
      this.clearError()
      let data = { login: this.login, pass: this.pass }
      let res = await axios.post('api/admin-signin', data)
      if (res.data === true) {
        let user = {
          isUserAuthenticated: true,
          login: data.login
        }
        this.$store.commit('setIsUserAuthenticated', user)
      } else if (res.data === false) {
        this.haveErrors = true
      }
    },
    clearError() {
      this.haveErrors = false
    }
  }
}
</script>

<style lang="less" scoped>
.sign-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  .sign-form {
    width: 450px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 8px #bebebe;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: 1.5em;
      background: #fafafa;
      border-radius: 5px 5px 0 0;
      width: 100%;
      border-bottom: 1px solid #d4d4d4;
    }
    .input-container {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 300px;

      input {
        margin-top: 40px;
        text-align: center;
        font-size: 1.3em;
        //width: 80%;
        border: none;
        border-bottom: 2px solid #064db8; //#2f2cac;//#0674b8;
        margin-bottom: 10px;
        transition: all 0.15s ease-in-out;
        &:focus {
          outline: none;
          font-size: 1.5em;
        }
      }
      flex: 2;
    }
    .error-container {
      display: flex;
      flex: 1;
      color: #dd0000;
    }
    .button-container {
      display: flex;
      width: 100%;
      justify-content: center;
      padding-bottom: 40px;
      cursor: pointer;
      user-select: none;
      .button {
        display: flex;
        width: 70%;
        justify-content: center;
        padding: 15px;
        background: #064db8;
        border-radius: 5px;
        color: white;
        font-size: 1.5em;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #0859d3;
        }
      }
    }
  }
}
</style>
