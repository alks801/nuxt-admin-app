<template>
      <ItemsEditor :items="commonSettings" />
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return { commonSettings: [] }
  },
  async created() {
    this.getData()
  },
  methods: {
    async getData() {
      let { data } = await axios.get(
        'api/get-common-settings'
      )
      this.commonSettings = data
    }
  }
}
</script>
