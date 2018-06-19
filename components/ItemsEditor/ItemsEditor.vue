<template>
    <div class="content-container">
        <div class="columns-container">
            <div class="column" v-for="col in columns">
                <div class="row header">
                    {{col}}
                </div>
                <div class="row" v-for="i in localItems">
                    {{i[col]}} 
                </div>
            </div>
        </div>
        <!-- <div class="columns-row">
            <div class="column-item" v-for="col in columns">
                {{col}}
            </div>
        </div>
        <div class="items-row" v-for="col in columns">
            <div class="item" v-for="i in localItems">
                {{i[col]}}
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  props: ['items'],
  data: function() {
    return {
      columns: [],
      localItems: []
    }
  },
  watch: {
    items: function() {
      if (this.items && this.items.length && this.items.length > 0) {
        this.localItems = this.items
        this.columns = Object.keys(this.items[0])
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .columns-container {
    display: flex;
    width: 100%;
    max-width: 900px;
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
      }
    }
  }
}
</style>
