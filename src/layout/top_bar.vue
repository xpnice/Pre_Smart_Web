<template>
  <v-app-bar app
             color="indigo"
             clipped-left
             clipped-right
             dark>
    <v-app-bar-nav-icon @click.stop="change_show_tree_view" />
    <v-toolbar-title>智慧前期网页版</v-toolbar-title>
    <!--导航栏按钮区-->
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="ml-8"
               v-on="on"
               @click.stop="goback"
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
