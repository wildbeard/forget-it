<template>

  <div id="app">
        
    <tab-container :tab_headers="tab_headers" @changeTab="tabChange">

      <div slot="tabs_content">

        <div id="safe" class="tab__content" v-if="active_tab === 'safe'">
          <safe />
        </div>

        <div id="generate" class="tab__content" v-if="active_tab === 'generate'">
          <generate-password class="modal--dark modal--medium" />
        </div>

      </div>

    </tab-container>

  </div>

</template>

<script>
/* eslint-disable no-console */
import TabContainer from './components/containers/TabContainer.vue';
import Safe from './components/views/Safe.vue';
import GeneratePassword from './components/views/GeneratePassword.vue';

export default {
  name: 'app',
  components: {
    GeneratePassword,
    TabContainer,
    Safe,
  },
  data() {
    return {
      show_modal: false,
      active_tab: 'safe',
      tab_headers: [
        {
          id: 'safe',
          icon: '',
          text: 'Safe',
          default: true,
        },
        {
          id: 'generate',
          icon: '',
          text: 'Generate',
          default: false,
        }
      ],
    }
  },
  methods: {
    tabChange(tab) {
      this.active_tab = tab;
    }
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
  background: #333;
}
</style>
