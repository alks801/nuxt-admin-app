<template>
    <div class="side-bar">
        <ul>
            
            <li class="menu-item" 
            v-for="link in links" :key="link.icon"
            :class="{selected: $route.path === link.path}" 
            @click="$router.push(link.path)">
                <font-awesome-icon :class="link.styleClass" :icon="link.icon"/>
                <p class="text">{{link.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            links : [
                {path: '/system-config',styleClass: 'blue', icon:'cog', text: 'System Config'},
                {path: '/db-connections',styleClass: 'blue', icon:'table', text: 'Db Connections'},
                {path: '/api-keys',styleClass: 'blue', icon:'key', text: 'API Keys'},
                {path: '/response-messages',styleClass: 'blue', icon:'comment', text: 'Response Messages'},
                {path: '/api-routes',styleClass: 'blue', icon:'link', text: 'API Routes'},
                {path: '/admin-panel-users',styleClass: 'red', icon:'users', text: 'Admin Panel Users'},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.side-bar {
  width: 330px;
  background: #fafafa;
  box-shadow: 2px 0 2px -2px #bebebe;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li.menu-item {
      font-size: 1.2em;
      display: flex;
      cursor: pointer;
      align-items: center;
      height: 65px;
      padding-left: 25px;
      border-bottom: 1px solid #d4d4d4;
      transition: all 0.2s ease-in-out;
      user-select: none;
      .blue {
        color: #064db8;
      }
      .red {
        color: #e01f2ffa;
      }
      .text {
        margin: 0;
        padding: 0;
        padding-left: 15px;
      }
      &.selected {
        border-left: 3px solid #064db8;
        background: #eeeeee;
      }
      &:hover {
        background: #e4e4e4;
      }
    }
  }
}
</style>
