<template>
  <v-container fluid>
    <v-app-bar color="#27733D"
               dark
               fixed
               dense>
      <v-menu :close-on-content-click="true"
              open-on-hover
              offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>

        <v-card>
          <v-btn class="ma-2"
                 tile
                 outlined
                 color="success">
            <v-icon left>mdi-pencil</v-icon> 新建
          </v-btn>
          <v-divider></v-divider>
          <v-btn class="ma-2"
                 tile
                 outlined
                 color="success">
            <v-icon left>mdi-pencil</v-icon> 打开
          </v-btn>
          <v-divider></v-divider>
          <v-btn class="ma-2"
                 tile
                 outlined
                 color="success">
            <v-icon left>mdi-pencil</v-icon> 保存
          </v-btn>
        </v-card>
      </v-menu>

      <v-toolbar-title>
        <v-tabs background-color="#27733D"
                center-active
                dark>
          <v-tab>工程</v-tab>
          <v-tab>管理</v-tab>
          <v-tab>应用</v-tab>
          <v-tab>视图</v-tab>
        </v-tabs>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on"
                 @click.stop="logout"
                 icon>
            <v-btn icon>
              <v-icon>mdi-location-exit</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <span>登出</span>
      </v-tooltip>
    </v-app-bar>
    <v-row class="flex-child mt-11">
      <v-col lg="10"
             sm="12">
        <v-data-table v-model="selected"
                      :headers="headers"
                      :items="desserts"
                      single-select
                      item-key="name"
                      show-select
                      dense
                      class="elevation-1">
        </v-data-table>

        <v-row>
          <v-col lg="6"
                 sm="12">
            <v-card class="mt-6 mx-auto">
              <v-sheet class="v-sheet--offset mx-auto"
                       color="#4F9E51"
                       elevation="12"
                       height="150"
                       max-width="calc(100% - 32px)">
                <v-sparkline :labels="labels"
                             :value="value"
                             color="white"
                             line-width="2"
                             auto-draw
                             padding="16"></v-sparkline>
              </v-sheet>

              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">{{selected[0].name}}工程完成进度</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2"
                        small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="6"
                 sm="12">

            <v-card class="mt-6 mx-auto">
              <v-sheet class="v-sheet--offset mx-auto"
                       color="#4F9E51"
                       elevation="12"
                       height="150"
                       max-width="calc(100% - 32px)">
                <v-row id="pieReport"
                       style=" height:100%"></v-row>

              </v-sheet>

              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2"
                        small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="2"
             sm="12">
        <div>
          <v-btn x-large
                 block
                 outlined
                 color="success"
                 dark>勘测</v-btn>
        </div>
        <div class="my-2">
          <v-btn x-large
                 block
                 outlined
                 color="success"
                 @click.stop="ToProcess"
                 dark>流程</v-btn>
        </div>
        <div class="my-2">
          <v-btn x-large
                 block
                 outlined
                 color="success"
                 dark>法规</v-btn>
        </div>
        <div class="my-2">
          <v-btn x-large
                 block
                 outlined
                 color="success"
                 dark>会议</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
export default {
  name: 'Blockboard',
  data: () => {
    return {
      selected: [],
      labels: [
        '2016',
        '2017',
        '2018',
        '2019'
      ],
      value: [
        200,
        675,
        410,
        390
      ],
      charts: '',
      opinion: ['已完成', '进行中', '未完成'],
      opinionData: [
        { value: 7, name: '已完成', itemStyle: '#FDE5C2' },
        { value: 5, name: '进行中', itemStyle: '#FFDB9B' },
        { value: 4, name: '未完成', itemStyle: '#FAFFDF' }
      ],
      headers: [
        { text: '序号', align: 'start', value: 'index' },
        {
          text: '工程名',
          sortable: false,
          value: 'name'
        },
        { text: '工程类别', value: 'calories' },
        { text: '创建时间', value: 'createTime' },
        { text: '修改时间', value: 'lastChange' }
      ],
      desserts: [
        {
          index: 1,
          name: '泰日线',
          calories: 1,
          createTime: '2019-12-07 20:37:30',
          lastChange: '2019-12-07 20:37:30'
        },
        {
          index: 2,
          name: '朱松线',
          calories: 2,
          createTime: '2019-12-07 20:37:30',
          lastChange: '2019-12-07 20:37:30'
        }
      ]
    }
  },
  methods: {
    logout: function () {
      this.$router.push('/')
    },
    ToProcess: function () {
      console.log('process')
      this.$router.push('/dashboard')
    },
    drawPie (id) {
      if (this.charts) {
        this.charts.resize()
        return
      }
      this.charts = this.$echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        grid: {
          left: '20%'
        },
        series: [
          {
            name: '状态',
            type: 'pie',
            radius: '45%',
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              color: function (params) {
                var colorList = ['#FDE5C2', '#FFDB9B', '#FAFFDF']
                return colorList[params.dataIndex]
              }
            },
            data: this.opinionData
          }
        ]
      })
    }
  },
  computed: {
    getselected: function () {
      return this.selected.length === 0 ? this.desserts[0] : this.selected[0]
    }
  },
  created () {
    this.selected = [this.desserts[0]]
  },
  mounted () {
    this.$nextTick(function () {
      this.drawPie('pieReport')
    })
    window.onresize = () => {
      this.$nextTick(function () {
        this.drawPie('pieReport')
      })
    }
  }
}
</script>
<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
