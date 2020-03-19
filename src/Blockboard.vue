<template>
  <v-container>
    <v-row class="flex-child">

      <v-col class="d-flex"
             cols="12"
             md="4">
        <v-row>
          <v-col cols="6">
            <v-sheet class="d-flex"
                     color="green lighten-3"
                     height="150">
              <sheet-footer>
                #2: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet class="d-flex"
                     color="yellow lighten-3"
                     height="150">
              <sheet-footer>
                #3: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>
          <v-col cols="12">

            <v-sheet @click.stop="login"
                     class="d-flex"
                     color="red lighten-3"
                     height="250">
              <sheet-footer>
                #5: (2r x 2c)
              </sheet-footer>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Blockboard',
  methods: {
    login: function () {
      console.log('login')
      this.$router.push('/dashboard')
    }
  }
}
</script>
