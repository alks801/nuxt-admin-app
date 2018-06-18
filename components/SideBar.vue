<template>
    <div class="side-bar">
        <ul>
            <li class="menu-item">
                <i class="icon fas fa-cog"></i>
                <p class="text">System Config</p>
            </li>
            <li class="menu-item selected">
                <i class="icon fas fa-table"></i>
                <p class="text">Db Connections</p>
            </li>
            <li class="menu-item">
                <i class="icon fas fa-key"></i>
                <p class="text">API Keys</p>
            </li>
            <li class="menu-item">
                <i class="icon fas fa-comment"></i>
                <p class="text">Response Messages</p>
            </li>
            <li class="menu-item">
                <i class="icon fas fa-link"></i>
                <p class="text">API Routes</p>
            </li>
            <li class="menu-item">
                <i class="icon fas fa-users"></i>
                <p class="text">Admin Panel Users</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.side-bar {
  width: 300px;
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
      //flex-direction: column;
      align-items: center;
      height: 65px;
      padding-left: 20px;
      border-bottom: 1px solid #d4d4d4;
      transition: all 0.2s ease-in-out;
      user-select: none;
      .icon {
        color: #2f2cac;
      }
      .red {
        color: #ce212f;
      }
      .text {
        margin: 0;
        padding: 0;
        padding-left: 10px;
      }
      &.selected {
        border-left: 3px solid #2f2cac;
        background: #eeeeee;
        //box-shadow: 1px 1px 1px grey, -1px 1px 1px grey inset;
      }
      &:hover {
        background: #e4e4e4;
      }
    }
  }
}
</style>
