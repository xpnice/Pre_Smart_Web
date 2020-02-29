<template>
  <div id="cpp">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}:{{reverse}}</h1>
    <h1>{{  details()}}</h1>
    <pre><a v-bind:href="url">我的博客 </a></pre>
    <input v-model="msg">
    <button v-on:click.once="onclick">Click Me</button>
    <button v-on:click="onchange_window">Change Window</button>
    <h5 v-for="(value,key,index) in window"
        v-bind:key="key">
      {{index}}:{{key}}:{{ value }}
    </h5>
    <!--<router-view />-->
  </div>
</template>

<script>
var windows = [
  {
    name: 'window1',
    x: 0,
    y: 0,
    height: 150
  },
  {
    name: 'window2',
    x: -10,
    y: 60,
    height: 70
  },
  {
    name: 'window3',
    x: 70,
    y: 40,
    height: 250
  },
  {
    name: 'window4',
    x: 30,
    y: 10,
    height: 10
  }
]
export default {
  name: 'App',
  data () {
    return {
      id: 0,
      msg: 'hello',
      name: '李骏垚',
      url: 'www.lyp970805.com',
      ok: true,
      window: windows[0]
    }
  },
  methods: {
    details: function () {
      return (this.ok ? '' : '超帅的') + this.name + '能不能别往外跑了'
    },
    onclick: function () {
      this.name = this.name === '李沿澎' ? '李骏垚' : '李沿澎'
      this.ok = !this.ok
    },
    onchange_window: function () {
      this.id = (this.id + 1) % 4
      this.win = this.id
    }
  },
  computed: {
    reverse: function () {
      return this.msg.split('').reverse().join('')
    },
    win: {
      get: function () {
        return this.window.name
      },
      set: function (index) {
        this.window = windows[index]
      }
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
