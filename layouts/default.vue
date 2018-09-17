<template>
  <div class="full-window-container">
    <Header />
    <div class="content-container" v-if="isUserAuthenticated">
      <SideBar/>
      <div class="content">
        <nuxt />
      </div>
    </div>
    <SignInAdmin v-else/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import SignInAdmin from '@/components/SignInAdmin'
export default {
  components: { Header, SideBar, SignInAdmin },
  computed: {
    isUserAuthenticated: {
      get() {
        return this.$store.state.user.isUserAuthenticated
      }
    }
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", serif;
}
.full-window-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
   
  }
  .content-container {
    display: flex;
    height: 100%;
    .side-bar {
    }
    .content {
      height: 100%;
      width: calc(~'100vw - 370px');
      display: flex;
      padding:0 20px;
      //justify-content: center;
      overflow-x: auto;
    }
  }
  .footer {
  }
}
</style>
