<template>
    <div class="edit-container">
        <div class="columns-container">
            <div class="column" v-for="col in columns">
                <div class="row header">
                    {{col}}
                </div>
                <div class="row" v-for="(i,index) in localItems" :class="{isEditing: i.isEditing}">
					<div v-if="!i.isEditing">
						{{(i[col] == null ? 'null' : i[col])}} 
					</div>
                    <input class="editEl" v-else v-model="i[col]" type="text" name="" :id="index">
                </div>
            </div>
			<div class="column">
				<div class="row header">
                    
                </div>
				<div class="row editing" v-for="i in localItems" @click="editClick(i)">
					<font-awesome-icon class="edit" icon="edit" v-if="!i.isEditing"/>
					<font-awesome-icon class="ok" icon="check" v-else/>
				</div>
        	</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
	props: ['urlGet', 'urlPost'],
	data: function() {
		return {
			columns: [],
			items: [],
			localItems: [],
		};
	},
	watch: {
		items: function() {
			if (this.items && this.items.length && this.items.length > 0) {
				this.localItems = this.items.map(el =>{return  {...el, isEditing: false}});
				console.log(this.localItems)
				this.columns = Object.keys(this.items[0]);
			}
		},
	},
	async created() {
		this.getData();
	},
	methods: {
		async getData() {
			let response = await axios.get(this.urlGet);
			this.items = response.data;
		},
		editClick(item) {
			let isOkayClick = item.isEditing;
			item.isEditing=!item.isEditing;
			if (isOkayClick) {
				axios.post(this.urlPost, item)
				.then(r => console.log(r))
				.catch(e =>console.log(e))
			}
		}
	},
};
</script>

<style lang="less" scoped>
.edit-container {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top:50px;
	.columns-container {
		display: flex;
		width: 100%;
		max-width: 100%;
		justify-content: space-around;
		box-shadow: 0 1px 8px #bebebe;
		border-radius: 5px;
		border: 1px solid #d4d4d4;
		.column {
			display: flex;
			flex-direction: column;
			&:not(:first-child) {
				border-left: 1px solid #d4d4d4;
			}
			.header {
				display: flex;
				justify-content: center;
				align-items: center;
				background: #fafafa;
				border-bottom: 1px solid #d4d4d4;
				height: 45px;
				font-size: 1.5em;
				border-radius: 5px 5px 0 0;
			}
			.row {
				display: flex;
				padding: 10px 15px;
				align-items: center;
				border-bottom: 1px solid #d4d4d4;
				min-height: 25px;
				.edit {
					color: #920ec7;
				}
				.ok {
					color:#00ad00;
				}
				&.editing{
					cursor: pointer;
				}
				&.isEditing{
					padding: 0;
				}
				.editEl{
					height: 39px;
					width: 100%;
					font-size: 1em;
				}
			}
		}
	}
}
</style>
