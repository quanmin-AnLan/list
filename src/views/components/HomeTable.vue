<template>
  <div>
    <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
  </div>
</template>

<script>
export default {
  name: 'HomeTable',
  data() {
    return {
      headerSet: [
        {
          prop: 'number',
          label: '最新',
          width: '50px',
        },
        {
          prop: 'author',
          label: '作者',
          width: '100px'
        },
        {
          prop: 'img',
          label: '缩略图',
          width: '100px'
        },
        {
          prop: 'url',
          label: '更新公告',
        },
      ],
      tableData: [
        {
          href: 'http://txt.anlan.xyz/ledou/update/2022/407.txt',
          title: '【全民大乐斗】4月7日更新公告',
          number: '1',
          author: '安澜',
          img: 'http://img.anlan.xyz/anlan/server-icon.png'
        },
        {
          href: 'http://txt.anlan.xyz/ledou/update/2022/331.txt',
          title: '【全民大乐斗】3月31日更新公告',
          number: '2',
          author: '安澜二世',
          img: 'http://img.anlan.xyz/anlan/server-icon.png'
        },
        {
          href: 'http://txt.anlan.xyz/ledou/update/2022/324.txt',
          title: '【全民大乐斗】3月24日更新公告',
          number: '3',
          author: '安澜三世',
          img: 'http://img.anlan.xyz/anlan/server-icon.png'
        },
      ]
    }
  }
}
</script>

<style lang="less">

</style>
