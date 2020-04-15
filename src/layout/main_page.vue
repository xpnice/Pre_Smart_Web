<template>
  <v-content>
    <taskboard />
    <!--footbar /-->
  </v-content>
</template>
<script>
import taskboard from '@/pages/task_board'
import footbar from '@/layout/foot_bar'
export default {
  name: 'mainpage',
  components: {
    taskboard,
    footbar
  }
}
</script>
