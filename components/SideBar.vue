<template>
    <div class="side-bar">
        <ul v-for="menuItem in menuItems" :key="menuItem.title">
          <div class="title">{{menuItem.title}}</div>
          <li class="menu-item" v-for="link in menuItem.links" :key="link.text"
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
	data: function() {
		return {
			menuItems: [
				{
					title: 'Settings',
					links: [
						{
							path: '/settings',
							styleClass: 'blue',
							icon: 'cog',
							text: 'Settings',
						},
						{
							path: '/common-settings',
							styleClass: 'blue',
							icon: 'cog',
							text: 'Common Settings',
						},
						{
							path: '/dynamic-collections',
							styleClass: 'blue',
							icon: 'cog',
							text: 'Dynamic Connections',
						},
					],
				},
				{
					title: 'API',
					links: [
						{
							path: '/api-keys',
							styleClass: 'blue',
							icon: 'key',
							text: 'API Keys',
						},
						{
							path: '/api-status-messages',
							styleClass: 'blue',
							icon: 'envelope',
							text: 'API Status Messages',
						},
					],
				},
				{
					title: 'Channel',
					links: [
						{
							path: '/channel-room-types',
							styleClass: 'blue',
							icon: 'list-ol',
							text: 'Channel Room Types',
						},
						{
							path: '/channel-rate-codes',
							styleClass: 'blue',
							icon: 'code',
							text: 'Channel Rate Codes',
						},
					],
				},
				{
					title: 'Admin',
					links: [
						{
							path: '/admin-panel-users',
							styleClass: 'red',
							icon: 'users',
							text: 'Panel Users',
						},
					],
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
.side-bar {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	width: 370px;
	background: #fafafa;
	box-shadow: 2px 0 12px -2px #bebebe;
	ul:not(:first-child) {
		border-top: 2px solid #6486ac;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		.title {
			color: #35495e;
			font-size: 1.5em;
      user-select: none;
      padding: 5px 15px;
      background: #f3f3f3;
  font-weight:600; 
		}
		li.menu-item {
			font-size: 1.2em;
			display: flex;
			cursor: pointer;
			align-items: center;
			height: 65px;
			padding-left: 25px;
			border-top: 1px solid #d4d4d4;
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
