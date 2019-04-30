<template>
  <div class="Login">
    <div class="reg_box">
      <h1>
        <img src="@/assets/img/log_mob.png">
        <img src="@/assets/img/log_link.png" class="s">
        <img src="@/assets/img/log_pml.png">
      </h1>
      <h2>亲，欢迎登录泡美丽~~</h2>
      <h3>无需注册，手机号快速登录，开始轻松省钱！</h3>
      <el-form :model="user" :rules="rules" ref="user" class="demo-user">
        <el-form-item class="txt-mobile" prop="mobile">
          <el-input v-model="user.mobile" autocomplete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item class="txt-password" prop="password">
          <el-input v-model="user.password" autocomplete="off" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button @click="submitForm('user')">登录</el-button>
          <nuxt-link to="/register" class="fl">手机号注册</nuxt-link>
          <nuxt-link to="/login" class="fr">验证码登录 >></nuxt-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'
export default {
    layout: 'blank',
    data () {
        return {
          user: {
            mobile: '',
            password: '',
          },
          rules: {
            mobile: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 11, max: 11, message: '手机号填写有误', trigger: 'blur' },
              {
                validator: (rule, value, callback) => {
                  if(true) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '手机号填写有误'
              }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 6, max: 99, message: '请输入6位数以上的密码', trigger: 'blur' },
            ]
          }
        }
    },
    methods: {
      submitForm(formName) {
        let {
          mobile,
          password,
        } = this.user;
        this.$refs[formName].validate((valid) => {
          if (valid) {
              axios.post('/userlogin', {
                  mobile,
                  password,
                  type: 1,
                  code: ''
              }).then(({ data }) => {
                if(data.code === 200) {
                  this.$message.success(data.msg);
                  this.$store.dispatch('login', data).then(() => {
                    this.$router.push('/users/')
                  });
                }else {
                  this.$message.error(data.msg);
                }
              }).catch((err) => {
                  this.$message.error(err.message);
              })
          } else {
            console.log('error')
            return false;
          }
        });
      },
    }
}
</script>

<style lang="less">
  @import '~assets/css/login/index.less';
</style>
