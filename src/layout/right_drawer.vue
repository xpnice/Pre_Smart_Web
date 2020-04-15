<template>
  <v-navigation-drawer :value="drawer"
                       clipped
                       app
                       stateless
                       right>
    <nodeinf />
  </v-navigation-drawer>
</template>

<script>
import nodeinf from '@/pages/node_inf'
export default {
  name: 'rightdrawer',
  computed: {
    drawer: function () {
      return this.$store.getters.isshow_node_inf
    }
  },
  components: { nodeinf }
}
</script>
