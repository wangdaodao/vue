<template>
  <div id="app">
    <v-header v-if="$route.name!='Login'"/>
    <router-view class="body"/>
  </div>
</template>

<script>
import Header from './components/header';
  export default {
    name: 'electron',
    components: {
    'v-header': Header,
  }
  }
</script>

<style>
  /* CSS */
</style>
