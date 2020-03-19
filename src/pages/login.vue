<template>
  <div>
    <v-sheet class="d-flex box box1"
             color="teal lighten-3">
      <v-container fluid
                   class="inputarea">
        <v-row justify="center"
               align="center">
          <v-col cols="6">
            <v-text-field label="Email"
                          hide-details="auto"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-text-field label="Password"
                          hide-details="auto"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="3">
            <v-btn block
                   large>注册</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn @click.stop="login"
                   block
                   large>登录</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
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
.inputarea{
  margin-top: 50px;
  top:50;
}
.box {
  color: white;
  background-color: #3e8e41;
  width: 40%;
  height: 55%;
  overflow: auto;
}
.box1 {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
