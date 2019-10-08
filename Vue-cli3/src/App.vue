<template>
  <div id="app">
    <v-header/>
    <router-view class="body"/>
  </div>
</template>

<script>
import Header from './components/header';
export default {
  name: 'App',
  components: {
    'v-header': Header,
  }
}
</script>
