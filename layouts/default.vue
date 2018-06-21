<template>
  <div class="full-window-container">
    <Header />
    <div class="content-container">
      <SideBar/>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
export default {
  components: { Header, SideBar }
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
      width: 100%;
      display: flex;
      padding-left:50px;
      //justify-content: center;
      overflow-x: auto;
    }
  }
  .footer {
  }
}
</style>
