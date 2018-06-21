<template>
    <div class="header">
        <div class="main text">Meeting Rooms REST API <span class="small">{{$route.path == '/' ? '' : $route.path}}</span></div>
        <div class="login text" v-if="user.isUserAuthenticated">
            {{user.login}}
            <font-awesome-icon class="icon" icon="sign-out-alt"
            @click="logout"/>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    user: {
      get() {
        return this.$store.state.user
      }
    }
  },
  methods: {
    logout() {
      let user = {
        isUserAuthenticated: false,
        login: ''
      }
      this.$store.commit('setIsUserAuthenticated', user)
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  color: #757575;
  cursor: pointer;
}
.header {
  height: 80px;
  box-shadow: 0 1px 8px #bebebe;
  display: flex;
  align-items: center;
  z-index: 1;
  user-select: none;
  justify-content: space-between;
  .text {
    font-size: 2.1em;
    padding-left: 30px;
    font-family: 'Open Sans', serif;
    background-color: #565656;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    .small {
      font-size: 0.7em;
    }
  }
  .login {
    font-size: 1.5em;
    padding-right: 30px;
  }
}
</style>
