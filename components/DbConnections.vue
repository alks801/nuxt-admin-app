<template>
      <ItemsEditor :items="connections"/>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return { connections: [] }
  },
  async created() {
    this.getData()
  },
  methods: {
    async getData() {
      let { data } = await axios.get(
        'api/get-db-connections'
      )
      this.connections = data
    }
  }
}
</script>
