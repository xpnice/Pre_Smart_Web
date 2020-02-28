<template>
  <div id="cpp">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h1>{{  details()}}</h1>
    <pre><a v-bind:href="url">我的博客 </a></pre>
    <input v-model="msg">
    <button v-on:click="onclick">Click Me</button>
    <h1 v-if="ok">你好</h1>
    <!--<router-view />-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'hello',
      name: '李骏垚',
      url: 'www.lyp970805.com',
      ok: true
    }
  },
  methods: {
    details: function () {
      return (this.ok ? '' : '超帅的') + this.name + '能不能别往外跑了'
    },
    onclick: function () {
      this.name = this.name === '李沿澎' ? '李骏垚' : '李沿澎'
      this.ok = !this.ok
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
