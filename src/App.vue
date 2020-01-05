<template>

  <div id="app">
    
    <generate-password v-show="show_modal" @close="handleClose" class="modal--dark modal--medium" />

  </div>

</template>

<script>
/* eslint-disable no-console */
import GeneratePassword from './components/GeneratePassword.vue'

export default {
  name: 'app',
  components: {
    GeneratePassword
  },
  data() {
    return {
      show_modal: true,
    }
  },
  methods: {
    handleClose() {
      this.show_modal = false;
    },
    handleClick() {
      this.show_modal = true;
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');
* {
  box-sizing: border-box;
}
body {
  font-family: 'Nunito', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  width: 420px;
  height: 350px;
}
</style>
