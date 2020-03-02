<template>
  <v-app id="inspire">
    <!--左侧侧栏-->
    <v-navigation-drawer v-model="drawer"
                         clipped=true
                         app
                         left>
      <v-treeview selectable
                  selected-color="red"
                  :items="items"></v-treeview>
    </v-navigation-drawer>
    <!--左侧侧栏结束-->
    <!--右侧侧栏-->
    <v-navigation-drawer v-model="drawer_right"
                         clipped
                         app
                         right>
      <div>
        <v-simple-table :dense="dense"
                        :fixed-header="fixedHeader"
                        :height="height">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
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
    </v-navigation-drawer>
    <!--右侧侧栏结束-->
    <!--顶部导航栏-->
    <v-app-bar app
               color="indigo"
               clipped-left
               clipped-right
               dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>智慧前期网页版</v-toolbar-title>
      <!--导航栏按钮区-->
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="ml-8"
                 v-on="on"
                 @click.stop="click_button('新建')"
                 icon>
            <v-icon>mdi-plus-box</v-icon>
          </v-btn>
        </template>
        <span>新建</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on"
                 @click.stop="click_button('载入')"
                 icon>
            <v-btn icon>
              <v-icon>mdi-application-import</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <span>载入</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on"
                 @click.stop="click_button('增添')"
                 icon>
            <v-btn icon>
              <v-icon>mdi-file-document-box-plus-outline</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <span>增添</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on"
                 @click.stop="click_button('编排')"
                 icon>
            <v-btn icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <span>编排</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on"
                 @click.stop="click_button('清空')"
                 icon>
            <v-btn icon>
              <v-icon>mdi-file-document-box-remove-outline</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <span>清空</span>
      </v-tooltip>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer_right = !drawer_right" />
    </v-app-bar>
    <!--主页面-->
    <v-content>
      <template>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
      </template>
    </v-content>
    <!--主页面结束-->
    <v-footer color="indigo"
              app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    drawer_right: false,
    page: 0,
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ],
    dense: false,
    fixedHeader: false,
    height: 500,
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
  }),
  methods: {
    click_button: function (button) {
      alert(button + this.$store.getters.isShow)
    }
  }
}

</script>
