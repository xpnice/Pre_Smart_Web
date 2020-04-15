<template>
  <v-treeview dense
              activatable
              transition
              :active.sync="active"
              :open.sync="open"
              :items="items">
    <template v-slot:prepend="{ item }">
      <v-icon v-text="`mdi-${item.id ===1 ? 'wallet-outline' : item.children?'source-merge':'network'}`"></v-icon>
    </template>
    <template v-slot:append="{ item }">
      <v-menu :close-on-content-click="true"
              offset-x>
        <template v-if="item.id !=1&&item.children"
                  v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>

        <v-card>
          <v-btn class="ma-2 .overline"
                 tile
                 outlined
                 color="success">
            <v-icon left>mdi-pencil</v-icon> {{selected}}
          </v-btn>
          <v-divider></v-divider>
          <v-btn class="ma-2"
                 tile
                 outlined
                 color="success">
            <v-icon left>mdi-pencil</v-icon> 编辑流程
          </v-btn>
        </v-card>
      </v-menu>
    </template></v-treeview>
</template>
<script>
export default {
  name: 'treeview',
  data: () => ({
    active: [],
    open: [],
    items: [
      {
        id: 1,
        name: '泰日线',
        children: [
          {
            id: 5,
            name: '流程1',
            children: [
              { id: 7, name: '市场调研' }
            ]
          },
          { id: 3, name: '流程2', children: [] },
          { id: 4, name: '流程3', children: [] }
        ]
      }
    ]
  }),
  computed: {
    selected () {
      if (!this.active.length || !this.open.length) return undefined // 当前没有打开树
      console.log(this.open)
      const id = this.active[0] // 获取当前激活树的id
      const parent = this.open[0] // 获取当前激活树的父路径
      if (id === parent) return this.items.find(item => item.id === id)
      return this.items.find(item => item.id === parent).children.find(item => item.id === id)
    }
  },
  watch: {
    selected: function () {
      // console.log(this.selected)
    }
  },
  methods: {
    ClickRight: function (item) {
      console.log(item)
    }
  }
}
</script>
