<template>
  <section>
    <el-table :data="tableData">
      <el-table-column v-for='item in headerSet' :key='item.prop' :prop='item.prop' :label='item.label'
        :width='item.width || ""' :align='item.align || "center"' :sortable="item.sortable || false"
        :fixed="item.fixed || false">
        <!-- 表头 -->
        <template v-slot:header="scope">
          <span v-if="item.specialHead">
            <slot :name="'special-head-' + item.prop" :scope="scope"></slot>
          </span>
          <span v-else>{{ scope.column.label }}</span>
        </template>
        <!-- 表体 -->
        <template v-slot="scope">
          <div v-if="item.prop === 'url'">
            <a :href="scope.row.href" target="_blank">{{ scope.row.title }}</a>
          </div>
          <div v-else-if="item.specialContent">
            <slot :name="'special-content-' + item.prop" :scope="scope"></slot>
          </div>
          <div v-else-if="item.prop === 'img'">
            <el-image style="width: 100%;" :src="scope.row.img" :preview-src-list="[scope.row.img]" fit="fill">
            </el-image>
          </div>
          <div v-else-if="item.map"
            :style="('color:' + scope.row['color' + item.prop] || '') + (';background-color:' + scope.row['background' + item.prop] || '')"
            :scope="scope">
            <span>{{item.map[scope.row[item.prop]]}}</span>
          </div>
          <div v-else
            :style="('color:' + scope.row['color' + item.prop] || '') + (';background-color:' + scope.row['background' + item.prop] || '')">
            <span>{{scope.row[item.prop]}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'AlTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    headerSet: {
      type: Array,
      default: () => []
    }
  }
}
</script>
