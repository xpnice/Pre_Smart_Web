<template>
  <v-app-bar app
             color="#27733D"
             clipped-left
             clipped-right
             dense
             dark>
    <v-app-bar-nav-icon @click.stop="change_show_tree_view" />
    <v-toolbar-title>智慧前期网页版</v-toolbar-title>
    <!--导航栏按钮区-->

    <v-btn class="ml-8"
           text
           @click.stop="click_button('新建')">
      <v-icon left>mdi-plus-box</v-icon> 新建
    </v-btn>

    <v-btn @click.stop="click_button('载入')"
           text>
      <v-icon left>mdi-application-import</v-icon> 载入
    </v-btn>

    <v-btn @click.stop="click_button('增添')"
           text >
      <v-icon left>mdi-file-document-box-plus-outline</v-icon> 增添
    </v-btn>

    <v-btn @click.stop="click_button('编排')"
           text>
      <v-icon left>mdi-file-document-edit-outline</v-icon>编排
    </v-btn>

    <v-btn @click.stop="click_button('清空')"
           text>
      <v-icon left>mdi-file-document-box-remove-outline</v-icon> 清空
    </v-btn>

    <v-spacer />
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"
               @click.stop="goback"
               icon>
          <v-btn icon>
            <v-icon>mdi-collage</v-icon>
          </v-btn>
        </v-btn>
      </template>
      <span>主页面</span>
    </v-tooltip>
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
    <v-app-bar-nav-icon @click.stop="change_show_node_inf" />
  </v-app-bar>
</template>
<script>

export default {
  name: 'topbar',
  methods: {
    goback: function () {
      this.$router.push('/blockboard')
    },
    logout: function () {
      this.$router.push('/')
    },
    click_button: function (button) {
      alert(button)
    },
    change_show_node_inf: function () {
      this.$store.dispatch('change_show_node_inf')
    },
    change_show_tree_view: function () {
      this.$store.dispatch('change_show_tree_view')
    }
  }
}
</script>
