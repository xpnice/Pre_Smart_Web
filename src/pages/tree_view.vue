<template>
  <div>
    <v-treeview dense
                activatable
                transition
                return-object
                :active.sync="active"
                :open.sync="open"
                class=".subtitle-2"
                :items="items"
                item-text="name">
      <template v-slot:prepend="{ item }">
        <v-icon v-text="GetIcon(item.level)"></v-icon>
      </template>
      <template v-slot:append="{ item }">
        <v-menu :close-on-content-click="true"
                offset-x>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"
                                @click.stop="handleclick(item)"></v-app-bar-nav-icon>
          </template>

          <v-card>
            <v-btn v-if="item.level!=='task'"
                   class="ma-2 .overline"
                   tile
                   outlined
                   @click="dialog=true"
                   color="success">
              <v-icon left>mdi-sticker-plus-outline</v-icon> 新建{{GetLevel(GetChildLevel(active.length===0?null:active[0].level))}}
            </v-btn>
            <v-divider></v-divider>
            <v-btn v-if="item.level==='task'"
                   class="ma-2"
                   tile
                   outlined
                   @click.stop="dialog=true"
                   color="primary">
              <v-icon left>mdi-upload</v-icon> 上传文件
            </v-btn>
            <v-divider></v-divider>
            <v-btn v-if="item.level!=='project'"
                   class="ma-2"
                   tile
                   outlined
                   color="error">
              <v-icon left>mdi-delete-forever</v-icon> 删除{{GetLevel(item.level)}}
            </v-btn>

          </v-card>
        </v-menu>
        <v-dialog v-model="dialog"
                  persistent
                  max-width="800px">
          <v-card>
            <v-card-title>
              <span class="headline">新建{{GetLevel(GetChildLevel(active.length===0?null:active[0].level))}}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12"
                         sm="12"
                         md="6">
                    <v-text-field :label="`${GetLevel(GetChildLevel(active.length===0?null:active[0].level))}名*`"
                                  v-model='processName'
                                  required></v-text-field>
                  </v-col>
                  <v-col cols="12"
                         sm="12"
                         md="6">
                    <v-text-field label="负责人"
                                  required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field :label="`${GetLevel(GetChildLevel(active.length===0?null:active[0].level))}描述`"
                                  required></v-text-field>
                  </v-col>
                  <v-col v-if="active.length&&active[0].level!='task'"
                         cols="12"
                         sm="6">
                    <v-select :items="['高', '中', '低']"
                              label="优先级*"
                              required></v-select>
                  </v-col>
                  <v-col v-if="active.length&&active[0].level==='project'"
                         cols="12"
                         sm="6">
                    <v-select :items="['技术', '产品', '运维']"
                              label="流程属性"
                              required></v-select>
                  </v-col>
                  <v-col v-if="active.length&&active[0].level==='process'"
                         cols="12"
                         sm="6">
                    <v-select :items="['蓝色', '绿色', '红色']"
                              label="步骤颜色"
                              required></v-select>
                  </v-col>
                  <v-col v-if="active.length&&active[0].level==='task'"
                         cols="12">
                    <v-file-input accept="image/*"
                                  label="File input"></v-file-input>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1"
                     text
                     @click="dialog = false">取消</v-btn>
              <v-btn color="blue darken-1"
                     text
                     @click="Create(active)">创建</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-treeview>

  </div>
</template>
<script>
export default {
  name: 'treeview',
  data: () => ({
    dialog: false,
    active: [],
    processName: '',
    open: [],
    items: [
      {
        level: 'project',
        id: '泰日线',
        name: '泰日线',
        children: [
          {
            level: 'process',
            id: '泰日线/流程1',
            name: '流程1',
            children: [
              {
                level: 'step',
                id: '泰日线/流程1/市场调研',
                name: '市场调研',
                children: [
                  {
                    level: 'task',
                    id: '泰日线/流程1/市场调研/调研列表',
                    name: '调研列表',
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }),
  computed: {
  },
  watch: {
    active: function () {
    }
  },
  methods: {
    GetIcon (item) {
      switch (item) {
        case 'project': return 'mdi-wallet-outline'
        case 'process': return 'mdi-source-merge'
        case 'step': return 'mdi-bookmark-outline'
        default: return 'mdi-file'
      }
    },
    GetLevel (item) {
      switch (item) {
        case 'process': return '流程'
        case 'step': return '步骤'
        default: return '任务'
      }
    },
    GetChildLevel (item) {
      if (!item) return null
      switch (item) {
        case 'project': return 'process'
        case 'process': return 'step'
        default: return 'task'
      }
    },
    handleclick (item) {
      this.active.splice(0, 1, item)
    },
    Create (item) {
      console.log(item)
      if (item.length === 0) return null
      let project = item[0]
      let newProcess = {}
      newProcess.id = item[0].id + '/' + this.processName
      newProcess.level = this.GetChildLevel(item[0].level)
      newProcess.name = this.processName
      newProcess.children = []
      project.children.push(newProcess)
      setTimeout(this.closedialog, 2000, this)
    },
    closedialog () {
      this.dialog = false
    }
  },
  mounted () {
    this.active.push(this.items[0])
  },
  created () {

  }
}
</script>
<style lang="scss">
$treeview-node-level-width: 80px;
$treeview-node-padding: -10px;
$treeview-node-height: 80px !important;
@import '~vuetify/src/styles/styles.sass';
</style>
