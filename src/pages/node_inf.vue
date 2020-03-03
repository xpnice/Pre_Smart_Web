<template>
  <div>
    <v-simple-table :dense="this.config.node_inf.dense"
                    :fixed-header="this.config.node_inf.fixedHeader"
                    :height="this.config.node_inf.height">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">任务详情</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts"
              :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>
<script>
import config from '../config/config.json'// 样式配置文件
export default {
  name: 'nodeinf',
  data: () => ({
    config,
    desserts: [
      {
        name: 'ID',
        calories: 159123123
      },
      {
        name: '负责人',
        calories: '李沿澎'
      },
      {
        name: '进度',
        calories: '67%'
      },
      {
        name: '横坐标',
        calories: 305
      },
      {
        name: '纵坐标',
        calories: 356
      },
      {
        name: '长',
        calories: 375
      },
      {
        name: '宽',
        calories: 392
      }
    ]
  })
}
</script>
