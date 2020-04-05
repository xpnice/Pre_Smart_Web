<template>
  <v-container fill-height>

    <v-layout align-center
              justify-center>
      <v-flex xs12
              sm8
              md4>
        <v-card class="elevation-8">
          <v-toolbar dark
                     color="blue">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person"
                            name="login"
                            label="Login"
                            id="login"
                            type="text"></v-text-field>
              <v-text-field prepend-icon="lock"
                            name="password"
                            label="Password"
                            id="password"
                            type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.stop="login"
                   color="success">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    login: function () {
      console.log('login')
      this.$router.push('/blockboard')
    }
  }
}
</script>
<style type="text/css">

</style>
