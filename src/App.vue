<template>
  <div id="cpp">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h1>{{  details()}}</h1>
    <!--<router-view />-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'hello',
      name: '李骏垚'
    }
  },
  methods: {
    details: function () {
      return this.name + '能不能别往外跑了'
    }
  }
}
</script>

<style>
#cpp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
