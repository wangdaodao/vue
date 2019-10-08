<template>
  <div class="header">
    <div class="switch" @click="$store.commit('switch')">
      <i :class="$store.state.isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <h1 class="logo">北京市公共资源综合交易业务运维系统</h1>
    <ul class="nav">
      <li><router-link to="/monitor">监控中心</router-link></li>
      <li><router-link to="/statistics">统计中心</router-link></li>
      <li><router-link to="/tool">运维工具</router-link></li>
    </ul>
    <div class="info">
      <span class="user">Administrator</span>
      <span>退出</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted: function() {},
  components: {},
  methods: {},
}
</script>