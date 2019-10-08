<template>
  <div :class="['tool', { hideSide: $store.state.isCollapse }]">
    <v-sidebar/>
    <router-view class="content"/>
  </div>
</template>

<script>
import Sidebar from './components/sidebar';
export default {
  data() {
    return {
      
    };
  },
  mounted: function() {
  },
  components: {
    'v-sidebar': Sidebar,
  },
  methods: {
   
  }
};
</script>

