<template>
  <div>
    <v-parallax :height="fullHeight"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
  </div>
</template>
<script>
export default {
  name: 'taskboard',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
  },
  watch: {
    fullHeight (val) {
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>
<style>
</style>
