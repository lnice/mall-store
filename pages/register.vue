<template>
  <div class="Register">
    <div class="reg_box">
      <h1>
        <img src="@/assets/img/log_mob.png">
        <img src="@/assets/img/log_link.png" class="s">
        <img src="@/assets/img/log_pml.png">
      </h1>
      <h2>亲，欢迎注册泡美丽~~</h2>
      <h3>用户注册！</h3>
      <el-form :model="user" :rules="rules" ref="user" class="demo-user">
        <el-form-item class="txt-mobile" prop="mobile">
          <el-input v-model="user.mobile" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item class="txt-password" prop="password">
          <el-input v-model="user.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="txt-repass" prop="repass">
          <el-input v-model="user.repass" autocomplete="off" placeholder="再次输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="txt-invite">
          <el-input v-model="user.invite_code" autocomplete="off" placeholder="邀请码（没有可不填）" ></el-input>
        </el-form-item>
        <el-form-item class="txt-code" prop="code">
          <el-input v-model="user.code" style="width:55%" autocomplete="off" placeholder="验证码"></el-input>
          <el-button v-if="!codeBtn.isSend" @click="getCode('user')" type="primary">获取验证码</el-button>
          <el-button class="n" :disabled="true" v-else>重新发送(<i>{{ codeBtn.countTime }}</i>)</el-button>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button @click="submitForm('user')">注册</el-button>
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
            repass: '',
            code: '',
            invite_code: ''
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
              { min: 6, max: 99, message: '密码输入太短', trigger: 'blur' },
            ],
            repass: [
              {
                validator: (rule, value, callback) => {
                  if(this.user.password === value) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '两次密码输入不一样'
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
            axios({
              method: 'post',
              url: '/smsSend',
              data: {
                mobile,
                type: 1
              }
            })
            .then(({ data }) => {
              if(data.code === 200) {
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
                this.$message.success(data.msg);
              } else {
                this.$message.error(data.msg);
              }
            })
            .catch((err) => {
              this.$message.error(err.message)
            })

          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let {
              mobile,
              password,
              code,
              invite_code,
            } = this.user;
            axios.post('/userRegister', {
                mobile,
                password,
                code,
                invite_code,
                type: 0
              }).then(({ data }) => {
              console.log(data)
              if(data.code === 200) {
                this.$message.success(data.msg);
                this.$store.dispatch('login', data).then(() => {
                  this.$router.push('/users/')
                });
              } else {
                this.$message.error(data.msg);
              }
            })
            .catch((err) => {
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
