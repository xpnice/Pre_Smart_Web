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
  </v-app>
</template>
<script>
// import config from './config/config.json'// 样式配置文件
import topbar from '@/layout/top_bar'
import mainpage from '@/layout/main_page'
import leftdrawer from '@/layout/left_drawer'
import rightdrawer from '@/layout/right_drawer'
import login from '@/pages/login'
import config from '@/config/config.json'
export default {
  name: 'Dashboard',
  props: {
  },
  data: () => ({
  }),
  methods: {
  },
  components: { topbar, mainpage, leftdrawer, rightdrawer, login },
  mounted: function () {
    !config.test_mode && !this.$store.getters.has_login && this.$router.push('/') // 如果当前未登录转换到登录页面
  }
}
</script>
