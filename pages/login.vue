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
        <el-form-item class="txt-code" prop="code">
          <el-input v-model="user.code" style="width:55%" autocomplete="off" placeholder="验证码"></el-input>
          <el-button v-if="!codeBtn.isSend" @click="getCode('user')" type="primary">获取验证码</el-button>
          <el-button class="n" :disabled="true" v-else>重新发送(<i>{{ codeBtn.countTime }}</i>)</el-button>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button @click="submitForm('user')">登录</el-button>
          <nuxt-link to="/loginpass" class="fr">密码登录 >></nuxt-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'blank',
    data () {
        return {
          user: {
            mobile: '',
            code: ''
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
            code: [
              { required: true, message: '请输入验证码', trigger: 'blur' },
              { min: 4, max: 6, message: '验证码输入有误', trigger: 'blur' },
              {
                validator: (rule, value, callback) => {
                  if(true) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '验证码不正确',
                trigger: 'blur'
              }
            ]
          },
          codeBtn: {
            isSend: false,
            countTime: 60,
            timer: null
          }
        }
    },
    methods: {
      getCode (formName) {
        this.$refs[formName].validateField(['mobile'],(valid) => {
          if(!valid) {
            let { mobile } = this.user;
            axios.post('/smsSend', {
              mobile,
              type: 2
            }).then(({ data }) => {
              if(data.code === 200) {
                this.$message.success(data.msg);
                this.codeBtn.isSend = true;
                this.codeBtn.timer = setInterval(() => {
                  if (this.codeBtn.countTime > 1) {
                    this.codeBtn.countTime --;
                  } else {
                    clearInterval(this.codeBtn.timer);
                    this.codeBtn.isSend = false;
                    this.codeBtn.countTime = 60;
                  }
                }, 1000);
                console.log(data)
              } else {
                this.$message.error(data.msg)
              }
            }).catch((err) => {
              this.$message.error(err.message)
            });

          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let { mobile, code } = this.user
            axios.post('/userlogin', {
              mobile,
              code,
              type: 2
            }).then(({ data }) => {
              if(data.code === 200) {
                this.$message.success(data.msg)
                this.$store.dispatch('login', data).then(() => {
                  this.$router.push('/users/')
                });
              } else {
                this.$message.error(data.msg)
              }
            }).catch((err) => {
              this.$message.error(err.message)
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
