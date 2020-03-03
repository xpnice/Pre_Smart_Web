<template>
  <v-content>
    <taskboard />
  </v-content>
</template>
<script>
import taskboard from '@/pages/task_board'
export default {
  name: 'mainpage',
  components: { taskboard }
}
</script>
