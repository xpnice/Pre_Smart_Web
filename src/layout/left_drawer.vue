<template>
  <v-navigation-drawer v-model="this.$store.getters.isshow_tree_view"
                       clipped
                       app
                       stateless
                       left>
    <treeview />
  </v-navigation-drawer>
</template>
<script>
import treeview from '@/pages/tree_view'
export default {
  name: 'rightdrawer',
  components: { treeview }
}
</script>
