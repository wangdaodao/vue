<template>
  <div class="sidebar">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      :collapse="$store.state.isCollapse"
      :router="true"
      >
      <template v-for="(item , i) in menuList">
        <template v-if="item.child !=''">
          <el-submenu :key="i" :index="item.path">
            <template slot="title">
              <i :class="['icon', item.icon]"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item v-for="(subitem,j) in item.child" :index="subitem.path" :key="j">{{subitem.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="i">
            <i :class="['icon', item.icon]"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList:[
        {
          icon:'icon-0',
          title:'资质管理',
          path:'/tool/zzgl',
          child:[]
        },
        {
          icon:'icon-1',
          title:'假日管理',
          path:'/tool/jrgl',
          child:[]
        },
        {
          icon:'icon-2',
          title:'帮助管理',
          path:'',
          child:[
            {
              icon:'',
              title:'业务划分',
              path:'/tool/ywhf',
              child:[]
            },
            {
              icon:'',
              title:'办事流程',
              path:'/tool/bslc',
              child:[]
            },
            {
              icon:'',
              title:'阶段细则',
              path:'/tool/jdxz',
              child:[]
            },
            {
              icon:'',
              title:'字段说明',
              path:'/tool/zdsm',
              child:[]
            },
            {
              icon:'',
              title:'资料下载',
              path:'/tool/zlxz',
              child:[]
            },
            {
              icon:'',
              title:'常见问题',
              path:'/tool/cjwt',
              child:[]
            },
            {
              icon:'',
              title:'更新通知',
              path:'/tool/gxtz',
              child:[]
            },
            {
              icon:'',
              title:'联系我们',
              path:'/tool/lxwm',
              child:[]
            },
          ]
        },
        {
          icon:'icon-3',
          title:'专家补录',
          path:'/tool/zjbl',
          child:[]
        },
        {
          icon:'icon-4',
          title:'问题管理',
          path:'/tool/wtgl',
          child:[]
        },
        {
          icon:'icon-5',
          title:'发版管理',
          path:'/tool/fbgl',
          child:[]
        },
        {
          icon:'icon-6',
          title:'日报管理',
          path:'/tool/rbgl',
          child:[]
        },
        {
          icon:'icon-7',
          title:'角色管理',
          path:'/tool/jsgl',
          child:[]
        },
        {
          icon:'icon-8',
          title:'用户管理',
          path:'/tool/yhgl',
          child:[]
        },
        {
          icon:'icon-9',
          title:'日志管理',
          path:'/tool/rzgl',
          child:[]
        },
      ],
    };
  },
  computed: {
    // 高亮二级导航
      defaultActive () {
        if (this.$route.matched.length > 2) {
          return this.$route.matched[1].path;
        } else {
          return this.$route.path;
        }
      }
  },
  mounted: function() {},
  components: {},
  methods: {}
};
</script>