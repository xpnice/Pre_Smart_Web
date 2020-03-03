<template>
  <v-navigation-drawer v-model="this.$store.getters.isshow_node_inf"
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
  components: { nodeinf }
}
</script>
