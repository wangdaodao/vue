<template>
  <div class="login">
    <div class="login-form">
      <h1 class="login-logo"></h1>
      <p class="login-name">
        <input id="username" v-model="loginModel.account" type="text" placeholder="用户名">
        <label class="el-icon-user" for="username"></label>
      </p>
      <p class="login-password">
        <input id="password" v-model="loginModel.password" @keyup.enter="submit" type="password" placeholder="密码">
        <label class="el-icon-lock" for="password"></label>
      </p>
      <p class="login-submit">
        <el-button type="primary" @click="submit" size="large">登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //引入组件
  props: [

  ],
  //引入混淆
  mixins: [

  ],
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  data() {
    //这里存放数据
    return {
      loginModel: {
        account: '',
        password: '',
      },
    };
  },
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {

  },
  //方法集合
  methods: {
    submit(){
      this.$router.push({name:'page1'});
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //生命周期 - 创建之前
  beforeCreate() {

  },
  //生命周期 - 挂载之前
  beforeMount() {

  },
  //生命周期 - 更新之前
  beforeUpdate() {

  },
  //生命周期 - 更新之后
  updated() {

  },
  //生命周期 - 销毁之前
  beforeDestroy() {

  },
  //生命周期 - 销毁完成
  destroyed() {

  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {

  },
}
</script>

<style lang='scss'>
.body.login{
  display: table;
  width: 300px;
  height: 100%;
  margin: 0 auto;
  .login-form{
    display:table-cell;
    vertical-align:middle;
    position: relative;
    top: -80px;
  }
  .login-logo{
    text-align: center;
    background: transparent url(../assets/img/login-logo.png) center center no-repeat;
    font-size: 16px;
    padding-top: 35px;
    margin-bottom: 30px;
    font-weight: bolder;
    color: $gray;
  }
  .login-name,.login-password{
    position: relative;
    margin-bottom: 10px;
    label{
      position: absolute;
      display: block;
      width: 30px;
      height: 26px;
      line-height: 26px;
      top: 7px;
      left: 5px;
      color: $icon;
      text-align: center;
    }
    input{
      @include radius;
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: $gray;
      padding:0 3px;
      border:1px solid $line;
      padding-left: 35px;
      &:hover,&:focus{
        border-color:$primary;
      }
      &:hover+label,&:focus+label{
        color:$primary;
        border-color:$primary;
      }
    }
  }
  .login-submit{
    button{
      display: block;
      width: 100%;
      height: 40px;
      font-size: 18px;
    }
  }
}
</style>