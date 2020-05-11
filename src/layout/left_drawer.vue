<template>
  <v-navigation-drawer :value='drawer'
                       clipped
                       app
                       stateless
                       width="300px"
                       left>
    <treeview />
  </v-navigation-drawer>
</template>
<script>
import treeview from '@/pages/tree_view'
export default {
  name: 'leftdrawer',
  computed: {
    drawer: function () {
      return this.$store.getters.isshow_tree_view
    }
  },
  components: { treeview }
}
</script>
