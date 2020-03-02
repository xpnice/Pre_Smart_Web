<template>
  <div id="cpp">
    <nav v-bind:class="active"
         v-on:click.prevent>

      <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->

      <a href="#"
         class="home"
         v-on:click="makeActive('home')">Home</a>
      <a href="#"
         class="projects"
         v-on:click="makeActive('projects')">Projects</a>
      <a href="#"
         class="services"
         v-on:click="makeActive('services')">Services</a>
      <a href="#"
         class="contact"
         v-on:click="makeActive('contact')">Contact</a>
    </nav>

    <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->

    <p>您选择了 <b>{{active}} 菜单</b></p>
    <img src="./assets/logo.png" />
    <h1>{{ msg }}:{{reverse}}</h1>
    <h1>{{  details()}}</h1>
    <pre><a v-bind:href="url">我的博客 </a></pre>
    <input v-model="msg">
    <button v-on:click.once="onclick">Click Me (ONCE)</button>
    <button v-on:click="onchange_window">Change Window</button>
    <h5 v-for="(value,key,index) in window"
        v-bind:key="key">
      {{index}}:{{key}}:{{ value }}
    </h5>
    <p>李骏垚的屁眼数量：{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="decrementTotal"></button-counter>
    <button v-on:click="show = !show">点我</button>
    <transition name="fade">
      <p v-show="show"
         v-bind:style="styleobj">动画实例</p>
    </transition>
    <router-view />
  </div>

</template>

<script>
import Vue from 'vue'
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
Vue.component('button-counter', {
  template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})
var myMixin = {
  created: function () {
    this.startmixin()
  },
  data () {
    return { total: 12 }
  },
  methods: {
    startmixin: function () {
      alert('hello')
    }
  }
}
export default {
  name: 'App',
  data () {
    return {
      id: 0,
      msg: 'hello',
      name: '李骏垚',
      url: 'www.lyp970805.com',
      ok: true,
      window: windows[0],
      total: 0,
      show: true,
      styleobj: {
        fontSize: '30px',
        color: 'red'
      },
      active: 'home'
    }
  },
  mixins: [myMixin],
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
    },
    incrementTotal: function () {
      this.total += 1
    },
    decrementTotal: function () {
      this.total -= 1
    },
    makeActive: function (item) {
      // 模型改变，视图会自动更新
      this.active = item
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
* {
  margin: 0;
  padding: 0;
}

body {
  font: 15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align: center;
}

a,
a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

nav {
  display: inline-block;
  margin: 0px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}

p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}

p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
#cpp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
