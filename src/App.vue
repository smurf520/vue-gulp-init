<template>
  <div id="app">
    <img src="./../src/assets/icon.jpeg" class="iconClass" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {
}
</script>

<style lang="less">
@import url('../src/style/common.less');
#app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .iconClass {
    width: 400px;
    height: 300px;
    display: inline-block;
  }
}
</style>
