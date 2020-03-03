<template>
  <v-app id="inspire">
    <!--左侧侧栏-->
    <leftdrawer />
    <!--右侧侧栏-->
    <rightdrawer />
    <!--顶部导航栏-->
    <topbar />
    <!--主页面-->
    <mainpage />
    <!--页脚-->
    <footbar />

  </v-app>
</template>
<script>
import config from './config/config.json'// 样式配置文件
import topbar from '@/layout/top_bar'
import footbar from '@/layout/foot_bar'
import mainpage from '@/layout/main_page'
import leftdrawer from '@/layout/left_drawer'
import rightdrawer from '@/layout/right_drawer'
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    config
  }),
  methods: {
  },
  components: { topbar, footbar, mainpage, leftdrawer, rightdrawer }
}
</script>
