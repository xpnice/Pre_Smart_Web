<template>
  <v-container fill-height>

    <v-layout align-center
              justify-center>
      <v-flex xs12
              sm8
              md4>
        <v-card class="elevation-8">
          <v-toolbar dark
                     color="#27733D">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="username"
                            prepend-icon="person"
                            name="login"
                            label="Login"
                            id="login"
                            type="text"></v-text-field>
              <v-text-field v-model="password"
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            id="password"
                            type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.stop="login_click"
                   outlined
                   color="success">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data: () => {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login_click: function () {
      let formdata = new FormData()
      formdata.append('username', this.username)
      formdata.append('password', this.password)
      login(formdata).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
      this.$router.push('/blockboard')
    }
  }
}
</script>
<style type="text/css">
</style>
