<template>
  <div class="home">
    <home-table></home-table>
  </div>
</template>

<script>
import HomeTable from './components/HomeTable.vue'
export default {
  name: 'HomeView',
  components: {
    HomeTable
  }
}
</script>

<style lang="less">
.home {
  box-sizing: border-box;
  padding: 30px;
}
</style>
